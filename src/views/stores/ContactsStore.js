/////////////////////////////////////////////////
// Store for managing Contacts module page events.
//
// @file:   ContactsStore.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var ContactsConstants = require('../constants/ContactsConstants');
var $ = require('jquery');
var Cookies = require('js-cookie');

// DATA
//-----------------------------------------------
var contactsOwned = [];

// STORE as EVENT EMITTER
//-----------------------------------------------
var ContactsStore = new EventEmitter();

// CUSTOM METHODS
//-----------------------------------------------
ContactsStore.addGetDataListener = function (listener) {
    // see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
    this.on('getData', listener);
};

ContactsStore.emitGetData = function() {
    // see https://nodejs.org/api/events.html#events_emitter_emit_eventname_arg1_arg2
    // Synchronously calls each of the listeners registered for the event named 'getData'
    // In previous function addGetDataListener is where listeners such as 
    // MyContactsPage._onGetData registered to get emits from this Store
    this.emit('getData');  
};

// BUSINESS LOGIC
//-----------------------------------------------
ContactsStore.getContactsByOwner = function() {
    var thisContactsStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/contacts/',
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(contacts) {
            contactsOwned = contacts;
            thisContactsStore.emitGetData();
        }
    });
};

ContactsStore.getContactsOwned = function() {
    return contactsOwned;
};

// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case ContactsConstants.GET_MY_CONTACTS: {
            ContactsStore.getContactsByOwner();
            break;
        }
    }
    
});

module.exports = ContactsStore;