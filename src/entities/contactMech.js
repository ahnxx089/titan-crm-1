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
function ContactMech(contactMechId, contactMechTypeId, infoString, createdDate, updatedDate, additionalParameters) {
    // Properties
    this.contactMechId = contactMechId
    this.contactMechTypeId = contactMechTypeId;
    this.infoString = infoString;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;

    if (contactMethodType == 'POSTAL_ADDRESS') {
        this.contactMechId: = additionalParameters.contactMechId;
        this.toName: = additionalParameters.toName;
        this.attnName: = additionalParameters.attnName;
        this.address1: = additionalParameters.address1;
        this.address2: = additionalParameters.address2;
        this.directions: = additionalParameters.directions;
        this.city: = additionalParameters.city;
        this.zipOrPostalCode: = additionalParameters.zipOrPostalCode;
        this.stateProvinceGeoId: = additionalParameters.stateProvinceGeoId;
        this.countryGeoId: = additionalParameters.countryGeoId;

        this.infoString = getPostalAddressString(additionalParameters);
    } else if (contactMethodType == 'TELECOM_NUMBER') {
        this.countryCode = additionalParameters.countryCode;
        this.areaCode = additionalParameters.areaCode;
        this.contactNumber = additionalParameters.contactNumber;
        this.askForName = additionalParameters.askForName;
        
        this.infoString = getTelcomNumberString(additionalParameters);
    }
}

var getPostalAddressString = function (parameters) {
    var addressString = '';
    
    //add components of address to string
    addressString += parameters.toName;
    if (attnName) {
        addressString += ' Attn: ' + parameters.attnName;
    }
    addressString += '\n';
    addressString += parameters.address1 + '\n';
    if (address2) {
        addressString += parameters.address2 + '\n';
    }
    addressString += parameters.city + ', ' + parameters.stateProvinceGeoId + ", " + parameters.zipOrPostalCode;
    
    return addressString;
}


var getTelcomNumberString = function (Parameters) {
    var numberString = '';
    
    //add components of number to string
    numberString += parameters.contactNumber;
    if (parameters.areaCode) {
        numberString = parameters.areaCode + '-' + numberString;
        if (countryCode) {
            numberString = parameters.countryCode + '-' + numberString;
        }
    }
    if (parameters.askForName) {
        numberString += ', ask for ' + parameters.askForName;
    }
    
    return numberString;
}

// Methods - VALIDATIONS YET TO BE COMPLETED
//
ContactMech.prototype.validateForInsert = function () {
    // Perform validations
    var validations = [
        //Validations applicable to all contactMechs
    ];
    if (infoString == 'POSTAL_ADDRESS') {
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
        ])
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
    // Perform validations
    var validations = [
        //Validations applicable to all contactMechs
    ];
    if (infoString == 'POSTAL_ADDRESS') {
        //validations only applicable to postal addresses
        validations.concat([
            this.contactMechId(true),
            this.validateToName(true),
            this.validateAttnName(true),
            this.validateAddress1(true),
            this.validateAddress2(true),
            this.validateDirections(true),
            this.validateCity(true),
            this.validatePostalCode(true),
            this.validateProvinceGeoId(true),
            this.validateCountryGeoId(true)
        ])
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
PostAddress.prototype.validateContactMechId = function (isRequired) {
    this.contactMechId = validation.sanitizeInput(this.contactMechId);
    var validationResult = validation.validateString(this.contactMechId, isRequired, 11, 'contactMechId');
    return validationResult;
};

// contact_mech_type_id is varchar(20)
Contact.prototype.validateContactMechTypeId = function () {
    this.contactMechTypeId = validation.sanitizeInput(this.contactMechTypeId);
    var validationResult = validation.validateString(this.contactMechTypeId, isRequired, 20, 'contactMechTypeId');
    return validationResult;
};

// info_strng is varchar(255)
Contact.prototype.validateInfoString = function () {
    this.infoString = validation.sanitizeInput(this.infoString);
    var validationResult = validation.validateString(this.infoString, isRequired, 255, 'infoString');
    return validationResult;
};


// to_name type is varchar(100)
PostAddress.prototype.validateToName = function (isRequired) {
    this.toName = validation.sanitizeInput(this.toName);
    var validationResult = validation.validateString(this.toName, isRequired, 100, 'toName');
    return validationResult;
};

// attn_name type is varchar(100)
PostAddress.prototype.validateAttnName = function (isRequired) {
    this.attnName = validation.sanitizeInput(this.attnName);
    var validationResult = validation.validateString(this.attnName, isRequired, 100, 'attnName');
    return validationResult;
};

// address1 type is varchar(255)
PostAddress.prototype.validateAddress1 = function (isRequired) {
    this.address1 = validation.sanitizeInput(this.address1);
    var validationResult = validation.validateString(this.address1, isRequired, 255, 'address1');
    return validationResult;
};

// address2 type is varchar(255)
PostAddress.prototype.validateAddress2 = function (isRequired) {
    this.address2 = validation.sanitizeInput(this.address2);
    var validationResult = validation.validateString(this.address2, isRequired, 255, 'address2');
    return validationResult;
};

// direction type is varchar(255)
PostAddress.prototype.validateDirections = function (isRequired) {
    this. = validation.sanitizeInput(this.);
    var validationResult = validation.validateString(this., isRequired, 255, '');
    return validationResult;
};

// city type is varchar(100)
PostAddress.prototype.validateCity = function (isRequired) {
    this.city = validation.sanitizeInput(this.city);
    var validationResult = validation.validateString(this.city, isRequired, 100, 'city');
    return validationResult;
};

// postal_code type is varchar(20)
PostAddress.prototype.validatePostalCode = function (isRequired) {
this.postalCode = validation.sanitizeInput(this.postalCode);
    var validationResult = validation.validateString(this.postalCode, isRequired, 20, 'postalCode');
    return validationResult;
};

// state_province_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be STATE or PROVINCE
PostAddress.prototype.validateProvinceGeoId = function (isRequired) {
    this.provinceGeoId = validation.sanitizeInput(this.provinceGeoId);
    var validationResult = validation.validateString(this.provinceGeoId, isRequired, 20, 'provinceGeoId');
    return validationResult;
};

// country_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be COUNTRY
PostAddress.prototype.validateCountryGeoId = function (isRequired) {
    this.countryGeoId = validation.sanitizeInput(this.countryGeoId);
    var validationResult = validation.validateString(this.countryGeoId, isRequired, 20, 'countryGeoId');
    return validationResult;
};

// Export the class as a module
module.exports = ContactMech;