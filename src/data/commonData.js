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
            .where({ uom_type_id: 'CURRENCY_MEASURE' })
            .orderBy('description');
    };

    /**
     * Gets all state or province Geo units from database
     * @return {Object} promise - Fulfillment value is an array of Geo rows for countries
    */
    var getAllStatesOrProvinces = function() {
        return knex.select('geo_id', 'abbreviation', 'geo_name')
            .from('geo')
            .where({ geo_type_id: 'STATE' })
            .orWhere({ geo_type_id: 'PROVINCE' })
            .orderBy('geo_name');
    };

    
    /**
     * Gets all country Geo units from database
     * @return {Object} promise - Fulfillment value is an array of Geo rows for countries
    */
    var getAllCountries = function() {
        return knex.select('geo_id', 'abbreviation', 'geo_name')
            .from('geo')
            .where({ geo_type_id: 'COUNTRY' })
            .orderBy('geo_name');
    };
    
    return {
        getAllCurrencies: getAllCurrencies,
        getAllStatesOrProvinces: getAllStatesOrProvinces,
        getAllCountries: getAllCountries
    };
};

module.exports = commonData;