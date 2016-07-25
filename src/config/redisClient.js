/////////////////////////////////////////////////
// Singleton for Redis cache database client.
//
// @file:   redisClient.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var redis = require('redis');
var winston = require('winston');

var redisClient = (function () {

    // Start with a fake client so that we have a client that works
    // even when Redis server is down
    var client = {
        get: function (key, cb) {
            cb(null, null);
        },
        setex: function (key, time, value) {
            // Do nothing in particular
        }
    };

    // Attempt to create a new instance of an actual redis client
    //
    var connectionString = process.env.REDIS_URL || 'redis://localhost:6379';
    var c = redis.createClient(connectionString, {
        retry_strategy: function (options) {
            if (options.error.code === 'ECONNREFUSED') {
                // This will suppress the ECONNREFUSED unhandled exception
                // that results in app crash when redis-server not running
                return;
            }
        }
    });

    /* THIS IS THE NEW BLOCK I AM CONSIDERING TRYING BECAUSE OF AZURE-DEPLOYED APP
        REGULARLY GIVING THIS ERROR:

        pplication has thrown an uncaught exception and is terminated:
            TypeError: Cannot read property 'code' of null
            at Object.redis.createClient.retry_strategy (D:\home\site\wwwroot\src\config\redisClient.js:29:30)

    var c;

    // if-else block to allow for running the app locally without redis-server
    if (process.env.REDIS_URL) {
        // assumes deployed app will have a redis server running
        c = redis.createClient(connectionString);
    } else {
        c = redis.createClient(connectionString, {
            retry_strategy: function (options) {
                console.log('options = ', options);
                if (options.error.code === 'ECONNREFUSED') {
                    // This will suppress the ECONNREFUSED unhandled exception
                    // that results in app crash when redis-server not running
                    return;
                }
            }
        });
    }
    */

    // Set the "client" variable to the actual redis client instance
    // once a connection is established with the Redis server
    c.on('ready', function () {
        client = c;
    });

    /**
     * Get a redis client
     * @return {Object} client - eventually a proper redis client object (if redis is up) or a fake client object (if redis is down)
     */
    var getClient = function () {
        return client;
    };

    return {
        getClient: getClient
    };

})();

module.exports = redisClient;