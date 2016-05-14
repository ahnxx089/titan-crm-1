/////////////////////////////////////////////////
// Routes for the API layer.
//
// @file:   apiRoutes.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var express  = require('express');
var apiRouter = express.Router();

var router = function(knex) {
    // PARTIES
    // ==========================================
    // Configure router
    var partyApi = require('../api/partyApi')(knex);
    apiRouter.use(partyApi.middleware);
    // Define routes
    apiRouter.route('/parties')
        .get(partyApi.getParties)
        .post(partyApi.addParty);
    apiRouter.route('/parties/:id')
        .get(partyApi.getPartyById)
        .put(partyApi.updateParty)
        .delete(partyApi.deleteParty);
    
    return apiRouter;
};

module.exports = router;