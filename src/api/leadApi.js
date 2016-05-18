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
    // POST /api/leads
    var addLead = function (req, res) {
        
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

    };

    // Lucas is taking this
    // @param {Object} req - 
    // 
    
    /**
     * This method in api.js is called from presentation layer, or by ARC
     * It in turns, stripes the leadId paramenter from req, pass it to leadController
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
            // maybe: res.json(person);
            });
    };
    
    // PUT /api/leads/:id
    var updateLead = function (req, res) {

    };
    
    // DELETE /api/leads/:id
    var deleteLead = function (req, res) {

    };

    return {
        middleware: middleware,
//        addLead: addLead,
//        getLeadsByOwner: getLeadsByOwner,
//        getLeadsByIdentity: getLeadsByIdentity,
//        getLeadsByPhoneNumber: getLeadsByPhoneNumber,
        getLeadById: getLeadById,
//        updateLead: updateLead,
//        deleteLead: deleteLead
    };
};

module.exports = leadApi;