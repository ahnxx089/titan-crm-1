/////////////////////////////////////////////////
// Contact mechanism.
// Properties and validation methods.
//
// @file:    contactMech.js
// @authors: Anurag Bhandari <anurag@ofssam.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

var validation = require('../common/validation')();

 
// Constructor
//
function ContactMech(contactMechTypeId, infoString) {
    
    // Properties
    this.contactMechId; //Generated when we insert into table?
    this.contactMechTypeId = contactMechTypeId;
    this.infoString = infoString;
}

// Methods - VALIDATIONS YET TO BE COMPLETED
//
ContactMech.prototype.validateForInsert = function () {};

ContactMech.prototype.validateForUpdate = function () {};

// contact_mech_id type is int(11)
Contact.prototype.validateContactMechId = function () {};

// contact_mech_type_id is varchar(20)
Contact.prototype.validateContactMechTypeId = function () {};

// info_strng is varchar(255)
Contact.prototype.validateInfoString = function () {};


// Export the class as a module
module.exports = ContactMech;