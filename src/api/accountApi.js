/////////////////////////////////////////////////
// RESTful API module for accounts.
//
// @file:   accountApi.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var accountApi = function (knex) {
    //Not yet functional
    var accountController = require('../controllers/accountController')();
    //Not yet functional
    var middleware = function (req, res, next) {
        next();
    };
    
    
    // API methods
    // ==========================================
    //
    //Still having difficulty locating the actual data table for accounts.
    /*The dummy attributes (and real but incorrect attribute, where appropriate) in the 
    //below method names should be replaced with the correct attributes once those are identified.*/
    // POST /api/accounts
    var addAccount = function (req, res) {
        
    };
    
    // GET /api/accounts/?owner=
    var getAccountsByOwner = function (req, res) {

    };
    
    // GET /api/accounts/:id
    var getAccountById = function (req, res) {

    };
    
    // GET /api/accounts/?phoneNumber=
    var getAccountByPhoneNumber = function (req, res) {

    };

    // GET /api/accounts/:id
    var getAccountByIdentity = function (req, res) {
        
    };
    
    // PUT /api/accounts/:id
    var updateAccount = function (req, res) {

    };
    
    // DELETE /api/accounts/:id
    var deleteAccount = function (req, res) {

    };

    return {
        // nothing specified here yet
    };
};

//Discussion with Dinesh indicates that we may want to heavily consider placing conditions into our getAccounts method so that we centralize all requests to get accounts by different attributes under the one getAccounts method. This would help avoid the proliferation of different API method URLs. 
    
module.exports = accountApi;