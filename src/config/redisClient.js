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
    /* (This is from the Heroku deployment, commented out in favor of Azure)
    //var connectionString = process.env.REDIS_URL || 'redis://localhost:6379';
    var c = redis.createClient(connectionString, {
        retry_strategy: function (options) {
            if (options.error.code === 'ECONNREFUSED') {
                // This will suppress the ECONNREFUSED unhandled exception
                // that results in app crash
                return;
            }
        }
    });
    */

    // This is the Azure-deployed Redis cache, attempt to make a new instance,
    // including the optional retry_strategy.
    // Redis docs:  https://github.com/NodeRedis/node_redis
    // Azure docs:  https://azure.microsoft.com/en-us/documentation/articles/cache-nodejs-get-started/
    var redisOptions = {
        port: 6379,
        host: 'titan-crm.redis.cache.windows.net',
        password: '4SfdSYO7bDezomAs4M8iMShGRUaJX4mG+2+pox7iwB8=',
        tls: {
            servername: 'titan-crm.redis.cache.windows.net'
        },
        retry_strategy: function (options) {
            if (options.error.code === 'ECONNREFUSED') {
                // This will suppress the ECONNREFUSED unhandled exception
                // that results in app crash
                console.log('options.error.code = ', options.error.code);
                return;
            }
        }
    };

    var c = redis.createClient( redisOptions );

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