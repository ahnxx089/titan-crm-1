/////////////////////////////////////////////////
// Store for managing Leads module page events.
//
// @file:   LeadsStore.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
//var LeadsConstants = require('../constants/LeadsConstants'); // not
var $ = require('jquery');
var Cookies = require('js-cookie');

// DATA
//-----------------------------------------------
var leadsOwned = [];

// STORE as EVENT EMITTER
//-----------------------------------------------
var LeadsStore = new EventEmitter();

// CUSTOM METHODS
//-----------------------------------------------
LeadsStore.addGetDataListener = function (listener) {
    // see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
    this.on('getData', listener);
};

LeadsStore.emitGetData = function() {
    // see https://nodejs.org/api/events.html#events_emitter_emit_eventname_arg1_arg2
    // Synchronously calls each of the listeners registered for the event named 'getData'
    // In previous function addGetDataListener is where listeners such as 
    // MyLeadsPage._onGetData registered to get emits from this Store
    this.emit('getData');  
};

// BUSINESS LOGIC
//-----------------------------------------------
LeadsStore.getLeadsByOwner = function() {
    var thisLeadsStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/leads/',
        headers: { 'x-access-token': Cookies.get('titanAuthToken') },
        success: function(leads) {
            leadsOwned = leads;
            thisLeadsStore.emitGetData();
        }
    });
};

LeadsStore.getLeadsOwned = function() {
    return leadsOwned;
};

// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {

    switch(action.actionType) {
        case LeadsConstants.GET_MY_LEADS: {
//        case 'GET_MY_LEADS': {
            LeadsStore.getLeadsByOwner();
            break;
        }
    }
    
});

module.exports = LeadsStore;