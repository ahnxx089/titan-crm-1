/////////////////////////////////////////////////
// Common module that supplies current date/time
// in MySQL datetime format
//
// @file:    dateTime.js
// @author:  Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var dateTime = function(){

    var now = (new Date()).toISOString();

    // remove "T", seconds decimals, "Z", and add whitespace in between.
    now = now.substring(0,10) + ' ' + now.substring(11,19);

    return now;

};

module.exports = dateTime;