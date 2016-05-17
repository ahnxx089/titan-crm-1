/////////////////////////////////////////////////
// Business logic module for contactMechs.
//
// @file:    contactMechController.js
// @authors: Anurag Bhandari <anurag@ofssam.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var Contact = require('../entities/contactMech');

var contactController = function(knex) {
    // Get a reference to data layer module
    //
    var contactMechData = require('../data/contactMechData')(knex);
    
    
    /* ***THIS SECTION NEEDS WORK:
            1.  Are these the methods we need?
            2.  Do we need more methods?  
            3.  Each method needs code to work. */
    //
    // CONTROLLER METHODS
    // ==========================================
    //
    /**
     * Add a new contact
     * @param {Object} contact - The new contact to be added
     * @return {Object} promise - Fulfillment value is id of new contact
    */
    var addContactMech = function () {};

    /**
     * Gets all contacts
     * @return {Object} promise - Fulfillment value is an array of contact entities
    */
    var getContactMechs = function () {};
    
    /**
     * Gets one contact by its id
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a contact entity
    */
    var getContactMechById = function (contactId) {};

    /**
     * Update a contact in database
     * @param {Number} contactId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
    */
    var updateContactMech = function (contactId, contact) {};
    
    /**
     * Delete a contact
     * @param {Number} contactId - Unique id of the contact to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
    */
    var deleteContactMech = function (contactId) {};

    return {
        getContactMechs: getContactMechs,
        getContactMechById: getContactMechById,
        addContactMech: addContactMech,
        updateContactMech: updateContactMech,
        deleteContactMech: deleteContactMech
    };
};

module.exports = contactController;