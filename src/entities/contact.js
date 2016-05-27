/////////////////////////////////////////////////
// Contact entity.
// Inherits from Person.  
// Properties and validation methods.
//
// @file:    contact.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint maxparams: false */

var validation = require('../common/validation')();
var Person = require('../entities/person');
var ContactMech = require('../entities/contactMech');

// Constructor
//
function Contact(partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate, salutation, firstName,
    middleName, lastName, birthDate, comments, contactMechs) {

    // Call the parent constructor (Person), making sure
    // that "this" is set correctly during the call
    Person.call(this, partyId, partyTypeId, currencyUomId, description,
        statusId, createdBy, createdDate, updatedDate,
        salutation, firstName, middleName, lastName, birthDate, comments);

    // this array will contain the contact mechanisms and will be 
    // dealt with in the controller layer.
    this.contactMechs = contactMechs;
}

// Inherit from Person
//
Contact.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Contact
Contact.prototype.constructor = Contact;

// Methods 
//
Contact.prototype.validateForInsert = function () {
    //Run parent validation method
    var validations = Person.validateForInsert.call(this);

    for (var i = 0; i < this.contactMechs.length; i++) {
        validations.concat(ContactMech.validateForInsert.call(this.contactMechs[i]));
    }

    //Errors are non-empty validation results
    var errors = [];
    for (i = 0; i < validations.length; i++) {
        if (validations[i]) {
            errors.push(validations[i]);
        }
    }
    return errors;

};

Contact.prototype.validateForUpdate = function () {
    //Run parent validation method
    var validations = Person.validateForUpdate.call(this);

    for (var i = 0; i < this.contactMechs.length; i++) {
        validations.concat(ContactMech.validateForUpdate.call(this.contactMechs[i]));
    }

    //Errors are non-empty validation results
    var errors = [];
    for (i = 0; i < validations.length; i++) {
        if (validations[i]) {
            errors.push(validations[i]);
        }
    }

    return errors;

};

// Export the class as a module
module.exports = Contact;