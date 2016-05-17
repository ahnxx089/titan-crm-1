/////////////////////////////////////////////////
// RESTful API module for contact mechanisms.
//
// @file:    contactMechApi.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

var contactMechApi = function (knex) {

    // Get a reference to data layer module
    //
    var contactMechController = require('../controllers/contactMechController')(knex);

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
    var updateContactMech = function (req, res) {

    };

    // DELETE /api/contacts/:id
    var deleteContactMech = function (req, res) {

    };

    return {
        middleware: middleware,
        addContactMech: addContactMech,
        getContactMechById: getContactMechById,
        updateContactMech: updateContactMech,
        deleteContactMech: deleteContactMech
    };
};

module.exports = contactApi;
