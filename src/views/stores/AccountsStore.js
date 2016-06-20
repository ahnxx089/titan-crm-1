/////////////////////////////////////////////////
// Store for managing Accounts module page events.
//
// @file:   AccountsStore.js
// @author: DukJin Ahn <ahnxx089@gmail.com>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var AccountsConstants = require('../constants/AccountsConstants');
var $ = require('jquery');
var Cookies = require('js-cookie');

// DATA
//-----------------------------------------------
var accountsOwned = [];

// STORE as EVENT EMITTER
//-----------------------------------------------
var AccountsStore = new EventEmitter();

// CUSTOM METHODS
//-----------------------------------------------
AccountsStore.addGetDataListener = function (listener) {
    // see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
    this.on('getData', listener);
};

AccountsStore.emitGetData = function() {
    // see https://nodejs.org/api/events.html#events_emitter_emit_eventname_arg1_arg2
    // Synchronously calls each of the listeners registered for the event named 'getData'
    // In previous function addGetDataListener is where listeners such as 
    // ._onGetData registered to get emits from this Store
    this.emit('getData');
};

// nothing added here. Will need something for re-rendering. 


// BUSINESS LOGIC
//-----------------------------------------------
AccountsStore.getAccountsByOwner = function() {
    var thisAccountsStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/accounts/',
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(accounts) {
            accountsOwned = accounts;
            thisAccountsStore.emitGetData();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

AccountsStore.getAccountsOwned = function() {
    return accountsOwned;
};


// Next function is called by CreateAccountPage
AccountsStore.addAccounts = function(account) {
    var thisAccountsStore = this;
    console.log('here');
    $.ajax({
        type: 'POST',
        url: '/api/accounts/',
        headers: {  'x-access-token': Cookies.get('titanAuthToken') },
        data: account,
        success: function(partyId) {
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};


// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {
    
    switch(action.actionType) {
        case AccountsConstants.GET_MY_ACCOUNTS: {
            AccountsStore.getAccountsByOwner();
            break;
        }
        case AccountsConstants.ADD_ACCOUNT: {
            AccountsStore.addAccounts(action.data);
            break;
        }
    }
    
});

module.exports = AccountsStore;