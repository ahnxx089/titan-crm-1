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
    }
    
};

module.exports = ContactsActions;