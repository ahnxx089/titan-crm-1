/////////////////////////////////////////////////
// Our own custom validation module.
// Based on "validator" package.
//
// @file:   validation.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var validator = require('validator');

var validation = function () {

    // SANITIZATION METHODS
    // ==========================================
    //
    var sanitizeInput = function (input) {
        if (input) {
            input += ''; // convert to string ("validator" works only with strings)
            input = validator.trim(input);
        } else {
            input = null; // get rid of empty string or "undefined"
        }
        return input;
    };

    var convertToInt = function (str) {
        return validator.toInt(str);
    };


    // VALIDATION METHODS
    // ==========================================
    //
    var validateInt = function (input, isRequired, label) {
        if (isRequired && !input) {
            return label + ' is required.';
        }
        if (input) {
            if (!validator.isInt(input)) {
                return label + ' must be an integer.';
            }
        }
        return '';
    };

    var validateString = function (input, isRequired, maxLen, label) {
        if (isRequired && !input) {
            return label + ' is required.';
        }
        if (input) {
            if (!validator.isByteLength(input, {
                    min: 1,
                    max: maxLen
                })) {
                return label + ' must be less than ' + maxLen + ' characters.';
            }
        }
        return '';
    };

    var validateDate = function (input, isRequired, label) {
        if (isRequired && !input) {
            return label + ' is required.';
        }
        if (input) {
            if (!validator.isDate(input)) {
                return label + ' must be a valid date.';
            }
        }
        return '';
    };


    return {
        sanitizeInput: sanitizeInput,
        convertToInt: convertToInt,
        validateInt: validateInt,
        validateString: validateString,
        validateDate: validateDate
    };

};

module.exports = validation;