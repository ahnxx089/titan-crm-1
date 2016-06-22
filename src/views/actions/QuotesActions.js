/////////////////////////////////////////////////
// All actions for Quotes module pages.
//
// @file:   QuotesActions.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var QuotesConstants = require('../constants/QuotesConstants');

var QuotesActions = {
    
    getQuotesByOwner: function() {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.GET_MY_QUOTES
        });
    },
    addQuote: function(quote) {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.ADD_QUOTE,
            data: quote
        });
    },
    addQuoteItem: function(quoteItem) {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.ADD_QUOTE_ITEM,
            data: quoteItem
        });
    },
    addQuoteItemOption: function(quoteItemOption) {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.ADD_QUOTE_ITEM_OPTION,
            data: quoteItemOption
        });
    },
    getQuoteById: function(partyId) {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.GET_QUOTE_BY_ID,
            data: partyId
        });
    },
    getQuotesByIdentity: function(identity) {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.GET_QUOTES_BY_IDENTITY,
            data: identity
        });
    },
    updateQuote: function(quoteId, quote) {
        TitanDispatcher.dispatch({
            actionType: QuotesConstants.UPDATE_QUOTE,
            data: {
                quoteId: quoteId,
                quote: quote
            }
        });
    }
    
};

module.exports = QuotesActions;