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
    // Methods:  addQuote, addQuoteNote
    //
    var addQuote = function (req, res) {

        // addQuote:  the default if no property for adding a note
        if (Object.keys(req.query).length === 0) {

            // TEMPORARY RESPONSE, REPLACE WITH WORKING CODE
            res.json({
                'message': 'addQuote functionality is under construction...'
            });
        }

        // addQuoteNote
        else if (req.query.hasOwnProperty('note')) {
            res.json({
                'message': 'addQuoteNote functionality is under construction...'
            });
        }
    };

    // PUT /api/quotes/
    // 
    // Methods:  updateQuote, updateQuoteItem
    //
    var updateQuote = function (req, res) {

        // updateQuote:  the default if no property for updating an item
        if (Object.keys(req.query).length === 0) {
            res.json({
                'message': 'updateQuote functionality is under construction...'
            });
        }

        // updateQuoteItem
        else if (req.query.hasOwnProperty('item')) {
            res.json({
                'message': 'updateQuoteItem functionality is under construction...'
            });
        }
    };

    // GET /api/quotes
    // 
    // Methods:  getQuotesByOwner, findQuotes
    //
    var getQuotes = function (req, res) {

        // getQuotesByOwner:  The default if no query strings for findQuotes by DUMMY_FIELD_NAME
        //
        if (Object.keys(req.query).length === 0) {
            res.json({
                'message': 'getQuotesByOwner functionality is under construction...'
            });
        }

        // findQuotes
        else if (req.query.hasOwnProperty('DUMMY_FIELD_NAME')) {
            res.json({
                'message': 'findQuotes functionality is under construction...'
            });
        }
    };

    // GET /api/quotes/:id
    var getQuoteById = function (req, res) {
        res.json({
            'message': 'getQuotesById functionality is under construction...'
        });
    };

    return {
        addQuote: addQuote,
        updateQuote: updateQuote,
        getQuotes: getQuotes,
        getQuoteById: getQuoteById
    };
};

module.exports = quoteApi;
