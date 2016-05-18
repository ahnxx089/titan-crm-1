/////////////////////////////////////////////////
// Business logic module for contactMechs.
//
// @file:    contactMechController.js
// @authors: Anurag Bhandari <anurag@ofssam.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var Contact = require('../entities/contactMech');

var contactController = function(knex) {
    // Get a reference to data layer module
    //
    var contactMechData = require('../data/contactMechData')(knex);
    
    var add = function() {
        addContactMech(this);
    }
    
    var addContactMech = function (contactMech) {
        
    };

    var getContactMechsByContact = function (contact) {};

    var updateContactMech = function (contactMech) {};
    
    var deleteContactMech = function (contactMech) {};

    return {
        add: add,
        getContactMechs: getContactMechs,
        getContactMechById: getContactMechById,
        addContactMech: addContactMech,
        updateContactMech: updateContactMech,
        deleteContactMech: deleteContactMech
    };
};

module.exports = contactController;