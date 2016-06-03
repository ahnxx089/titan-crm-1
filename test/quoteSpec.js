/////////////////////////////////////////////////
// Jasmine spec (test suite) for Quote module.
//
// @file:   quoteSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */
/* jshint jasmine:true */
/* jshint maxlen:1000 */

var knex = require('../src/config/knexConfig')().getConfig();
var quoteController = require('../src/controllers/quoteController')(knex);
var userController = require('../src/controllers/userController')(knex);
var Quote = require('../src/entities/quote');

describe('Quote module ', function () {

    // Test quoteController.updateQuote where user LACKS security permission -- TEST PASSED
    xit('quoteController.updateQuote DENIES a user without permission to own Quotes(s) to update a Quote', function (done) {

        // contactOwnerABC does not have permission to create a Quote (and thus neither to update)
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
            iat: 1464968881,
            exp: 1465055281
        };
        var quoteId = 1; // an existing row in table quote to be updated

        // This is the minimum acceptable payload for updateQuote
        var quote = {
            'quoteTypeId': 'PRODUCT_QUOTE',
            'issueDate': '2016-06-03 02:07:00',
            'statusId': 'QUOTE_FINALIZED',
            'salesChannelEnumId': 'IND_GEN_SERVICES'
        };

        var resultsForThisUser = quoteController.updateQuote(quoteId, quote, user);

        // handle as in the Api layer, with an IF ELSE block to interpret whether the output
        // is a promise or is null (cannot use .then on a null)
        if (resultsForThisUser === null) {
            expect(resultsForThisUser === null).toBeTruthy();
            // Call done to finish the async function
            done();
        } else {
            var typeOfQuotes = Object.prototype.toString.call(resultsForThisUser);
            // Check whether the return value is an array
            expect(typeOfQuotes).toBe('[object Array]');
            // Call done to finish the async function
            done();
        }
    });

    xit('quoteController.updateQuote allows a user with permission to update a Quote', function (done) {

        var user = {
            userId: 'mrQuoteUnquote',
            password: '$2a$08$1/nJhCSD6bkTK0YbJD9T2OTYJ9ocJ9.HlUGIuqtEeie4yi3pfuLbS',
            passwordHint: null,
            enabled: 1,
            disabledDate: null,
            partyId: 100,
            createdDate: '2016-06-02T01:50:16.000Z',
            updatedDate: '2016-06-02T01:50:16.000Z',
            securityPermissions: ['CRMSFA_QUOTE_CREATE'],
            iat: 1464964504,
            exp: 1465050904
        };
        var quoteId = 1; // an existing row in table quote to be updated

        // This is the minimum acceptable payload for updateQuote
        var quote = {
            'quoteTypeId': 'PRODUCT_QUOTE',
            'issueDate': '2016-06-03 02:07:00',
            'statusId': 'QUOTE_CANCELLED',
            'salesChannelEnumId': 'IND_GEN_SERVICES'
        };

        var resultsForThisUser = quoteController.updateQuote(quoteId, quote, user);

        // handle as in the Api layer, with an IF ELSE block to interpret whether the output
        // is a promise or is null (cannot use .then on a null)
        if (resultsForThisUser === null) {
            expect(resultsForThisUser === null).toBeTruthy();
            // Call done to finish the async function
            done();
        } else {
            var typeOfQuotes = Object.prototype.toString.call(resultsForThisUser);
            // Check whether the return value is an array
            expect(typeOfQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        }
    });

    // Test quoteController.addQuoteItem where user LACKS security permission -- TEST PASSED
    xit('quoteController.addQuoteItem DENIES a user without permission to own Quotes(s) to add an Item to a Quote', function (done) {

        // contactOwnerABC does not have permission to create a Quote (and thus neither to update)
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
            iat: 1464968881,
            exp: 1465055281
        };

        // This is the minimum acceptable payload for addQuoteItem
        // MANUALLY ADJUST THE quoteItemSeqId, WHICH THE UI WILL TAKE CARE OF 
        // (see discussion notes in quoteApi.js)
        var quoteItem = {
            'quoteId': '2',
            'quoteItemSeqId': '4',
            'productId': 'testProd2',
            'quantity': '5',
            'selectedAmount': '12',
            'quoteUnitPrice': '45.00',
            'estimatedDeliveryDate': '',
            'comments': 'test addQuoteItem',
            'isPromo': '',
            'description': 'test addQuoteItem'
        };

        var resultsForThisUser = quoteController.addQuoteItem(quoteItem, user);

        // handle as in the Api layer, with an IF ELSE block to interpret whether the output
        // is a promise or is null (cannot use .then on a null)
        if (resultsForThisUser === null) {
            expect(resultsForThisUser === null).toBeTruthy();
            // Call done to finish the async function
            done();
        } else {
            var typeOfQuotes = Object.prototype.toString.call(resultsForThisUser);
            // Check whether the return value is an array
            expect(typeOfQuotes).toBe('[object Array]');
            // Call done to finish the async function
            done();
        }
    });

    xit('quoteController.addQuoteItem allows a user with permission to add an Item to a Quote', function (done) {

        var user = {
            userId: 'mrQuoteUnquote',
            password: '$2a$08$1/nJhCSD6bkTK0YbJD9T2OTYJ9ocJ9.HlUGIuqtEeie4yi3pfuLbS',
            passwordHint: null,
            enabled: 1,
            disabledDate: null,
            partyId: 100,
            createdDate: '2016-06-02T01:50:16.000Z',
            updatedDate: '2016-06-02T01:50:16.000Z',
            securityPermissions: ['CRMSFA_QUOTE_CREATE'],
            iat: 1464964504,
            exp: 1465050904
        };
        // This is the minimum acceptable payload for addQuoteItem
        // MANUALLY ADJUST THE quoteItemSeqId, WHICH THE UI WILL TAKE CARE OF 
        // (see discussion notes in quoteApi.js)
        var quoteItem = {
            'quoteId': '2',
            'quoteItemSeqId': '4',
            'productId': 'testProd2',
            'quantity': '5',
            'selectedAmount': '12',
            'quoteUnitPrice': '45.00',
            'estimatedDeliveryDate': '',
            'comments': 'test addQuoteItem',
            'isPromo': '',
            'description': 'test addQuoteItem'
        };

        var resultsForThisUser = quoteController.addQuoteItem(quoteItem, user);

        // handle as in the Api layer, with an IF ELSE block to interpret whether the output
        // is a promise or is null (cannot use .then on a null)
        if (resultsForThisUser === null) {
            expect(resultsForThisUser === null).toBeTruthy();
            // Call done to finish the async function
            done();
        } else {
            var typeOfQuotes = Object.prototype.toString.call(resultsForThisUser);
            // Check whether the return value is an array
            expect(typeOfQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        }
    });


});
