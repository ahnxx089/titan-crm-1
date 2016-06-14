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
    this.on('getData', listener);
}
ContactsStore.emitGetData = function() {
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
            
            // DIAGNOSTICS:  These confirm the API is returning Contact objects as it should...
            //console.log('In ContactsStore.getContactsByOwner ajax call success function, typeof contactsOwned = ', typeof contactsOwned);
            //console.log('In ContactsStore.getContactsByOwner ajax call success function, contactsOwned = ', contactsOwned);
                        
            thisContactsStore.emitGetData();
        }
    });
};

ContactsStore.getContactsOwned = function() {
    //console.log('In ContactsStore.getContactsOwned, contactsOwned = ', contactsOwned);
    return contactsOwned;
};


// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case ContactsConstants.GET_MY_CONTACTS: {
            //console.log('In ContactsStore, in TitanDispatcher.register, about to call ContactsStore.getContactsByOwner');
            ContactsStore.getContactsByOwner();
            break;
        }
    }
    
});

module.exports = ContactsStore;