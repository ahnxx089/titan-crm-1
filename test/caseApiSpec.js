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

xdescribe('Case API', function () {

    // Test Passes, confirmed.
    xit('getCasesByOwner returns all cases owned by a user as an array', function (done) {

        // token and baseRequest request declarations for user fullAdminDEF, who owns some cases
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmdWxsQWRtaW5ERUYiLCJwYXNzd29yZCI6IiQyYSQwOCRhZDdYY0RwVmgwd3BudUw5RnFUd1NlY2hOOFFQay9yZDJxOWltR1o1aG12OWdlejQvSTVJUyIsInBhc3N3b3JkSGludCI6bnVsbCwiZW5hYmxlZCI6MSwiZGlzYWJsZWREYXRlIjpudWxsLCJwYXJ0eUlkIjo0LCJjcmVhdGVkRGF0ZSI6IjIwMTYtMDUtMjVUMTU6NTI6MjYuMDAwWiIsInVwZGF0ZWREYXRlIjoiMjAxNi0wNS0yNVQxNTo1MjoyNi4wMDBaIiwic2VjdXJpdHlQZXJtaXNzaW9ucyI6WyJDUk1TRkFfQ0FTRV9DUkVBVEUiLCJBQ0NPVU5USU5HX0FETUlOIiwiQUNDT1VOVElOR19DT01NX1ZJRVciLCJBQ0NPVU5USU5HX1BSSU5UX0NIRUNLUyIsIkFDQ1RHX0FUWF9BRE1JTiIsIkFDQ1RHX0ZYX1VQREFURSIsIkFDQ1RHX1BSRUZfQURNSU4iLCJBUlRJRkFDVF9JTkZPX1ZJRVciLCJBU1NFVE1BSU5UX0FETUlOIiwiQ0FUQUxPR19BRE1JTiIsIkNBVEFMT0dfUFJJQ0VfTUFJTlQiLCJDQVRBTE9HX1BVUkNIQVNFX0FMTE9XIiwiQ0FUQUxPR19WSUVXX0FMTE9XIiwiQ09NTU9OX0FETUlOIiwiQ09OVEVOVE1HUl9BRE1JTiIsIkRBVEFGSUxFX01BSU5UIiwiRUJBWV9WSUVXIiwiRU5USVRZX0RBVEFfQURNSU4iLCJFTlRJVFlfTUFJTlQiLCJFTlRJVFlfU1lOQ19BRE1JTiIsIkVOVU1fU1RBVFVTX01BSU5UIiwiRVhBTVBMRV9BRE1JTiIsIkZBQ0lMSVRZX0FETUlOIiwiR09PR0xFQkFTRV9WSUVXIiwiTEFCRUxfTUFOQUdFUl9WSUVXIiwiTUFOVUFMX1BBWU1FTlQiLCJNQU5VRkFDVFVSSU5HX0FETUlOIiwiTUFSS0VUSU5HX0FETUlOIiwiT0FHSVNfVklFVyIsIk9GQlRPT0xTX1ZJRVciLCJPUkRFUk1HUl9BRE1JTiIsIlBBUlRZTUdSX0FETUlOIiwiUEFZUFJPQ19BRE1JTiIsIlBBWV9JTkZPX0FETUlOIiwiUEVSSU9EX01BSU5UIiwiUFJPSkVDVE1HUl9BRE1JTiIsIlNFQ1VSSVRZX0FETUlOIiwiU0VORF9DT05UUk9MX0FQUExFVCIsIlNFUlZFUl9TVEFUU19WSUVXIiwiU0VSVklDRV9JTlZPS0VfQU5ZIiwiU0VSVklDRV9NQUlOVCIsIlNISVBSQVRFX0FETUlOIiwiVEVNUEVYUFJfQURNSU4iLCJVU0VSUFJFRl9BRE1JTiIsIlVUSUxfQ0FDSEVfRURJVCIsIlVUSUxfQ0FDSEVfVklFVyIsIlVUSUxfREVCVUdfRURJVCIsIlVUSUxfREVCVUdfVklFVyIsIlZJU1VBTFRIRU1FX0FETUlOIiwiV0VCVE9PTFNfVklFVyIsIldPUktFRkZPUlRNR1JfQURNSU4iXSwiaWF0IjoxNDY1NDIxNjg1LCJleHAiOjE0NjU1MDgwODV9.cT6dEoYPhnKhd40R1I0FzGm1d8tnhfXWykSoNh1q3Qw'; 
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
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmdWxsQWRtaW5ERUYiLCJwYXNzd29yZCI6IiQyYSQwOCRhZDdYY0RwVmgwd3BudUw5RnFUd1NlY2hOOFFQay9yZDJxOWltR1o1aG12OWdlejQvSTVJUyIsInBhc3N3b3JkSGludCI6bnVsbCwiZW5hYmxlZCI6MSwiZGlzYWJsZWREYXRlIjpudWxsLCJwYXJ0eUlkIjo0LCJjcmVhdGVkRGF0ZSI6IjIwMTYtMDUtMjVUMTU6NTI6MjYuMDAwWiIsInVwZGF0ZWREYXRlIjoiMjAxNi0wNS0yNVQxNTo1MjoyNi4wMDBaIiwic2VjdXJpdHlQZXJtaXNzaW9ucyI6WyJDUk1TRkFfQ0FTRV9DUkVBVEUiLCJBQ0NPVU5USU5HX0FETUlOIiwiQUNDT1VOVElOR19DT01NX1ZJRVciLCJBQ0NPVU5USU5HX1BSSU5UX0NIRUNLUyIsIkFDQ1RHX0FUWF9BRE1JTiIsIkFDQ1RHX0ZYX1VQREFURSIsIkFDQ1RHX1BSRUZfQURNSU4iLCJBUlRJRkFDVF9JTkZPX1ZJRVciLCJBU1NFVE1BSU5UX0FETUlOIiwiQ0FUQUxPR19BRE1JTiIsIkNBVEFMT0dfUFJJQ0VfTUFJTlQiLCJDQVRBTE9HX1BVUkNIQVNFX0FMTE9XIiwiQ0FUQUxPR19WSUVXX0FMTE9XIiwiQ09NTU9OX0FETUlOIiwiQ09OVEVOVE1HUl9BRE1JTiIsIkRBVEFGSUxFX01BSU5UIiwiRUJBWV9WSUVXIiwiRU5USVRZX0RBVEFfQURNSU4iLCJFTlRJVFlfTUFJTlQiLCJFTlRJVFlfU1lOQ19BRE1JTiIsIkVOVU1fU1RBVFVTX01BSU5UIiwiRVhBTVBMRV9BRE1JTiIsIkZBQ0lMSVRZX0FETUlOIiwiR09PR0xFQkFTRV9WSUVXIiwiTEFCRUxfTUFOQUdFUl9WSUVXIiwiTUFOVUFMX1BBWU1FTlQiLCJNQU5VRkFDVFVSSU5HX0FETUlOIiwiTUFSS0VUSU5HX0FETUlOIiwiT0FHSVNfVklFVyIsIk9GQlRPT0xTX1ZJRVciLCJPUkRFUk1HUl9BRE1JTiIsIlBBUlRZTUdSX0FETUlOIiwiUEFZUFJPQ19BRE1JTiIsIlBBWV9JTkZPX0FETUlOIiwiUEVSSU9EX01BSU5UIiwiUFJPSkVDVE1HUl9BRE1JTiIsIlNFQ1VSSVRZX0FETUlOIiwiU0VORF9DT05UUk9MX0FQUExFVCIsIlNFUlZFUl9TVEFUU19WSUVXIiwiU0VSVklDRV9JTlZPS0VfQU5ZIiwiU0VSVklDRV9NQUlOVCIsIlNISVBSQVRFX0FETUlOIiwiVEVNUEVYUFJfQURNSU4iLCJVU0VSUFJFRl9BRE1JTiIsIlVUSUxfQ0FDSEVfRURJVCIsIlVUSUxfQ0FDSEVfVklFVyIsIlVUSUxfREVCVUdfRURJVCIsIlVUSUxfREVCVUdfVklFVyIsIlZJU1VBTFRIRU1FX0FETUlOIiwiV0VCVE9PTFNfVklFVyIsIldPUktFRkZPUlRNR1JfQURNSU4iXSwiaWF0IjoxNDY1NDIxNjg1LCJleHAiOjE0NjU1MDgwODV9.cT6dEoYPhnKhd40R1I0FzGm1d8tnhfXWykSoNh1q3Qw';
        
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
    
});
