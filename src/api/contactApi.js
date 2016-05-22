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

    // GET /api/contacts/
    var getContacts = function (req, res) {
        contactController.getContacts()
            .then(function (contacts) {
                res.json(contacts);
            });
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

    // GET /api/contactsByOwner/:owner
    var getContactsByOwner = function (req, res) {
        var ownerId = req.params.owner;
        contactController.getContactsByOwner(ownerId)
            .then(function (contacts) {
                res.json(contacts);
            });
    };

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
        getContactsByOwner: getContactsByOwner,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactApi;
