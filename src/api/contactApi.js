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

    // *** FOR DISCUSSION:  WHAT OTHER METHODS DO WE NEED?
    // (compare to leads, compare to opentaps...)
    //
    // API methods
    // ==========================================
    //
    // POST /api/
    var addContact = function (req, res) {

    };


    // GET /api/contacts/:id
    var getContactById = function (req, res) {

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
        getContactById: getContactById,
        updateContact: updateContact,
        deleteContact: deleteContact
    };
};

module.exports = contactApi;
