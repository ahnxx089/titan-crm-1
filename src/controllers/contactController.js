/////////////////////////////////////////////////
// Business logic module for contacts.
//
// @file:    contactController.js
// @authors: 
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var Contact = require('../entities/contact');
var ContactMechController = require('../controllers/contactMechController');
var PersonController = require('../controllers/personController');


var contactController = function (knex) {
    // Get a reference to data layer module
    //
    var contactData = require('../data/contactData')(knex);


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
    var addContact = function (contact) {

    };

    /**
     * Gets all contacts
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    var getContacts = function () {
        var promise = contactData.getContacts()
            .then(function (contacts) {
                // Map the retrieved result set to corresponding entities
                var contactEntities = [];
                for (var i = 0; i < parties.length; i++) {
                    var contact = new Contact(
                        parties[i].party_id,
                        parties[i].party_type_id,
                        parties[i].currency_uom_id,
                        parties[i].description,
                        parties[i].status_id,
                        parties[i].created_by,
                        parties[i].created_date,
                        parties[i].updated_date,
                        parties[i].salutation,
                        parties[i].first_name,
                        parties[i].middle_name,
                        parties[i].last_name,
                        parties[i].birth_date,
                        parties[i].comments,
                        parties[i].title,
                        parties[i].country_code,
                        parties[i].area_code,
                        parties[i].contact_number,
                        parties[i].ask_for_name,
                        parties[i].email_address,
                        parties[i].to_name,
                        parties[i].attn_name,
                        parties[i].address1,
                        parties[i].address2,
                        parties[i].city,
                        parties[i].state_province_geo_id,
                        parties[i].zip_or_postal_code,
                        parties[i].country_geo_id
                    );
                    contactEntities.push(contact);
                }
                return contactEntities;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    /**
     * Gets one contact by its id
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a contact entity
     */
    var getContactById = function (contactId) {
        var promise = contactData.getContactById(contactId)
            .then(function (contacts) {
                // Map the retrieved result set to corresponding entity
                var contactEntity = new Contact(
                    parties[0].party_id,
                    parties[0].party_type_id,
                    parties[0].currency_uom_id,
                    parties[0].description,
                    parties[0].status_id,
                    parties[0].created_by,
                    parties[0].created_date,
                    parties[0].updated_date,
                    parties[0].salutation,
                    parties[0].first_name,
                    parties[0].middle_name,
                    parties[0].last_name,
                    parties[0].birth_date,
                    parties[0].comments,
                    parties[0].title,
                    parties[0].country_code,
                    parties[0].area_code,
                    parties[0].contact_number,
                    parties[0].ask_for_name,
                    parties[0].email_address,
                    parties[0].to_name,
                    parties[0].attn_name,
                    parties[0].address1,
                    parties[0].address2,
                    parties[0].city,
                    parties[0].state_province_geo_id,
                    parties[0].zip_or_postal_code,
                    parties[0].country_geo_id
                );
                return contactEntity;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    /**
     * Update a contact in database
     * @param {Number} contactId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contactId, Contact) {

        var validationErrors = contact.validateForUpdate();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = contactMechData.updateContact(contact)
                .then(function (numRows) {
                    for (int i = 0; i < contact.contactMechs.length; i++) {
                        numRows += ContactMechController.updateContactMech(contact.contactMechs[i]);
                    }
                    return numRows;
                })
                .then(function (numRows) {
                    return numRows;
                });

            promise.catch(function (error) {
                winston.error(error);
            });
            return promise;
        } else {
            return null;
        }
    };

    /**
     * Delete a contact
     * @param {Number} contactId - Unique id of the contact to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteContact = function (contactId) {
        var promise = contactData.deleteContact(contactId)
            .then(function (result) {
                return result;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    return {
        getContacts: getContacts,
        getContactById: getContactById,
        addContact: addContact,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactController;