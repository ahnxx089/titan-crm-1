/////////////////////////////////////////////////
// Store for managing My Contacts page events.
//
// @file:   MyContactsStore.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var MyContactsConstants = require('../constants/MyContactsConstants');
var $ = require('jquery');
var Cookies = require('js-cookie');


// DATA
//-----------------------------------------------
var contactsOwned = [];

// STORE as EVENT EMITTER
//-----------------------------------------------
var MyContactsStore = new EventEmitter();


// CUSTOM METHODS
//-----------------------------------------------
MyContactsStore.emitChange = function() {
    //console.log('In MyContactsStore emitChange...');
    this.emit('change');  
};


// BUSINESS LOGIC
//-----------------------------------------------
MyContactsStore.getContactsByOwner = function() {
    var thisMyContactsStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/contacts/',
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(contacts) {
            
            contactsOwned = contacts;
            
            // DIAGNOSTICS:  These confirm the API is returning Contact objects as it should...
            //console.log('In MyContactsStore.getContactsByOwner ajax call success function, typeof contactsOwned = ', typeof contactsOwned);
            //console.log('In MyContactsStore.getContactsByOwner ajax call success function, contactsOwned = ', contactsOwned);
                        
            thisMyContactsStore.emitChange();
        }
    });
};

MyContactsStore.getContactsOwned = function() {
    //console.log('In MyContactsStore.getContactsOwned, contactsOwned = ', contactsOwned);
    return contactsOwned;
};


// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case MyContactsConstants.MY_CONTACTS: {
            //console.log('In MyContactsStore, in TitanDispatcher.register, about to call MyContactsStore.getContactsByOwner');
            MyContactsStore.getContactsByOwner();
            break;
        }
    }
    
});

module.exports = MyContactsStore;