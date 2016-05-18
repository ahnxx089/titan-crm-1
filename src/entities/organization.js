/////////////////////////////////////////////////
// Organization entity.
// Inherits from Party.
// Properties and validation methods.
//
// @file:   organization.js
// @author: 
/////////////////////////////////////////////////

var validation = require('../common/validation')();
var Party = require('../entities/party')();

// Constructor
//
function Organization(partyId, createdDate, updatedDate, orgName, officeSiteName, annualRevenue,
                numEmployees, tickerSymbol, comments,  logoImgURL) {
    // Call the parent constructor first
    Party.call(this, partyId, createdDate, updatedDate);
    
    // Properties specific to Organization 
    this.orgName = orgName;
    this.officeSiteName = officeSiteName;
    this.annualRevenue = annualRevenue;
    this.numEmployees = numEmployees;
    this.tickerSymbol = tickerSymbol;
    this.comments = comments;
    this.logoImgURL = logoImgURL;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
}

Organization.prototype = Object.create(Party.prototype);
Organization.prototype.constructor = Organization;

// Methods
//
Organization.prototype.validateForInsert = function () {
    // Call Party's validation function
    var errors = [Party.prototype.validateForInsert.call(this)];
    // Organization-specific validation code
    var specificvalidations = [
        this.validateOrgName(true),
        this.validateOfficeSiteName(true),
        this.validateAnnualRevenue(false),
        this.validateNumEmployees(false),
        this.validateTickerSymbol(false),
        this.validateComments(false),
        this.validateLogoImgURL(false)
    ];
    
    for (var i = 0; i < validation.length; i++) {
        if(specificvalidations[i] == true) {
            errors[i].push(specificvalidations[i]);
        }
    };
    return errors;
};

Organization.prototype.validateForUpdate = function () {
    // Call Party's validation function
    var errors = [Party.prototype.validateForUpdate.call(this)];
    // Person-specific validation code
    
    var specificvalidations = [
        this.validateOrgName(true),
        this.validateOfficeSiteName(true),
        this.validateAnnualRevenue(false),
        this.validateNumEmployees(false),
        this.validateTickerSymbol(false),
        this.validateComments(false),
        this.validateLogoImgURL(false)   
    ];
    
    for (var i = 0; i < validations.length; i++) {
        if(specificvalidations[i] == true) {
            errors.push(specificvalidations[i]);
        }
    };
    return errors;
};




Organization.prototype.validateOrgName = function(isRequired) {
    this.orgName = validation.sanitizeInput(this.orgName);
    var validationResult = validation.validateString(this.orgName, isRequired, 40, 'orgName');
    return validationResult;
};

Organization.prototype.validateOfficeSiteName = function(isRequired) {
    this.officeSiteName = validation.sanitizeInput(this.officeSiteName);
    var validationResult = validation.validateString(this.officeSiteName, isRequired, 40, 'officeSiteName');
    return validationResult;
};

Organization.prototype.validateAnnualRevenue = function(isRequired) {
    this.annualRevenue = validation.sanitizeInput(this.annualRevenue);
    var validationResult = validation.validateString(this.annualRevenue, isRequired, 20, 'annualRevenue');
    return validationResult;
};

Organization.prototype.validateNumEmployees = function(isRequired) {
    this.numEmployees = validation.sanitizeInput(this.numEmployees);
    var validationResult = validation.validateString(this.numEmployees, isRequired, 20, 'numEmployees');
    return validationResult;
};

Organization.prototype.validateTickerSymbol = function(isRequired) {
    this.tickerSymbol = validation.sanitizeInput(this.tickerSymbol);
    var validationResult = validation.validateString(this.tickerSymbol, isRequired, 100, 'tickerSymbol');
    return validationResult;
};

Organization.prototype.validateComments = function(isRequired) {
    this.comments = validation.sanitizeInput(this.comments);
    var validationResult = validation.validateString(this.comments, isRequired, 100, 'comments');
    return validationResult;
};

Organization.prototype.validateLogoImgURL = function(isRequired) {
    this.logoImgURL = validation.sanitizeInput(this.logoImgURL);
    var validationResult = validation.validateString(this.logoImgURL, isRequired, 100, 'logoImgURL');
    return validationResult;
};


module.exports = Organization;