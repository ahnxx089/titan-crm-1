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

    // API methods
    // ==========================================
    //
    // POST /api/contacts
    var addContact = function (req, res) {
        var contact = req.body;
        var user = req.user;
        var userSecurityPerm = req.user.securityPermissions;

        var resultsForThisUser = contactController.addContact(contact, user);

        /* Intepret the possible outcomes from the controller layer:
            1.  User does not have permission to add a Contact
            2.  User does have permission, but supplied data is not validated
            3.  User does have permission, and a promise is returned
        */
        // null result means user does not have permission to add a Contact
        if (resultsForThisUser === null) {
            res.json({
                message: 'You do not have permission to add contacts!'
            });
        }
        // An array in result means it's array of validation errors
        else if (Object.prototype.toString.call(resultsForThisUser) === '[object Array]') {
            res.json(resultsForThisUser);
        }
        // An object in result means it's a promise (returned only if validation succeeds)
        else {
            resultsForThisUser.then(function (partyId) {
                res.json({
                    partyId: partyId
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
                    res.json(contacts);
                });
            }
        }

        // GET /api/contacts?firstName=&lastName=
        //
        // getContactsByIdentity: ELSE IF ensures there is only one response to API layer!
        //                        See: http://www.ofssam.com/forums/showthread.php?tid=43 
        //
        // *** DINESH, REPAIR THIS COMMENT ONCE WORKING DOWN BELOW ***
        //  If both a firstName and lastNa, returning any contacts this user owns matching whichever
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
                    res.json(contacts);
                });
            }
        }

        // GET /api/contacts?phoneNum=
        else if (req.query.hasOwnProperty('phoneNumber')) {

            var getContactByPhoneNumber = function (req, res) {
                var contactId = req.params.id;
                contactController.getContactByPhoneNumber(contactId)
                    .then(function (contact) {
                        res.json(contact);
                    });
            };
        }
    };

    // GET /api/contacts/:id
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
        var user = req.user;
        var contact = req.body;
        contactController.updateContact(contactId, contact, user)
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
        addContact: addContact,
        getContacts: getContacts,
        getContactById: getContactById,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactApi;
