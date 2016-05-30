/////////////////////////////////////////////////
// Jasmine spec (test suite) for Case APIs.
//
// @file:   caseApiSpec.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

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
    
});
