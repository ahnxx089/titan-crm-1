/////////////////////////////////////////////////
// Routes for the API layer.
//
// @file:   apiRoutes.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

var express = require('express');
var apiRouter = express.Router();
var app = express();
var jwt = require('jsonwebtoken');

var router = function (knex) {
    // AUTH
    // ==========================================
    // Comes before the middleware because we need it unsecured
    apiRouter.route('/authenticate').post(function (req, res) {
        var authController = require('../controllers/authController')(knex);
        authController.verifyLoginCredentials(req.body.userId, req.body.password, res);
    });

    // MIDDLEWARE
    // ==========================================
    // Makes sure all requests to our APIs are authenticated
    apiRouter.use(function (req, res, next) {
        //if(req.url !== '/authenticate') {
        // Authenticate the request
        var authController = require('../controllers/authController')(knex);
        authController.authenticateRequest(req, res, next);
        //}
    });


    // USERS
    // ==========================================
    var userApi = require('../api/userApi')(knex);
    apiRouter.route('/users')
        .post(userApi.addUser);
    apiRouter.route('/users/:id')
        .get(userApi.getUserById)
        .put(userApi.updateUser)
        .delete(userApi.deleteUser);


    // PARTIES
    // ==========================================
    var partyApi = require('../api/partyApi')(knex);
    apiRouter.route('/parties')
        .get(partyApi.getParties)
        .post(partyApi.addParty);
    apiRouter.route('/parties/:id')
        .get(partyApi.getPartyById)
        .put(partyApi.updateParty)
        .delete(partyApi.deleteParty);
    
    // LEADS, 7 in total: 1 post, 4 gets, 1 put, 1 delete
    var leadApi = require('../api/leadApi')(knex);
    apiRouter.route('/leads')
        .post(leadApi.addLead); // post only! NOT implemented yet
    apiRouter.route('/leads/:id')
        .get(leadApi.getLeadById);
        //.post(leadApi.updateLead)
        //.delete(leadApi.deleteLead);
    
    
//        getLeadsByOwner, getLeadsByIdentity, getLeadsByPhoneNumber are not implemented yet
    
    

    // CONTACTS
    // ==========================================
    var contactApi = require('../api/contactApi')(knex);
    apiRouter.route('/contacts')
        .get(contactApi.getContacts)
        .post(contactApi.addContact);
    apiRouter.route('/contacts/:id')
        .get(contactApi.getContactById)
        .put(contactApi.updateContact)
        .delete(contactApi.deleteContact);
    apiRouter.route('/contactsByOwner/:owner')
        .get(contactApi.getContactsByOwner);

    return apiRouter;
};

module.exports = router;
