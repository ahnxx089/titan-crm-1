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
     * Update a quote item in database by adding an option
     * @param {Number} quoteId - Unique quote_id of the quote to add an item to
     * @param {Number} quoteItemSeqId - item seq id of the quote_id of the quote to add an item to
     * @param {Object} optionInfo - option to update the item with <-- TAKE AS OBJECT?  NEED ENTITY?
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuoteItem = function (quoteId, quoteItemSeqId, optionInfo) {

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
    var getQuotesByOwner = function (user) {

    };
    
    /**
     * Update a quote in database 
     * @param {Object} quote - quote object to be updated
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuote = function (quote) {

        return knex('quote')
            .where({
                quote_id: quote.quoteId
            })
            .update({
                quote_type_id: quote.quoteTypeId,
                party_id: quote.partyId,
                issue_date: quote.issueDate,
                status_id: quote.statusId,
                currency_uom_id: quote.currencyUomId,
                sales_channel_enum_id: quote.salesChannelEnumId,
                valid_from_date: quote.validFromDate,
                valid_thru_date: quote.validThruDate,
                quote_name: quote.quoteName,
                description: quote.description,
                contact_party_id: quote.contactPartyId,
                updated_date: quote.updatedDate
            }).then(function () {
                return quote;
            });
    };

    return {
        addQuote: addQuote,
        addQuoteItem: addQuoteItem,
        updateQuoteItem: updateQuoteItem,
        addQuoteNote: addQuoteNote,
        getQuoteById: getQuoteById,
        getQuotesByOwner: getQuotesByOwner,
        updateQuote: updateQuote
    };
};

module.exports = quoteData;
