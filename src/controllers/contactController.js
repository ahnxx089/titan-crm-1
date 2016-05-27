/////////////////////////////////////////////////
// Business logic module for contacts.
//
// @file:    contactController.js
// @authors: William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var Contact = require('../entities/contact');
var User = require('../entities/user');
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
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new contact
     */
    var addContact = function (contact, user) {
        // Convert the received objects into entities (protect the data laye)
        var contactEntity = new Contact(
            null,
            contact.partyTypeId,
            contact.preferredCurrencyUomId,
            contact.description,
            contact.statusId,
            user.userId, (new Date()).toISOString(), (new Date()).toISOString(),
            contact.salutation,
            contact.firstName,
            contact.middleName,
            contact.lastName,
            contact.birthDate,
            contact.comments,
            contact.countryCode,
            contact.contactMechs
        );

        var contactMechsEntity = [];
        for (var i = 0; i < contact.contactMechs.length; i++) {
            contactMechsEntity.push(new ContactMech(
                contact.contactMechs
            ));
        }

        var userEntity = new User(
            user.userId,
            user.password,
            user.passwordHint,
            user.enabled,
            user.disabledDate,
            user.partyId,
            user.createdDate,
            user.updatedDate,
            user.securityPermissions,
            user.iat,
            user.exp
        );

        // Validate the contact and user data before going ahead
        var validationErrors = [];
        var contactValidationErrors = contactEntity.validateForInsert();
        //Errors are non-empty validation results
        for (var i = 0; i < contactValidationErrors.length; i++) {
            if (contactValidationErrors[i]) {
                validationErrors.push(contactValidationErrors[i]);
            }
        }
        var userValidationErrors = userEntity.validateForInsert();
        for (i = 0; i < userValidationErrors.length; i++) {
            if (userValidationErrors[i]) {
                validationErrors.push(userValidationErrors[i]);
            }
        }


        if (validationErrors.length === 0) {
            // Pass on the entities with info to be added to the data layer
            var promise = contactData.addContact(contactEntity, userEntity)
                .then(function (partyId) {
                    for (var i = 0; i < contactEntity.contactMechs.length; i++) {
                        ContactMechController.addContactMech(contactEntity.contactMechs[i])
                            .then(function (contactMechId) {
                                return ContactMechController.linkContactMechToParty(partyId, contactMechId);
                            });
                    }
                    return partyId;
                });
            promise.catch(function (error) {
                winston.error(error);
            });
            return promise;
        } else {
            return validationErrors;
        }
    };

    /**
     * Gets one contact by its id
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a contact entity
     */
    var getContactById = function (contactId) {
        var promise = contactData.getContactById(contactId)
            .then(function (contacts) {
                var contactEntity;
                if (contacts.length > 0) {
                    // Map the retrieved result set to corresponding entity
                    contactEntity = new Contact(
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
                } else {
                    contactEntity = new Contact();
                }

                return contactEntity;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    /**
     * Gets contacts owned by the user/owner
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    var getContactsByOwner = function (ownerId, userSecurityPerm) {

        // SECURITY PERMISSIONS ARE IMPLEMENTED HERE IN THE CONTROLLER LAYER
        //  1. For a user with permission to own a Contact, it proceeds to data layer and upon
        //      return it returns up to Api layer a function.
        //  2. But for a user without permission to own a Contact (e.g., only a Lead Owner),
        //      it returns null.

        // Check security permissions of user against accepted permissions for this function
        // Start by assuming this user does not have permission, until proven otherwise.
        var hasPermission = false;

        // Per comments above in API layer, for unknown reasons a user with valid token
        // such as a LEAD_OWNER at the Api layer ITSELF comes in with userSecurityPerm empty!
        // That does not make sense-- a LEAD_OWNER for whom I've created a token should at least
        // be able to pass into this function their permission as [ 'LEAD_OWNER' ] instead of
        // it coming in as an empty array [ ].  I have added NO logic in the Api layer to
        // screen for permission; the whole point is to implement it here in the controller layer.
        // I can't explain it.  For now I must check to see if there even is a permission in
        // userSecurityPerm; if yes, then it proceeds to loop through userSecurityPerm for any one 
        // of the correct permissions for owning a Contact to allow this user's request to pass to 
        // the data layer.
        if (userSecurityPerm.length > 0) {

            // loop over userSecurityPerm in case user has more than one permission 
            for (var i = 0; i < userSecurityPerm.length; i++) {
                if (userSecurityPerm[i] === 'FULLADMIN') {
                    hasPermission = true;
                }
                if (userSecurityPerm[i] === 'PARTYADMIN') {
                    hasPermission = true;
                }
                if (userSecurityPerm[i] === 'CONTACT_OWNER') {
                    hasPermission = true;
                }
            }
        }
        if (hasPermission) {

            // user has permission, proceed to the data layer
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
                            contacts[i].info_string,
                            contacts[i].to_name,
                            contacts[i].attn_name,
                            contacts[i].address1,
                            contacts[i].address2,
                            contacts[i].city,
                            contacts[i].state_province_geo_id,
                            contacts[i].postal_code,
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
        } else {
            // user does not have permissions of a contact owner, return null
            return null;
        }
    };

    /** -- WORK IN PROGRESS, DINESH WILL FINISH SOON
     * Gets contacts by identity (see opentaps' Find Contact feature)u
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    //    var getContactsByIdentity = function (partyId, firstName, lastName, userSecurityPerm) {
    //
    //        // Check security permissions of user against accepted permissions for this function
    //        // Start by assuming this user does not have permission, until proven otherwise.
    //        var hasPermission = false;
    //
    //        if (userSecurityPerm.length > 0) {
    //
    //            // loop over userSecurityPerm in case user has more than one permission 
    //            for (var i = 0; i < userSecurityPerm.length; i++) {
    //                if (userSecurityPerm[i] === 'FULLADMIN') {
    //                    hasPermission = true;
    //                }
    //                if (userSecurityPerm[i] === 'PARTYADMIN') {
    //                    hasPermission = true;
    //                }
    //                if (userSecurityPerm[i] === 'CONTACT_OWNER') {
    //                    hasPermission = true;
    //                }
    //                if (userSecurityPerm[i] === 'ACCOUNT_OWNER') {
    //                    hasPermission = true;
    //                }
    //                if (userSecurityPerm[i] === 'CRMSFA_CONTACT_TASKS') {
    //                    hasPermission = true;
    //                }
    //            }
    //        }
    //        if (hasPermission) {
    //
    //            // user has permission, proceed to the data layer
    //            var promise = contactData.getContactsByOwner(ownerId)
    //                .then(function (contacts) {
    //
    //                    // Map the retrieved result set to corresponding entities
    //                    var contactEntities = [];
    //                    for (var i = 0; i < contacts.length; i++) {
    //                        var contact = new Contact(
    //                            contacts[i].party_id,
    //                            contacts[i].party_type_id,
    //                            contacts[i].currency_uom_id,
    //                            contacts[i].description,
    //                            contacts[i].status_id,
    //                            contacts[i].created_by,
    //                            contacts[i].created_date,
    //                            contacts[i].updated_date,
    //                            contacts[i].salutation,
    //                            contacts[i].first_name,
    //                            contacts[i].middle_name,
    //                            contacts[i].last_name,
    //                            contacts[i].birth_date,
    //                            contacts[i].comments,
    //                            contacts[i].country_code,
    //                            contacts[i].area_code,
    //                            contacts[i].contact_number,
    //                            contacts[i].ask_for_name,
    //                            contacts[i].info_string,
    //                            contacts[i].to_name,
    //                            contacts[i].attn_name,
    //                            contacts[i].address1,
    //                            contacts[i].address2,
    //                            contacts[i].city,
    //                            contacts[i].state_province_geo_id,
    //                            contacts[i].postal_code,
    //                            contacts[i].country_geo_id
    //                        );
    //                        contactEntities.push(contact);
    //                    }
    //                    return contactEntities;
    //                });
    //            promise.catch(function (error) {
    //                // Log the error
    //                winston.error(error);
    //            });
    //            return promise;
    //        } else {
    //            // user does not have permissions of a contact owner, return null
    //            return null;
    //        }
    //    };

    /**
     * Update a contact in database
     * @param {Number} contactId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contactId, contact) {
        //Convert contact to entity

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
