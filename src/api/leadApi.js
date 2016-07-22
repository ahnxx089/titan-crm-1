/////////////////////////////////////////////////
// RESTful API module for leads.
//
// @file:   leadApi.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////


var redisClient = require('../config/redisClient');
var winston = require('winston');

var leadApi = function (knex) {

    // Get a reference to data layer module
    var leadController = require('../controllers/leadController')(knex);


    // API methods
    //
    /**
     * Methods in XXXapi.js are called from presentation layer, or by ARC
     * They in turns, stripes the passed params from req, pass params to corresponding functions in leadController
     * In the end of this flow, res will give the json object back to ARC. 
     * @param {Object} req - The HTTP request
     * @param {Object} res - The HTTP response
     * @return {Object} promise - Fulfillment value is id of new party
     */
    // ==========================================
    

    // POST /api/leads
    /**
     * To add a new lead in database
     * @param {Object} req - The request from presentation layer 
     * @param {Object} res - The response to presentation layer 
     */
    var addLead = function (req, res) {
        // lead and user here are striped params from request
        var lead = req.body;
        var user = req.user;

        var resultsForThisUser = leadController.addLead(lead, user);
        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to add leads!'
            });
        } else {
            // An array in result means it's array of validation errors
            if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
                res.json(resultsForThisUser);
            }
            // An object in result means it's a promise
            // (which is returned only if validation succeeds)
            else {
                resultsForThisUser.then(function (partyId) {
                    res.json({
                        partyId: partyId
                    });
                });
            }
        }
    };


    // To retrieve existing leads from database based on their creater
    // In use now.
    // GET /api/leads[/nothing follows]

    var getLeadsByOwner = function (req, res) {
        
        var user = req.user;
        
        var redis = redisClient.getClient();
        var cacheKeyName = 'leads_for_party_id_' + req.user.partyId; // unique key
        
        redis.get(cacheKeyName, function (err, result) {
            // IF Data is in the cache
            if (result) {
                // Convert the cached data string back into JSON before sending out
                res.json(JSON.parse(result));
            } 
            // IF Data is NOT in the cache
            else {
                //winston.error(err);
                winston.error('No redis');

                var resultForThisUser = leadController.getLeadsByOwner(user); 
                if (resultForThisUser === null) {
                    res.json({
                        'message': 'You do not have permission to own or view leads!'
                    });
                } else {
                    resultForThisUser.then(function (leads) {
                        redis.setex(cacheKeyName, 60, JSON.stringify(leads));
                        res.json(leads);
                    });
                }
            }
        });
        
    };

    // Author: Lucas
    // GET /api/leads/:id
    var getLeadById = function (req, res) {
        var leadId = req.params.id;
        var resultsForUser = leadController.getLeadById(leadId, req.user);

        if (resultsForUser === null) {
            res.json({
                'message': 'You do not have permission to view lead!'
            });
        } else {
            resultsForUser.then(function (lead) {
                res.json(lead);
            });
        }
    };


    return {
        addLead: addLead,
        getLeadsByOwner: getLeadsByOwner,
        getLeadById: getLeadById
    };
};

module.exports = leadApi;