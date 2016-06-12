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
    it('is inaccessible without a valid token', function (done) {

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

    it('updateQuote updates a Quote and returns an object', function (done) {

        // token and baseRequest request declarations moved in here so can pick a specific user
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtclF1b3RlVW5xdW90ZSIsInBhc3N3b3JkIjoiJDJhJDA4JDEvbkpoQ1NENmJrVEswWWJKRDlUMk9UWUo5b2NKOS5IbFVHSXVxdEVlaWU0eWkzcGZ1TGJTIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjEwMCwiY3JlYXRlZERhdGUiOiIyMDE2LTA2LTAyVDAxOjUwOjE2LjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDYtMDJUMDE6NTA6MTYuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX1FVT1RFX0NSRUFURSJdLCJpYXQiOjE0NjU2NzI5NDgsImV4cCI6MTQ5NzIwODk0OH0.x2r-faW7TG9bpECXT5UvOhQhpkPYJw6ZtU8HsN93iDM';
        
        var quote = {
            quoteTypeId: 'PRODUCT_QUOTE',
            partyId: 91,
            issueDate: '2016-06-04 10:49:22',
            statusId: 'QUOTE_SENT',
            currencyUomId: 'USD',
            salesChannelEnumId: 'IND_GEN_SERVICES',
            validFromDate: '2016-06-04 10:49:22',
            validThruDate: '2016-12-04 10:49:22',
            quoteName: 'Saturday morning quote',
            description: 'created on Saturday morning',
            contactPartyId: 91,
            createdByPartyId: 100
        };
        
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(quote)
        });
        var quoteId = 4; // an existing row in table quote to be updated

        

        baseRequest.put(apiBaseUrl + '/' + quoteId, function (err, res, body) {
            /*
            var typeofQuotes = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofQuotes).toBe('[object Object]');
            // Call done to finish the async function
            */
            var result = JSON.parse(res.body);
            expect('quoteUpdated' in result).toBeTruthy();
            done();
        });
    });

    it('addQuoteItem adds an Item to a Quote and returns an object', function (done) {

        // token and baseRequest request declarations moved in here so can pick a specific user
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtclF1b3RlVW5xdW90ZSIsInBhc3N3b3JkIjoiJDJhJDA4JDEvbkpoQ1NENmJrVEswWWJKRDlUMk9UWUo5b2NKOS5IbFVHSXVxdEVlaWU0eWkzcGZ1TGJTIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjEwMCwiY3JlYXRlZERhdGUiOiIyMDE2LTA2LTAyVDAxOjUwOjE2LjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDYtMDJUMDE6NTA6MTYuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX1FVT1RFX0NSRUFURSJdLCJpYXQiOjE0NjU2NzI5NDgsImV4cCI6MTQ5NzIwODk0OH0.x2r-faW7TG9bpECXT5UvOhQhpkPYJw6ZtU8HsN93iDM';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        var quoteId = 4; // an existing row in table quote to be updated

        var quoteItem = {
            'quoteId': '4',
            'quoteItemSeqId': '4',
            'productId': 'testProd2',
            'quantity': null,
            'selectedAmount': null,
            'quoteUnitPrice': null,
            'estimatedDeliveryDate': null,
            'comments': 'testProd2 is high quality',
            'isPromo': null,
            'description': 'customers love this product'
        };

        baseRequest.get(apiBaseUrl + '?item' + quoteId, function (err, res, body) {
            var typeofQuotes = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        });
    });

    it('updateQuoteItem updates an Item of a Quote and returns an object', function (done) {

        // token and baseRequest request declarations moved in here so can pick a specific user
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtclF1b3RlVW5xdW90ZSIsInBhc3N3b3JkIjoiJDJhJDA4JDEvbkpoQ1NENmJrVEswWWJKRDlUMk9UWUo5b2NKOS5IbFVHSXVxdEVlaWU0eWkzcGZ1TGJTIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjEwMCwiY3JlYXRlZERhdGUiOiIyMDE2LTA2LTAyVDAxOjUwOjE2LjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDYtMDJUMDE6NTA6MTYuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX1FVT1RFX0NSRUFURSJdLCJpYXQiOjE0NjU2NzI5NDgsImV4cCI6MTQ5NzIwODk0OH0.x2r-faW7TG9bpECXT5UvOhQhpkPYJw6ZtU8HsN93iDM';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        var quoteId = 4; // an existing row in table quote to be updated

        var quoteItem = {
            'quoteId': '4',
            'quoteItemSeqId': '3',
            'productId': 'testProd2',
            'quantity': null,
            'selectedAmount': null,
            'quoteUnitPrice': null,
            'estimatedDeliveryDate': null,
            'comments': 'testProd2 gets slower with age',
            'isPromo': null,
            'description': 'some customers do not mind the speed'
        };
        
        baseRequest.get(apiBaseUrl + '?item' + quoteId, function (err, res, body) {
            var typeofQuotes = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        });
    });

    it('addQuoteItemOption adds an Option of an Item of a Quote and returns an object', function (done){
        
        // token and baseRequest request declarations moved in here so can pick a specific user
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtclF1b3RlVW5xdW90ZSIsInBhc3N3b3JkIjoiJDJhJDA4JDEvbkpoQ1NENmJrVEswWWJKRDlUMk9UWUo5b2NKOS5IbFVHSXVxdEVlaWU0eWkzcGZ1TGJTIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjEwMCwiY3JlYXRlZERhdGUiOiIyMDE2LTA2LTAyVDAxOjUwOjE2LjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDYtMDJUMDE6NTA6MTYuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX1FVT1RFX0NSRUFURSJdLCJpYXQiOjE0NjU2NzI5NDgsImV4cCI6MTQ5NzIwODk0OH0.x2r-faW7TG9bpECXT5UvOhQhpkPYJw6ZtU8HsN93iDM';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        var quoteId = 4; // an existing row in table quote to be updated

        var quoteItemOption = {
            'quoteId': '4',
            'quoteItemSeqId': '4',
            'quoteItemOptionSeqId': '1',
            'quantity': '40',
            'quoteUnitPrice': '12.95'
        };

        baseRequest.get(apiBaseUrl + '?itemOption' + quoteId, function (err, res, body) {
            var typeofQuotes = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        });
    });

    it('updateQuoteItemOption updates an Option of an Item of a Quote and returns an object', function (done){
        
        // token and baseRequest request declarations moved in here so can pick a specific user
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtclF1b3RlVW5xdW90ZSIsInBhc3N3b3JkIjoiJDJhJDA4JDEvbkpoQ1NENmJrVEswWWJKRDlUMk9UWUo5b2NKOS5IbFVHSXVxdEVlaWU0eWkzcGZ1TGJTIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjEwMCwiY3JlYXRlZERhdGUiOiIyMDE2LTA2LTAyVDAxOjUwOjE2LjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDYtMDJUMDE6NTA6MTYuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX1FVT1RFX0NSRUFURSJdLCJpYXQiOjE0NjU2NzI5NDgsImV4cCI6MTQ5NzIwODk0OH0.x2r-faW7TG9bpECXT5UvOhQhpkPYJw6ZtU8HsN93iDM';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        var quoteId = 4; // an existing row in table quote to be updated

        var quoteItemOption = {
            'quoteId': '4',
            'quoteItemSeqId': '4',
            'quoteItemOptionSeqId': '1',
            'quantity': '23',
            'quoteUnitPrice': '11.47'
        };

        baseRequest.get(apiBaseUrl + '?itemOption' + quoteId, function (err, res, body) {
            var typeofQuotes = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofQuotes).toBe('[object Object]');
            // Call done to finish the async function
            done();
        });
    });

});
