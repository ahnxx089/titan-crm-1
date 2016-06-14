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
        //console.log('In MyContactsAction getContactsByOwner about to send actionType MyContactsConstants.MY_CONTACTS down to dispatcher');
        TitanDispatcher.dispatch({
            actionType: ContactsConstants.GET_MY_CONTACTS
        });
    }
    
};

module.exports = ContactsActions;