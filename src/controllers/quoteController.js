/////////////////////////////////////////////////
// Business logic module for contacts.
//
// @file:    contactController.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxcomplexity: false */
/* jshint shadow:true */

var winston = require('winston');
var Quote = require('../entities/quotes');
var _ = require('lodash');

var quoteController = function (knex) {
    // Get a reference to data layer module
    //
    var quoteData = require('../data/quoteData')(knex);

    // CONTROLLER METHODS
    // ==========================================
    //

    /**
     * Add a new quote  
     * @param {Object} quote - The new quote to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new contact
     */
    var addQuote = function (quote, user) {

    };

    /**
     * Add a new item to a quote -- DINESH WILL REVISE INPUTS, THIS IS PRELIM THINKING FOR SKELETON
     * @param {Number} quoteId - Unique quote_id of the quote to add an item to
     * @param {Number} quoteItemSeqId - item seq id of the quote_id of the quote to add an item to
     * @param {Object} optionInfo - option to update the item with <-- TAKE AS OBJECT?  NEED ENTITY?
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var addQuoteItem = function (quoteId, quoteItemSeqId, optionInfo, user) {
        
        // IMPLEMENT SECURIY CHECKING ONCE NEW GROUP IS ADDED TO DB
        /*// Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // proceed towards data layer
        }   
        else {
            // user does not have permissions to add a quote, return null
            return null;
        }*/
        
    };

    /**
     * Update a quote in database (equiv to Opentaps' Edit Quote)
     * @param {Number} quoteId - Unique quote_id of the quote to upate
     * @param {Object} item - The object that contains the item to update quote with
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    // ARGUMENT LIST HAS BEEN TEMPORARILY SHORTENED TO JUST user SOLELY TO CONFIRM THE 
    // NEW SECURITY PERMISSION GROUP CRMSFA_QUOTE_TASKS WORKS, DINESH WILL RESTORE THE 
    // OTHER ARGUMENTS SOON...
    var updateQuote = function (user) {
        
        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // TEMPORARILY RETURNING JUST A NONSENSE STRING THAT THE API LAYER WILL NOT
            // DO ANYTHING WITH, FOR NOW JUST TESTING NEW SECURITY GROUP
            return 'Nobody will see this string.';
        }   
        else {
            // user does not have permissions to add a quote, return null
            return null;
        }
    };

    /**
     * Update a quote item in database by adding an option
     * @param {Number} quoteId - Unique quote_id of the quote to add an item to
     * @param {Number} quoteItemSeqId - item seq id of the quote_id of the quote to add an item to
     * @param {Object} optionInfo - option to update the item with <-- TAKE AS OBJECT?  NEED ENTITY?
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuoteItem = function (quoteId, quoteItemSeqId, optionInfo, user) {
        
        // IMPLEMENT SECURIY CHECKING ONCE NEW GROUP IS ADDED TO DB
        /*// Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // proceed towards data layer
        }   
        else {
            // user does not have permissions to add a quote, return null
            return null;
        }*/
        
    };

    /**
     * Add a new quote note
     * @param {Number} quoteId - Unique quote_id of the quote to add a note to
     * @param {String} quoteNote - Note to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is note_id of new note
     */
    var addQuoteNote = function (quoteId, quoteNote, user) {
        
    };

    /**
     * Gets one quote by its id
     * @param {Number} quoteId - Unique id of the quote to be fetched
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is a quote entity
     */
    var getQuoteById = function (quoteId, user) {
        
    };

    /**
     * Gets quotes owned by the user/owner
     * @return {Object} promise - Fulfillment value is an array of quote entities
     */
    var getQuoteByOwner = function (user) {
        
    };

    return {
        addQuote: addQuote,
        addQuoteItem: addQuoteItem,
        updateQuote: updateQuote,
        updateQuoteItem: updateQuoteItem,
        addQuoteNote: addQuoteNote,
        getQuoteById: getQuoteById,
        getQuoteByOwner: getQuoteByOwner,
    };
};

module.exports = quoteController;
