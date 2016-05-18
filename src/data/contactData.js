/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:   contactData.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var contactData = function (knex) {

    /**
     * Add a new contact in database.  
     * Reminder:  There is no single "contact" table in the database (contrast to
        partyData.addContact() inserting into the single table called "party".) 
        When a new contact is created (either because an existing lead is converting 
        to a contact because that lead's organization just became an account, 
        or we are creating a new contact at an existing account),
        that contact's information gets split between several tables.
     *
     * @param {Object} contact - The new contact entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addContact = function (contact) {

        // insert to the party table for this contact
        return knex.insert({
                party_id: contact.partyId,
                party_type_id: contact.partyTypeId,
                preferred_currency_uom_id: contact.preferredCurrencyUomId,
                description: contact.description,
                status_id: contact.statusId,
                created_by: contact.createdBy,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('party');

        // insert into the person table for this contact
        return knex.insert({
                party_id: contact.partyId,
                salutation: contact.salutation,
                first_name: contact.firstName, 
                middle_name: contact.middleName, 
                last_name: contact.lastName, 
                birth_date: contact.birthDate, 
                comments: contact.comments,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
        }).into('person');
        
        // insert into the party_contact_mech table for this contact
        return knex.insert({
                party_id: contact.partyId,
                contact_mech_id: contact.contactMechId,
                comments: contact.comments
        }).into('party_contact_mech');
        
        // insert into the contact_mech table for this contact
        return knex.insert({
                contact_mech_id: contact.contactMechId,
                contact_mech_type_id: contact.contactTypeMechId,
                comments: contact.comments
        }).into('party_contact_mech');
    };

    /**
     * Gets all contacts from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContacts = function () {};

    /**
     * Gets one contact by its id from database
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getContactById = function (id) {};

    /**
     * Update a contact in database
     * @param {Object} contact - The contact entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contact) {

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
