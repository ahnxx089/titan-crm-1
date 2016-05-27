/////////////////////////////////////////////////
// Jasmine spec (test suite) for Contact module.
//
// @file:   contactSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////


var knex = require('../src/config/knexConfig')().getConfig();
var contactController = require('../src/controllers/contactController')(knex);
var Contact = require('../src/entities/contact');

describe('Contact module ', function () {

    //NOT WORKING YET:   UNIT TEST(S) FOR getContactsByOwner

    // Dinesh's contactController.getContactsByOwner using ownership of a Contact
    // in his local database; has been commented out after confirming it works
    // since central repo database won't have this exact relationship
    xit('contactController.getContactsByOwner allows user with permission to own Contact(s) to view the partyId(s)', function(){
        var ownerId = 3;    // a party with permission to own Contacts (and therefore retrieve his)
        var userSecurityPerm = [ 'FULLADMIN' ];
        contactController.getContactsByOwner(ownerId, userSecurityPerm)
        .then(function(contacts){
                expect(typeof contacts === 'object').toBeTruthy();

                // Call done to finish the async function
                done();            
        });
    })


    // TO BE ELIMIMATED IN FAVOR OF ABOVE
    xit('getContacts returns all contacts in system as an array of Contact objects', function (done) {
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
    

    xit('getContactById returns a valid contact entity', function (done) {
           contactController.getContactById(2).then(function(contact) {
               expect(contact).toBeTruthy();
               expect(contact instanceof Contact).toBeTruthy();
               // Call done to finish the async function
               done();
           });
    });

});
