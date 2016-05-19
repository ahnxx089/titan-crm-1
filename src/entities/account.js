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
function Organization(partyId, createdDate, updatedDate, orgName, officeSiteName, annualRevenue,
                numEmployees, tickerSymbol, comments,  logoImgURL,
                      dummyattr1, dummyattr2, dummyattr3, dummyattr4) {
    // Call the parent constructor first
    Organization.call(this, partyId, createdDate, updatedDate, orgName, officeSiteName, annualRevenue, numEmployees, tickerSymbol, comments, logoImgURL);
    
    // Properties specific to Account 
    this.dummyattr1 = dummyattr1;
    this.dummyattr2 = dummyattr2;
    this.dummyattr3 = dummyattr3;
    this.dummyattr4 = dummyattr4;
}

Account.prototype = Object.create(Organization.prototype);
Account.prototype.constructor = Account;

// Methods
//
Organization.prototype.validateForInsert = function () {
    // Call Organization's validation function
    var errors = [Organization.prototype.validateForInsert.call(this)];
    // Organization-specific validation code
    // FILL THESE NAMES IN ONCE YOU KNOW THE EXACT FIELDS
    var specificvalidations = [
        this.dummyattr1 = dummyattr1(true),
        this.dummyattr2 = dummyattr2(true),
        this.dummyattr3 = dummyattr3(true),
        this.dummyattr4 = dummyattr4(false)
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
    // Person-specific validation code
    
    var specificvalidations = [
        this.dummyattr1 = dummyattr1(true),
        this.dummyattr2 = dummyattr2(true),
        this.dummyattr3 = dummyattr3(true),
        this.dummyattr4 = dummyattr4(false)   
    ];
    
    for (var i = 0; i < validations.length; i++) {
        if(specificvalidations[i] == true) {
            errors.push(specificvalidations[i]);
        }
    };
    return errors;
};




Account.prototype.validateDummyAttr1 = function(isRequired) {
    this.dummyattr1 = validation.sanitizeInput(this.dummyattr1);
    var validationResult = validation.validateString(this.dummyattr1, isRequired, 40, 'dummyattr1');
    return validationResult;
};

Account.prototype.validatedummyattr2 = function(isRequired) {
    this.dummyattr2 = validation.sanitizeInput(this.dummyattr2);
    var validationResult = validation.validateString(this.dummyattr2, isRequired, 40, 'dummyattr2');
    return validationResult;
};

Account.prototype.validatedummyattr3 = function(isRequired) {
    this.dummyattr3 = validation.sanitizeInput(this.dummyattr3);
    var validationResult = validation.validateString(this.dummyattr3, isRequired, 20, 'dummyattr3');
    return validationResult;
};

Account.prototype.validatedummyattr4 = function(isRequired) {
    this.dummyattr4 = validation.sanitizeInput(this.dummyattr4);
    var validationResult = validation.validateString(this.dummyattr4, isRequired, 20, 'dummyattr4');
    return validationResult;
};

//Export class as module
module.exports = Account;
