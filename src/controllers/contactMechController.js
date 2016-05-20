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

var contactController = function (knex) {
    // Get a reference to data layer module
    //
    var contactMechData = require('../data/contactMechData')(knex);

    /**
     * Add a new contact mechanism
     * @param {Object} contactMech - The new contact mechanism to be added
     * @return {Object} promise - Fulfillment value is id of new party
    */
    var addContactMech = function (contactMech) {
        /*
        //get any extra parameters ready
        var additionalParams;
        if (contactMech.contactMechTypeId == 'POSTAL_ADDRESS') {
            additionaParams = {
                toName: contactMech.toName,
                attentionName: contactMech.attentionName,
                addressLine1: contactMech.addressLine1,
                addressLine2: contactMech.addressLine2,
                city: contactMech.city,
                stateOrProvince: contactMech.stateOrProvince,
                zipOrPostalCode: contactMech.zipOrPostalCode,
                country: contactMech.country,
                zipOrPostalCodeExtension: contactMech.zipOrPostalCodeExtension
            }
        } else if (contactMech.contactMechTypeId == 'TELECOM_NUMBER') {
            additionaParams = {
                countryCode: contactMech.countryCode,
                areaCode: contactMech.areaCode,
                contactNumber: contactMech.contactNumber,
                askForName: contactMech.askForName
            }
        }

        // Convert the received object into an entity
        var contactMechEntity = new contactMech(
            contactMechId,
            contactMech.contactMechTypeId,
            contactMech.infoString,
            null, (new Date()).toISOString(),
            additionalParams
        );
        */
        
        // Validate the data before going ahead
        var validationErrors = contactMechEntity.validateForInsert();
        if(validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = contactMechData.addContactMech(contactMechEntity)
                .then(function(contactMechId) {
                   return contactMechId; 
                });
                promise.catch(function(error) {
                    winston.error(error);
                });
            return promise;
        }
        else {
            return validationErrors;
        }
    };

    var getContactMechsByContact = function (contact) {};

    /**
     * Update a contact mechanism in database
     * @param {Number} contactMechId - Unique id of the contact to be updated
     * @param {Object} contact - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContactMech = function (contactMech) {
        /*
        //get any extra parameters ready
        var additionalParams;
        if (contactMech.contactMechTypeId == 'POSTAL_ADDRESS') {
            additionaParams = {
                toName: contactMech.toName,
                attentionName: contactMech.attentionName,
                addressLine1: contactMech.addressLine1,
                addressLine2: contactMech.addressLine2,
                city: contactMech.city,
                stateOrProvince: contactMech.stateOrProvince,
                zipOrPostalCode: contactMech.zipOrPostalCode,
                country: contactMech.country,
                zipOrPostalCodeExtension: contactMech.zipOrPostalCodeExtension
            }
        } else if (contactMech.contactMechTypeId == 'TELECOM_NUMBER') {
            additionaParams = {
                countryCode: contactMech.countryCode,
                areaCode: contactMech.areaCode,
                contactNumber: contactMech.contactNumber,
                askForName: contactMech.askForName
            }
        }

        // Convert the received object into an entity
        var contactMechEntity = new contactMech(
            contactMechId,
            contactMech.contactMechTypeId,
            contactMech.infoString,
            null, (new Date()).toISOString(),
            additionalParams
        );
        */
        
        // Validate the data before going ahead
        var validationErrors = contactMech.validateForUpdate();
        
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = contactMechData.updateContactMech(contactMech)
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
        var promise = partyData.deleteParty(partyId)
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
        add: add,
        getContactMechs: getContactMechs,
        getContactMechById: getContactMechById,
        addContactMech: addContactMech,
        updateContactMech: updateContactMech,
        deleteContactMech: deleteContactMech
    };
};

module.exports = contactController;