/////////////////////////////////////////////////
// Business logic helper file for all modules writing contact information to new database entries
// Inherits from ContactMechController.
// Intended for use in all modules' addX methods.
//
// @file:   contactInfoHelper.js
// @editor: Eric Brichetto <brichett13@gmail.com>
// @author: William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////
var contactMechController = require('../contactMechController');

var addContactMechCallback = function (addContactMechPromises, contactMechEntities, partyId) {
    if (addContactMechPromises.length > 1) {
        var promise = addContactMechPromises.pop();
        var contactMech = contactMechEntities.pop();
        var purposeTypeId = contactMech.contactMechPurposeTypeId;
        return promise.then(function (contactMechId) {
            return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                .then(function () {
                    return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                });
        });
    } else {
        var promise = addContactMechPromises.pop();
        var contactMech = contactMechEntities.pop();
        var purposeTypeId = contactMech.contactMechPurposeTypeId;
        return promise.then(function (contactMechId) {
            return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                .then(function () {
                    return partyId;
                });
        });
    }
};

module.exports = addContactMechCallback;