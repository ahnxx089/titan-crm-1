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
    
    xit('getCaseById returns a valid case', function(done) {
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
    
    
    it('addCase adds a case and returns a valid case id', function(done) {
        // generated using crmsfaContactTasksABC
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjcm1zZmFDb250YWN0VGFza3NBQkMiLCJwYXNzd29yZCI6IiQyYSQwOCRDQi5BQXpDdkFNN2doc0lnRDlIdXJlUE8zQnNMREFKMHRCR0lQSExodjlpanlheTFFMjRPMiIsInBhc3N3b3JkSGludCI6bnVsbCwiZW5hYmxlZCI6MSwiZGlzYWJsZWREYXRlIjpudWxsLCJwYXJ0eUlkIjoxNSwiY3JlYXRlZERhdGUiOiIyMDE2LTA1LTI1VDE2OjE0OjMzLjAwMFoiLCJ1cGRhdGVkRGF0ZSI6IjIwMTYtMDUtMjVUMTY6MTQ6MzMuMDAwWiIsInNlY3VyaXR5UGVybWlzc2lvbnMiOlsiQ1JNU0ZBX0NBU0VfQ1JFQVRFIiwiQ1JNU0ZBX0FDVFNfVklFVyIsIkNSTVNGQV9BQ1RfQ0xPU0UiLCJDUk1TRkFfQUNUX0NSRUFURSIsIkNSTVNGQV9BQ1RfVVBEQVRFIiwiQ1JNU0ZBX0FDVF9WSUVXIiwiQ1JNU0ZBX0NPTlRBQ1RTX1ZJRVciLCJDUk1TRkFfQ09OVEFDVF9DUkVBVEUiLCJDUk1TRkFfQ09OVEFDVF9ERUFDVElWQVRFIiwiQ1JNU0ZBX0NPTlRBQ1RfUkVBU1NJR04iLCJDUk1TRkFfQ09OVEFDVF9VUERBVEUiLCJDUk1TRkFfQ09OVEFDVF9WSUVXIiwiQ1JNU0ZBX1ZJRVciLCJQQVJUWU1HUl9DTUVfQ1JFQVRFIiwiUEFSVFlNR1JfQ01FX0RFTEVURSIsIlBBUlRZTUdSX0NNRV9VUERBVEUiLCJQQVJUWU1HUl9HUlBfVVBEQVRFIiwiUEFSVFlNR1JfTk9URSIsIlBBUlRZTUdSX1BDTV9DUkVBVEUiLCJQQVJUWU1HUl9QQ01fREVMRVRFIiwiUEFSVFlNR1JfUENNX1VQREFURSIsIlBBUlRZTUdSX1JFTF9DUkVBVEUiLCJQQVJUWU1HUl9SRUxfVVBEQVRFIiwiUEFSVFlNR1JfUk9MRV9DUkVBVEUiLCJQQVJUWU1HUl9ST0xFX0RFTEVURSIsIlBBUlRZTUdSX1NSQ19DUkVBVEUiLCJQQVJUWU1HUl9TVFNfVVBEQVRFIiwiV09SS0VGRk9SVE1HUl9BRE1JTiJdLCJpYXQiOjE0NjU0OTE1NjMsImV4cCI6MTQ2NTU3Nzk2M30.tykjk5DDWSZPdVKByJO-ifPIqbvAOAluolKTl_KqH08';
        
        var baseRequest = request.defaults({
            headers: {
                'x-access-token': token
            }
        });
        
        var newCase = {
            "caseId": 1,
            "caseTypeId": "RF_SUPPORT",
            "caseCategoryId": "CRCAT_NEW_PROB",
            "statusId": "CASE_ACCEPTED",
            "fromPartyId": 62,
            "priority": 5,
            "caseDate": "2016-05-28T17:31:26.000Z",
            "responseRequiredDate": "2016-05-28T17:31:26.000Z",
            "caseName": "Red light keeps flashing",
            "description": "Customer expects a few niceties first, before getting down to business",
            "resolutionId": null,
            "createdBy": "fullAdminDEF",
            "createdDate": "2016-05-28T17:31:26.000Z",
            "updatedDate": "2016-05-28T17:31:26.000Z"
        };
        
        
        
        baseRequest.post(apiBaseUrl, {
            form: newCase
        }, function (err, res, body) {
            var result = JSON.parse(body);
            // Check whether return value is a partyId
            expect(result.hasOwnProperty('caseId')).toBeTruthy();
            // Check whether a single party id is returned
            expect(result.caseId.length).toBe(1);
            // Call done to finish the async function
            done();
        });
        
        
        
//        baseRequest.get(apiBaseUrl + '/2', function (err, res, body) {
//            expect(JSON.parse(body).hasOwnProperty('caseId')).toBeTruthy();
//            done();
//        });
    });
    
});
