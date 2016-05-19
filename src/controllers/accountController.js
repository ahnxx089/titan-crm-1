/////////////////////////////////////////////////
// Business logic module for Account.
//
// @file:   accountController.js
// @author: DukJin Ahn <ahnxx089@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var Account = require('../entities/account');

var accountController = function(knex) {
    // Get a reference to data layer module
    //
    var accountData = require('../data/organizationData')(knex);
    
    
    // CONTROLLER METHODS
    // ==========================================
    //
    /**
     * Add a new account
     * @param {Object} account - The new account to be added
     * @return {Object} promise - Fulfillment value is id of new account
    */
    var addAccount = function (account) {
        // Convert the received object into an entity
        var accountEntity = new Account(
            null,
            account.orgName,
            account.officeSiteName,
            account.annualRevenue,
            account.numEmployees,
            account.tickerSymbol,
            account.comments,
            account.logoImgURL,
            (new Date()).toISOString(),
            (new Date()).toISOString()
        );
        // Validate the data before going ahead
        var validationErrors = accountEntity.validateForInsert();
        if(validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = accountData.addAccount(accountEntity)
                .then(function(partyId) {
                   return partyId; 
                });
                promise.catch(function(error) {
                    winston.error(error);
                });
            return promise;
        }
        else {
            return validationErrors;
        }
    };
    
    /**
     * Gets all account.
     * @return {Object} promise - Fulfillment value is an array of account entities
    */
    var getAccounts = function () {
        var promise = accountData.getAccounts()
            .then(function(accounts) {
                // Map the retrieved result set to corresponding entities
                var accountEntities = [];
                for(var i=0; i < accounts.length; i++) {
                    var account = new Account();
                    account.partyId = accounts[i].party_id;
                    account.orgName = accounts[i].organization_name;
                    account.officeSiteName = accounts[i].office_site_name;
                    account.annualRevenue = accounts[i].annual_revenue;
                    account.numEmployees = accounts[i].num_employees;
                    account.tickerSymbol = accounts[i].ticker_symbol;
                    account.comments = accounts[i].comments;
                    account.logoImgURL = accounts[i].logo_image_url;
                    account.createdDate = accounts[i].created_date;
                    account.updatedDate = accounts[i].updated_date;
                    accountEntities.push(account);
                }
                return accountEntities;
            });
            promise.catch(function(error) {
                // Log the error
                winston.error(error);
            });
        return promise;
    };

    /**
     * Gets one account by its id
     * @param {Number} partyId - Unique id of the party to be fetched
     * @return {Object} promise - Fulfillment value is a account entity
    */
    var getAccountById = function (partyId) {
        var promise = accountData.getAccountById(partyId)
            .then(function(accounts) {
                // Map the retrieved result set to corresponding entity
                var accountEntity = new Account(
                    accounts[0].party_id,
                    accounts[0].organization_name,
                    accounts[0].office_site_name,
                    accounts[0].annual_revenue,
                    accounts[0].num_employees,
                    accounts[0].ticker_symbol,
                    accounts[0].comments,
                    accounts[0].logo_image_url,
                    accounts[0].created_date,
                    accounts[0].updated_date
                );
                return accountEntity;
            });
            promise.catch(function(error) {
                // Log the error
                winston.error(error);
            });
        return promise;
    };
    
    /**
     * Update a account in database
     * @param {Number} partyId - Unique id of the account to be updated
     * @param {Object} account - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
    */
    var updateAccount = function (partyId, account) {
        // Convert the received object into an entity
        var accountEntity = new Account(
            partyId,
            account.orgName,
            account.officeSiteName,
            account.annualRevenue,
            account.numEmployees,
            account.tickerSymbol,
            account.comments,
            account.logoImgURL,
            null,
            (new Date()).toISOString()
        );
        // Validate the data before going ahead
        var validationErrors = accountEntity.validateForUpdate();
        if(validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = accountData.updateAccount(accountEntity)
                .then(function(partyId) {
                   return partyId; 
                });
                promise.catch(function(error) {
                    winston.error(error);
                });
            return promise;
        }
        else {
            return null;
        }
    };
    
    /**
     * Delete a Account
     * @param {Number} partyId - Unique id of the account to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
    */
    var deleteAccount = function (partyId) {
        var promise = accountData.deleteAccount(partyId)
            .then(function(result) {
                return result;
            });
            promise.catch(function(error) {
                // Log the error
                winston.error(error);
            });
        return promise;
    };

    return {
        addAccount: addAccount,
        getAccounts: getAccounts,
        getAccountById: getAccountById,
        updateAccount: updateAccount,
        deleteAccount: deleteAccount
    };
};

module.exports = accountController;