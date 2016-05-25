/////////////////////////////////////////////////
// RESTful API module for leads.
//
// @file:   leadApi.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

// NOT COMPLETED! 
// addLead, getLeadsByOwner, getLeadById are tested and functional. 
// We have a separate getLeadsByOwner, different from Dinesh's approach. It is working now. Need to consult Anurag for more detail. 
//
// getLeads is not called from anywhere. I don't know why. Will look later. 
//
// getLeadsByIdentity, getLeadsByPhoneNumber, updateLead, deleteLead are not tested. 

var leadApi = function (knex) {
    
    
    // Get a reference to data layer module
    var leadController = require('../controllers/leadController')(knex);
    
    // Set up a middleware to validate incoming requests
    var middleware = function (req, res, next) {
        next();
    };
    
    
    // API methods
    //
    /**
     * Methods in XXXapi.js are called from presentation layer, or by ARC
     * They in turns, stripes the passed params from req, pass params to corresponding functions in leadController
     * In the end of this flow, res will give the json object back to ARC. 
     * @param {Object} req - The request
     * @param {Object} res - The resource/response
     * @return {Object} promise - Fulfillment value is id of new party
    */
    // ==========================================

    // Lucas's taking this
    // POST /api/leads
    /**
     * To add a new lead in database
     * @param {Object} req - The request from presentation layer (ARC)
     * @param {Object} res - The response to presentation layer (ARC)
     */
    var addLead = function (req, res) {
        // lead and user here are striped params from request
        var lead = req.body;
        var user = req.user;
        var result = leadController.addLead(lead, user);
//        var result = leadController.addLead(lead); // for testing only

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
    
    
    // Lucas's taking PART of this
    // Credit: Dinesh
    // NOT in use now! (WHY?)
    // GET /api/leads/...
    /**
     * To retrieve a new lead from database, based on various criteria(query strings)
     * @param {Object} req - The request from presentation layer (ARC)
     * @param {Object} res - The response to presentation layer (ARC)
     */
    var getLeads = function (req, res) {

        /* The if blocks test for whether the user entered a query string
            seeking to get Leads by Owner, by Identity or other ways
            (besides getLeadById, which is on a separate route).
           
            Note:  there no longer is a general getLeads()
            function to get all leads, that was just for initial testing.
            Once user authorization is implemented, the only user who should
            be able to get ALL Leads regardless of Owner will be user:admin, 
            and admin will use getLeadsByOwner() for that... that might require
            re-writing leadData.getLeadsByOwner, but that is the
            plan for now.
        */

        // Lucas's taking this
        // GET /api/leads?owner=
        //
        // This if block triggers if a query by owner has been made.
        if (req.query.owner) {
            var ownerId = req.query.owner;
            leadController.getLeadsByOwner(ownerId)
                .then(function (leads) {
                    res.json(leads);
                });
        }

        // This is a good place to add other route handings blocks
        
        // If the request did not properly pass any of the various if tests
        // above, it is not a valid query, make the reponse null.
        else {
            res.json(null);
        }
    };

    
    
    // Lucas is taking this
    // To retrieve existing leads from database based on their creater
    // IN use now.
    // GET /api/leads/?owner=
    var getLeadsByOwner = function (req, res) {
        var ownerId = req.query.owner;
        console.log(ownerId); // this prints "admin" to terminal console, not browser console
        leadController.getLeadsByOwner(ownerId)
            .then(function (lead) {
                res.json(lead);
            });
    };
    
    // Not implemented now. 
    // GET /api/leads/?leadId=&firstName=&lastName=&companyName=
    var getLeadsByIdentity = function (req, res) {

    };
    
    // Possibly not implemented or used now. 
    // GET /api/leads/?phoneNumber=
    var getLeadsByPhoneNumber = function (req, res) {
        var leadId = req.params.id;
        leadController.getLeadByPhoneNumber(leadId)
		      .then(function(lead) {
		          res.json(lead);
        });
    };

    // Lucas's taking this
    // GET /api/leads/:id
    var getLeadById = function (req, res) {
        var leadId = req.params.id;
        leadController.getLeadById(leadId)
            .then(function(lead) {
                res.json(lead);
            });
    };
    
    // PUT /api/leads/:id
    var updateLead = function (req, res) {
       var leadId = req.params.id;
	   var lead = req.body;
	       leadController.updateLead(leadId, lead)
		          .then(function(result){
		              res.json({updated:result});
	});

    };
    
    // DELETE /api/leads/:id
    var deleteLead = function (req, res) {
    var leadId = req.params.id;
        leadController.deleteLead(leadId)
		      .then(function(result){
		          res.json({updated:result});
	});

    };

    return {
        middleware: middleware,
        addLead: addLead,
//        getLeads: getLeads,
        getLeadsByOwner: getLeadsByOwner,
//        getLeadsByIdentity: getLeadsByIdentity,
//        getLeadsByPhoneNumber: getLeadsByPhoneNumber,
        getLeadById: getLeadById,
//        updateLead: updateLead,
//        deleteLead: deleteLead
    };
};

module.exports = leadApi;