/////////////////////////////////////////////////
// Lead entity.
// Inherits from Person.
// Properties and validation methods.
//
// @file:   lead.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

// NOT COMPLETED! Skeleton only. 

var validation = require('../common/validation')();

// Constructor
// Lead is a Person, which is a Party
// Party -> Person -> Lead
function Lead(partyId, partyTypeId, currencyUomId, description,
               statusId, createdBy, createdDate, updatedDate, // for Party
               salutation, firstName, middleName, lastName, birthDate, comments, // for Person
               parentPartyId, companyName, annualRevenue, numEmployees, ownershipEnumId
               // for party_supplemental_data. Some less useful fields are omitted. 
              ) {

    Person.call(this, partyId, partyTypeId, currencyUomId, description,
               statusId, createdBy, createdDate, updatedDate, 
               salutation, firstName, middleName, lastName, birthDate, comments);
    
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
    Person.prototype.validateForInsert.call(this);
    
    // Lead-specific validation code
    var specificValidations = [
        // true means required, false means nullable
        
    ]; 
    
    // The "errors" array is "validations" array
    // with empty string elements weeded out
    // If all validations succeed,
    // "errors" will have 0 elements.

    
};

Lead.prototype.validateForUpdate = function () {
    // Call Person's validation function
    Person.prototype.validateForUpdate.call(this);
    // Person-specific validation code
    var specificValidations = [
    ];
};

// Do we need this? 
// Export the class as a module
module.exports = Lead;