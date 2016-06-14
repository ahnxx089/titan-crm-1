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
            // An object in result means it's a promise (returned only if validation succeeds).
            // The object holds a RowDataPacket.  A RowDataPacket is an object holding one
            // key-value pair.  The key is called 'count(*)'.  The value is the count of the 
            // number of rows inserted to the quote_item table.
            else {
                resultsForThisUser.then(function (numRowsInserted) {
                    res.json({
                        numRowsInserted: numRowsInserted
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
        
        // PUT /api/quotes?item
        // 
        // updateQuoteItem          
        if(req.query.hasOwnProperty('item')) {
            
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
                resultsForThisUser.then(function (quoteItemUpdated) {
                    res.json({
                        quoteItemUpdated: quoteItemUpdated
                    });
                });
            }
        }
        
        // PUT /api/quotes?itemOption
        // 
        // updateQuoteItemOption
        else if (req.query.hasOwnProperty('itemOption')) {
            
            var resultsForThisUser = quoteController.updateQuoteItemOption(req.body, req.user);

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
                resultsForThisUser.then(function (quoteItemOptionUpdated) {
                    res.json({
                        quoteItemOptionUpdated: quoteItemOptionUpdated
                    });
                });
            }
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
//                console.log('first get quotes');
                res.json({
                    'message': 'You do not have permission to own quotes!'
                });
            } else {
                resultsForThisUser.then(function (quotes) {
                    res.json(quotes);
                });
            }
        }
        // Lucas is taking this part
        // GET /api/quotes?SOME_PROPERTY
        // 
        // findQuotes, aka Advanced Search
        // quoteId here will ONLY be used the route /api/quotes?SOME_PROPERTY is chosen.
        // This is not going to interfere with Bill's work
        else if (req.query.hasOwnProperty('quoteId') || req.query.hasOwnProperty('quoteName') ||  req.query.hasOwnProperty('status') || req.query.hasOwnProperty('account') || req.query.hasOwnProperty('salesChannel')) {
//            console.log('second get quotes');

            var resultsForUser = quoteController.getQuotesByAdvanced(req.query, req.user);
            
            if (resultsForUser === null) {
                res.json({
                    'message': 'You do not have permission to Get Quotes By Advanced Search using the supplied query!'
                });
            } else {
                resultsForUser.then(function (quotes) {
                    res.json(quotes);
                });
            }
        }

        // no other GET routes, return error message so the app does not hang
        else {
            res.json({
                'message': 'ERROR:  No such route to GET from...',
            });
        }
    };

    // Bill is taking this
    // GET /api/quotes/:id
    var getQuoteById = function (req, res) {

        // NEXT THREE LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
        res.json({
            'message': 'getQuotesById functionality is under construction...'
        });
    };

    // PUT /api/quotes/:id
    var updateQuote = function (req, res) {
        
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
