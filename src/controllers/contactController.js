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

var contactController = function (knex) {
    // Get a reference to data layer module
    //
    var contactData = require('../data/contactData')(knex);
    var contactMechData = require('../data/contactMechData')(knex);


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
     * Gets all contacts --DEACTIVAVTED, THIS WAS FOR INITIAL TESTING, DON'T 
     * DELETE IT FOR NOW, PLEASE . . . WHEN MOST FUNCTIONALITY IS WORKING, 
     * WE CAN DELETE IT FOR GOOD...
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    //var getContacts = function () {
    //    var promise = contactData.getContacts()
    //        .then(function (contacts) {
    //            // Map the retrieved result set to corresponding entities
    //            var contactEntities = [];
    //            for (var i = 0; i < contacts.length; i++) {
    //                var contact = new Contact(
    //                    contacts[i].party_id,
    //                    contacts[i].party_type_id,
    //                    contacts[i].currency_uom_id,
    //                    contacts[i].description,
    //                    contacts[i].status_id,
    //                    contacts[i].created_by,
    //                    contacts[i].created_date,
    //                    contacts[i].updated_date,
    //                    contacts[i].salutation,
    //                    contacts[i].first_name,
    //                    contacts[i].middle_name,
    //                    contacts[i].last_name,
    //                    contacts[i].birth_date,
    //                    contacts[i].comments,
    //                    contacts[i].country_code,
    //                    contacts[i].area_code,
    //                    contacts[i].contact_number,
    //                    contacts[i].ask_for_name,
    //                    contacts[i].email_address,
    //                    contacts[i].to_name,
    //                    contacts[i].attn_name,
    //                    contacts[i].address1,
    //                    contacts[i].address2,
    //                    contacts[i].city,
    //                    contacts[i].state_province_geo_id,
    //                    contacts[i].zip_or_postal_code,
    //                    contacts[i].country_geo_id
    //                );
    //                contactEntities.push(contact);
    //            }
    //            return contactEntities;
    //        });
    //    promise.catch(function (error) {
    //        // Log the error
    //        winston.error(error);
    //    });
    //    return promise;
    //};

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
                    contacts[0].party_id,
                    contacts[0].party_type_id,
                    contacts[0].currency_uom_id,
                    contacts[0].description,
                    contacts[0].status_id,
                    contacts[0].created_by,
                    contacts[0].created_date,
                    contacts[0].updated_date,
                    contacts[0].salutation,
                    contacts[0].first_name,
                    contacts[0].middle_name,
                    contacts[0].last_name,
                    contacts[0].birth_date,
                    contacts[0].comments,
                    contacts[0].country_code,
                    contacts[0].area_code,
                    contacts[0].contact_number,
                    contacts[0].ask_for_name,
                    contacts[0].email_address,
                    contacts[0].to_name,
                    contacts[0].attn_name,
                    contacts[0].address1,
                    contacts[0].address2,
                    contacts[0].city,
                    contacts[0].state_province_geo_id,
                    contacts[0].zip_or_postal_code,
                    contacts[0].country_geo_id
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
     * Gets all contacts for a specified owner's party_id
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    var getContactsByOwner = function (ownerId) {
        var promise = contactData.getContactsByOwner(ownerId)
            .then(function (contacts) {
                // Map the retrieved result set to corresponding entities
                var contactEntities = [];
                for (var i = 0; i < contacts.length; i++) {
                    var contact = new Contact(
                        contacts[i].party_id,
                        contacts[i].party_type_id,
                        contacts[i].currency_uom_id,
                        contacts[i].description,
                        contacts[i].status_id,
                        contacts[i].created_by,
                        contacts[i].created_date,
                        contacts[i].updated_date,
                        contacts[i].salutation,
                        contacts[i].first_name,
                        contacts[i].middle_name,
                        contacts[i].last_name,
                        contacts[i].birth_date,
                        contacts[i].comments,
                        contacts[i].country_code,
                        contacts[i].area_code,
                        contacts[i].contact_number,
                        contacts[i].ask_for_name,
                        contacts[i].email_address,
                        contacts[i].to_name,
                        contacts[i].attn_name,
                        contacts[i].address1,
                        contacts[i].address2,
                        contacts[i].city,
                        contacts[i].state_province_geo_id,
                        contacts[i].zip_or_postal_code,
                        contacts[i].country_geo_id
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
     * Update a contact in database
     * @param {Number} contactId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contactId, contact) {
        var validationErrors = contact.validateForUpdate();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = contactMechData.updateContact(contact)
                .then(function (numRows) {
                    for (var i = 0; i < contact.contactMechs.length; i++) {
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
        getContactById: getContactById,
        getContactsByOwner: getContactsByOwner,
        addContact: addContact,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactController;
