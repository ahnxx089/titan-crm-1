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

xdescribe('Case module ', function () {

    // Test caseController.getCasesByOwner where a user has security permission
    // (but does not actually own any cases) -- TEST HAS PASSED
    xit('caseController.getCasesByOwner allows a user with permission to own Case(s) to get the party_id of Cases owned by that user (if any)', function (done) {

        // user crmsfaContactTasksABC has permission to own Cases (but does not actually own any)
        var user = {
            userId: 'crmsfaContactTasksABC',
            password: '$2a$08$CB.AAzCvAM7ghsIgD9HurePO3BsLDAJ0tBGIPHLhv9ijyay1E24O2',
            passwordHint: null,
            enabled: 1,
            disabledDate: null,
            partyId: 15,
            createdDate: '2016-05-25T16:14:33.000Z',
            updatedDate: '2016-05-25T16:14:33.000Z',
            securityPermissions: ['CRMSFA_CASE_CREATE', 'CRMSFA_ACTS_VIEW', 'CRMSFA_ACT_CLOSE', 'CRMSFA_ACT_CREATE', 'CRMSFA_ACT_UPDATE', 'CRMSFA_ACT_VIEW', 'CRMSFA_CONTACTS_VIEW', 'CRMSFA_CONTACT_CREATE', 'CRMSFA_CONTACT_DEACTIVATE', 'CRMSFA_CONTACT_REASSIGN', 'CRMSFA_CONTACT_UPDATE', 'CRMSFA_CONTACT_VIEW', 'CRMSFA_VIEW', 'PARTYMGR_CME_CREATE', 'PARTYMGR_CME_DELETE', 'PARTYMGR_CME_UPDATE', 'PARTYMGR_GRP_UPDATE', 'PARTYMGR_NOTE', 'PARTYMGR_PCM_CREATE', 'PARTYMGR_PCM_DELETE', 'PARTYMGR_PCM_UPDATE', 'PARTYMGR_REL_CREATE', 'PARTYMGR_REL_UPDATE', 'PARTYMGR_ROLE_CREATE', 'PARTYMGR_ROLE_DELETE', 'PARTYMGR_SRC_CREATE', 'PARTYMGR_STS_UPDATE', 'WORKEFFORTMGR_ADMIN'],
            iat: 1464571878,
            exp: 1464658278
        };

        // when a user has Case owner rights, the controller returns an object.  The object will
        // be empty if the user does not actually own any cases, but the facts that user had 
        // permission to create (and therefore own) cases is what is being tested here.
        var resultsForThisUser = caseController.getCasesByOwner(user);

        resultsForThisUser.then(function (cases) {
            var typeOfCases = Object.prototype.toString.call(cases);
            // Check whether the return value is an array
            expect(typeOfCases).toBe('[object Array]');
            // Call done to finish the async function
            done();
        });
    });

    // Test caseController.getCasesByOwner where a user owns a case, does it return the correct one?
    // TEST PASSED
    xit('caseController.getCasesByOwner allows a user with permission to own Case(s) to get the party_id of Cases owned by that user', function (done) {

        // user contactOwnerABC )
        var user = {
            userId: 'contactOwnerABC',
            password: '$2a$08$iTaPqQ/4W8LSDNBDT18opegvSxo4kWC8SjWNojHP/lhN7eOSTYHJu',
            passwordHint: null,
            enabled: 1,
            disabledDate: null,
            partyId: 13,
            createdDate: '2016-05-25T16:07:11.000Z',
            updatedDate: '2016-05-25T16:07:11.000Z',
            securityPermissions: ['CRMSFA_ACT_ADMIN', 'CRMSFA_ACT_CLOSE', 'CRMSFA_ACT_CREATE', 'CRMSFA_ACT_UPDATE', 'CRMSFA_ACT_VIEW', 'CRMSFA_CONTACT_CREATE', 'CRMSFA_CONTACT_DEACTIVATE', 'CRMSFA_CONTACT_REASSIGN', 'CRMSFA_CONTACT_UPDATE', 'CRMSFA_CONTACT_VIEW', 'CRMSFA_CASE_CREATE', 'CRMSFA_ACTS_VIEW', 'CRMSFA_ACT_CLOSE', 'CRMSFA_ACT_CREATE', 'CRMSFA_ACT_UPDATE', 'CRMSFA_ACT_VIEW', 'CRMSFA_CONTACTS_VIEW', 'CRMSFA_CONTACT_CREATE', 'CRMSFA_CONTACT_DEACTIVATE', 'CRMSFA_CONTACT_REASSIGN', 'CRMSFA_CONTACT_UPDATE', 'CRMSFA_CONTACT_VIEW', 'CRMSFA_VIEW', 'PARTYMGR_CME_CREATE', 'PARTYMGR_CME_DELETE', 'PARTYMGR_CME_UPDATE', 'PARTYMGR_GRP_UPDATE', 'PARTYMGR_NOTE', 'PARTYMGR_PCM_CREATE', 'PARTYMGR_PCM_DELETE', 'PARTYMGR_PCM_UPDATE', 'PARTYMGR_REL_CREATE', 'PARTYMGR_REL_UPDATE', 'PARTYMGR_ROLE_CREATE', 'PARTYMGR_ROLE_DELETE', 'PARTYMGR_SRC_CREATE', 'PARTYMGR_STS_UPDATE', 'WORKEFFORTMGR_ADMIN'],
            iat: 1464573779,
            exp: 1464660179
        };

        // when a user has Case owner rights, the controller returns an object.
        var resultsForThisUser = caseController.getCasesByOwner(user);

        resultsForThisUser.then(function (cases) {
            expect(cases[0].caseId === 2).toBeTruthy();
            // Call done to finish the async function
            done();
        });
    });

    // Test caseController.getCasesByOwner where user lacks security permission -- TEST PASSED
    xit('caseController.getCasesByOwner DENIES a user without permission to own Case(s) to get the party_id of (any) Cases', function (done) {
        // leadOwnerDEF has permission to own Leads, but not Cases
        var user = {
            userId: 'leadOwnerDEF',
            password: '$2a$08$Y/fQPgblCV2ZK6UtopnyveZpn.VoY1ZP4oPK6R3JOuzTi9FU42Hiu',
            passwordHint: null,
            enabled: 1,
            disabledDate: null,
            partyId: 18,
            createdDate: '2016-05-28T03:34:11.000Z',
            updatedDate: '2016-05-28T03:34:11.000Z',
            securityPermissions: ['CRMSFA_ACT_ADMIN', 'CRMSFA_ACT_CLOSE', 'CRMSFA_ACT_CREATE', 'CRMSFA_ACT_UPDATE', 'CRMSFA_ACT_VIEW', 'CRMSFA_LEAD_DEACTIVATE', 'CRMSFA_LEAD_DELETE', 'CRMSFA_LEAD_REASSIGN', 'CRMSFA_LEAD_UPDATE', 'CRMSFA_LEAD_VIEW', 'CRMSFA_OPP_CREATE', 'CRMSFA_OPP_UPDATE', 'CRMSFA_OPP_VIEW'],
            iat: 1464484584,
            exp: 1464570984
        };

        var resultsForThisUser = caseController.getCasesByOwner(user);

        // handle as in the Api layer, with an IF ELSE block to interpret whether the output
        // is a promise or is null (cannot use .then on a null)
        if (resultsForThisUser === null) {
            expect(resultsForThisUser === null).toBeTruthy();
            // Call done to finish the async function
            done();
        } else {
            var typeOfCases = Object.prototype.toString.call(cases);
            // Check whether the return value is an array
            expect(typeOfCases).toBe('[object Array]');
            // Call done to finish the async function
            done();
        }
    });

    xit('caseController.getCaseById returns a valid case object', function (done) {
        caseController.getCaseById(1).then(function (testCase) {
            expect(testCase instanceof Case).toBeTruthy();
            // Call done to finish the async function
            done();
        });

    });

});

