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
            connection: process.env.TITANCRM_DB_URL || 'mysql://root:@localhost/titan_crm',
            pool: {
                min: 2,
                max: 15
            }
        });
    };

    return {
        getConfig: getConfig
    };
};
module.exports = knexConfig;