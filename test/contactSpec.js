/////////////////////////////////////////////////
// Jasmine spec (test suite) for Contact module.
//
// @file:   contactSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */
/* jshint jasmine:true */

var knex = require('../src/config/knexConfig')().getConfig();
var contactController = require('../src/controllers/contactController')(knex);
var Contact = require('../src/entities/contact');

describe('Contact module ', function () {

    // Test of addContact where a user has security permission to add a contact
    it('contactController.addContact allows a user with permission to add a Contact', function (done) {

        // party_id = 3 is fullAdminABC, who has permission
        var user = {
            userId: 'fullAdminABC',
            password: '$2a$08$sJPUoxXV5fkcdgf9Ga8yeubPQ8WAzJVJVCUW3LrD0vgI9HsHQqkNO',
            passwordHint: null,
            enabled: 1,
            disabledDate: null,
            partyId: 3,
            createdDate: '2016-05-25T15:28:01.000Z',
            updatedDate: '2016-05-25T15:28:01.000Z',
            securityPermissions: ['CONTACT_OWNER', 'CONTACT_OWNER', 'CONTACT_OWNER'],
            iat: 1464416683,
            exp: 1464503083
        };
        var contact = {
            partyId: null,
            partyTypeId: 'PERSON',
            preferredCurrencyUomId: 'USD',
            description: 'addContact test',
            statusId: 'PARTY_ENABLED',
            createdBy: 'admin',
            createdDate: '',
            updatedDate: '',
            salutation: 'Mrs.',
            firstName: 'Butter',
            middleName: '',
            lastName: 'Worth',
            birthDate: '2016-05-10 14:00:00',
            comments: 'testing addContact',
            contactMechs: []
        };
        var userSecurityPerm = 'FULLADMIN';

        var resultsForThisUser = contactController.addContact(contact, user, userSecurityPerm);

        // Per contactApi.addContact the controller level returns a promise if the POST works;
        // if it fails (e.g., no permission), it returns null.  Recycle here the same IF ELSE
        // block used in contactApi.addContact to interpret these two possibilities.
        if (resultsForThisUser === null) {
            done();
        } else {
            // The controller returns a promise, therefore the expect() and done() must be put in a 
            // .then() clause so that the promise can be fulfilled. Othersise the adding of the Contact
            // does not actually happen before the expect() is reached and the done() executes.
            resultsForThisUser.then(function (contact) {
                // Get types of returned objects
                var typeofContact = Object.prototype.toString.call(contact);
                // Check whether the return value is an array
                expect(typeofContact).toBe('[object Array]');
                // Call done to finish the async function
                done();
            });
        }
    });

    // Two tests of contactController.getContactsByOwner where a user has security permission
    xit('contactController.getContactsByOwner allows a user with permission to own Contact(s) to get the party_id of Contacts owned by that user (if any)', function (done) {


        // Test 1 out of 3:
        // party_id = 14 is contactOwnerDEF, who has permission to own Contacts (but does not happen to
        // actually own any, that is the next test.)
        var ownerId = 14;
        var userSecurityPerm = ['CONTACT_OWNER']; // from user_login_security_group_table

        // when a user has Contact owner rights, the controller returns an object.  The object will
        // be empty if the user does not actually own any contacts, but user had permission is what
        // matters for this test.
        var resultsForThisUser = contactController.getContactsByOwner(ownerId, userSecurityPerm);
        expect(typeof resultsForThisUser === 'object').toBeTruthy();


        // Test 2 out of 3:
        // party_id = 13 is contactOwnerABC, who has permission to own Contacts and happens to own two
        var ownerId = 13;
        var userSecurityPerm = ['CONTACT_OWNER']; // from user_login_security_group_table

        // when a user has Contact owner rights, the controller returns an object.
        var resultsForThisUser = contactController.getContactsByOwner(ownerId, userSecurityPerm);
        expect(typeof resultsForThisUser === 'object').toBeTruthy();

        // Call done to finish the async function
        done();
    });

    // One test of contactController.getContactsByOwner where a user lacks security permission
    xit('contactController.getContactsByOwner DENIES a user without permission to own Contact(s) to get the party_id of (any) Contacts', function (done) {
        // party_id = 17 is leadOwnerDEF, who has permission to own Leads, but not Contacts
        var ownerId = 17;
        var userSecurityPerm = ['LEAD_OWNER']; // from user_login_security_group_table

        var resultsForThisUser = contactController.getContactsByOwner(ownerId, userSecurityPerm);

        // when a user lacks Contact owner rights, the controller returns null. 
        expect(resultsForThisUser === null).toBeTruthy();
        // Call done to finish the async function
        done();
    });

    // Test of contactController.getContactsByIdentity where a user has contact tasks permissions
    xit('contactController.getContactsByIdentity allows a user with permission to own Contact(s) to get the party_id of Contacts owned by that user (if any)', function (done) {

        // this search looks for any first name containing "w" OR last name containing "e"
        var firstName = 'w';
        var lastName = 'e';
        var userSecurePerm = 'CRMSFA_CONTACT_TASKS';

        var resultsForUser = contactController.getContactsByIdentity(firstName, lastName, userSecurePerm);
        expect(typeof resultsForUser === 'object').toBeTruthy();

        // Call done to finish the async function
        done();
    });

    xit('getContactById returns a valid contact entity', function (done) {
        contactController.getContactById(56).then(function (contact) {
            expect(contact).toBeTruthy();
            expect(contact instanceof Contact).toBeTruthy();
            // Call done to finish the async function
            done();
        });
    });

});
