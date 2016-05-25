/////////////////////////////////////////////////
// Jasmine spec (test suite) for Contact module.
//
// @file:   contactSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var knex = require('../src/config/knexConfig')().getConfig();
var contactController = require('../src/controllers/contactController')(knex);
var Contact = require('../src/entities/contact');

describe('Contact module', function () {
    it('getContacts returns all contacts in system as an array of Contact objects', function (done) {
           contactController.getContactsByOwner().then(function(contacts) {
               expect(contacts).toBeTruthy();
               // Get types of returned objects
               var typeofContacts = Object.prototype.toString.call(contacts);
               // Check whether the return value is an array
               expect(typeofContacts).toBe('[object Array]');
               // Check whether the first element in returned array is of type Object
               expect(contacts[0] instanceof Contact).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });
    it('getContactById returns a valid contact entity', function (done) {
           contactController.getContactById(2).then(function(contact) {
               expect(contact).toBeTruthy();
               expect(contact instanceof Contact).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });
});