/////////////////////////////////////////////////
// Store for managing Common page events.
// E.g., get currency, state or province, country
//
// @file:   CommonStore.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var CommonConstants = require('../constants/CommonConstants');
var $ = require('jquery');
var Cookies = require('js-cookie');


// DATA
//-----------------------------------------------
var currenciesObjArray = [];


// STORE as EVENT EMITTER
//-----------------------------------------------
var CommonStore = new EventEmitter();


// CUSTOM METHODS
//-----------------------------------------------
CommonStore.addGetAllCurrenciesListener = function (listener) {
    // see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
    this.on('getAllCurrencies', listener);
};

CommonStore.emitGetAllCurrencies = function() {
    // see https://nodejs.org/api/events.html#events_emitter_emit_eventname_arg1_arg2
    // Synchronously calls each of the listeners registered for the event named 'getCurrencies'.
    // In previous function addGetAllCurrenciesListener is where listeners registers to get emits.
    this.emit('getAllCurrencies');  
};


// BUSINESS LOGIC
//-----------------------------------------------
CommonStore.getAllCurrencies = function() {
    var thisCommonStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/common-data?type=uomCurrency',
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(allCurrencies) {
            currenciesObjArray = allCurrencies;
            thisCommonStore.emitGetAllCurrencies();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

CommonStore.getCurrenciesObjArray = function() {
    return currenciesObjArray;
};


// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case CommonConstants.GET_ALL_CURRENCIES: {
            CommonStore.getAllCurrencies();
            break;
        }
    }
    
});

module.exports = CommonStore;