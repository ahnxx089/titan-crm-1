/////////////////////////////////////////////////
// Store for managing Leads module page events.
//
// @file:   LeadsStore.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var EventEmitter = require('events').EventEmitter;
var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var LeadsConstants = require('../constants/LeadsConstants');
var $ = require('jquery');
var Cookies = require('js-cookie');

// DATA
//-----------------------------------------------
var leadsOwned = [];
var addedLeadId = '';  // ajax call does not return anything. Have to put the value in a variable, then retrieve that variable later
var foundLead = {};


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


LeadsStore.addedLeadListener = function (listener) {
    // .on method, firstArg: eventName, secondArg: listener, both req
    this.on('addedLead', listener);
};

LeadsStore.emitAddedLead = function (listener) {
    // .emit method, firstArg: eventName [req], 
    // consequent args: listeners [opt]
    // Synchronously calls each of the listeners registered for the event named 'addedLead'.
    // Returns true if the event had listeners, false otherwise.
    this.emit('addedLead');
};



// BUSINESS LOGIC
//-----------------------------------------------
// Next two functions are called by MyLeadsPage
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


// Next two functions are called by CreateLeadPage
LeadsStore.addLead = function(lead) {
    var thisLeadsStore = this;
//    console.log('here');
    $.ajax({
        type: 'POST',
        url: '/api/leads/',
        headers: {  'x-access-token': Cookies.get('titanAuthToken') },
        data: lead,
        success: function(partyId) {
//            console.log(partyId);
            addedLeadId = partyId;
            // emit seems to be async as well
            thisLeadsStore.emitAddedLead();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};
LeadsStore.getAddedLead = function() {
//    console.log('in addedLead');
    return addedLeadId;
};


//
// Next two functions are called by FindLeadsPage
LeadsStore.findLeadById = function(passedId) {
    console.log('in store');
    var thisLeadsStore = this;
    $.ajax({
        type: 'GET',
        url: '/api/leads/' + passedId,
        headers: {  'x-access-token': Cookies.get('titanAuthToken') },
        data: passedId,
        success: function(lead) {
            console.log('here 2');
            foundLead = lead;
            console.log(foundLead);
            thisLeadsStore.emitGetData(); //yes
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('an error happened... ');
            if(jqXHR.hasOwnProperty('status')) {
                if(jqXHR.status == '200') {
                    console.log('error is 200. no such lead');
                    return;
                }
            }
//            console.log(jqXHR);
//            console.log(textStatus);
            console.log(errorThrown);
        }
    });
};
LeadsStore.getLeadFound = function() {
    console.log('in retrieving...now used');
    console.log(foundLead);
    return foundLead;
};



// LINK BETWEEN DISPATCHER AND STORE
//-----------------------------------------------
TitanDispatcher.register(function(action) {
    switch(action.actionType) {
        case LeadsConstants.GET_MY_LEADS: {
            LeadsStore.getLeadsByOwner();
            break;
        }
        case LeadsConstants.ADD_LEAD: {
            LeadsStore.addLead(action.data);
            break;
        }
        case LeadsConstants.GET_LEAD_BY_ID: {
            console.log('in case');
            LeadsStore.findLeadById(action.data);
            break;
        }
    }
    
});

module.exports = LeadsStore;