describe('updateCase', function () {
    xit('returns null for invalid input', function (done) {
        var caseId = 1;
        var case_ = {};

        var result = caseController.updateCase(caseId, case_);
        expect(result).toBeNull();
        done();
    });

    xit('returns a promise for valid input', function (done) {
        var caseId = 1;
        var case_ = {
            caseId: 1,
            caseTypeId: 'RF_SUPPORT',
            caseCategoryId: 'CRCAT_NEW_PROB',
            statusId: 'CASE_ACCEPTED',
            fromPartyId: 62,
            priority: 5,
            caseDate: '2016-05-28 12:31:26',
            responseRequiredDate: '2016-05-28 12:31:26',
            caseName: 'Red light keeps flashing',
            description: 'Customer expects a few niceties first, before getting down to business',
            resolutionId: null,
            createdBy: 'fullAdminDEF',
            createdDate: '2016-05-28 12:31:26'
        };

        var result = caseController.updateCase(caseId, case_);
        expect('then' in result).toBeTruthy();
        done();
    });

    xit('fulfillment value of promise is a number', function (done) {
        var caseId = 1;
        var case_ = {
            caseId: 1,
            caseTypeId: 'RF_SUPPORT',
            caseCategoryId: 'CRCAT_NEW_PROB',
            statusId: 'CASE_ACCEPTED',
            fromPartyId: 62,
            priority: 5,
            caseDate: '2016-05-28 12:31:26',
            responseRequiredDate: '2016-05-28 12:31:26',
            caseName: 'Red light keeps flashing',
            description: 'Customer expects a few niceties first, before getting down to business',
            resolutionId: null,
            createdBy: 'fullAdminDEF',
            createdDate: '2016-05-28 12:31:26'
        };

        caseController.updateCase(caseId, case_)
            .then(function (result) {
                expect(typeof result).toBe('number');
                done();
            });
    });
});