/////////////////////////////////////////////////
// All actions for Common module pages.
//
// @file:   CommonActions.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

var TitanDispatcher = require('../dispatcher/TitanDispatcher');
var CommonConstants = require('../constants/CommonConstants');

var CommonActions = {
    
    getAllCurrencies: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_ALL_CURRENCIES
        });
    }
    
};

module.exports = CommonActions;