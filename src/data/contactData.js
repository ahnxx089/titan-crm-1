/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:   contactData.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var contactData = function (knex) {

    /**
     * Add a new contact in database
     * @param {Object} contact - The new contact entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addContact = function (contact) {};

    /**
     * Gets all contacts from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContacts = function () {
        //A party is a contact iff role_type_id in party_roll is set to CONTACT
    };

    /**
     * Gets one contact by its id from database
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getContactById = function (id) {
        //A party is a contact iff role_type_id in party_roll is set to CONTACT
    };

    /**
     * Update a contact in database
     * @param {Object} contact - The contact entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contactId, contact) {
        //Currently, all functionality is fulfilled by other data-layer methods
    };

    /**
     * Delete a contact from database
     * @param {Number} contactId - Unique id of the contact to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteContact = function (contactId) {};

    return {
        addContact: addContact,
        getContacts: getContacts,
        getContactById: getContactById,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactData;