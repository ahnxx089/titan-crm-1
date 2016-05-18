/////////////////////////////////////////////////
// Data access layer module for contact mechanisms.
//
// @file:    contactMechData.js
// @authors: Anurag Bhandari <anurag@ofssam.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var contactMechData = function (knex) {

    /**
     * Add a new contact in database
     * @param {Object} contact - The new contact entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addContactMech = function (contactMech) {};

    /**
     * Gets all contacts from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContactMechs = function () {};

    /**
     * Gets one contact by its id from database
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getContactMechById = function (id) {};

    /**
     * Update a contact in database
     * @param {Object} contact - The contact entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContactMech = function (contactMech) {
        return knex('contact_mech')
            .where({
                party_mech_id: contactMech.contactMechId
            })
            .update({
                contact_mech_type_id: contactMech.contctMechTypeId,
                info_string: contactMech.infoString,
                updated_date: (new Date()).toISOString()
            });
    };

    /**
     * Delete a contact from database
     * @param {Number} contactId - Unique id of the contact to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteContactMech = function (contactMechId) {};

    return {
        addContactMech: addContactMech,
        getContactMechs: getContactMechs,
        getContactMechById: getContactMechById,
        updateContactMech: updateContactMech,
        deleteContactMech: deleteContactMech
    };
};

module.exports = contactData;