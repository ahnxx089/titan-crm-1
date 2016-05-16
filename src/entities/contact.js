/////////////////////////////////////////////////
// Contact entity.
// Inherits from Person.
// Properties and validation methods.
//
// @file:   contact.js
// @author: 
/////////////////////////////////////////////////

var validation = require('../common/validation')();
var Person = require('../entities/person');

// Constructor
//
function Contact(partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate,
    salutation, firstName, middleName, lastName, birthDate, comments) {
    // Call the parent constructor (Person), making sure
    // that "this" is set correctly during the call
    Contact.call(this, partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate, salutation, firstName, middleName, lastName, birthDate, comments);

    // Contact-specific Properties
    
}

// Inherit from Person
//
Contact.prototype = Object.create(Person.prototype);
// Set the "constructor" property to refer to Person
Contact.prototype.constructor = Contact;

// Methods
//
Contact.prototype.validateForInsert = function () {
    // Call Person's validation function
    var errors = [Person.prototype.validateForInsert.call(this)];
    
    // the line above validates
//    PartyTypeId(nullable),
//    PreferredCurrencyUomId(nullable),
//    Description(nullable),
//    StatusId(required),
//    CreatedBy(required),
//    CreatedDate(required),
//    UpdatedDate(required)
//    salutation(nullable),
//    fisrtName(required),
//    middleName(nullable),
//    lastName(required),
//    birthDate(nullable),
//    comments(nullable)
    
    // Person-specific validation code
    var specificValidations = [
        // true means required, false means nullable
        // First name, last name are required
        // Others are not
        
    ]; 
    
    // The "errors" array is "validations" array
    // with empty string elements weeded out
    // If all validations succeed,
    // "errors" will have 0 elements.

    var specificValidations = [
        // true means required, false means nullable
        // First name, last name are required
        // Others are not
        
    ]; 
    
    for(var i=0; i < specificValidations.length; i++) {
        if(specificValidations[i]) {
            errors.push(specificValidations[i]);
        }
    }
    return errors;
    
    
};

Person.prototype.validateForUpdate = function () {
    // Call Party's validation function
    var errors = [Person.prototype.validateForUpdate.call(this)];
    // Person-specific validation code
    
    var specificValidations = [
        // true means required, false means nullable
        // First name, last name are required
        // Others are not
        
    ]; 
    
    for(var i=0; i < specificValidations.length; i++) {
        if(specificValidations[i]) {
            errors.push(specificValidations[i]);
        }
    }
    return errors;
    ];
};

// Export the class as a module
module.export = Contact;