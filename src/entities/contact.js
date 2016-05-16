/////////////////////////////////////////////////
// Contact entity.
// Inherits from Person.  
// Properties and validation methods.
//
// @file:   contact.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var validation = require('../common/validation')();
var Person = require('../entities/person');  
/* Why inherit from Person?  Because if this person's 
    organization becomes a customer, then this person 
    is now a contact, no longer just a lead */
 
// Constructor
//
function Contact(partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate,
    salutation, firstName, middleName, lastName, birthDate, comments,
    contactMechId, contactMechTypeId, infoString) {
    
    // Call the parent constructor (Party), making sure
    // that "this" is set correctly during the call
    Person.call(this, partyId, partyTypeId, currencyUomId, description, 
    statusId, createdBy, createdDate, updatedDate,
    salutation, firstName, middleName, lastName, birthDate, comments);
    
    // Contact-specific Properties
    this.contactMechId = contactMechId;
    this.contactMechTypeId = contactMechTypeId;
    this.infoString = infoString;
}

// Inherit from Person
//
Contact.prototype = Object.create(Person.prototype);
// Set the "constructor" property to refer to Contact
Contact.prototype.constructor = Contact;

// Methods - VALIDATIONS YET TO BE COMPLETED
//
Contact.prototype.validateForInsert = function () {};

Contact.prototype.validateForUpdate = function () {};

// contact_mech_id type is int(11)
Contact.prototype.validateContactMechId = function () {};

// contact_mech_type_id is varchar(20)
Contact.prototype.validateContactMechTypeId = function () {};

// info_strng is varchar(255)
Contact.prototype.validateInfoString = function () {};

// Export the class as a module
module.exports = Contact;