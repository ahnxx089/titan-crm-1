/////////////////////////////////////////////////
// Data access layer module for quotes.
//
// @file:    quoteData.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxlen:1000 */
/* jshint shadow:true */

var quoteData = function (knex) {

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
     * @param {Object} quoteItem - quoteItem object
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var addQuoteItem = function (quoteItem) {
        return knex('quote_item')
            .insert({
                quote_id: quoteItem.quoteId,
                quote_item_seq_id: quoteItem.quoteItemSeqId,
                product_id: quoteItem.productId,
                quantity: quoteItem.quantity,
                selected_amount: quoteItem.selectedAmount,
                quote_unit_price: quoteItem.quoteUnitPrice,
                estimated_delivery_date: quoteItem.estimatedDeliveryDate,
                comments: quoteItem.comments,
                is_promo: quoteItem.isPromo,
                description: quoteItem.description,
                created_date: quoteItem.createdDate,
                updated_date: quoteItem.updatedDate
            }).then(function () {
                return quoteItem;
            });
    };

    /**
     * Update a quote in database by adding an item
     * @param {Number} quoteId - Unique quote_id of the quote to add an item to
     * @param {Object} item - The object that contains the item to update quote with
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuote = function (quoteId, item) {

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
     * Update a quote item in database by adding an option
     * @param {Number} quoteId - Unique quote_id of the quote to add an item to
     * @param {Number} quoteItemSeqId - item seq id of the quote_id of the quote to add an item to
     * @param {Object} optionInfo - option to update the item with <-- TAKE AS OBJECT?  NEED ENTITY?
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuoteItem = function (quoteId, quoteItemSeqId, optionInfo) {

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
     * @return {Object} promise - Fulfillment value is note_id of new note
     */
    var addQuoteNote = function (quoteId, quoteNote) {

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

module.exports = quoteData;
