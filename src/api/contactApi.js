/////////////////////////////////////////////////
// RESTful API module for contacts.
//
// @file:    contactApi.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint shadow:true */

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
    // POST /api/contacts
    var addContact = function (req, res) {
        var contact = req.body;
        var user = req.user;
        var userSecurityPerm = req.user.securityPermissions;

        var resultsForThisUser = contactController.addContact(contact, user);

        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to add contacts!'
            });
        } else {
            resultsForThisUser.then(function (contactPartyId) {
                res.json({
                    contactPartyId: contactPartyId
                });
            });
        }
    };

    // GET /api/contacts
    // 
    // Methods:  getContactsByOwner, getContactsByIdentity, getContactsByPhoneNumber
    //
    var getContacts = function (req, res) {

        // getContactsByOwner:  The default if no query strings for identity or phone number
        //
        if (Object.keys(req.query).length === 0) {

            var resultsForThisUser = contactController.getContactsByOwner(req.user);
            // IF ELSE block interprets controller returning an object or null
            if (resultsForThisUser === null) {
                res.json({
                    'message': 'You do not have permission to own contacts!'
                });
            } else {
                resultsForThisUser.then(function (contacts) {
                    res.json({
                        'contacts': contacts
                    });
                });
            }
        }

        // GET /api/contacts?firstName=&lastName=
        //
        // getContactsByIdentity: ELSE IF ensures there is only one response to API layer!
        //                        See: http://www.ofssam.com/forums/showthread.php?tid=43 
        //
        //  The search is inclusive, returning any contacts this user owns matching whichever
        //  supplied portion of either the firstName or lastName.  Corresponds to:
        //  WHERE person.first_name LIKE "%firstName%" OR person.last_name LIKE "%lastName%"
        //
        else if (req.query.hasOwnProperty('firstName') || req.query.hasOwnProperty('lastName')) {

            var resultsForUser = contactController.getContactsByIdentity(req.query, req.user);
            if (resultsForUser === null) {
                res.json({
                    'message': 'You do not have permission to get contacts by the supplied queries!'
                });
            } else {
                resultsForUser.then(function (contacts) {
                    res.json({
                        'contacts': contacts
                    });
                });
            }
        }

        // GET /api/contacts?phoneNum=
        //
        //else if (INSERT LOGIC HERE){
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
