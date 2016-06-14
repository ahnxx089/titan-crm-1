/////////////////////////////////////////////////
// All actions for My Contacts page.
//
// @file:   MyContactsActions.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var MyContactsConstants = require('../constants/MyContactsConstants');

var MyContactsActions = {
    
    getContactsByOwner: function() {
        //console.log('In MyContactsAction getContactsByOwner about to send actionType MyContactsConstants.MY_CONTACTS down to dispatcher');
        TitanDispatcher.dispatch({
            actionType: MyContactsConstants.MY_CONTACTS
        });
    }
    
};

module.exports = MyContactsActions;