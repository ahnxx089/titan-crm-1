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

   
    // GET /api/accounts/?identity=
    var getAccountByIdentity = function (req, res) {
        
    };
    
    // GET /api/accounts/?owner=
    var getAccountsByOwner = function (req, res) {
        var ownerId = req.params.owner;
        accountController.getAccountByOwner(ownerId)
            .then(function (accounts) {
                res.json(accounts);
            });
    };
    
    // GET /api/accounts
    var getAccounts = function (req, res) {
        accountController.getAccounts()
            .then(function (accounts) {
                res.json(accounts);
            });
    };
    
    // GET /api/accounts/?phoneNumber=
    var getAccountByPhoneNumber = function (req, res) {
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
        getAccountsByOwner: getAccountsByOwner,
        getAccounts: getAccounts,
        getAccountByPhoneNumber: getAccountByPhoneNumber,
        getAccountById: getAccountById,
        updateAccount: updateAccount,
        deleteAccount: deleteAccount
    };
};

//Discussion with Dinesh indicates that we may want to heavily consider placing conditions into our
//getAccounts method so that we centralize all requests to get accounts by different attributes 
//under the one getAccounts method. This would help avoid the proliferation of different API method URLs. 
    
module.exports = accountApi;