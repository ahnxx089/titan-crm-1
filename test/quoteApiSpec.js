/////////////////////////////////////////////////
// Jasmine spec (test suite) for Quote APIs.
//
// @file:   quoteApiSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint maxlen:1000 */

var request = require('request');
var apiBaseUrl = 'http://localhost:5000/api/quotes';

// NOTE:  token and baseRequest declarations have been moved down into specific it() blocks
// so that the tests can be customized enough to show what they need to, without each of us
// having to overwrite one token up here outside describe().

describe('Quote API', function () {

    // This test passes because var token and var baseRequest are commented out-- no token, no access! 
    xit('is inaccessible without a valid token', function (done) {

        // token and baseRequest request declarations moved in here so can pick a specific user
        /*var token = 'iAmNotAValidToken';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });*/

        request.get(apiBaseUrl, function (err, res, body) {
            // Check the HTTP status code of response
            expect(res.statusCode).toBe(403);
            // Call done to finish the async function
            done();
        });
    });

    xit('updateQuote updates a Quote and returns an object', function (done) {
        
        // token and baseRequest request declarations moved in here so can pick a specific user
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtclF1b3RlVW5xdW90ZSIsInBhc3N3b3JkIjoiJDJhJDA4JDEvbkpoQ1NENmJrVEswWWJKRDlUMk9UWUo5b2NKOS5IbFVHSXVxdEVlaWU0eWkzcGZ1TGJTIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjEwMCwiY3JlYXRlZERhdGUiOiIyMDE2LTA2LTAyVDAxOjUwOjE2LjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDYtMDJUMDE6NTA6MTYuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX1FVT1RFX0NSRUFURSJdLCJpYXQiOjE0NjQ5NjQ1MDQsImV4cCI6MTQ2NTA1MDkwNH0.40j11rRv2QbTHOP4kxiCuB8C7ux5COUK-mX0SKmvYQg';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        var quoteId = 1;    // an existing row in table quote to be updated

        // This is the minimum acceptable payload for updateQuote
        var quote = {
            'quoteTypeId': 'PRODUCT_QUOTE',
            'issueDate': '2016-06-03 02:07:00',
            'statusId': 'QUOTE_CANCELLED',
            'salesChannelEnumId': 'IND_GEN_SERVICES'
        };

        baseRequest.get(apiBaseUrl + '/' + quoteId, function (err, res, body) {
            var typeofQuotes = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        });


        
    });
    
    
});
