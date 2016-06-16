/////////////////////////////////////////////////
// Data access layer module for common data.
//
// @file:   commonData.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var commonData = function(knex) {
    
    /**
     * Gets all currency UOM units from database
     * @return {Object} promise - Fulfillment value is an array of UOM rows for currencies
    */
    var getAllCurrencies = function() {
        return knex.select('uom_id', 'abbreviation', 'description')
            .from('uom')
            .where({ uom_type_id: 'CURRENCY_MEASURE' });
    };
    
    /**
     * Gets all country Geo units from database
     * @return {Object} promise - Fulfillment value is an array of Geo rows for countries
    */
    var getAllCountries = function() {
        return knex.select('geo_id', 'abbreviation', 'geo_name')
            .from('geo')
            .where({ geo_type_id: 'COUNTRY' });
    };
    
    return {
        getAllCurrencies: getAllCurrencies,
        getAllCountries: getAllCountries
    };
};

module.exports = commonData;