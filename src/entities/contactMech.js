/////////////////////////////////////////////////
// Contact mechanism.
// Properties and validation methods.
//
// @file:    contactMech.js
// @authors: William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

var validation = require('../common/validation')();

// Constructor
//
function ContactMech(contactMechId, contactMechTypeId, infoString, createdDate,
    updatedDate, countryCode, areaCode, contactNumber, askForName,
    toName, attnName, address1, address2, directions, city, stateProvinceGeoId,
    zipOrPostalCode, countryGeoId) {

    // Properties
    this.contactMechId = contactMechId;
    this.contactMechTypeId = contactMechTypeId;
    this.infoString = infoString;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.countryCode = countryCode;
    this.areaCode = areaCode;
    this.contactNumber = contactNumber;
    this.askForName = askForName;
    this.toName = toName;
    this.attnName = attnName;
    this.address1 = address1;
    this.address2 = address2;
    this.directions = directions;
    this.city = city;
    this.zipOrPostalCode = zipOrPostalCode;
    this.stateProvinceGeoId = stateProvinceGeoId;
    this.countryGeoId = countryGeoId;

}

// Methods - VALIDATIONS YET TO BE COMPLETED
//
ContactMech.prototype.validateForInsert = function () {
    
    // Perform general validations
    var validations = [
            this.validateContactMechTypeId(true),
            this.validateInfoString(true)
    ];

    // Perform validations specific to postal addresses
    if (this.infoString === 'POSTAL_ADDRESS') {
        //validations only applicable to postal addresses
        validations.concat([
            this.validateToName(true),
            this.validateAttnName(true),
            this.validateAddress1(true),
            this.validateAddress2(true),
            this.validateDirections(true),
            this.validateCity(true),
            this.validatePostalCode(true),
            this.validateProvinceGeoId(true),
            this.validateCountryGeoId(true)
        ]);
    }
    
    // Perform validations specific to telecom numbers
    if (this.infoString === 'TELECOM_NUMBER') {
        //validations only applicable to postal addresses
        validations.concat([
            this.validateCountryCode(true),
            this.validateAreaCode(true),
            this.validateContactNumber(true),
            this.validateaskForName(true)
        ]);
    }

    // The "errors" array is "validations" array
    // with empty string elements weeded out
    // If all validations succeed,
    // "errors" will have 0 elements.
    var errors = [];
    for (var i = 0; i < validations.length; i++) {
        if (validations[i]) {
            errors.push(validations[i]);
        }
    }
    return errors;
};

ContactMech.prototype.validateForUpdate = function () {
    
    // Perform general validations
    var validations = [
            this.contactMechId(true),
            this.validateContactMechTypeId(true),
            this.validateInfoString(true)
    ];

    // Perform validations specific to postal addresses
    if (this.infoString === 'POSTAL_ADDRESS') {
        //validations only applicable to postal addresses
        validations.concat([
            this.validateToName(true),
            this.validateAttnName(true),
            this.validateAddress1(true),
            this.validateAddress2(true),
            this.validateDirections(true),
            this.validateCity(true),
            this.validatePostalCode(true),
            this.validateProvinceGeoId(true),
            this.validateCountryGeoId(true)
        ]);
    }
    
    // Perform validations specific to telecom numbers
    if (this.infoString === 'TELECOM_NUMBER') {
        //validations only applicable to postal addresses
        validations.concat([
            this.validateCountryCode(true),
            this.validateAreaCode(true),
            this.validateContactNumber(true),
            this.validateaskForName(true)
        ]);
    }

    // The "errors" array is "validations" array
    // with empty string elements weeded out
    // If all validations succeed,
    // "errors" will have 0 elements.
    var errors = [];
    for (var i = 0; i < validations.length; i++) {
        if (validations[i]) {
            errors.push(validations[i]);
        }
    }
    return errors;
};

// contact_mech_id type is int(11)
ContactMech.prototype.validateContactMechId = function (isRequired) {
    this.contactMechId = validation.sanitizeInput(this.contactMechId);
    var validationResult = validation.validateString(this.contactMechId, isRequired, 11, 'contactMechId');
    return validationResult;
};

