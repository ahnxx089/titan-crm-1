/////////////////////////////////////////////////
// RESTful API module for parties.
//
// @file:   partyApi.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var partyApi = function (knex) {
    
    // Get a reference to data layer module
    //
    var partyController = require('../controllers/partyController')(knex);
    
    // Set up a middleware to validate incoming requests
    //
    var middleware = function (req, res, next) {
        // Set timestamp properties on received data
//        if(typeof req.data == 'object') {
//            req.data.updated_date = (new Date()).toISOString();
//            if(req.method == 'POST') {
//                req.data.created_date = (new Date()).toISOString();
//            }
//        }
        // Log the request
//        winston.info(req);
        
        // Move on to the next route
        next();
    };
    
    
    // API methods
    // ==========================================
    //
    // POST /api/parties
    var addParty = function (req, res) {
        var party = req.body;
        var result = partyController.addParty(party);
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
    
    // GET /api/parties
    var getParties = function (req, res) {
        partyController.getParties()
            .then(function(parties) {
                res.json(parties);
            });
    };

    // GET /api/parties/:id
    var getPartyById = function (req, res) {
        var partyId = req.params.id;
        partyController.getPartyById(partyId)
            .then(function(party) {
                res.json(party);
            });
    };
    
    // PUT /api/parties/:id
    var updateParty = function (req, res) {
        var partyId = req.params.id;
        var party = req.body;
        partyController.updateParty(partyId, party)
            .then(function(result) {
               res.json({updated: result}); 
            });
    };
    
    // DELETE /api/parties/:id
    var deleteParty = function (req, res) {
        var partyId = req.params.id;
        partyController.deleteParty(partyId)
            .then(function(result) {
               res.json({deleted: result}); 
            });
    };

    return {
        middleware: middleware,
        addParty: addParty,
        getParties: getParties,
        getPartyById: getPartyById,
        updateParty: updateParty,
        deleteParty: deleteParty
    };
};

module.exports = partyApi;