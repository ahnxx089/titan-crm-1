/////////////////////////////////////////////////
// Jasmine spec (test suite) for Case APIs.
//
// @file:   caseApiSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint maxlen:5000 */

var request = require('request');
var apiBaseUrl = 'http://localhost:5000/api/cases';

// NOTE:  token and baseRequest declarations have been moved down into specific it() blocks
// so that the tests can be customized enough to show what they need to, without each of us
// having to overwrite one token up here outside describe().

describe('Case API', function () {

    // Test Passes, confirmed.
    xit('getCasesByOwner returns all cases owned by a user as an array', function (done) {

        // token and baseRequest request declarations for user contactOwnerABC, who owns a case
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjb250YWN0T3duZXJBQkMiLCJwYXNzd29yZCI6IiQyYSQwOCRpVGFQcVEvNFc4TFNETkJEVDE4b3BlZ3ZTeG80a1dDOFNqV05vakhQL2xoTjdlT1NUWUhKdSIsInBhc3N3b3JkSGludCI6bnVsbCwiZW5hYmxlZCI6MSwiZGlzYWJsZWREYXRlIjpudWxsLCJwYXJ0eUlkIjoxMywiY3JlYXRlZERhdGUiOiIyMDE2LTA1LTI1VDE2OjA3OjExLjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDUtMjVUMTY6MDc6MTEuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX0FDVF9BRE1JTiIsIkNSTVNGQV9BQ1RfQ0xPU0UiLCJDUk1TRkFfQUNUX0NSRUFURSIsIkNSTVNGQV9BQ1RfVVBEQVRFIiwiQ1JNU0ZBX0FDVF9WSUVXIiwiQ1JNU0ZBX0NPTlRBQ1RfQ1JFQVRFIiwiQ1JNU0ZBX0NPTlRBQ1RfREVBQ1RJVkFURSIsIkNSTVNGQV9DT05UQUNUX1JFQVNTSUdOIiwiQ1JNU0ZBX0NPTlRBQ1RfVVBEQVRFIiwiQ1JNU0ZBX0NPTlRBQ1RfVklFVyIsIkNSTVNGQV9DQVNFX0NSRUFURSIsIkNSTVNGQV9BQ1RTX1ZJRVciLCJDUk1TRkFfQUNUX0NMT1NFIiwiQ1JNU0ZBX0FDVF9DUkVBVEUiLCJDUk1TRkFfQUNUX1VQREFURSIsIkNSTVNGQV9BQ1RfVklFVyIsIkNSTVNGQV9DT05UQUNUU19WSUVXIiwiQ1JNU0ZBX0NPTlRBQ1RfQ1JFQVRFIiwiQ1JNU0ZBX0NPTlRBQ1RfREVBQ1RJVkFURSIsIkNSTVNGQV9DT05UQUNUX1JFQVNTSUdOIiwiQ1JNU0ZBX0NPTlRBQ1RfVVBEQVRFIiwiQ1JNU0ZBX0NPTlRBQ1RfVklFVyIsIkNSTVNGQV9WSUVXIiwiUEFSVFlNR1JfQ01FX0NSRUFURSIsIlBBUlRZTUdSX0NNRV9ERUxFVEUiLCJQQVJUWU1HUl9DTUVfVVBEQVRFIiwiUEFSVFlNR1JfR1JQX1VQREFURSIsIlBBUlRZTUdSX05PVEUiLCJQQVJUWU1HUl9QQ01fQ1JFQVRFIiwiUEFSVFlNR1JfUENNX0RFTEVURSIsIlBBUlRZTUdSX1BDTV9VUERBVEUiLCJQQVJUWU1HUl9SRUxfQ1JFQVRFIiwiUEFSVFlNR1JfUkVMX1VQREFURSIsIlBBUlRZTUdSX1JPTEVfQ1JFQVRFIiwiUEFSVFlNR1JfUk9MRV9ERUxFVEUiLCJQQVJUWU1HUl9TUkNfQ1JFQVRFIiwiUEFSVFlNR1JfU1RTX1VQREFURSIsIldPUktFRkZPUlRNR1JfQURNSU4iXSwiaWF0IjoxNDY0NTczNzc5LCJleHAiOjE0NjQ2NjAxNzl9.Zf-4n9MJ_OL-T6ZG_44ezZ7lxEpL2729Ja5fAuYm3lg';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });

        baseRequest.get(apiBaseUrl, function (err, res, body) {
            var typeofCases = Object.prototype.toString.call(JSON.parse(body));
            // Check whether the return value is an array
            expect(typeofCases).toBe('[object Array]');
            // Call done to finish the async function
            done();
        });
    });
    
    it('getCaseById returns a valid case', function (done) {
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJEExUVFja2dRL2hoZnZ4V1RUM3Z4bHV1WlEvRWVweUY1NzBlQnh4SDd4ZDNxT0NwbWpHU2JDIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjIsImNyZWF0ZWREYXRlIjoiMjAxNi0wNS0xM1QwNjoxNjozNS4wMDBaIiwidXBkYXRlZERhdGUiOiIyMDE2LTA1LTEzVDA2OjE2OjM1LjAwMFoiLCJzZWN1cml0eVBlcm1pc3Npb25zIjpbIkFDQ09VTlRJTkdfQURNSU4iLCJBQ0NPVU5USU5HX0NPTU1fVklFVyIsIkFDQ09VTlRJTkdfUFJJTlRfQ0hFQ0tTIiwiQUNDVEdfQVRYX0FETUlOIiwiQUNDVEdfRlhfVVBEQVRFIiwiQUNDVEdfUFJFRl9BRE1JTiIsIkFSVElGQUNUX0lORk9fVklFVyIsIkFTU0VUTUFJTlRfQURNSU4iLCJDQVRBTE9HX0FETUlOIiwiQ0FUQUxPR19QUklDRV9NQUlOVCIsIkNBVEFMT0dfUFVSQ0hBU0VfQUxMT1ciLCJDQVRBTE9HX1ZJRVdfQUxMT1ciLCJDT01NT05fQURNSU4iLCJDT05URU5UTUdSX0FETUlOIiwiREFUQUZJTEVfTUFJTlQiLCJFQkFZX1ZJRVciLCJFTlRJVFlfREFUQV9BRE1JTiIsIkVOVElUWV9NQUlOVCIsIkVOVElUWV9TWU5DX0FETUlOIiwiRU5VTV9TVEFUVVNfTUFJTlQiLCJFWEFNUExFX0FETUlOIiwiRkFDSUxJVFlfQURNSU4iLCJHT09HTEVCQVNFX1ZJRVciLCJMQUJFTF9NQU5BR0VSX1ZJRVciLCJNQU5VQUxfUEFZTUVOVCIsIk1BTlVGQUNUVVJJTkdfQURNSU4iLCJNQVJLRVRJTkdfQURNSU4iLCJPQUdJU19WSUVXIiwiT0ZCVE9PTFNfVklFVyIsIk9SREVSTUdSX0FETUlOIiwiUEFSVFlNR1JfQURNSU4iLCJQQVlQUk9DX0FETUlOIiwiUEFZX0lORk9fQURNSU4iLCJQRVJJT0RfTUFJTlQiLCJQUk9KRUNUTUdSX0FETUlOIiwiU0VDVVJJVFlfQURNSU4iLCJTRU5EX0NPTlRST0xfQVBQTEVUIiwiU0VSVkVSX1NUQVRTX1ZJRVciLCJTRVJWSUNFX0lOVk9LRV9BTlkiLCJTRVJWSUNFX01BSU5UIiwiU0hJUFJBVEVfQURNSU4iLCJURU1QRVhQUl9BRE1JTiIsIlVTRVJQUkVGX0FETUlOIiwiVVRJTF9DQUNIRV9FRElUIiwiVVRJTF9DQUNIRV9WSUVXIiwiVVRJTF9ERUJVR19FRElUIiwiVVRJTF9ERUJVR19WSUVXIiwiVklTVUFMVEhFTUVfQURNSU4iLCJXRUJUT09MU19WSUVXIiwiV09SS0VGRk9SVE1HUl9BRE1JTiJdLCJpYXQiOjE0NjQ3NDc5OTIsImV4cCI6MTQ2NDgzNDM5Mn0.20E0Rp0pypQRXUU366F6f-hHucEzA-Cnip5ICOjeh-Q';
        
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        
        baseRequest.get(apiBaseUrl + '/2', function (err, res, body) {
            expect(JSON.parse(body).hasOwnProperty('caseId')).toBeTruthy();
            done();
        });
//        baseRequest.get(apiBaseUrl + '/2', function (err, res, body) {
//            expect(JSON.parse(body).hasOwnProperty('partyId')).toBeTruthy();
//            // Call done to finish the async function
//            done();
//        });
    });
    
    it('getCasesById fails if not passed a valid authentication token', function (err, res, body) {
        var token = 'IamaTolkiennotatoken';
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });

        request.get(apiBaseUrl, function (err, res, body) {
            // Check what status code is returned in the response
            expect(res.statusCode).toBe(403);
            // Call done
            done();
        });
    });
    
});
