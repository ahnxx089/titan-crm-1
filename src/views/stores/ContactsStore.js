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
var addedContactPartyId = ''; // for returning party_id of an added Contact
var contactRetrieved = {};


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

ContactsStore.addPutDataListener = function (listener) {
    this.on('putData', listener);
};

ContactsStore.emitPutData = function() {
    this.emit('putData');  
};


ContactsStore.addedContactListener = function (listener) {
    this.on('addedContact', listener);
};

ContactsStore.emitAddedContact = function() {
    this.emit('addedContact');  
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
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};


ContactsStore.updateContact = function(contactId, contact) {
    var thisContactsStore = this;
    $.ajax({
        type: 'PUT',
        url: '/api/contacts/' + contactId,
        headers: { 
            'x-access-token': Cookies.get('titanAuthToken'),
            'Content-Type': 'application/json'
        },
        success: function(contact) {
            thisContactsStore.emitPutData();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};


ContactsStore.getContactById = function(id) {
    var thisContactsStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/contacts/' + id,
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(contact) {
            console.log(contact);
            contactRetrieved = contact;
            thisContactsStore.emitGetData();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};


ContactsStore.gotContact = function() {
    return contactRetrieved;
};


ContactsStore.getContactsOwned = function() {
    return contactsOwned;
};

// Next two functions are called by CreateContactPage
ContactsStore.addContact = function(contact) {
    var thisContactsStore = this;
    $.ajax({
        type: 'POST',
        url: '/api/contacts/',
        headers: {  'x-access-token': Cookies.get('titanAuthToken') },
        data: contact,
        success: function(partyId) {
            addedContactPartyId = partyId; // contactApi.addContact returns partyId of successfully added Contact
            thisContactsStore.emitAddedContact();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};

ContactsStore.addedContact = function() {
    return addedContactPartyId;
};



// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case ContactsConstants.GET_MY_CONTACTS: {
            ContactsStore.getContactsByOwner();
            break;
        }
        case ContactsConstants.ADD_CONTACT: {
            ContactsStore.addContact(action.data);
            break;
        }
    }
    
});

module.exports = ContactsStore;