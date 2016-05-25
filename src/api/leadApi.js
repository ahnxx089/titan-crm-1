/////////////////////////////////////////////////
// RESTful API module for leads.
//
// @file:   leadApi.js
// @author: 
/////////////////////////////////////////////////

var leadApi = function (knex) {
    
    
    // Get a reference to data layer module
    //
    var leadController = require('../controllers/leadController')(knex);
    
    // Set up a middleware to validate incoming requests
    //
    var middleware = function (req, res, next) {
        next();
    };
    
    
    // API methods
    // ==========================================
    //
    // Lucas's taking this
    // POST /api/leads
    var addLead = function (req, res) {
        var lead = req.body;
        var user = req.user;
        var result = leadController.addLead(lead, user);
//        var result = leadController.addLead(lead);

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
    
    // Lucas is taking this
    // GET /api/leads/?owner=
    var getLeadsByOwner = function (req, res) {

    };
    
    // GET /api/leads/?leadId=&firstName=&lastName=&companyName=
    var getLeadsByIdentity = function (req, res) {

    };
    
    // GET /api/leads/?phoneNumber=
    var getLeadsByPhoneNumber = function (req, res) {
        var leadId = req.params.id;
        leadController.getLeadByPhoneNumber(leadId)
		      .then(function(lead) {
		          res.json(lead);
        });
    };

    /**
     * This method in api.js is called from presentation layer, or by ARC
     * It in turns, stripes the leadId paramenter from req, pass it to leadController
     * Lucas's taking this
     * @param {Object} req - The request
     * @param {Object} res - The resource
     * @return {Object} promise - Fulfillment value is id of new party
    */

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
//        getLeadsByOwner: getLeadsByOwner,
//        getLeadsByIdentity: getLeadsByIdentity,
//        getLeadsByPhoneNumber: getLeadsByPhoneNumber,
        getLeadById: getLeadById,
//        updateLead: updateLead,
//        deleteLead: deleteLead
    };
};

module.exports = leadApi;