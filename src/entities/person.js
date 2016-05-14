/////////////////////////////////////////////////
// Person entity.
// Inherits from Party.
// Properties and validation methods.
//
// @file:   person.js
// @author: 
/////////////////////////////////////////////////

/* jshint maxparams:20 */

var validation = require('../common/validation')();
var Party = require('../entities/party');

// Constructor
//
function Person(partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate,
    salutation, firstName, middleName, lastName, birthDate, comments) {
    // Call the parent constructor, making sure
    // that "this" is set correctly during the call
    Party.call(this, partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate);

    // Person-specific Properties
    this.salutation = salutation;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.comments = comments;
}

// Inherit from Party
//
Person.prototype = Object.create(Party.prototype);
// Set the "constructor" property to refer to Person
Person.prototype.constructor = Person;


// Methods
//
Person.prototype.validateForInsert = function () {
    // Call Party's validation function
    Party.prototype.validateForInsert.call(this);
    // Person-specific validation code
};

Person.prototype.validateForUpdate = function () {
    // Call Party's validation function
    Party.prototype.validateForUpdate.call(this);
    // Person-specific validation code
};


// Export the class as a module
module.exports = Person;