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
var Quote = require('../entities/quote');
var QuoteItem = require('../entities/quoteItem');  // COMMENT IN WHEN READY
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
     * Add a new item to a quote 
     * @param {Object} quoteItem - entity containing existing quote_id to add an Item to
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    /* 
        BASIC FUNCTIONALITY IS WORKING-- This will still need some work, though, since right
        now it relies on the user to:
        (1) provide a valid quoteId for an already existing Quote that was made with addQuote,
            an issue which the UI might take care of since adding an Item to a Quote is only
            possible from the screen for that Quote-- meaning, by the time this functionality 
            is accessed, the proper quote_id will be incoming.
        (2) provide a quoteItemSeqId that does not duplicate an existing Item for this Quote
            already present as a row in table quote_item.  The easiest way for that to be
            ensured is for quote_item.quote_item_seq_id to AUTOINCREMENT, but for some reason
            it is not set up that way in the DB and it will not let met change it, discuss
            this possibility with Anurag.       
    */
    var addQuoteItem = function (quoteItem, user) {
        
        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // proceed towards data layer
            var now = (new Date()).toISOString();

            // QuoteItem entity
            var quoteItemEntity = new QuoteItem(
                quoteItem.quoteId,
                quoteItem.quoteItemSeqId,
                quoteItem.productId,
                quoteItem.quantity,
                quoteItem.selectedAmount,
                quoteItem.quoteUnitPrice,
                quoteItem.estimatedDeliveryDate,
                quoteItem.comments,
                quoteItem.isPromo,
                quoteItem.description,
                now,
                now
            ); 

            // Validate the quoteItem data before going ahead
            var validationErrors = [];
            var quoteItemValidationErrors = quoteItemEntity.validateForInsert();
            //Errors are non-empty validation results
            for (var i = 0; i < quoteItemValidationErrors.length; i++) {
                if (quoteItemValidationErrors[i]) {
                    validationErrors.push(quoteItemValidationErrors[i]);
                }
            }
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                var promise = quoteData.addQuoteItem(quoteItemEntity)
                    .then(function (quoteItemInserted) {
                        return quoteItemInserted;
                    });
                promise.catch(function (error) {
                    winston.error(error);
                });
                return promise;
            } else {
                return validationErrors;
            }
        } else {
            // user does not have permissions to add a quote, return null
            return null;
        }
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
        } else {
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
