/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:    caseData.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var caseData = function (knex) {

    /**
     * Add a new case in the database:  
     * @param {Object} case_ - The new case entity to be added 
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addCase = function (case_, user) {

    };

    /**
     * Gets one case by its id from database
     * @param {Number} caseId - Unique id of the case to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getCaseById = function (id) {

    };

    /** -- NOT FULLY IMPLEMENTED YET, IS BASED ON MY CURRENT UNDERSTANDING OF HOW A CASE IS OWNED,
     *      COMPARING TO OPENTAPS:
     *      -- In table case_role, there will be two rows with the same case_id.
     *      -- In the row with role_type_id = 'PERSON_ROLE', party_id is for the owner/user
     *      -- In the other row with the same case_id, party_id is the Lead or Contact who the
     *          case was created for.  Strictly speaking that other row is not needed to answer
     *          this question of which cases does this user own
     * Gets all case from database for the user/owner making this GET request
     * @param {Number} ownerId - Unique party_id of the user/owner whose cases to be fetched
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getCasesByOwner = function (ownerId) {
        return knex.select('case_role.case_id')
            .from('case_')
            .innerJoin('case_role', 'case_.case_id', 'case_role.case_id')
            .where('case_role.role_type_id', 'PERSON_ROLE')
            .andWhere('case_role.party_id', ownerId);

    };

    /** 
     * Gets all cases from database by advanced search
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getCasesByAdvanced = function () {

    };

    /**
     * Update a case in database
     * @param {Object} case - The case entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateCase = function (case_) {

    };

    /**
     * Delete a case from database
     * @param {Number} caseId - Unique id of the case to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteCase = function (caseId) {

    };

    return {
        addCase: addCase,
        getCaseById: getCaseById,
        getCasesByOwner: getCasesByOwner,
        getCasesByAdvanced: getCasesByAdvanced,
        updateCase: updateCase,
        deleteCase: deleteCase
    };

};

module.exports = caseData;
