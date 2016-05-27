/////////////////////////////////////////////////
// Jasmine spec (test suite) for Accounts APIs.
//
// @file:   accountSpec.js
// @author: Eric Brichetto <brichett13@gmail.com>
//          DukJin Ahn <ahnxx089@gmail.com>
/////////////////////////////////////////////////

var knex = require('../src/config/knexConfig')().getConfig();
var accountController = require('../src/controllers/accountController')(knex);
var Account = require('../src/entities/account');


describe('Account module', function () {
    
    xit('getAccounts returns all accounts in system as an array of Account objects', function (done) {
           accountController.getAccounts().then(function(accounts) {
               // Get types of returned objects
               var typeofAccounts = Object.prototype.toString.call(accounts);
               // Check whether the return value is an array
               expect(typeofAccounts).toBe('[object Array]');
               // Check whether the first element in returned array is of type Object
               expect(accounts[0] instanceof Account).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });
    xit('getAccounts returns a valid account entity', function (done) {
           accountController.getAccountById(2).then(function(account) {
               expect(account instanceof Account).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });

});
