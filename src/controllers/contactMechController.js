/////////////////////////////////////////////////
// Business logic module for contactMechs.
//
// @file:    contactMechController.js
// @authors: William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var ContactMech = require('../entities/contactMech.js');

var contactMechController = function (knex) {
    // Get a reference to data layer module
    //
    var contactMechData = require('../data/contactMechData')(knex);

    /**
     * Add a new contact mechanism
     * @param {Object} contactMech - The new contact mechanism to be added
     * @return {Object} promise - Fulfillment value is id of new party
     */
    var addContactMech = function (contactMech) {

        // Convert the received object into an entity
        var contactMechEntity = new ContactMech(
            contactMech.contactMechId,
            contactMech.contactMechTypeId,
            contactMech.infoString,
            contactMech.createdDate,
            contactMech.updatedDate,
            contactMech.countryCode,
            contactMech.areaCode,
            contactMech.contactNumber,
            contactMech.askForName,
            contactMech.toName,
            contactMech.attnName,
            contactMech.address1,
            contactMech.address2,
            contactMech.directions,
            contactMech.city,
            contactMech.stateProvinceGeoId,
            contactMech.zipOrPostalCode,
            contactMech.countryGeoId
        );

        // Validate the data before going ahead
        var validationErrors = contactMechEntity.validateForInsert();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise;

            if (this.contactMechTypeId === 'TELECOM_NUMBER') {
                promise = contactMechData.addContactMechToGeneralTable(contactMechEntity)
                    .then(function (contactMechId) {
                        contactMechEntity.contactMechId = contactMechId;
                        return contactMechData.addContactMechToTelecomTable(contactMechEntity)
                            .then(function (input) {
                                return contactMechId;
                            });
                    });
            } else if (this.contactMechTypeId === 'POSTAL_ADDRESS') {
                promise = contactMechData.addContactMechToGeneralTable(contactMechEntity)
                    .then(function (contactMechId) {
                        return contactMechData.addContactMechToPostalTable(contactMechEntity)
                            .then(function (input) {
                                return contactMechId;
                            });
                    });
            } else {
                promise = contactMechData.addContactMechToGeneralTable(contactMechEntity)
                    .then(function (contactMechId) {
                        return contactMechId;
                    });
            }

            promise.catch(function (error) {
                winston.error(error);
            });
            return promise;
        } else {
            return validationErrors;
        }
    };

    var getContactMechs = function () {
        var promise = contactMechData.getContactMechs()
            .then(function (contactMechs) {
                // Map the retrieved result set to corresponding entities
                var contactMechEntities = [];
                for (var i = 0; i < contactMechs.length; i++) {
                    var contactMech = new ContactMech(
                        contactMechs[i].contactMechId,
                        contactMechs[i].contactMechTypeId,
                        contactMechs[i].infoString,
                        contactMechs[i].createdDate,
                        contactMechs[i].updatedDate,
                        contactMechs[i].countryCode,
                        contactMechs[i].areaCode,
                        contactMechs[i].contactNumber,
                        contactMechs[i].askForName,
                        contactMechs[i].toName,
                        contactMechs[i].attnName,
                        contactMechs[i].address1,
                        contactMechs[i].address2,
                        contactMechs[i].directions,
                        contactMechs[i].city,
                        contactMechs[i].stateProvinceGeoId,
                        contactMechs[i].zipOrPostalCode,
                        contactMechs[i].countryGeoId
                    );

                    contactMechEntities.push(contactMech);
                }
                return contactMechEntities;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    var getContactMechById = function (contactMechId) {
        var promise = contactMechData.getContactMechById(contactMechId)
            .then(function (contactMech) {
                // Map the retrieved result set to corresponding entity
                var contactMechEntity;
                if (contactMech.length > 0) {
                    contactMechEntity = new ContactMech(
                        contactMech[0].contactMechId,
                        contactMech[0].contactMechTypeId,
                        contactMech[0].infoString,
                        contactMech[0].createdDate,
                        contactMech[0].updatedDate,
                        contactMech[0].countryCode,
                        contactMech[0].areaCode,
                        contactMech[0].contactNumber,
                        contactMech[0].askForName,
                        contactMech[0].toName,
                        contactMech[0].attnName,
                        contactMech[0].address1,
                        contactMech[0].address2,
                        contactMech[0].directions,
                        contactMech[0].city,
                        contactMech[0].stateProvinceGeoId,
                        contactMech[0].zipOrPostalCode,
                        contactMech[0].countryGeoId
                    );
                }
                return contactMechEntity;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    /**
     * Update a contact mechanism in database
     * @param {Number} contactMechId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContactMech = function (contactId, contactMech) {
        var contactMechEntity = new ContactMech(
            contactMech.contactMechId,
            contactMech.contactMechTypeId,
            contactMech.infoString,
            contactMech.createdDate,
            contactMech.updatedDate,
            contactMech.countryCode,
            contactMech.areaCode,
            contactMech.contactNumber,
            contactMech.askForName,
            contactMech.toName,
            contactMech.attnName,
            contactMech.address1,
            contactMech.address2,
            contactMech.directions,
            contactMech.city,
            contactMech.stateProvinceGeoId,
            contactMech.zipOrPostalCode,
            contactMech.countryGeoId
        );

        // Validate the data before going ahead
        var validationErrors = contactMechEntity.validateForUpdate();

        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = contactMechData.updateContactMech(contactMechEntity)
                .then(function (contactMechId) {
                    return contactMechId;
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
     * Delete a contact mechanism
     * @param {Number} contactMechId - Unique id of the contact mechanism to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteContactMech = function (contactMechId) {
        var promise = contactMechData.deleteContacrMech(contactMechId)
            .then(function (result) {
                return result;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    var linkContactMechToParty = function (partyId, contactMechId) {

        var promise = contactMechData.linkContactMechToParty(partyId, contactMechId)
            .then(function (result) {
                return partyId;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;

    };

    return {
        addContactMech: addContactMech,
        getContactMechs: getContactMechs,
        getContactMechById: getContactMechById,
        updateContactMech: updateContactMech,
        deleteContactMech: deleteContactMech,
        linkContactMechToParty: linkContactMechToParty
    };
};

module.exports = contactMechController;