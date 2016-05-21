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
            connection: {
                host     : 'localhost',
                user     : 'root',
                password : '',
                database : 'titan_crm'
            }
        });
    };
    
    return {
        getConfig: getConfig
    };
}
module.exports = knexConfig;