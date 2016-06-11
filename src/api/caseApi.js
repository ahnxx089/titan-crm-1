/////////////////////////////////////////////////
// RESTful API module for cases.
//
// @file:   caseApi.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var caseApi = function (knex) {

    // Get a reference to data layer module
    //
    var caseController = require('../controllers/caseController')(knex);

    // API methods
    // ==========================================
    //
    
    // Lucas wrote this
    // POST /api/cases
    var addCase = function (req, res) {
        var case_ = req.body;
        var user = req.user;
//        console.log('in case api A');
        var resultsForThisUser = caseController.addCase(case_, user);
//        console.log('in case api B');
        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to add cases!'
            });
        }
        else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
            res.json(resultsForThisUser);
        }
        // An object in result means it's a promise (which is returned only if validation succeeds)
        else {
            resultsForThisUser.then(function (caseId) {
                res.json(
                    {caseId:caseId}
                );
            });
        }
    };

    // GET /api/cases
    // 
    // Methods:  there are specific methods for getting Cases on this route /api/cases/ 
    //
    // They are handled in this "meta" function called getCases() with IF ELSE IF blocks that 
    // test whether user entered a query string seeking to get Cases by Owner or by Advanced Search
    // (but not getCaseById, which is on a separate route).
    var getCases = function (req, res) {

        // GET /api/cases?owner
        //
        // getCasesByOwner:  The default if no query string for advanced search
        // 
        if (Object.keys(req.query).length === 0) {
            var resultsForThisUser = caseController.getCasesByOwner(req.user);
            if (resultsForThisUser === null) {
                res.json('You do not have permission to get cases!');
            } else {
                resultsForThisUser.then(function (case_) {
                    res.json(case_);
                });
            }
        }

        // GET /api/cases?<MAYBE A QUERY STRING OF SOME KIND TO TRIGGER ADVANCED SEARCH?>
        //
        // getCasesByAdvancedSearch: 
        //
        /* DUK JIN, THE ELSE IF BLOCK IS COMMENTED OUT FOR NOW, ACTIVATE WHEN YOU ARE READY.
            ELSE IF ensures there is only one response to API layer!
            See: http://www.ofssam.com/forums/showthread.php?tid=43 
        */  
        else if ( req.query.hasOwnProperty('subject') || req.query.hasOwnProperty('priority') || req.query.hasOwnProperty('status') || req.query.hasOwnProperty('type')) {
            
            var resultsForUser = caseController.getCasesByAdvanced(req.query, req.user);
            if (resultsForUser === null) {
                res.json({
                    'message': 'You do not have permission about getCasesByAdvanced because of query!'
                });
            } else {
                resultsForUser.then(function (cases) {
                    res.json(cases);
                });
            }
        }
        
        
        
        // If the request did not properly pass any of the various if tests
        // above, it is not a valid query, make the reponse null.
        else {
            res.json(null);
        }
    };

    // GET /api/cases/:id
    var getCaseById = function (req, res) {
        var caseId = req.params.id;
        caseController.getCaseById(caseId, req.user)
            .then(function (case_) {
                if (case_ == 'null') {
                    return res.json('You do not have permission to own a case! No case for you!');
                }
                else {
                    return res.json(case_);
                }
        });
    };

    // PUT /api/cases/:id
    var updateCase = function (req, res) {

    };

    // DELETE /api/cases/:id
    var deleteCase = function (req, res) {

    };

    return {
        addCase: addCase,
        getCases: getCases,
        getCaseById: getCaseById,
        updateCase: updateCase,
        deleteCase: deleteCase
    };
};

module.exports = caseApi;
