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
function ContactMech(contactMechId, contactMechTypeId, infoString, additionalParamiters) {
    // Properties
    this.contactMechId = contactMechId
    this.contactMechTypeId = contactMechTypeId;
    this.infoString = infoString;

    if (contactMethodType == 'POSTAL_ADDRESS') {
        this.contactMechId: = additionalParamiters.contactMechId;
        this.toName: = additionalParamiters.toName;
        this.attnName: = additionalParamiters.attnName;
        this.address1: = additionalParamiters.address1;
        this.address2: = additionalParamiters.address2;
        this.directions: = additionalParamiters.directions;
        this.city: = additionalParamiters.city;
        this.zipOrPostalCode: = additionalParamiters.zipOrPostalCode;
        this.stateProvinceGeoId: = additionalParamiters.stateProvinceGeoId;
        this.countryGeoId: = additionalParamiters.countryGeoId;

        this.infoString = getPostalAddressString(additionalParamiters);
    }
}

var getPostalAddressString = function (paramiters) {
    var addressString = '';
    
    //add components of address to string
    addressString += toName;
    if (attnName) {
        addressString += ' Attn: ' + attnName;
    }
    addressString += '\n';
    addressString += address1 + '\n';
    if (address2) {
        addressString += address2 + '\n';
    }
    addressString += city + ', ' + stateProvinceGeoId + ", " + zipOrPostalCode;
    
    return addressString;
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
    return ''; //Dummy value
};

// contact_mech_type_id is varchar(20)
Contact.prototype.validateContactMechTypeId = function () {};

// info_strng is varchar(255)
Contact.prototype.validateInfoString = function () {};


// to_name type is varchar(100)
PostAddress.prototype.validateToName = function (isRequired) {
    return ''; //Dummy value
};

// attn_name type is varchar(100)
PostAddress.prototype.validateAttnName = function (isRequired) {
    return ''; //Dummy value
};

// address1 type is varchar(255)
PostAddress.prototype.validateAddress1 = function (isRequired) {
    return ''; //Dummy value
};

// address2 type is varchar(255)
PostAddress.prototype.validateAddress2 = function (isRequired) {
    return ''; //Dummy value
};

// direction type is varchar(255)
PostAddress.prototype.validateDirections = function (isRequired) {
    return ''; //Dummy value
};

// city type is varchar(100)
PostAddress.prototype.validateCity = function (isRequired) {
    return ''; //Dummy value
};

// postal_code type is varchar(20)
PostAddress.prototype.validatePostalCode = function (isRequired) {
    return ''; //Dummy value
};

// state_province_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be STATE or PROVINCE
PostAddress.prototype.validateProvinceGeoId = function (isRequired) {
    return ''; //Dummy value
};

// country_geo_id type is varchar(20)
// the value must corespond to a value of geo_id present in geo table
// the value of geo_id_type in this row should be COUNTRY
PostAddress.prototype.validateCountryGeoId = function (isRequired) {
    return ''; //Dummy value
};

// Export the class as a module
module.exports = ContactMech;