/////////////////////////////////////////////////
// RESTful API module for contacts.
//
// @file:    contactApi.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

var contactApi = function (knex) {

    // Get a reference to data layer module
    //
    var contactController = require('../controllers/contactController')(knex);

    // MIDDLEWARE IS DEACTIVATED FOR NOW...
    // Set up middleware to validate incoming requests
    //
    var middleware = function (req, res, next) {
        next();
    };

    // API methods
    // ==========================================
    //
    // POST /api/  -- IN DEVELOPMENT
    var addContact = function (req, res) {

    };

    // GET /api/contacts
    // 
    // Methods:  there are two specific methods for getting Contacts using 
    // this route /api/contacts/ 
    // They are handled in this "meta" function called getContacts()
    // with IF blocks that test whether the user entered a query string
    // seeking to get Contacts by Owner, by Identity or other ways
    // (besides getContactById, which is on a separate route).
    var getContacts = function (req, res) {

        // DINESH'S DIAGNOSTICS (COMMENTED OUT, PLEASE DO NOT DELETE FOR NOW)
        // Shows req.user.securityPermissions contains this user's one or more security permissions.
        //console.log('\nin contactApi.getContacts: req.user.userID = ', req.user.userId);
        //console.log('in contactApi.getContacts: req.user.partyID = ', req.user.partyId);
        //console.log('in contactApi.getContacts: req.user.securityPermissions = ', req.user.securityPermissions);

        // GET /api/contacts?owner
        //
        // getContactsByOwner:  an IF block triggers it if a query by owner has been made
        // 
        // REMINDER:  We do not use the query string to identify the owner/user who is making
        // this request.  See:  http://www.ofssam.com/forums/showthread.php?tid=37
        // With an api route of: /api/contacts?owner the result is req.query = { owner: '' }.
        // It is fine that property 'owner' is an empty string; what matters is that 
        // req.query HAS a property 'owner'.  It gets that property when route is /api/contacts?owner
        // That is how the IF block triggers.
        //
        // For a user with valid token, at this point req.user.securityPermissions = 
        // [ 'FULLADMIN' ] or [ 'CONTACT_OWNER' ] or [ 'PARTY_ADMIN' ] (all of which are
        // security permissions that the owner of a Contact might have.)  
        // By contrast and for reasons I cannot explain or figure out, a user with a valid
        // token but whose security permission is, e.g., LEAD_OWNER and does not have 
        // contact owner permission, req.user.securityPermission comes in as an empty array.
        // And yes, that is for a user whose entry in the party_role table has them listed
        // as a LEAD_OWNER.  Why would their security permission not make it in even to
        // the API layer?  I do not know. For getContactsByOwner, I deal with 
        // req.user.securityPermissions being an empty array in the controller layer.        
        //
        if (req.query.hasOwnProperty('owner')) {
            var ownerId = req.user.partyId;
            var userSecurityPerm = req.user.securityPermissions;
            contactController.getContactsByOwner(ownerId, userSecurityPerm)
                .then(function (contacts) {
                    res.json(contacts);
                });
        }

        // *** DINESH HAS NOT IMPLEMENTED YET:  getContactsByIdentity
        //
        // GET /api/contacts?identity
        //if ( req.query.WHAT??? ) {
        //    contactController.getContactsByIdentity()
        //        .then(function (contacts) {
        //            res.json(contacts);
        //        });
        //}

        // GET /api/contacts?phoneNum
        //if (INSERT LOGIC HERE){
        //     var getContactByPhoneNum = function (req, res) {
        //
        //    };  
        //}

        // If the request did not properly pass any of the various if tests
        // above, it is not a valid query, make the reponse null.
        else {
            res.json(null);
        }
    };

    // GET /api/contacts/:id
    //Muhammad 
    var getContactById = function (req, res) {
        var contactId = req.params.id;
        contactController.getContactById(contactId)
            .then(function (contact) {
                res.json(contact);
                //Or should this be:  res.json(lead);
            });
    };

    // PUT /api/contacts/:id
    var updateContact = function (req, res) {
        var contactId = req.params.id;
        var contact = req.body;
        contactController.updateContact(contactId, contact)
            .then(function (result) {
                res.json({
                    updated: result
                });
            });
    };

    // DELETE /api/contacts/:id
    var deleteContact = function (req, res) {
        var contactId = req.params.id;
        contactController.deleteContact(contactId)
            .then(function (result) {
                res.json({
                    deleted: result
                });
            });
    };

    return {
        middleware: middleware,
        addContact: addContact,
        getContacts: getContacts,
        getContactById: getContactById,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactApi;
