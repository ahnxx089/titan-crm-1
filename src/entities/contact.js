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
 
// Constructor
//
function Contact(partyId, partyTypeId, currencyUomId, description,
    statusId, createdBy, createdDate, updatedDate, salutation, firstName, middleName, lastName, birthDate, comments,
    contactMechId, contactMechTypeId, infoString) {
    
    //should we check partyId in case we're converting a pre-existing party into a contact?
    
    // Call the parent constructor (Person), making sure
    // that "this" is set correctly during the call
    Person.call(this, partyId, partyTypeId, currencyUomId, description, 
    statusId, createdBy, createdDate, updatedDate,
    salutation, firstName, middleName, lastName, birthDate, comments);
    
    // Contact-specific Properties
    this.contactMechs = [];
    
    //Create contactMechs, if applicable, and add them to array
}

// Inherit from Person
//
Contact.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Contact
Contact.prototype.constructor = Contact;

// Methods - VALIDATIONS YET TO BE COMPLETED
//
Contact.prototype.validateForInsert = function () {
    //Run parent validaton method
    
    //Run validation method on each contactMech
    for (var i=0; i < this.contactMechs.length; i++){
        this.contactMechs[i].validateForInsert();
    }
    
    //Run validation methods for remaining properties
};

Contact.prototype.validateForUpdate = function () {
    //Run parent validaton method
    
    //Run validation method on each contactMech
    for (var i=0; i < this.contactMechs.length; i++){
        this.contactMechs[i].validateForUpdate();
    }
    
    //Run validation methods for remaining properties
};

// Export the class as a module
module.exports = Contact;