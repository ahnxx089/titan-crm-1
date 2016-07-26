/////////////////////////////////////////////////
// Common module that supplies current date/time
// in MySQL datetime format and fixes up existing
// ones in our db prior to Azure deployment
//
// @file:    dateTime.js
// @author:  Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var dateTime = function(){

    var now = function(){
        var rightNow = (new Date()).toISOString();
        // remove "T", seconds decimals, "Z", and add whitespace in between.
        return rightNow.substring(0,10) + ' ' + rightNow.substring(11,19);
    };

    var fixDTFormat = function(dateTimeString) {
        var fixed = dateTimeString.substring(0,10) + ' ' + dateTimeString.substring(11,19);
        return ( fixed === ' ' ) ? '' : fixed ;
    };

    return {
        now: now,
        fixDTFormat: fixDTFormat
    };

};

module.exports = dateTime;