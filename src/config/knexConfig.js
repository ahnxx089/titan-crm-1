/////////////////////////////////////////////////
// Configuration for Knex ORM.
//
// @file:   knexConfig.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var knex = require('knex');

var knexConfig = function() {
    var getConfig = function() {
        return knex({
            client: 'mysql',
            connection: process.env.TITANCRM_DB_URL || 'mysql://root:@localhost/titan_crm'
            // env var TITANCRM_DB_URL is for Azure deployment, prioritize over local db.
            // Previously for Heroku deploy:
            //connection: process.env.JAWSDB_URL || 'mysql://root:@localhost/titan_crm'
            // connection string (one liner way to how to connect): type of connect://userName:password@host/databaseName
        });
    };

    return {
        getConfig: getConfig
    };
};
module.exports = knexConfig;