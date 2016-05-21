/////////////////////////////////////////////////
// Contact entity.
// Inherits from Person.  
// Properties and validation methods.
//
// @file:   contact.js
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
    middleName, lastName, birthDate, comments, title, countryCode, areaCode, contactNumber, askForName, emailAddress, toName, attentionName,
    addressLine1, addressLine2, city, stateOrProvinceId, zipOrPostalCode, countryId) {

    // Call the parent constructor (Person), making sure
    // that "this" is set correctly during the call
    Person.call(this, partyId, partyTypeId, currencyUomId, description,
        statusId, createdBy, createdDate, updatedDate,
        salutation, firstName, middleName, lastName, birthDate, comments);

    // Contact-specific Properties
    this.contactMechs = [];
    this.title = title;
    var contactMech;

    //Add an email address to contactMechs, if one is specified
    if (emailAddress) {
        contactMech = new ContactMech(null, 'EMAIL_ADDRESS', emailAddress, createdDate, updatedDate);
        this.contactMechs.add(contactMech);
    }

    //Add a postal address to contactMechs, if one is specified
    if (addressLine1) {
        contactMech = new ContactMech(null, 'POSTAL_ADDRESS', null, createdDate, updatedDate, {
            toName: toName,
            attentionName: attentionName,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            stateOrProvinceGeoId: stateOrProvinceId,
            zipOrPostalCode: zipOrPostalCode,
            countryGeoId: countryId,
        });
        this.contactMechs.add(contactMech);
    }

    //Add a phone number to contactMechs, if one is specified
    if (contactNumber) {
        contactMech = new ContactMech(null, 'TELECOM_NUMBER', null, createdDate, updatedDate, {
            countryCode: countryCode,
            areaCode: areaCode,
            contactNumber: contactNumber,
            askForName: askForName
        });
        this.contactMechs.add(contactMech);
    }

}

// Inherit from Person
//
Contact.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Contact
Contact.prototype.constructor = Contact;

// Methods - After validateForInsert and validateForUpdate, validation for
// all the other arguments to Contact is handled by party.js, person.js,
// and contactMech.js, EXCEPT for argument "title", which is done below
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
    for(i=0; i < validations.length; i++) {
        if(validations[i]) {
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
    for(var i=0; i < validations.length; i++) {
        if(validations[i]) {
            errors.push(validations[i]);
        }
    }
    return errors;
};

/*
// title is varchar(255) -- DOES NOT EXIST IN titan_crm DB YET, discuss...
<< << << < HEAD
//Contact.prototype.validateTitle = function (isRequired) {
//    this.title = validation.sanitizeInput(this.title);
//    var validationResult = validation.validateString(this.title, isRequired, 255, 'title');
//    return validationResult;
//};
    === === =
    Contact.prototype.validateTitle = function (isRequired) {
        this.title = validation.sanitizeInput(this.title);
        var validationResult = validation.validateString(this.title, isRequired, 255, 'title');
        return validationResult;
    }; >>> >>> > 3 d7c647bc369f22e82fc088b7e407ac59b459f87*/

// Export the class as a module
module.exports = Contact;