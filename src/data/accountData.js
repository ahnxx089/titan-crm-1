/////////////////////////////////////////////////
// Data access layer for accounts.
//
// @file:   accountData.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

/* TODO: add a method or two for copying a lead's party_supplemental_data values into 
the newly created entry in that table, then deleting the account-related fields in the new entry. 
This is referring to #4 on slide 18.
*/

var contactMechData = require('../data/contactMechData')();
var orgData = require('../data/organizationData')();
var partyData = require('../data/partyData')();

var accountData = function (knex) {
    
    var addAccountParty = function (account) {
        partyData.addParty(account);
    };
    
    var addAccountOrg = function (account) {
        orgData.addOrganization(account);
    };
    
    var addAccountPartySupplementalData = function (account) {
        //EMPTY FOR NOW - UNCLEAR ON WHAT MUST GO HERE THAT 
        //WOULDN'T GO INTO orgData.addOrganization
    };
    
    var addAccountContactMech = function (account) {
        contactMechData.addContactMech(account);
    };
    
    var addAccountPartyRole = function (account) {
        
        //If creating a new account, take the partyId of that account. 
        //If converting a contact/organization into a lead/account, take the partyId of the newly converted party. 
        //Then add an entry to the party_role table, using the above partyId value in the party_id column,
        //and "account" as the value in the role_type_id column. 
    };
    
    var addAccountPartyRelationship = function (account) {
        //Check if the user is creating a new account from scratch, or converting a lead 
        //at an organization  into a contact (and thus converting the organization into an account). 
        
        //If it is the first case, then the value of Role_Type_Id_From should be set directly to "account". 
        //Role_Type_Id_To should then be set to "account_manager". From_Date should be set to the same value 
        //as Created_Date. Party_Id_To may be set to "admin" or the partyId of the user who made the change, 
        //if we want to create this functionality. This last bit is optional.
        
        //If it is the second case, then the value of Role_Type_Id_From should be set to "contact". 
        //Role_Type_Id_To should then be set to "account". From_Date should be set to the datetime when the 
        //organization was converted. Party_Id_To should then be set to the new partyId of the account
        //(which should have been created by addAccountParty above). 
    };
    
    var convertToAccount = function (account) {
        //Not fully sure yet that I can do this, but will write it down here anyway for now.
        //Call all of the previous addAccount___ methods. 
    }
    /**
     * Gets one account by its id from database
     * @param {Number} accountId - Unique id of the account to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getAccountById = function (accountId) {
        
    };
    

    /**
     * Update an account in database
     * @param {Object} account - The account entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateAccount = function (account) {};

    /**
     * Delete an account from database
     * @param {Number} accountId - Unique id of the account to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteAccount = function (accountId) {};
    
    return {};
    
    
};

module.exports = accountData;