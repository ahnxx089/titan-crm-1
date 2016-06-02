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
    it('getAccounts returns a valid account entity', function (done) {
           accountController.getAccountById(70).then(function(account) {
               expect(account instanceof Account).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });
    xit('getAccountsByOwner returns a valid array of accounts', function (done) {
        accountController.getAccountsByOwner("admin").then(function (accounts) {
            //The thing I'm still uncertain of here is whether anything needs 
            //to be tested regarding the ownerId/userId. It's redundant to 
            //check whether the userId being used actually exists in the database...
            //because if it didn't, the user would be able to access most of the API or
            //run unit tests in the first place. And the final product will
            //be getting the ownerId automatically from the API calls' HTTP headers,
            //where there isn't much or any wiggle room to manually send a user token that's different from 
            //the one currently enabled for the user. Hmm...
            var typeofAccounts = Object.prototype.toString.call(accounts);
            //Next, check whether the result of getAccountsByOwner is a valid array
            expect(typeofAccounts).toBe('[object Array]');
            //Next, check whether the objects in that array are of type Account
            expect(accounts[0] instanceof Account).toBeTruthy();
            done();
        });
    });
});
