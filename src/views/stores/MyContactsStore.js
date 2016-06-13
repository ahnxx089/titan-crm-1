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


// STORE as EVENT EMITTER
//-----------------------------------------------
var MyContactsStore = new EventEmitter();


// CUSTOM METHODS
//-----------------------------------------------
MyContactsStore.emitChange = function() {
    this.emit('change');  
};

MyContactsStore.addChangeListener = function(listener) {
    this.on('change', listener);
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
            // Diagnostic:  This confirms the API is returning Contact objects as it should...
            console.log('In MyContactsStore.getContactsByOwner success function, typeof contactsOwned = ', typeof contactsOwned);
            console.log('In MyContactsStore.getContactsByOwner success function, contactsOwned = ', contactsOwned);
                        
            thisMyContactsStore.emitChange();
        }
    });
};


// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case MyContactsConstants.MY_CONTACTS: {
            MyContactsStore.getContactsByOwner();
            break;
        }
    }
    
});

module.exports = MyContactsStore;