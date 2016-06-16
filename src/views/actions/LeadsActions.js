/////////////////////////////////////////////////
// All actions for Leads module pages.
//
// @file:   LeadsActions.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

var TitanDispatcher = require('../dispatcher/TitanDispatcher');
//var LeadsConstants = require('../constants/LeadsConstants'); // not

var LeadsActions = {
    
    getLeadsByOwner: function() {
        TitanDispatcher.dispatch({
            actionType: LeadsConstants.GET_MY_LEADS
//            actionType: 'GET_MY_LEADS'

        });
    }
    
};

module.exports = LeadsActions;