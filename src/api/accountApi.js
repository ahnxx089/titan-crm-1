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
        var account = req.body;
        var result = accountController.addAccount(account);
        // An array in result means it's array of validation errors
        if( Object.prototype.toString.call(result) === '[object Array]' ) {
            res.json(result);
        }
        // An object in result means it's a promise
        // (which is returned only if validation succeeds)
        else {
            result.then(function(partyId) {
               res.json({partyId: partyId}); 
            });
        }
    };
    
    // GET /api/accounts/?owner=
    var getAccountByDummyVar1 = function (req, res) {
        var ownerId = req.params.owner;
        accountController.getAccountByOwner(ownerId)
            .then(function (accounts) {
                res.json(accounts);
            });
    };
    
    // GET /api/
    var getAccountByDummyVar2 = function (req, res) {
        accountController.getAccounts()
            .then(function (accounts) {
                res.json(accounts);
            });
    };
    
    // GET /api/accounts/?phoneNumber=
    var getAccountByDummyVar3 = function (req, res) {
        var partyId = req.params.id;
        accountController.getAccountByPhoneNumber(partyId)
		      .then(function(accounts) {
		          res.json(accounts);
        });
    };

    // GET /api/accounts/:id
    var getAccountById = function (req, res) {
         var partyId = req.params.id;
        accountController.getAccountById(partyId)
            .then(function(party) {
                res.json(party);
            });
    };
    
    // PUT /api/accounts/:id
    var updateAccount = function (req, res) {
        var partyId = req.params.id;
        var account = req.body;
        accountController.updateAccount(partyId, account)
            .then(function(result) {
               res.json({updated: result}); 
            });
    };
    
    // DELETE /api/accounts/:id
    var deleteAccount = function (req, res) {
        var partyId = req.params.id;
        accountController.deleteAccount(partyId)
            .then(function(result) {
               res.json({deleted: result}); 
            });
    };

    return {
        addAccount: addAccount,
        getAccountByDummyVar1: getAccountByDummyVar1,
        getAccountByDummyVar2: getAccountByDummyVar2,
        getAccountByDummyVar3: getAccountByDummyVar3,
        getAccountById: getAccountById,
        updateAccount: updateAccount,
        deleteAccount: deleteAccount
    };
};
    
module.exports = accountApi;