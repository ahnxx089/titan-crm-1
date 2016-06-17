/////////////////////////////////////////////////
// Business logic module for common data.
//
// @file:   commonDataController.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var validation = require('../common/validation')();

var commonDataController = function (knex) {
    // Get a reference to data layer module
    //
    var commonData = require('../data/commonData')(knex);


    // CONTROLLER METHODS
    // ==========================================
    //
    /**
     * Get common data based on the type requested
     * @param {String} type - The type of data to fetch
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is an array of data rows
     */
    var getCommonData = function (type, user) {
        var promise;
        // Sanitize the variable type
        type = (typeof type === 'string' ? validation.sanitizeInput(type) : '');
        // Fetch data based on requested type
        switch (type) {
            case 'uomCurrency':
                promise = commonData.getAllCurrencies()
                break;
            case 'geoCountry':
                promise = commonData.getAllCountries()
                break;
            default:
                // A new promise that returns empty array as its fulfillment value
                promise = new Promise(function(resolve, reject) {
                    resolve([]);
                });
        }
        promise.catch(function (error) {
            winston.error(error);
        });
        return promise;
    };

    return {
        getCommonData: getCommonData
    };

};

module.exports = commonDataController;