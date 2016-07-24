/////////////////////////////////////////////////
// Business logic module for persons.
//
// @file:   personController.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var Person = require('../entities/person');
var dateTime = require('../common/dateTime');

var personController = function (knex) {
    // Get a reference to data layer module
    //
    var personData = require('../data/personData')(knex);

    // CONTROLLER METHODS
    // ==========================================
    //

    // function to strip "T", decimals, and "Z" from dates
    var fixDTFormat = function(dateTimeString) {
        return dateTimeString.substring(0,10) + ' ' + dateTimeString.substring(11,19);
    };

    /**
     * Add a new person
     * @param {Object} person - The new person to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new person
     */
    var addPerson = function (person, user) {
        var now = dateTime();

        // Convert the received object into an entity
        var personEntity = new Person(
            null,
            person.partyTypeId,
            person.preferredCurrencyUomId,
            person.description,
            person.statusId,
            user.userId,
            now,
            now,
            person.salutation,
            person.firstName,
            person.middleName,
            person.lastName,
            fixDTFormat(person.birthDate),
            person.comments
        );
        // Validate the data before going ahead
        var validationErrors = personEntity.validateForInsert();
        console.log('\npersonController.addPerson: validationErrors = ', validationErrors);
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = personData.addPerson(personEntity)
                .then(function (partyId) {
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

    return {
        addPerson: addPerson,
    };
};

module.exports = personController;
