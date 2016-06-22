/////////////////////////////////////////////////
// Store for managing Quotes module page events.
//
// @file:   QuotesStore.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var QuotesConstants = require('../constants/QuotesConstants');
var $ = require('jquery');
var Cookies = require('js-cookie');
var validation = require('../../common/validation')();


// DATA
//-----------------------------------------------
var quotesOwned = [];
var addedQuoteId = '';   // for returning quote_id of an added Quote
var quoteRetrieved = {};


// STORE as EVENT EMITTER
//-----------------------------------------------
var QuotesStore = new EventEmitter();


// CUSTOM METHODS
//-----------------------------------------------
/* Next 2 functions:  for Views receiving emits after getQuotesByOwner */
QuotesStore.addGetDataListener = function (listener) {
    // see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
    this.on('getData', listener);
};

QuotesStore.emitGetData = function() {
    // see https://nodejs.org/api/events.html#events_emitter_emit_eventname_arg1_arg2
    // Synchronously calls each of the listeners registered for the event named 'getData'
    // In previous function addGetDataListener is where listeners such as 
    // MyQuotesPage._onGetData registered to get emits from this Store
    this.emit('getData');  
};

QuotesStore.addPutDataListener = function (listener) {
    this.on('putData', listener);
};

QuotesStore.emitPutData = function() {
    this.emit('putData');  
};

/* Next 2 functions:  for Views receiving emits after addQuote */
QuotesStore.addedQuoteListener = function (listener) {
    this.on('addedQuote', listener);
};

QuotesStore.emitAddedQuote = function() {
    this.emit('addedQuote');  
};


// BUSINESS LOGIC
//-----------------------------------------------
//
// Next two functions are called by MyQuotesPage
QuotesStore.getQuotesByOwner = function() {
    var thisQuotesStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/quotes/',
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(quotes) {
            quotesOwned = quotes;
            thisQuotesStore.emitGetData();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

QuotesStore.getQuotesOwned = function() {
    return quotesOwned;
};

QuotesStore.updateQuote = function(quoteId, quote) {
    var thisQuotesStore = this;
    $.ajax({
        type: 'PUT',
        url: '/api/quotes/' + quoteId,
        headers: { 
            'x-access-token': Cookies.get('titanAuthToken')
        },
        data: quote,
        success: function(rows) {
            thisQuotesStore.emitPutData();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

QuotesStore.getQuoteById = function(id) {
    var thisQuotesStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/quotes/' + id,
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(quote) {
            quoteRetrieved = quote;
            thisQuotesStore.emitGetData();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

QuotesStore.gotQuote = function() {
    return quoteRetrieved;
};

// Next two functions are called by CreateQuotePage
QuotesStore.addQuote = function(quote) {
    var thisQuotesStore = this;
    $.ajax({
        type: 'POST',
        url: '/api/quotes/',
        headers: {  'x-access-token': Cookies.get('titanAuthToken') },
        data: quote,
        success: function(quoteId) {
            addedQuoteId = quoteId; // quoteApi.addQuote returns quote_id of successfully added Quote
            thisQuotesStore.emitAddedQuote();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

QuotesStore.addedQuote = function() {
    return addedQuoteId;
};


// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case QuotesConstants.GET_MY_QUOTES: {
            QuotesStore.getQuotesByOwner();
            break;
        }
        case QuotesConstants.ADD_QUOTE: {
            QuotesStore.addQuote(action.data);
            break;
        }
        case QuotesConstants.GET_QUOTE_BY_ID: {
            QuotesStore.getQuoteById(action.data);
            break;
        }
        case QuotesConstants.UPDATE_QUOTE: {
            QuotesStore.updateQuote(action.data.quoteId, action.data.quote);
            break;
        }
    }
    
});

module.exports = QuotesStore;