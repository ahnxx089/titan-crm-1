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

    /*  THESE WILL NOT BE USED AFTER ALL, contactMechs CONTAINS THAT INFO
        // Contact-specific properties
        this.countryCode = countryCode;
        this.areaCode = areaCode;
        this.contactNumber = contactNumber;
        this.askForName = askForName;
        this.emailAddress = emailAddress;
        this.toName = toName;
        this.attentionName = attnName;
        this.addressLine1 = address1;
        this.addressLine2 = address2;
        this.city = city;
        this.stateOrProvinceId = stateProvinceGeoId;
        this.zipOrPostalCode = zipOrPostalCode;
        this.countryId = countryGeoId;
    */

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
    var validations = Person.prototype.validateForInsert.call(this);

    //Errors are non-empty validation results
    var errors = [];
    if (validations) {
        for (var i = 0; i < validations.length; i++) {
            if (validations[i]) {
                errors.push(validations[i]);
            }
        }
    }

    return errors;

    /* DEACTIVATED-- BILL, PLEASE SEE ABOVE FOR VALIDATING THE
        contactMechs ARRAY FOR INSERT-- IS THAT CORRECT?
    //Run validation methods for remaining properties
    //
    // true means required, false means nullable
    var contactSpecificValidations = [
            this.validateCountryCode(false),
            this.validateAreaCode(false),
            this.validateContactNumber(true),
            this.validateAskForName(false),
            this.validateEmailAddress(false),
            this.validateToName(false),
            this.validateAttentionName(false),
            this.validateAddressLine1(false),
            this.validateAddressLine2(false),
            this.validateCity(false),
            this.validateStateOrProvinceId(false),
            this.validateZipOrPostalCode(false),
            this.validateCountryId(false)
    ];
    */

};

Contact.prototype.validateForUpdate = function () {
    //Run parent validation method
    var validations = Person.validateForUpdate.call(this);

    //Errors are non-empty validation results
    var errors = [];
    for (var i = 0; i < validations.length; i++) {
        if (validations[i]) {
            errors.push(validations[i]);
        }
    }

    return errors;

    /* DEACTIVATED-- BILL, PLEASE SEE ABOVE FOR VALIDATING THE
        contactMechs ARRAY FOR UPDATE-- IS THAT CORRECT?
    //Run validation methods for remaining properties
    //
    // true means required, false means nullable
    var contactSpecificValidations = [
            this.validateCountryCode(false),
            this.validateAreaCode(false),
            this.validateContactNumber(true),
            this.validateAskForName(false),
            this.validateEmailAddress(false),
            this.validateToName(false),
            this.validateAttentionName(false),
            this.validateAddressLine1(false),
            this.validateAddressLine2(false),
            this.validateCity(false),
            this.validateStateOrProvinceId(false),
            this.validateZipOrPostalCode(false),
            this.validateCountryId(false)
    ];
    */

};

/* DEACTIVATED VALIDATIONS FOR CONTACT MECHANISM INFO, WHICH ARE VALIDATED BY contachMech.js

// telecom_number.country_code type is varchar(10)
Contact.prototype.validateCountryCode = function (isRequired) {
    this.countryCode = validation.sanitizeInput(this.countryCode);
    var validationResult = validation.validateString(this.countryCode, isRequired, 10, 'countryCode');
    return validationResult;
};

// telecom_number.area_code type is varchar(10)
Contact.prototype.validateAreaCode = function (isRequired) {
    this.areaCode = validation.sanitizeInput(this.areaCode);
    var validationResult = validation.validateString(this.areaCode, isRequired, 10, 'areaCode');
    return validationResult;
};

// telecom_number.contact_number type is varchar(60)
Contact.prototype.validateContactNumber = function (isRequired) {
    this.contactNumber = validation.sanitizeInput(this.contactNumber);
    var validationResult = validation.validateString(this.contactNumber, isRequired, 60, 'contactNumber');
    return validationResult;
};

// telecom_number.ask_for_name type is varchar(100)
Contact.prototype.validateAskForName = function (isRequired) {
    this.askForName = validation.sanitizeInput(this.askForName);
    var validationResult = validation.validateString(this.askForName, isRequired, 100, 'askForName');
    return validationResult;
};

// telecom_number.info_strng is varchar(255) -- it is used to hold email address (per opentaps)
Contact.prototype.validateEmailAddress = function (isRequired) {
    this.emailAddress = validation.sanitizeInput(this.emailAddress);
    var validationResult = validation.validateString(this.emailAddress, isRequired, 255, 'emailAddress');
    return validationResult;
};

// postal_address.to_name type is varchar(100)
Contact.prototype.validateToName = function (isRequired) {
    this.toName = validation.sanitizeInput(this.toName);
    var validationResult = validation.validateString(this.toName, isRequired, 100, 'toName');
    return validationResult;
};

// postal_address.attn_name type is varchar(100)
Contact.prototype.validateAttentionName = function (isRequired) {
    this.attentionName = validation.sanitizeInput(this.attentionName);
    var validationResult = validation.validateString(this.attentionName, isRequired, 100, 'attentionName');
    return validationResult;
};

// postal_address.address1 type is varchar(255)
Contact.prototype.validateAddressLine1 = function (isRequired) {
    this.addressLine1 = validation.sanitizeInput(this.addressLine1);
    var validationResult = validation.validateString(this.addressLine1, isRequired, 255, 'addressLine1');
    return validationResult;
};

// postal_address.address2 type is varchar(255)
Contact.prototype.validateAddressLine2 = function (isRequired) {
    this.addressLine2 = validation.sanitizeInput(this.addressLine2);
    var validationResult = validation.validateString(this.addressLine2, isRequired, 255, 'addressLine2');
    return validationResult;
};

// postal_address.city type is varchar(100)
Contact.prototype.validateCity = function (isRequired) {
    this.city = validation.sanitizeInput(this.city);
    var validationResult = validation.validateString(this.city, isRequired, 100, 'city');
    return validationResult;
};

// postal_address.state_province_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be STATE or PROVINCE
Contact.prototype.validateStateOrProvinceId = function (isRequired) {
    this.stateOrProvinceId = validation.sanitizeInput(this.stateOrProvinceId);
    var validationResult = validation.validateString(this.stateOrProvinceId, isRequired, 20, 'stateOrProvinceId');
    return validationResult;
};

// postal_address.postal_code type is varchar(20)
Contact.prototype.validateZipOrPostalCode = function (isRequired) {
    this.zipOrPostalCode = validation.sanitizeInput(this.zipOrPostalCode);
    var validationResult = validation.validateString(this.zipOrPostalCode, isRequired, 20, 'zipOrPostalCode');
    return validationResult;
};

// postal_code.country_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be COUNTRY
Contact.prototype.validateCountryId = function (isRequired) {
    this.countryId = validation.sanitizeInput(this.countryId);
    var validationResult = validation.validateString(this.countryId, isRequired, 20, 'countryId');
    return validationResult;
};

*/

// Export the class as a module
module.exports = Contact;