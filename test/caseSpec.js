/////////////////////////////////////////////////
// Jasmine spec (test suite) for Case module.
//
// @file:   caseSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */
/* jshint jasmine:true */

var knex = require('../src/config/knexConfig')().getConfig();
var caseController = require('../src/controllers/caseController')(knex);
var Case = require('../src/entities/case');

describe('Case module ', function () {

    // DINESH HAS TO FIX THIS WHEN NEW SECURITY PERMISSIONS CHECKING IN PLACE
    // Two tests of caseController.getCasesByOwner where a user has security permission
    xit('caseController.getCasesByOwner allows a user with permission to own Case(s) to get the party_id of Cases owned by that user (if any)', function (done) {


        // Test 1 out of 3:
        // party_id = 14 is caseOwnerDEF, who has permission to own Cases (but does not happen to
        // actually own any, that is the next test.)
        var ownerId = 14;
        var userSecurityPerm = ['CONTACT_OWNER']; // from user_login_security_group_table

        // when a user has Case owner rights, the controller returns an object.  The object will
        // be empty if the user does not actually own any cases, but user had permission is what
        // matters for this test.
        var resultsForThisUser = caseController.getCasesByOwner(ownerId, userSecurityPerm);
        expect(typeof resultsForThisUser === 'object').toBeTruthy();


        // Test 2 out of 3:
        // party_id = 13 is caseOwnerABC, who has permission to own Cases and happens to own two
        var ownerId = 13;
        var userSecurityPerm = ['CONTACT_OWNER']; // from user_login_security_group_table

        // when a user has Case owner rights, the controller returns an object.
        var resultsForThisUser = caseController.getCasesByOwner(ownerId, userSecurityPerm);
        expect(typeof resultsForThisUser === 'object').toBeTruthy();

        // Call done to finish the async function
        done();
    });

    // DINESH HAS TO FIX THIS WHEN NEW SECURITY PERMISSIONS CHECKING IN PLACE
    // One test of caseController.getCasesByOwner where a user lacks security permission
    xit('caseController.getCasesByOwner DENIES a user without permission to own Case(s) to get the party_id of (any) Cases', function (done) {
        // party_id = 17 is leadOwnerDEF, who has permission to own Leads, but not Cases
        var ownerId = 17;
        var userSecurityPerm = ['LEAD_OWNER']; // from user_login_security_group_table

        var resultsForThisUser = caseController.getCasesByOwner(ownerId, userSecurityPerm);

        // when a user lacks Case owner rights, the controller returns null. 
        expect(resultsForThisUser === null).toBeTruthy();
        // Call done to finish the async function
        done();
    });

});
