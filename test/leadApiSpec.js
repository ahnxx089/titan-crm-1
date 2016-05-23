/////////////////////////////////////////////////
// Jasmine spec (test suite) for Lead APIs.
//
// @file:   leadApiSpec.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var request = require('request');
var apiBaseUrl = 'http://localhost:5000/api/leads';
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJEExUVFja2dRL2hoZnZ4V1RUM3Z4bHV1WlEvRWVweUY1NzBlQnh4SDd4ZDNxT0NwbWpHU2JDIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjIsImNyZWF0ZWREYXRlIjoiMjAxNi0wNS0xM1QwNjoxNjozNS4wMDBaIiwidXBkYXRlZERhdGUiOiIyMDE2LTA1LTEzVDA2OjE2OjM1LjAwMFoiLCJpYXQiOjE0NjM3Nzk3MDgsImV4cCI6MTQ5NTMxNTcwOH0.ZT9kcx1WiMxfsftVIxbvIn_1Mt5nYKAvl-duY7Vd7qM'; // token for "admin" user account, expires May 19, 2017

// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJEExUVFja2dRL2hoZnZ4V1RUM3Z4bHV1WlEvRWVweUY1NzBlQnh4SDd4ZDNxT0NwbWpHU2JDIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjIsImNyZWF0ZWREYXRlIjoiMjAxNi0wNS0xM1QwNjoxNjozNS4wMDBaIiwidXBkYXRlZERhdGUiOiIyMDE2LTA1LTEzVDA2OjE2OjM1LjAwMFoiLCJzZWN1cml0eVBlcm1pc3Npb25zIjpbIkZVTExBRE1JTiJdLCJpYXQiOjE0NjM5NTM0NTYsImV4cCI6MTQ2NDAzOTg1Nn0.It2t3p0-fXMxcFQPHC8bxDkdhMtYFz2xyNwKu7dcJIQ'; // if last token does not work, use this one. Generated from Lucas's laptop on May 22 afternoon. 

var baseRequest = request.defaults({
    headers: {
        'x-access-token': token
    }
});

describe('Lead API', function () {
    it('is inaccessible without a valid token', function (done) {
        request.get(apiBaseUrl, function (err, res, body) {
            // Check the HTTP status code of response
            expect(res.statusCode).toBe(403);
            // Call done to finish the async function
            done();
        });
    });
    it('getLeads returns all leads in system as an array', function (done) {
        baseRequest.get(apiBaseUrl, function (err, res, body) {
            var typeofLeads = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofLeads).toBe('[object Array]');
            // Call done to finish the async function
            done();
        });
    });
    
    // NEED modification and more test cases!
    it('getLead returns a valid lead entity', function (done) {
        baseRequest.get(apiBaseUrl + '/2', function (err, res, body) {
            expect(JSON.parse(body).hasOwnProperty('partyId')).toBeTruthy();
            // Call done to finish the async function
            done();
        });
    });

});