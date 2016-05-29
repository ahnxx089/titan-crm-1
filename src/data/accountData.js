/////////////////////////////////////////////////
// Data access layer for accounts.
//
// @file:   accountData.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

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
        return knex.insert({
                party_id: account.partyId,
                parent_party_id: account.parentPartyId,
                //Put in company name here maybe?
                annual_revenue: account.annualRevenue,
                currency_uom_id: account.preferredCurrencyUomId,
                num_employees: account.numEmployees,
                industry_enum_id: account.industryEnumId,
                ownership_enum_id: account.ownershipEnumId,
                ticker_symbol: account.tickerSymbol,
                important_note: account.importantNote,
                primary_postal_address_id: account.primaryPostalAddressId,
                primary_telecom_number_id: account.primaryTelecomNumberId,
                primary_email_id: account.primaryEmailId,
                created_date: account.createdDate, //this may be incorrect and need to be changed
                updated_date: account.updatedDate
            }).into('party_supplemental_data');
    };
    
    var addAccountContactMech = function (account) {
        contactMechData.addContactMech(account);
    };
    
    var addAccountPartyRole = function (account) {
        
        //If creating a new account, take the partyId of that account. 
        //If converting a contact/organization into a lead/account, take the partyId of the newly converted party. 
        //Then add an entry to the party_role table, using the above partyId value in the party_id column,
        //and "account" as the value in the role_type_id column.
        return knex.insert({
            party_id: account.partyId,
            role_type_id: 'ACCOUNT',
            created_date: account.createdDate,
            updated_date: account.updatedDate
        }).into('party_role');
    };
    
    var addAccountPartyRelationship = function (account, user, contact) {
        //Check if the user is creating a new account from scratch, or converting a lead 
        //at an organization  into a contact (and thus converting the organization into an account). 
        
        //If it is the first case, then the value of Role_Type_Id_From should be set directly to "account". 
        //Role_Type_Id_To should then be set to "account_manager". From_Date should be set to the same value 
        //as Created_Date. Party_Id_To may be set to "admin" or the partyId of the user who made the change, 
        //if we want to create this functionality. This last bit is optional.
        if(!contact) {
            return knex.insert({
                    party_id_from: account.partyId,
                    party_id_to: user.partyId,
                    role_type_id_from: 'ACCOUNT',
                    role_type_id_to: 'ACCOUNT_MANAGER',
                    from_date: account.createdDate,
                    thru_date: null, 
                    status_id: null, 
                    relationship_name: null, 
                    security_group_id: 'ACCOUNT_OWNER',
                    priority_type_id: null,
                    party_relationship_type_id: 'CONTACT_REL_INV',
                    created_date: account.createdDate,
                    updated_date: account.updatedDate
                }).into('party_relationship');
        }
            
        
        //If it is the second case, then the value of Role_Type_Id_From should be set to "contact". 
        //Role_Type_Id_To should then be set to "account". From_Date should be set to the datetime when the 
        //organization was converted. Party_Id_To should then be set to the new partyId of the account
        //(which should have been created by addAccountParty above). 
        else {
            return knex.insert({
                party_id_from: contact.partyId,
                party_id_to: account.partyId,
                role_type_id_from: 'CONTACT',
                role_type_id_to: 'ACCOUNT', 
                from_date: account.createdDate,
                thru_date: null, 
                status_id: null, 
                relationship_name: null, 
                security_group_id: null,
                priority_type_id: null,
                party_relationship_type_id: 'CONTACT_REL_INV',
                created_date: account.createdDate,
                updated_date: account.updatedDate
            }).into('party_relationship');
        }
    };

    
    var addAccount = function (account, user, contact) {
        //Not fully sure yet that I can do this, but will write it down here anyway for now.
        //Call all of the previous addAccount___ methods. 
        var results = addAccountParty(account);
        results += addAccountOrg(account);
        results += addAccountPartySupplementalData(account); //I STRONGLY SUSPECT THAT THIS SHOULD BE CONTACT OR LEAD
        //Deleting account-related fields from the contact/lead's p_s_d entry would happen here
        results += addAccountContactMech(account); //this may not be fully functional
        results += addAccountPartyRole(account);
        results += addAccountPartyRelationship(account, user, contact);
        return results;
    };
    
    /**
     * Gets all accounts associated with an owner from database
     * @param {Number} ownerId - This is the party_id of the owner
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getAccountsByOwner = function (ownerId) {
        return knex.select('party_id', 'parent_party_id', 'company_name', 'annual_revenue',
        'currency_uom_id', 'num_employees', 'industry_enum_id', 'ownership_enum_id', 'ticker_symbol',
        'important_note', 'primary_postal_address', 'primary_telecom_number_id', 'primary_email_id',
        'created_date', 'updated_date', 'organization.logo_image_url')
            .from('party_supplemental_data')
            .innerJoin('organization', 'party_supplemental_data.party_id', 'organization.party_id')
            .innerJoin('party_relationship', 'party_supplemental_data.party_id', 'party_relationship.party_id_from')
            .where('party_relationship.party_id_to', ownerId)
            .andWhere('party_relationship.role_type_id_from', 'account')
            .andWhere('party_relationship.party_relationship_type_id', 'responsible_for');
    };
    /**
     * Gets one account by its id from database
     * @param {Number} accountId - Unique id of the account to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getAccountById = function (accountId) {
        return knex.select('party_id', 'parent_party_id', 'company_name', 'annual_revenue',
        'currency_uom_id', 'num_employees', 'industry_enum_id', 'ownership_enum_id', 'ticker_symbol',
        'important_note', 'primary_postal_address', 'primary_telecom_number_id', 'primary_email_id',
        'created_date', 'updated_date', 'organization.logo_image_url')
            .from('party_supplemental_data')
            .innerJoin('organization', 'party_supplemental_data.party_id', 'organization.party_id')
            .innerJoin('party_role', 'party_supplemental_data.party_id', 'party_role.party_id')
            .where({party_id: accountId})
            .andWhere('party_role.role_type_id', 'account');
    };
    /**
     * Gets one account by its phone number from database
     * @param {Number} phoneNumber - Unique phone number of the account to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getAccountByPhoneNumber = function (phoneNumber) {
        //TELECOM_NUMBER is the value of the contactmechtypeId where we want to join table entries
        //Is there really a telecom_number table in our titan_crm database? contactData mentions that there 
        //is, but I haven't seen one anywhere...
        
        
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