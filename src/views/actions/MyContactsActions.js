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
        TitanDispatcher.dispatch({
            actionType: MyContactsConstants.MY_CONTACTS
        });
    }
    
};

module.exports = MyContactsActions;