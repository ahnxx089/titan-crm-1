/////////////////////////////////////////////////
// Business logic module for contacts.
//
// @file:    contactController.js
// @authors: William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxcomplexity: false */
/* jshint shadow:true */

var winston = require('winston');
var Contact = require('../entities/contact');
var ContactMech = require('../entities/contactMech');
var _ = require('lodash');

var contactController = function (knex) {
    // Get a reference to data layer module
    //
    var contactData = require('../data/contactData')(knex);
    var contactMechData = require('../data/contactMechData')(knex);
    var contactMechController = require('../controllers/contactMechController')(knex);

    // CONTROLLER METHODS
    // ==========================================
    //

    var addContactMechCallback = function (addContactMechPromises, contactMechEntities, partyId) {
        if (addContactMechPromises.length > 1) {
            var promise = addContactMechPromises.pop();
            var contactMech = contactMechEntities.pop();
            var purposeTypeId = contactMech.contactMechPurposeTypeId;
            return promise.then(function (contactMechId) {
                return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                    .then(function () {
                        return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                    });
            });
        } else {
            var promise = addContactMechPromises.pop();
            var contactMech = contactMechEntities.pop();
            var purposeTypeId = contactMech.contactMechPurposeTypeId;
            return promise.then(function (contactMechId) {
                return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                    .then(function () {
                        return partyId;
                    });
            });
        }
    };

    /**
     * Add a new contact  
     * @param {Object} contact - The new contact to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new contact
     */
    var addContact = function (contact, user) {

        // Check user's security permission to add contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CONTACT_CREATE');
        if (hasPermission !== -1) {
            var now = (new Date()).toISOString();
            // Convert the received objects into entities (protect the data layer)
            //
            // Contact mechanisms
            var contactMechEntities = [];

            if (contact.emailAddress) {
                var emailContactMech = new ContactMech(
                    null,
                    'EMAIL_ADDRESS',
                    'PRIMARY_EMAIL',
                    contact.emailAddress,
                    now,
                    now
                );
                contactMechEntities.push(emailContactMech);
            }
            if (contact.webAddress) {
                var webContactMech = new ContactMech(
                    null,
                    'WEB_ADDRESS',
                    'PRIMARY_WEB_URL',
                    contact.webAddress,
                    now,
                    now
                );
                contactMechEntities.push(webContactMech);
            }
            if (contact.contactNumber) {
                var phoneContactMech = new ContactMech(
                    null,
                    'TELECOM_NUMBER',
                    'PRIMARY_PHONE',
                    null,
                    now,
                    now,
                    contact.countryCode,
                    contact.areaCode,
                    contact.contactNumber,
                    contact.askForName
                );
                contactMechEntities.push(phoneContactMech);
            }
            if (contact.countryGeoId) {
                var addressContactMech = new ContactMech(
                    null,
                    'POSTAL_ADDRESS',
                    'PRIMARY_LOCATION',
                    null,
                    now,
                    now,
                    null,
                    null,
                    null,
                    null,
                    contact.toName,
                    contact.attnName,
                    contact.address1,
                    contact.address2,
                    contact.directions,
                    contact.city,
                    contact.stateProvinceGeoId,
                    contact.zipOrPostalCode,
                    contact.countryGeoId
                );
                contactMechEntities.push(addressContactMech);
            }

            // Contact entity
            var contactEntity = new Contact(
                null,
                contact.partyTypeId,
                contact.preferredCurrencyUomId,
                contact.description,
                contact.statusId,
                user.userId,
                now,
                now,
                contact.salutation,
                contact.firstName,
                contact.middleName,
                contact.lastName,
                contact.birthDate,
                contact.comments
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

            if (validationErrors.length === 0) {
                // Pass on the entities with info to be added to the data layer
                var promise = contactData.addContact(contactEntity, user);

                var addContactMechPromises = [];
                var mechPromise;
                for (var i = 0; i < contactMechEntities.length; i++) {
                    mechPromise = contactMechController.addContactMech(contactMechEntities[i]);
                    // Make sure we have promise,
                    // and not array of errors
                    if ('then' in mechPromise) {
                        addContactMechPromises.push(mechPromise);
                    }
                }
                promise.catch(function (error) {
                    winston.error(error);
                });

                if (addContactMechPromises.length > 0) {
                    return promise.then(function (partyId) {
                        return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                    });
                } else {
                    return promise;
                }
            } else {
                return validationErrors;
            }
        } else {
            // user does not have permissions of a contact owner, return null
            return null;
        }
    };

    /**
     * Gets one contact by its id
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a contact entity
     */
    var getContactById = function (contactId, user) {
        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CONTACT_CREATE');
        if (hasPermission !== -1) {
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
                            contacts[0].comments
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
        } else {
            // user does not have permissions of a contact owner, return null
            return null;
        }
    };

    /**
     * Gets contacts owned by the user/owner
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    var getContactsByOwner = function (user) {
        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CONTACT_CREATE');
        if (hasPermission !== -1) {
            // user has permission, proceed to the data layer
            var promise = contactData.getContactsByOwner(user.partyId)
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
                            contacts[i].comments
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

    /** 
     * Gets contacts by identity (see opentaps' Find Contact feature)
     * @param {String} firstName - portion of a first name to search for
     * @param {String} firstName - portion of a last name to search for
     * @return {Object} promise - Fulfillment value is an array of contact entities
     */
    var getContactsByIdentity = function (query, user) {
        // Check security permissions of user against accepted permissions for this function
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CONTACT_CREATE');
        if (hasPermission !== -1) {
            // user has permission, proceed towards data layer
           
            /* The two immediately following IF statements deal with two issues and resolves them 
                consistently in order to give the data layer inputs it does not have to think about
                in order to act on:
            
                1.  Deals with either query.firstName or query.lastName === undefined.  That occurs
                    if the search is done using only one of those fields.  Such use results in query
                    (this function's incoming argument) having only one property but not both.  So
                    we must deal with this situation:   EITHER query.firstName === undefined
                                                        OR query.lastName === undefined
                            
                    (It will never be both, since in that case contactApi.getContacts would not be
                    call this function in the controller layer in the first place.  It might be calling 
                    getContactsByOwner or getContactsByPhoneNumber, but this function does not
                    care about those. I tested this to confirm).
                    
                2.  Deals with query having property firstName or lastName but one or both of them
                    contain empty strings.  This is to protect against the possibility that the UI might
                    send in an empty string when the user intends simply not to search by one
                    of the fields firstName or lastName.  That is, this makes consistent the behavior
                    of all the following possible routes, which I confirmed will deliver in empty
                    strings:
                    
                        /api/contacts?firstName=
                        /api/contacts?lastName=
                        /api/contacts?firstName=&lastName=
                        
                To deal with these issues consistently, the following two IF blocks set firstName
                or lastName to an empty string.
                */
            
            // Declare variables to hold incoming query properties.  NOTE:  While debugging I see
            // that this very act of assigning an undefined property to a variable makes that
            // variable into an empty string.  For example, I sent in a query for which
            // query.lastName === undefined.  To my surprise, declaring var lastName = query.lastName
            // made variable lastName === "" instead of undefined.  So the if block might be redundant.
            // But I'm playing it safe and using the if blocks to enforce that "undefined" is not
            // passed to the data layer.  The data layer will only ever get strings, for sure.
            var firstName = query.firstName; 
            var lastName = query.lastName;
            
            if (firstName === undefined) {
                firstName = '';
            }
            if (lastName === undefined) {
                lastName = '';
            }
            
            var promise = contactData.getContactsByIdentity(firstName, lastName)
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
                            contacts[i].comments
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

    /**
     * Update a contact in database
     * @param {Number} contactId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contactId, contact, user) {
        //Convert contact to entity
        var contactEntity = new Contact(
            contactId,
            contact.partyTypeId,
            contact.preferredCurrencyUomId,
            contact.description,
            contact.statusId,
            contact.createdBy,
            contact.createdDate,
            (new Date()).toISOString(), //contact.updatedDate,
            contact.salutation,
            contact.firstName,
            contact.middleName,
            contact.lastName,
            contact.birthDate,
            contact.comments,
            contact.countryCode
        );

        var validationErrors = contactEntity.validateForUpdate();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = contactData.updateContact(contactEntity, user);
                //.then(function (numRows) {
                //    return numRows;
                //});

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
        getContactsByIdentity: getContactsByIdentity,
        addContact: addContact,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactController;
