/////////////////////////////////////////////////
// RESTful API module for quotes.
//
// @file:    quoteApi.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */
/* jshint maxcomplexity:false */

var quoteApi = function (knex) {
    // Get a reference to data layer module
    //
    var quoteController = require('../controllers/quoteController')(knex);

    // API methods
    // ==========================================
    //
    // POST /api/quotes
    // 
    // Methods:  addQuote, addQuoteItem, addQuoteItemOption, addQuoteNote
    //
    var addQuote = function (req, res) {

        // POST /api/quotes
        // 
        // addQuote:  the default if no property for adding a note
        if (Object.keys(req.query).length === 0) {

            var quote = req.body;
            var user = req.user;
            var resultsForThisUser = quoteController.addQuote(quote, user);

            if (resultsForThisUser == null) {
                res.json({
                    message: 'You do not have permission to add quote!'
                });
            } else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
                res.json(resultsForThisUser);
            }
            // An object in result means it's a promise (which is returned only if validation succeeds)
            else {
                resultsForThisUser.then(function (quoteId) {
                    res.json({
                        quoteId: quoteId
                    });
                });
            }

        }

        // POST /api/quotes?item
        // 
        // addQuoteItem
        else if (req.query.hasOwnProperty('item')) {

            var resultsForThisUser = quoteController.addQuoteItem(req.body, req.user);

            /* Intepret the possible outcomes from the controller layer:
                1.  User does not have permission to add a Quote (thus nor an Item)
                2.  User does have permission, but supplied data is not validated
                3.  User does have permission, and a promise is returned
            */
            // null result means user does not have permission to add an Item to a Quote
            if (resultsForThisUser === null) {
                res.json({
                    message: 'You do not have permission to POST to this route!'
                });
            }
            // An array in result means it's array of validation errors
            else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
                res.json(resultsForThisUser);
            }
            // An object in result means it's a promise (returned only if validation succeeds)
            else {
                resultsForThisUser.then(function (quoteItemInserted) {
                    res.json({
                        quoteItemInserted: quoteItemInserted
                    });
                });
            }
        }

        // POST /api/quotes?itemOption
        // 
        // addQuoteItemOption
        else if (req.query.hasOwnProperty('itemOption')) {
            
            var resultsForThisUser = quoteController.addQuoteItemOption(req.body, req.user);

            /* Intepret the possible outcomes from the controller layer:
                1.  User does not have permission to add a Quote (thus nor an Item Option)
                2.  User does have permission, but supplied data is not validated
                3.  User does have permission, and a promise is returned
            */
            // null result means user does not have permission to add an Item to a Quote
            if (resultsForThisUser === null) {
                res.json({
                    message: 'You do not have permission to POST to this route!'
                });
            }
            // An array in result means it's array of validation errors
            else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
                res.json(resultsForThisUser);
            }
            // An object in result means it's a promise (returned only if validation succeeds)
            else {
                resultsForThisUser.then(function (quoteItemOptionInserted) {
                    res.json({
                        quoteItemOptionInserted: quoteItemOptionInserted
                    });
                });
            }
        }

        // POST /api/quotes?note
        // 
        // addQuoteNote 
        else if (req.query.hasOwnProperty('note')) {

            // NEXT FOUR LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
            res.json({
                'message': 'addQuoteNote functionality is under construction...',
                'reachedOn': 'This was reached on POST route /api/quotes?note'
            });
        }

        // no other POST routes, return error message so the app does not hang
        else {
            res.json({
                'message': 'ERROR:  No such route to POST to...',
            });
        }
    };

    // PUT /api/quotes
    // 
    // Methods:  updateQuoteItem, updateQuoteItemOption
    //
    var updateQuoteItem = function (req, res) {
        
        // PUT /api/quotes
        // 
        // updateQuoteItem:  the default if no property for updating a quote Item Option          
        if(Object.keys(req.query).length === 0) {
            
            var resultsForThisUser = quoteController.updateQuoteItem(req.body, req.user);

            /* Intepret the possible outcomes from the controller layer:
                1.  User does not have permission to add a Quote
                2.  User does have permission, but supplied data is not validated
                3.  User does have permission, and a promise is returned
            */
            // null result means user does not have permission to add an Item to a Quote
            if (resultsForThisUser === null) {
                res.json({
                    message: 'You do not have permission to PUT to this route!'
                });
            }
            // An array in result means it's array of validation errors
            else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
                res.json(resultsForThisUser);
            }
            // An object in result means it's a promise (returned only if validation succeeds)
            else {
                resultsForThisUser.then(function (quoteItemInserted) {
                    res.json({
                        quoteItemInserted: quoteItemInserted
                    });
                });
            }
        }
        
        // PUT /api/quotes?itemOption
        // 
        // updateQuoteItemOption
        else if (req.query.hasOwnProperty('itemOption')) {
            // NEXT FOUR LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
            res.json({
                'message': 'updateQuoteItemOption functionality is under construction...',
                'reachedOn': 'This was reached on PUT route /api/quotes?itemOption'
            });
        }
        
        // no other PUT routes, return error message so the app does not hang
        else {
            res.json({
                'message': 'ERROR:  No such route to PUT to...',
            });
        }
    };

    // GET /api/quotes
    // 
    // Methods:  getQuotesByOwner, findQuotes
    //
    var getQuotes = function (req, res) {

        // GET /api/quotes
        // 
        // getQuotesByOwner:  The default if req has no property for findQuotes by SOME_PROPERTY
        //
        if (Object.keys(req.query).length === 0) {

            var resultsForThisUser = quoteController.getQuotesByOwner(req.user);
            // IF ELSE block interprets controller returning an object or null
            if (resultsForThisUser === null) {
                res.json({
                    'message': 'You do not have permission to own quotes!'
                });
            } else {
                resultsForThisUser.then(function (quotes) {
                    res.json(quotes);
                });
            }
        }
        // GET /api/quotes?SOME_PROPERTY
        // 
        // findQuotes
        else if (req.query.hasOwnProperty('SOME_PROPERTY')) {

            // NEXT FOUR LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
            res.json({
                'message': 'findQuotes functionality is under construction...',
                'reachedOn': 'This was reached on GET route /api/quotes?SOME_PROPERTY'
            });
        }

        // no other GET routes, return error message so the app does not hang
        else {
            res.json({
                'message': 'ERROR:  No such route to GET from...',
            });
        }
    };

    // GET /api/quotes/:id
    var getQuoteById = function (req, res) {

        // NEXT THREE LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
        res.json({
            'message': 'getQuotesById functionality is under construction...'
        });
    };

    // PUT /api/quotes/:id
    var updateQuote = function (req, res) {

        /* TEMPORARY NOTE FOR PRE-UI TESTING -- PAYLOAD REQUIRED:
            The UI will ultimately use getQuoteById to populate a payload with all columns
            of the quote you are about to update with this function.  For hand-testing with
            ARC and the unit tests, for now the db holds at least one manually created
            quote for this to be tested on.  To test you must pass in a payload that has all of
            the existing values you don't want to wipe out, and the new values for what you
            are updating.  Since this is an update, of course you cannot try and change
            quote_id or created_date.  Here is a sample payload with values that will validate:
                {
                    "quoteTypeId": "PRODUCT_QUOTE",
                    "issueDate": "2016-06-03 02:07:00",
                    "statusId": "QUOTE_REJECTED",
                    "salesChannelEnumId":  "IND_GEN_SERVICES"
                }
        */
        
        var quoteId = req.params.id; // read from the URL, not the payload
        var quote = req.body;
        var resultsForThisUser = quoteController.updateQuote(quoteId, quote, req.user);

        /* Intepret the possible outcomes from the controller layer:
            1.  User does not have permission to add a Quote
            2.  User does have permission, but supplied data is not validated
            3.  User does have permission, and a promise is returned
        */
        // null result means user does not have permission to update a Quote
        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to PUT to this route!'
            });
        }
        // An array in result means it's array of validation errors
        else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
            res.json(resultsForThisUser);
        }
        // An object in result means it's a promise (returned only if validation succeeds)
        else {
            resultsForThisUser.then(function (quoteUpdated) {
                res.json({
                    quoteUpdated: quoteUpdated
                });
            });
        }
    };

    return {
        addQuote: addQuote,
        updateQuoteItem: updateQuoteItem,
        getQuotes: getQuotes,
        getQuoteById: getQuoteById,
        updateQuote: updateQuote
    };
};

module.exports = quoteApi;
