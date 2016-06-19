/////////////////////////////////////////////////
// All actions for Contacts module pages.
//
// @file:   ContactsActions.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var ContactsConstants = require('../constants/ContactsConstants');

var ContactsActions = {
    
    getContactsByOwner: function() {
        TitanDispatcher.dispatch({
            actionType: ContactsConstants.GET_MY_CONTACTS
        });
    },
    addContact: function(contact) {
        TitanDispatcher.dispatch({
            actionType: ContactsConstants.ADD_CONTACT,
            data: contact
        });
    },
    getContactById: function(partyId) {
        TitanDispatcher.dispatch({
            actionType: ContactsConstants.GET_CONTACT_BY_ID,
            data: partyId
        });
    },
    getContactsByIdentity: function(identity) {
        TitanDispatcher.dispatch({
            actionType: ContactsConstants.GET_CONTACTS_BY_IDENTITY,
            data: identity
        });
    }
    
};

module.exports = ContactsActions;