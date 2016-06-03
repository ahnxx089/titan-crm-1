/////////////////////////////////////////////////
// RESTful API module for quotes.
//
// @file:    quoteApi.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */

var quoteApi = function (knex) {
    // Get a reference to data layer module
    //
    var quoteController = require('../controllers/quoteController')(knex);

    // API methods
    // ==========================================
    //
    // POST /api/quotes
    // 
    // Methods:  addQuote, addQuoteItem, addQuoteNote
    //
    var addQuote = function (req, res) {

        // POST /api/quotes
        // 
        // addQuote:  the default if no property for adding a note
        var quote = req.body;
        var user = req.user;
        var resultsForThisUser = quoteController.addQuote(quote,user);
        
        if( resultsForThisUser == null){
            res.json({
                message: 'You do not have permission to add quote!'
            });
        }
        else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
            res.json(resultsForThisUser);
        }
        // An object in result means it's a promise (which is returned only if validation succeeds)
        else {
            resultsForThisUser.then(function (quoteId) {
                res.json(
                    {quoteId:quoteId}
                );
            });
        }
    };
        /*
        if (Object.keys(req.query).length === 0) {

            // NEXT FOUR LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
            res.json({
                'message': 'addQuote functionality is under construction...',
                'reachedOn': 'This was reached on POST route /api/quotes'
            });
        }*/

        // POST /api/quotes?item
        // 
        // addQuoteItem
<<<<<<< HEAD
        /*else if (req.query.hasOwnProperty('item')) {
=======
        else if (req.query.hasOwnProperty('item')) {
            
            /* TEMPORARY NOTE FOR PRE-UI TESTING -- PAYLOAD CONSTRAINTS:
                The UI will ulimately be designed to more naturally take care of two preliminary requirements for adding an Item to a Quote:
                    (1) a valid quote_id must be supplied to this functionality, so this does function 
                        does not need to somehow first check and make sure this quote actually exists in the db before trying to add an item to it.
                    (2) the quote_item_seq_id must not duplicate one in the table already, which
                        will cause an error; the UI will handle what quote_item_seq_id even makes
                        it here in the first place.
                Here's a sample payload that works-- MANUALLY INCREMENT quoteItemSeqId if using more
                than once!
                {
                    "quoteId": "2",
                    "quoteItemSeqId": "1",
                    "productId": "testProd2",
                    "quantity": "5",
                    "selectedAmount": "12",
                    "quoteUnitPrice": "45.00",
                    "estimatedDeliveryDate": "",
                    "comments": "test addQuoteItem",
                    "isPromo": "",
                    "description": "test addQuoteItem"
                }   
            */
>>>>>>> 353462eee9600062e201216aa765e07dafa935e3

            var resultsForThisUser = quoteController.addQuoteItem(req.body, req.user);

            /* Intepret the possible outcomes from the controller layer:
                1.  User does not have permission to add a Quote
                2.  User does have permission, but supplied data is not validated
                3.  User does have permission, and a promise is returned
            */
            // null result means user does not have permission to add an Item to a Quote
            /*if (resultsForThisUser === null) {
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
        }*/

        // POST /api/quotes?note
        // 
        // addQuoteNote 
        /*else if (req.query.hasOwnProperty('note')) {

            // NEXT FOUR LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
            res.json({
                'message': 'addQuoteNote functionality is under construction...',
                'reachedOn': 'This was reached on POST route /api/quotes?note'
            });
        }*/

        // no other POST routes, return error message so the app does not hang
        /*else {
            res.json({
                'message': 'ERROR:  No such route to POST to...',
            });
        }
    };*/

    // PUT /api/quotes
    // 
    // Method:  updateQuoteItem
    //
    var updateQuoteItem = function (req, res) {

        // NEXT FOUR LINES ARE PURELY PLACEHOLDER, REPLACE WITH YOUR CODE
        res.json({
            'message': 'updateQuoteItem functionality is under construction...',
            'reachedOn': 'This was reached on PUT route /api/quotes?item'
        });
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

        /* TEMPORARY NOTE FOR PRE-UI TESTING -- MINIMUM PAYLOAD REQUIRED:
            The UI will ultimately use getQuoteById to populate a payload with all columns
            of the quote you are about to update with this function.  For hand-testing with
            ARC and the unit tests, for now you need to provide at least these minimum
            properties (and validate-able values) in the payload (fill with your own
            acceptable values, these are just one example)
                {
                    "quoteTypeId": "PRODUCT_QUOTE",
                    "issueDate": "2016-06-03 02:07:00",
                    "statusId": "QUOTE_REJECTED",
                    "salesChannelEnumId":  "IND_GEN_SERVICES"
                }
        */
        
        var quoteId = req.params.id;
        var quote = req.body;
        var resultsForThisUser = quoteController.updateQuote(quoteId, quote, req.user);
        
        console.log('typeof resultsForThisUser is ', typeof resultsForThisUser);
        
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
