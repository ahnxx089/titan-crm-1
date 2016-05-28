/////////////////////////////////////////////////
// Lead entity.
// Inherits from Person.
// Properties and validation methods.
//
// @file:   lead.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint maxparams: false */

// NOT COMPLETED! 
// Anurag: statusId is a foreign key that is not reflected in the design document. Consider update. 
// Need work on validateForUpdate, and validateAnnualRevenue.
// Need more fields.

var validation = require('../common/validation')();
var Person = require('../entities/person');
// Constructor
// Lead is a Person, which is a Party
// Party -> Person -> Lead
function Lead(partyId, /*PK, SHARED #1 */
               partyTypeId, /*FK #2, party_type.party_type_id, in this case a PERSON */
               currencyUomId, /*FK #3, uom.uom_id */
               description, 
               statusId, /*FK #4, status_item.status_id */
               createdBy, /*FK #5, user_login.user_login_id */
               createdDate, updatedDate, /* SHARED 6,7 */
               // for Party
               
               salutation, firstName, middleName, lastName, birthDate, comments, 
               // Use SHARED #1,6,7
               // for Person
               
               parentPartyId, companyName, annualRevenue, numEmployees
               // Use SHARED #1,3,6,7
               // for party_supplemental_data. Some less useful or interesting fields are omitted. 
              ) {

    Person.call(this, partyId, partyTypeId, currencyUomId, description,
               statusId, createdBy, createdDate, updatedDate,
               salutation, firstName, middleName, lastName, birthDate, comments
               );
    
    // Lead-specific Properties
    this.parentPartyId = parentPartyId;
    this.companyName = companyName;
    this.annualRevenue = annualRevenue;
    this.numEmployees = numEmployees;
}


// Inherit from Person (and automatically implictly from Party, maybe?)
//
Lead.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Person
Lead.prototype.constructor = Lead;



// Methods
//
Lead.prototype.validateForInsert = function () {
    // Call Person's validation function
    var errors = Person.prototype.validateForInsert.call(this);
    
// Lead-specific validation code
    var specificValidations = [
        // true means required, false means nullable
        this.validateParentPartyId(true),
        this.validateCompanyName(false),
        this.validateAnnualRevenue(false),
        this.validateNumEmployees(false)
    ]; 
    
    // The "errors" array is "validations" array
    // with empty string elements weeded out
    // If all validations succeed,
    // "errors" will have 0 elements.
    for(var i=0; i < specificValidations.length; i++) {
        if(specificValidations[i]) {
            errors.push(specificValidations[i]);
        }
    }
    return errors;
    
};

Lead.prototype.validateForUpdate = function () {
    // Call Person's validation function
    Person.prototype.validateForUpdate.call(this);
    // Person-specific validation code
    var specificValidations = [
    ];
};


// parentPartyId is int(11)
Person.prototype.validateParentPartyId = function(isRequired) {
    this.parentPartyId = validation.sanitizeInput(this.parentPartyId);
    var validationResult = validation.validateInt(this.parentPartyId, isRequired, 'parentPartyId');
    if(this.parentPartyId && !validationResult) {
        this.parentPartyId = validation.convertToInt(this.parentPartyId);
    }
    return validationResult;
};

// companyName is varchar(100)
Person.prototype.validateCompanyName = function(isRequired) {
    this.companyName = validation.sanitizeInput(this.companyName);
    var validationResult = validation.validateString(this.companyName, isRequired, 100, 'companyName');
    return validationResult;
};

// annualRevenue is decimal(18,2) but we are doing int now 
Person.prototype.validateAnnualRevenue = function(isRequired) {
    this.annualRevenue = validation.sanitizeInput(this.annualRevenue);
    var validationResult = validation.validateInt(this.annualRevenue, isRequired, 'annualRevenue');
    if(this.annualRevenue && !validationResult) {
        this.annualRevenue = validation.convertToInt(this.annualRevenue);
    }
    return validationResult;
};

// numEmployees is decimal(20,0) = int(20)
Person.prototype.validateNumEmployees = function(isRequired) {
    this.numEmployees = validation.sanitizeInput(this.numEmployees);
    var validationResult = validation.validateInt(this.numEmployees, isRequired, 'numEmployees');
    if(this.numEmployees && !validationResult) {
        this.numEmployees = validation.convertToInt(this.numEmployees);
    }
    return validationResult;
};



// Export the class as a module
module.exports = Lead;