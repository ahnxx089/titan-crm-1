/////////////////////////////////////////////////
// RESTful API module for contacts.
//
// @file:    caseApi.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var caseApi = function (knex) {

    // Get a reference to data layer module
    //
    var caseController = require('../controllers/caseController')(knex);

    // MIDDLEWARE IS DEACTIVATED FOR NOW...
    // Set up middleware to validate incoming requests
    //
    var middleware = function (req, res, next) {
        next();
    };

    // API methods
    // ==========================================
    //
    // POST /api/cases
    var addCase = function (req, res) {

    };

    // GET /api/contacts
    // 
    // Methods:  there are specific methods for getting Cases on this route /api/cases/ 
    //
    // They are handled in this "meta" function called getCases() with IF ELSE IF blocks that 
    // test whether user entered a query string seeking to get Cases by Owner or by Advanced Search
    // (but not getCaseById, which is on a separate route).
    var getCases = function (req, res) {

        // GET /api/cases?owner
        //
        // getCasesByOwner:  an IF block triggers it if a query by owner has been made
        // 
        if (req.query.hasOwnProperty('owner')) {

            //var ownerId = req.user.partyId;
            //var userSecurityPerm = req.user.securityPermissions;
            //var resultsForThisUser = caseController.getCasesByOwner(ownerId, userSecurityPerm);
            
            var user = req.user; // pass along the User object to the controller 
            var resultsForThisUser = caseController.getCasesByOwner(user);

            if (resultsForThisUser === null) {
                res.json('You do not have permission to own contacts!');
            } else {
                resultsForThisUser.then(function (case_) {
                    res.json(case_);
                });
            }
        }

        // GET /api/contacts?<MAYBE A QUERY STRING OF SOME KIND TO TRIGGER ADVANCED SEARCH?>
        //
        // getContactsByAdvancedSearch: 
        //
        /* DUK JIN, THE ELSE IF BLOCK IS COMMENTED OUT FOR NOW, ACTIVATE WHEN YOU ARE READY.
            ELSE IF ensures there is only one response to API layer!
            See: http://www.ofssam.com/forums/showthread.php?tid=43 
            
        else if (  ) {
            
        }
        */
        
        // If the request did not properly pass any of the various if tests
        // above, it is not a valid query, make the reponse null.
        else {
            res.json(null);
        }
    };

    // GET /api/cases/:id
    var getCaseById = function (req, res) {

    };

    // PUT /api/cases/:id
    var updateCase = function (req, res) {

    };

    // DELETE /api/cases/:id
    var deleteCase = function (req, res) {

    };

    return {
        middleware: middleware,
        addCase: addCase,
        getCases: getCases,
        getCaseById: getCaseById,
        updateCase: updateCase,
        deleteCase: deleteCase
    };
};

module.exports = caseApi;