// contact_mech_type_id is varchar(20)
ContactMech.prototype.validateContactMechTypeId = function (isRequired) {
    this.contactMechTypeId = validation.sanitizeInput(this.contactMechTypeId);
    var validationResult = validation.validateString(this.contactMechTypeId, isRequired, 20, 'contactMechTypeId');
    return validationResult;
};

// info_strng is varchar(255)
ContactMech.prototype.validateInfoString = function (isRequired) {
    this.infoString = validation.sanitizeInput(this.infoString);
    var validationResult = validation.validateString(this.infoString, isRequired, 255, 'infoString');
    return validationResult;
};


// to_name type is varchar(100)
ContactMech.prototype.validateToName = function (isRequired) {
    this.toName = validation.sanitizeInput(this.toName);
    var validationResult = validation.validateString(this.toName, isRequired, 100, 'toName');
    return validationResult;
};

// attn_name type is varchar(100)
ContactMech.prototype.validateAttnName = function (isRequired) {
    this.attnName = validation.sanitizeInput(this.attnName);
    var validationResult = validation.validateString(this.attnName, isRequired, 100, 'attnName');
    return validationResult;
};

// address1 type is varchar(255)
ContactMech.prototype.validateAddress1 = function (isRequired) {
    this.address1 = validation.sanitizeInput(this.address1);
    var validationResult = validation.validateString(this.address1, isRequired, 255, 'address1');
    return validationResult;
};

// address2 type is varchar(255)
ContactMech.prototype.validateAddress2 = function (isRequired) {
    this.address2 = validation.sanitizeInput(this.address2);
    var validationResult = validation.validateString(this.address2, isRequired, 255, 'address2');
    return validationResult;
};

// directions type is varchar(255)
ContactMech.prototype.validateDirections = function (isRequired) {
    this.directions = validation.sanitizeInput(this.directions);
    var validationResult = validation.validateString(this.directions, isRequired, 255, 'directions');
    return validationResult;
};

// city type is varchar(100)
ContactMech.prototype.validateCity = function (isRequired) {
    this.city = validation.sanitizeInput(this.city);
    var validationResult = validation.validateString(this.city, isRequired, 100, 'city');
    return validationResult;
};

// postal_code type is varchar(20)
ContactMech.prototype.validatePostalCode = function (isRequired) {
    this.postalCode = validation.sanitizeInput(this.postalCode);
    var validationResult = validation.validateString(this.postalCode, isRequired, 20, 'postalCode');
    return validationResult;
};

// state_province_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be STATE or PROVINCE
ContactMech.prototype.validateProvinceGeoId = function (isRequired) {
    this.provinceGeoId = validation.sanitizeInput(this.provinceGeoId);
    var validationResult = validation.validateString(this.provinceGeoId, isRequired, 20, 'provinceGeoId');
    return validationResult;
};

// country_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be COUNTRY
ContactMech.prototype.validateCountryGeoId = function (isRequired) {
    this.countryGeoId = validation.sanitizeInput(this.countryGeoId);
    var validationResult = validation.validateString(this.countryGeoId, isRequired, 20, 'countryGeoId');
    return validationResult;
};

// contry_code type is varchar(10)
ContactMech.prototype.validateCountryCode = function (isRequired) {
    this.countryCode = validation.sanitizeInput(this.countryCode);
    var validationResult = validation.validateString(this.countryCode, isRequired, 10, 'countryCode');
    return validationResult;
};

// area_code type is varchar(10)
ContactMech.prototype.validateAreaCode = function (isRequired) {
    this.areaCode = validation.sanitizeInput(this.areaCode);
    var validationResult = validation.validateString(this.areaCode, isRequired, 10, 'areaCode');
    return validationResult;
};

// contact_number type is varchar(60)
ContactMech.prototype.validateContactNumber = function (isRequired) {
    this.contactNumber = validation.sanitizeInput(this.contactNumber);
    var validationResult = validation.validateString(this.contactNumber, isRequired, 60, 'contactNumber');
    return validationResult;
};

// ask_for_name type is varchar(100)
ContactMech.prototype.validateaskForName = function (isRequired) {
    this.askForName = validation.sanitizeInput(this.askForName);
    var validationResult = validation.validateString(this.askForName, isRequired, 100, 'askForName');
    return validationResult;
};

// Export the class as a module
module.exports = ContactMech;