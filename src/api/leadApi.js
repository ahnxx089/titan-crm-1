/////////////////////////////////////////////////
// RESTful API module for leads.
//
// @file:   leadApi.js
// @author: 
/////////////////////////////////////////////////

var leadApi = function (knex) {
    
    var middleware = function (req, res, next) {
        next();
    };
    
    
    // API methods
    // ==========================================
    //
    // POST /api/leads
    var addLead = function (req, res) {
        
    };
    
    // GET /api/leads/?owner=
    var getLeadsByOwner = function (req, res) {

    };
    
    // GET /api/leads/?leadId=&firstName=&lastName=&companyName=
    var getLeadsByIdentity = function (req, res) {

    };
    
    // GET /api/leads/?phoneNumber=
    var getLeadsByPhoneNumber = function (req, res) {

    };

    // GET /api/leads/:id
    var getLeadById = function (req, res) {

    };
    
    // PUT /api/leads/:id
    var updateLead = function (req, res) {

    };
    
    // DELETE /api/leads/:id
    var deleteLead = function (req, res) {

    };

    return {
        middleware: middleware,
        addLead: addLead,
        getLeadsByOwner: getLeadsByOwner,
        getLeadsByIdentity: getLeadsByIdentity,
        getLeadsByPhoneNumber: getLeadsByPhoneNumber,
        getLeadById: getLeadById,
        updateLead: updateLead,
        deleteLead: deleteLead
    };
};

module.exports = leadApi;