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
        return knex('quote')
            .returning('quote_id')
            //passing through
            .insert({
                quote_id: quote.quoteId,
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
                created_by_party_id: quote.createdByPartyId,
                created_date: quote.createdDate,
                updated_date: quote.updatedDate
            })
            .then(function () {
                return knex('quote_role')
                    .returning('quote_id')
                    .insert({
                        quote_id: quote.quoteId,
                        party_id: quote.partyId,
                        role_type_id: quote.roleTypeId,
                        created_date: quote.createdDate,
                        updated_date: quote.updatedDate
                    });
            })
            .then(function () {
                return quote;
            });
    };

    /**
     * Add a new item to a quote 
     * @param {Object} quoteItem - quoteItem object to add to a quote
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
     * Add a new option to an item of a quote 
     * @param {Object} quoteItemOption - quoteItemOption object to add to an item of a quote
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var addQuoteItemOption = function (quoteItemOption) {
        return knex('quote_item_option')
            .insert({
                quote_id: quoteItemOption.quoteId,
                quote_item_seq_id: quoteItemOption.quoteItemSeqId,
                quote_item_option_seq_id: quoteItemOption.quoteItemOptionSeqId,
                quantity: quoteItemOption.quantity,
                quote_unit_price: quoteItemOption.quoteUnitPrice,
                created_date: quoteItemOption.createdDate,
                updated_date: quoteItemOption.updatedDate
            }).then(function () {
                return quoteItemOption;
            });
    };

    /**
     * Update a quote in database 
     * @param {Object} quote - Quote entity with update info for existing quote
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

    /**
     * Update a quote item in database
     * @param {Object} quoteItem - QuoteItem entity with update info for existing item of a quote
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuoteItem = function (quoteItem) {
        return knex('quote_item')
            .where({
                quote_id: quoteItem.quoteId
            })
            .andWhere({
                quote_item_seq_id: quoteItem.quoteItemSeqId
            })
            .update({
                product_id: quoteItem.productId,
                quantity: quoteItem.quantity,
                selected_amount: quoteItem.selectedAmount,
                quote_unit_price: quoteItem.quoteUnitPrice,
                estimated_delivery_date: quoteItem.estimatedDeliveryDate,
                comments: quoteItem.comments,
                is_promo: quoteItem.isPromo,
                description: quoteItem.description,
                updated_date: quoteItem.updatedDate
            }).then(function () {
                return quoteItem;
            });
    };

    /**
     * Update a quote item option in database
     * @param {Object} quoteItemOption - QuoteItemOption entity with update for option of item of quote
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuoteItemOption = function (quoteItemOption) {
        return knex('quote_item_option')
            .where({
                quote_id: quoteItemOption.quoteId
            })
            .andWhere({
                quote_item_seq_id: quoteItemOption.quoteItemSeqId
            })
            .andWhere({
                quote_item_option_seq_id: quoteItemOption.quoteItemOptionSeqId
            })
            .update({
                quantity: quoteItemOption.quantity,
                quote_unit_price: quoteItemOption.quoteUnitPrice,
                updated_date: quoteItemOption.updatedDate
            }).then(function () {
                return quoteItemOption;
            });
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
    var getQuotesByOwner = function (userPartyId) {
        //Note by Eric - until I'm told otherwise, I will assume here that the "owner"
        //corresponds to the party id listed in the quote table's created_by_party_id field 
        //(and not the party_id or contact_party_id fields). 

        return knex.select('quote.quote_id', 'quote_type_id', 'quote.party_id', 'issue_date', 'status_id',
                'currency_uom_id', 'sales_channel_enum_id', 'valid_from_date',
                'valid_thru_date', 'quote_name', 'description', 'contact_party_id',
                'created_by_party_id', 'created_date', 'updated_date')
            .from('quote')
            .innerJoin('quote_role', 'quote.quote_id', 'quote_role.quote_id')
            .where('quote.created_by_party_id', userPartyId)
            .andWhere('quote_role.party_id', userPartyId)
            .andWhere('quote_role.role_type_id', 'PERSON_ROLE');

    };
    
    
    // Lucas wrote this. Finished
    /** 
     * Gets all quotes from database by advanced search
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getQuotesByAdvanced = function (quoteId, quoteName, status, account, salesChannel) {

//        var conditionArray = [quoteId, quoteName, status, account, salesChannel];
//        var conditionString = '';
//        conditionString += quoteId.length > 0 ? 'a' : '';
//        conditionString += quoteName.length > 0 ? 'b' : '';
//        conditionString += status.length > 0 ? 'c' : '';
//        conditionString += account.length > 0 ? 'd' : '';
//        conditionString += salesChannel.length > 0 ? 'e' : '';
//        console.log(conditionString);


//        return knex.raw('select * from quote where ' + ' sales_channel_enum_id = "' + salesChannel + '"');
        return knex.from('quote');
        
        /*
        return knex.select()
            .from('quote')
            .whereNot('quote.quote_id',quoteId)
            .andWhere('quote.quote_name', quoteName)
            .andWhere('quote.status_id', status)
            .andWhere('quote.party_id', account)
            .andWhere('quote.sales_channel_enum_id', salesChannel);
        */
    };
    
    
    return {
        addQuote: addQuote,
        addQuoteItem: addQuoteItem,
        addQuoteItemOption: addQuoteItemOption,
        updateQuoteItem: updateQuoteItem,
        updateQuoteItemOption: updateQuoteItemOption,
        addQuoteNote: addQuoteNote,
        getQuoteById: getQuoteById,
        getQuotesByOwner: getQuotesByOwner,
        getQuotesByAdvanced: getQuotesByAdvanced,
        updateQuote: updateQuote
    };
};

module.exports = quoteData;
