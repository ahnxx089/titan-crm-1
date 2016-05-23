/////////////////////////////////////////////////
// Contact entity.
// Inherits from Person.  
// Properties and validation methods.
//
// @file:    contact.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

var validation = require('../common/validation')();
var Person = require('../entities/person');
/* Why inherit from Person?  Because if this person's 
    organization becomes a customer, then this person 
    is now a contact, no longer just a lead */
var ContactMech = require('../entities/contactMech');

// Constructor
//
function Contact(partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate, salutation, firstName,
    middleName, lastName, birthDate, comments, countryCode, areaCode,
    contactNumber, askForName, emailAddress, toName, attnName,
    address1, address2, directions, city, stateProvinceGeoId, zipOrPostalCode, countryGeoId) {

    // Call the parent constructor (Person), making sure
    // that "this" is set correctly during the call
    Person.call(this, partyId, partyTypeId, currencyUomId, description,
        statusId, createdBy, createdDate, updatedDate,
        salutation, firstName, middleName, lastName, birthDate, comments);

    // Contact-specific Properties
    this.contactMechs = [];
    var contactMech;

    //Add an email address to contactMechs, if one is specified
    if (emailAddress) {
        contactMech = new ContactMech(null, 'EMAIL_ADDRESS', emailAddress, null, null);
        this.contactMechs.push(contactMech);
    }

    //Add a phone number to contactMechs, if one is specified
    if (contactNumber) {
        contactMech = new ContactMech(null, 'TELECOM_NUMBER', null, null, null,
            countryCode, areaCode, contactNumber, askForName);
        this.contactMechs.push(contactMech);
    }

    //Add a postal address to contactMechs, if one is specified
    if (address1) {
        contactMech = new ContactMech(null, 'POSTAL_ADDRESS', null, null, null, null, null, null, null,
            toName, attnName, address1, address2, directions, city, stateProvinceGeoId,
            zipOrPostalCode, countryGeoId);
        this.contactMechs.push(contactMech);
    }
}

// Inherit from Person
//
Contact.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Contact
Contact.prototype.constructor = Contact;

// Methods - After validateForInsert and validateForUpdate, validation for
// all the other arguments to Contact is handled by party.js
//
Contact.prototype.validateForInsert = function () {
    //Run parent validaton method
    var validations = Person.validateForInsert.call(this);

    //Run validation method on each contactMech
    for (var i = 0; i < this.contactMechs.length; i++) {
        validation.push(this.contactMechs[i].validateForInsert());
    }

    //Run validation methods for remaining properties

    //Errors are non-empty validation results
    var errors = [];
    
    for ( i = 0; i < validations.length; i++) {
        if (validations[i]) {
            errors.push(validations[i]);
        }
    }
    return errors;
};

Contact.prototype.validateForUpdate = function () {
    //Run parent validaton method
    var validations = Person.validateForUpdate.call(this);

    //Run validation method on each contactMech
    for (var i = 0; i < this.contactMechs.length; i++) {
        validation.push(this.contactMechs[i].validateForUpdate());
    }

    //Run validation methods for remaining properties

    //Errors are non-empty validation results
    var errors = [];

    for( i = 0; i < validations.length; i++) {
        if(validations[i]) {
            errors.push(validations[i]);
        }
    }
    return errors;
};

// Export the class as a module
module.exports = Contact;