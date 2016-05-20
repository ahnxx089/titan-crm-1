/////////////////////////////////////////////////
// Account entity.
// Inherits from Organization.
// Properties and validation methods.
//
// @file:   account.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var validation = require('../common/validation')();
var Organization = require('../entities/organization')();

// Constructor
//
function Account(partyId, createdDate, updatedDate, orgName, officeSiteName, annualRevenue,
                numEmployees, tickerSymbol, comments,  logoImgURL,
                      partyParentId, industryEnumId, ownershipEnumId, importantNote, primaryPostalAddressId, primaryTelecomNumberId, primaryEmailId) {
    // Call the parent constructor first
    Organization.call(this, partyId, createdDate, updatedDate, orgName, officeSiteName, annualRevenue, numEmployees, tickerSymbol, comments, logoImgURL);
    
    // Properties specific to Account 
    this.partyParentId = partyParentId;
    this.industryEnumId = industryEnumId;
    this.ownershipEnumId = ownershipEnumId;
    this.importantNote = importantNote;
    this.primaryPostalAddressId = primaryPostalAddressId;
    this.primaryTelecomNumberId = primaryTelecomNumberId;
    this.primaryEmailId = primaryEmailId;
}

Account.prototype = Object.create(Organization.prototype);
Account.prototype.constructor = Account;

// Methods
//
Account.prototype.validateForInsert = function () {
    // Call Organization's validation function
    var errors = [Organization.prototype.validateForInsert.call(this)];
    // Account-specific validation code
    var specificvalidations = [
        this.partyParentId = partyParentId(true),
        this.industryEnumId = industryEnumId(false),
        this.ownershipEnumId = ownershipEnumId(false),
        this.importantNote = importantNote(false),
        this.primaryPostalAddressId = primaryPostalAddressId(false),
        this.primaryTelecomNumberId = primaryTelecomNumberId(false),
        this.primaryEmailId = primaryEmailId(false)
    ];
    
    for (var i = 0; i < validation.length; i++) {
        if(specificvalidations[i] == true) {
            errors[i].push(specificvalidations[i]);
        }
    };
    return errors;
};

Account.prototype.validateForUpdate = function () {
    // Call Organization's validation function
    var errors = [Organization.prototype.validateForUpdate.call(this)];
    // Account-specific validation code
    
    var specificvalidations = [
        this.partyParentId = partyParentId(true),
        this.industryEnumId = industryEnumId(false),
        this.ownershipEnumId = ownershipEnumId(false),
        this.importantNote = importantNote(false),
        this.primaryPostalAddressId = primaryPostalAddressId(false),
        this.primaryTelecomNumberId = primaryTelecomNumberId(false),
        this.primaryEmailId = primaryEmailId(false)
    ];
    
    for (var i = 0; i < validations.length; i++) {
        if(specificvalidations[i] == true) {
            errors.push(specificvalidations[i]);
        }
    };
    return errors;
};




Account.prototype.validatepartyParentId = function(isRequired) {
    this.partyParentId = validation.sanitizeInput(this.partyParentId);
    var validationResult = validation.validateString(this.partyParentId, isRequired, 40, 'partyParentId');
    return validationResult;
};

Account.prototype.validateindustryEnumId = function(isRequired) {
    this.industryEnumId = validation.sanitizeInput(this.industryEnumId);
    var validationResult = validation.validateString(this.industryEnumId, isRequired, 40, 'industryEnumId');
    return validationResult;
};

Account.prototype.validateownershipEnumId = function(isRequired) {
    this.ownershipEnumId = validation.sanitizeInput(this.ownershipEnumId);
    var validationResult = validation.validateString(this.ownershipEnumId, isRequired, 20, 'ownershipEnumId');
    return validationResult;
};

Account.prototype.validateimportantNote = function(isRequired) {
    this.importantNote = validation.sanitizeInput(this.importantNote);
    var validationResult = validation.validateString(this.importantNote, isRequired, 20, 'importantNote');
    return validationResult;
};

Account.prototype.validatePrimaryPostalAddressId = function(isRequired) {
    this.primaryPostalAddressId = validation.sanitizeInput(this.primaryPostalAddressId);
    var validationResult = validation.validateString(this.primaryPostalAddressId, isRequired, 20, 'primaryPostalAddressId');
    return validationResult;
};

Account.prototype.validatePrimaryTelecomNumberId = function(isRequired) {
    this.primaryTelecomNumberId = validation.sanitizeInput(this.primaryTelecomNumberId);
    var validationResult = validation.validateString(this.primaryTelecomNumberId, isRequired, 20, 'primaryTelecomNumberId');
    return validationResult;
};

Account.prototype.validatePrimaryEmailId = function(isRequired) {
    this.primaryEmailId = validation.sanitizeInput(this.primaryEmailId);
    var validationResult = validation.validateString(this.primaryEmailId, isRequired, 20, 'primaryEmailId');
    return validationResult;
};

//Export class as module
module.exports = Account;
