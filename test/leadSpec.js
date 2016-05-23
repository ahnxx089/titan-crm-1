/////////////////////////////////////////////////
// Jasmine spec (test suite) for Lead module.
//
// @file:   leadSpec.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var knex = require('../src/config/knexConfig')().getConfig();
var leadController = require('../src/controllers/leadController')(knex);
var Lead = require('../src/entities/lead');

describe('Lead module', function () {
    it('getLeads returns all leads in system as an array of Lead objects', function (done) {
           leadController.getLeads().then(function(leads) {
               // Get types of returned objects
               var typeofLeads = Object.prototype.toString.call(leads);
               // Check whether the return value is an array
               expect(typeofLeads).toBe('[object Array]');
               // Check whether the first element in returned array is of type Object
               expect(leads[0] instanceof Lead).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });
    it('getLead returns a valid lead entity', function (done) {
           leadController.getLeadById(2).then(function(lead) {
               expect(lead instanceof Lead).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });
});