/////////////////////////////////////////////////
// Business logic module for cases.
//
// @file:    caseController.js
// @author:  Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxcomplexity: false */

var winston = require('winston');
var Case = require('../entities/case');
var User = require('../entities/user');

var caseController = function (knex) {
    // Get a reference to data layer module
    //
    var caseData = require('../data/caseData')(knex);

    // CONTROLLER METHODS
    // ==========================================
    //

    /**
     * Add a new case  
     * @param {Object} case - The new case to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new case
     */
    var addCase = function (case_, user) {

    };

    /**
     * Gets one case by its id
     * @param {Number} caseId - Unique id of the case to be fetched
     * @return {Object} promise - Fulfillment value is a case entity
     */
    var getCaseById = function (caseId) {

    };

    /**
     * Gets case owned by the user/owner
     * @return {Object} promise - Fulfillment value is an array of case entities
     */
    var getCasesByOwner = function (user) {
        
        // PENDING SATURDAY'S CREATION OF MORE FLEXIBLE CHECKING OF SECURITY, FOR NOW
        // JUST SHORT-CIRCUIT CHECKING SECURITY PERMISSION, GET ON TO DATA LAYER
        var hasPermission = true;

        if (hasPermission) {
            // user has permission, proceed to the data layer
            var promise = caseData.getCasesByOwner(user.userId)
                .then(function (cases) {

                    // Map the retrieved result set to corresponding entities
                    var caseEntities = [];
                    for (var i = 0; i < cases.length; i++) {
                        var case_ = new Case(
                            cases[i].case_id,
                            cases[i].case_type_id,
                            cases[i].case_category_id,
                            cases[i].status_id,
                            cases[i].from_party_id,
                            cases[i].priority,
                            cases[i].case_date,
                            cases[i].response_required_date,
                            cases[i].case_name,
                            cases[i].description,
                            cases[i].resolution_id,
                            cases[i].created_by,
                            cases[i].created_date,
                            cases[i].updated_date
                        );
                        caseEntities.push(case_);
                    }
                    return caseEntities;
                });
            promise.catch(function (error) {
                // Log the error
                winston.error(error);
            });
            return promise;            
        } else {
            // user does not have permissions of a contact owner, return null
            return null;
        }
        
    };

    /** 
     * Gets cases by advanced search
     * @param {String} SOME ARGUMENT - DESCRIPTION OF THAT ARGUMENT
     * @return {Object} promise - Fulfillment value is an array of case entities
     */
    var getCasesByAdvanced = function ( ) {

    };

    /**
     * Update a case in database
     * @param {Number} caseId - Unique id of the case to be updated
     * @param {Object} case_ - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateCase = function (caseId, case_) {
        
        
    };

    /**
     * Delete a case
     * @param {Number} caseId - Unique id of the case to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteCase = function (caseId) {

    };

    return {
        getCaseById: getCaseById,
        getCasesByOwner: getCasesByOwner,
        getCasesByAdvanced: getCasesByAdvanced,
        addCase: addCase,
        updateCase: updateCase,
        deleteCase: deleteCase
    };
};

module.exports = caseController;
