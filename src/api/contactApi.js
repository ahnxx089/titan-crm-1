/////////////////////////////////////////////////
// RESTful API module for contacts.
//
// @file:   contactApi.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
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
    // POST /api/
    var addContact = function (req, res) {

    };

    // GET Methods:  there are several specific methods for
    // getting Contacts using the route /api/contacts/ 
    // They are handled in this function
    var getContacts = function (req, res) {

        /* The if blocks test for whether the user entered a query string
            seeking to get Contacts by Owner, by Identity or other ways
            (besides getContactById, which is on a separate route).
           
            Note:  there no longer is a general getContacts()
            function to get all contacts, that was just for initial testing.
            Once user authorization is implemented, the only user who should
            be able to get ALL Contacts regardless of Owner will be user:admin, 
            and admin will use getContactsByOwner() for that... that might require
            re-writing contactData.getContactsByOwner, but that is the
            plan for now.
        */

        // GET /api/contacts?owner=
        //
        // This if block triggers if a query by owner has been made.
        if (req.query.owner) {
            var ownerId = req.query.owner;
            contactController.getContactsByOwner(ownerId)
                .then(function (contacts) {
                    res.json(contacts);
                });
        }

        // *** DINESH HAS NOT IMPLEMENTED YET:  getContactsByIdentity
        //
        // GET /api/contacts?IDENTITY=   <--- WORK OUT THIS QUERY STRING!
        //if ( req.query.WHAT??? ) {
        //    contactController.getContactsByIdentity()
        //        .then(function (contacts) {
        //            res.json(contacts);
        //        });
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

    /* DINESH IS ELIMINATING THIS SOON:
    // GET /api/contactsByOwner/:owner
    // NOTE: req.query looks for a query string of ?
    var getContactsByOwner = function (req, res) {
        var ownerId = req.query.owner;
        contactController.getContactsByOwner(ownerId)
            .then(function (contacts) {
                res.json(contacts);
            });
    };*/

    // GET /api/contacts/:<name?>
    // FIRST NAME? LAST NAME?
    // BILL-- let it take many variables 
    var getContactByName = function (req, res) {

    };

    // GET /api/contacts/:phoneNum
    var getContactByPhoneNum = function (req, res) {

    };

    // GET /api/contacts/:advanced
    var getContactByAdvanced = function (req, res) {

    };

    // GET /api/contacts/:addressinfo
    // CITY?  COUNTRY?  STATE/PROVINCE? POSTAL CODE
    var getContactByAddressInfo = function (req, res) {

    };
    // PUT /api/contacts/:id
    var updateContact = function (req, res) {

    };

    // DELETE /api/contacts/:id
    var deleteContact = function (req, res) {

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
