/////////////////////////////////////////////////
// All actions for home page.
//
// @file:   HomeActions.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var AccountsConstants = require('../constants/AccountsConstants');

var AccountsActions = {
    getAccountsByOwner: function () {
        TitanDispatcher.dispatch({
            actionType: AccountsConstants.GET_MY_ACCOUNTS
        });
    },
    
    addAccount: function (id) {
        TitanDispatcher.dispatch({
            actionType: AccountsConstants.ADD_ACCOUNT,
            id: id
        }); //Not fully assured that an id is the appropriate property to be 
        //sending along to the dispatcher for an add function - TODO - revisit 
    }
};

module.exports = AccountsActions;
