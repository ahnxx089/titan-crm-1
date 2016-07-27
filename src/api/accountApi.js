/////////////////////////////////////////////////
// RESTful API module for accounts.
//
// @file:   accountApi.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */
var redisClient = require('../config/redisClient');
var winston = require('winston');
var accountApi = function (knex) {

    var accountController = require('../controllers/accountController')(knex);

    // API methods
    // ==========================================
    //
    // POST /api/accounts
    var addAccount = function (req, res) {
        var account = req.body;
        var user = req.user;
        var result = accountController.addAccount(account, user);
        // An array in result means it's array of validation errors
        if (Object.prototype.toString.call(result) === '[object Array]') {
            res.json(result);
        }
        // An object in result means it's a promise
        // (which is returned only if validation succeeds)
        else {
            result.then(function (partyId) {
                res.json({
                    partyId: partyId
                });
            });
        }

        //if( result === null) {
        //    res.json({message: "No permission to access this"});
        //    }

    };


    // GET /api/accounts
    var getAccounts = function (req, res) {
        //If nothing is specified in the query string, use getAccountsByOwner as the default
        if (Object.keys(req.query).length === 0) {
            //Since we are retrieving a data list that would be both accessed frequently and changed rarely, implementing caching here is preferred for performance optimization.
            //First we check whether the data being requested is already in the cache. If it is, we send it along.
            //If it isn't in the cache, then we proceed to calling the controller layer for the normal process, and then we end by copying that data into the cache.
            //We only implement redis caching for the getByOwner method here, because search requests for specific accounts would not be made nearly as frequently as requests for My Accounts.
            var redis = redisClient.getClient();
            //create a unique key for this cache
            var cacheKeyName = 'accounts_for_partyId_' + req.user.partyId;
            redis.get(cacheKeyName, function (err, result) {
                if (result) {
                    //We found the desired data in the cache. Parse it into valid JSON and send it along.
                    res.json(JSON.parse(result));
                }
                else {
                    winston.error('No accounts in redis cache');
                    //Proceed with calling the controller layer as normal.
                    var resultsForThisUser = accountController.getAccountsByOwner(req.user);
                    // IF ELSE block interprets controller returning an object or null
                    if (resultsForThisUser === null) {
                        res.json({
                            'message': 'You do not have permission to own accounts!'
                        });
                    }
                    else {
                        resultsForThisUser.then(function (accounts) {
                            redis.setex(cacheKeyName, 30, JSON.stringify(accounts));
                            res.json(accounts);
                        });

                    }
                }
            });

        }
        //If query strings are non-empty, use getAccountsByIdentity

        /*This function also same like the Identity. Identity need to first_name and last_name and Company_Name.
      PhoneNumber also exist from user part. So, firstly, check out the primary key(user.partyID), and call the phoneNumber data.
    */
        // GET /api/accounts/?phoneNumber=
        else if (req.query.hasOwnProperty('phoneNumber')) {
            var resultForThisAccount = accountController.getAccountByPhoneNumber(req.query, req.user);
            if (resultForThisAccount === null) {
                res.json({
                    'message': 'You do not have permission to view that account!'
                });
            } else {
                resultForThisAccount.then(function (accounts) {
                    res.json(accounts);
                });
            }
        }
        // Get Account By Identity
        else if (req.query.hasOwnProperty('accountId') || req.query.hasOwnProperty('accountName')) {
            var resultForThisAccount =
                accountController.getAccountsByIdentity(req.query, req.user);
            if (resultForThisAccount === null) {
                res.json({
                    'message': 'You do not have permission to view that account!'
                });
            } else {
                resultForThisAccount.then(function (accounts) {
                    res.json(accounts);
                });
            }
        } else {
            res.json({
                'message': 'ERR: Nothing found from that GET route request.'
            });
        }
    };

    // GET /api/accounts/:id
    var getAccountById = function (req, res) {
        var accountId = req.params.id;
        accountController.getAccountById(accountId, req.user)
            .then(function (result) {
                res.json(result);
            });
    };

    // PUT /api/accounts/:id
    var updateAccount = function (req, res) {
        var accountId = req.params.id;
        var accounts = req.body;
        var user = req.user;
        var resultsForThisUser = accountController.updateAccount(accountId, accounts, user);
        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to update accounts!'
            });
        } else {
            resultsForThisUser.then(function (result) {
                res.json({
                    updated: result
                });
            });
        }
    };

    // DELETE /api/accounts/:id
    var deleteAccount = function (req, res) {
        var accountId = req.params.id,
        user = req.user,
        resultsForThisUser = accountController.deleteAccount(accountId, user);
        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to delete accounts!'
            });
        } else {
            resultsForThisUser.then(function (result) {
                res.json({
                    deleted: result
                });
            });
        }
    };

    return {
        addAccount: addAccount,
        getAccounts: getAccounts,
        getAccountById: getAccountById,
        updateAccount: updateAccount,
        deleteAccount: deleteAccount
    };
};


module.exports = accountApi;