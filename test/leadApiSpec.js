/////////////////////////////////////////////////
// Jasmine spec (test suite) for Lead APIs.
//
// @file:   leadApiSpec.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////



var request = require('request');
var apiBaseUrl = 'http://localhost:5000/api/leads';

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJsZWFkT3duZXJBQkMiLCJwYXNzd29yZCI6IiQyYSQwOCQ1UmRGSTJBRjJRd2w1VUhwQnF5MFZlNjd3SGhNQjRjdE95UHBhRE1lOFl3L0NaQTY2VHV0VyIsInBhc3N3b3JkSGludCI6bnVsbCwiZW5hYmxlZCI6MSwiZGlzYWJsZWREYXRlIjpudWxsLCJwYXJ0eUlkIjoxNywiY3JlYXRlZERhdGUiOiIyMDE2LTA1LTI1VDE4OjE0OjMxLjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDUtMjVUMTg6MTQ6MzEuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX0xFQURfQ1JFQVRFIiwiQ1JNU0ZBX0FDVF9BRE1JTiIsIkNSTVNGQV9BQ1RfQ0xPU0UiLCJDUk1TRkFfQUNUX0NSRUFURSIsIkNSTVNGQV9BQ1RfVVBEQVRFIiwiQ1JNU0ZBX0FDVF9WSUVXIiwiQ1JNU0ZBX0xFQURfREVBQ1RJVkFURSIsIkNSTVNGQV9MRUFEX0RFTEVURSIsIkNSTVNGQV9MRUFEX1JFQVNTSUdOIiwiQ1JNU0ZBX0xFQURfVVBEQVRFIiwiQ1JNU0ZBX0xFQURfVklFVyIsIkNSTVNGQV9PUFBfQ1JFQVRFIiwiQ1JNU0ZBX09QUF9VUERBVEUiLCJDUk1TRkFfT1BQX1ZJRVciXSwiaWF0IjoxNDY0NzM4ODc5LCJleHAiOjE0NjQ4MjUyNzl9.L8-7ieWFkkkqNErdCPAOGs9V_ZK3nAujJHfu29jUrO4'; 
// token for "leadOwnerABC" user account, expires June 2, 2017

var baseRequest = request.defaults({
    headers: {
        'x-access-token': token
    }
});

// Author: Xiaosiqi
describe('Lead API, ', function () {
    // Author: Xiaosiqi
    xit('is inaccessible without a valid token', function (done) {
        request.get(apiBaseUrl, function (err, res, body) {
            // Check the HTTP status code of response
            expect(res.statusCode).toBe(403);
            // Call done to finish the async function
            done();
        });
    });
    // Author: Xiaosiqi
    xit('getLeads returns all leads in system as an array', function (done) {
        baseRequest.get(apiBaseUrl, function (err, res, body) {
            var typeofLeads = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofLeads).toBe('[object Array]');
            // Call done to finish the async function
            done();
        });
    });
    // Author: Xiaosiqi
    xit('getLead returns a valid lead entity at 139', function (done) {
        baseRequest.get(apiBaseUrl + '/139', function (err, res, body) {
            expect(JSON.parse(body).hasOwnProperty('partyId')).toBeTruthy();
            // Call done to finish the async function
            done();
        });
    });
    
    // TODO: NEED modification and more test cases!


});