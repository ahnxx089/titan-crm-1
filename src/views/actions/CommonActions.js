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
    },
    
    getAllStatesOrProvinces: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_ALL_STATES_OR_PROVINCES
        });
    },
    
    getAllCountries: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_ALL_COUNTRIES
        });
    },
    
    getQuoteTypes: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_QUOTE_TYPES
        });
    },

    getAccountParties: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_ACCOUNT_PARTIES
        });
    },

    getContactParties: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_CONTACT_PARTIES
        });
    },

    getSalesChannels: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_SALES_CHANNELS
        });
    },
    
    getOwnerships: function() {
        TitanDispatcher.dispatch({
            actionType: CommonConstants.GET_ALL_OWNERSHIPS
        });
    }
};

module.exports = CommonActions;