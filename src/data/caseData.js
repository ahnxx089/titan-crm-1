/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:    caseData.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxlen: false */

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
        return knex.select('case_id', 'case_type_id', 'case_category_id', 'status_id', 'from_party_id', 'priority', 'case_date', 'response_required_date', 'case_name', 'description', 'resolution_id', 'created_by', 'created_date', 'updated_date')
            .from('case_')
            .where({case_id: id});
    };

    /** 
     * Gets all cases from database for the user/owner making this GET request
     * @param {Number} userLoginId - Unique party_id of the user/owner whose cases to be fetched
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getCasesByOwner = function (userLoginId) {
        return knex.select('case_.case_id', 'case_.case_type_id', 'case_.case_category_id', 'case_.status_id', 'case_.from_party_id', 'case_.priority', 'case_.case_date', 'case_.response_required_date', 'case_.case_name', 'case_.description', 'case_.resolution_id', 'case_.created_by', 'case_.created_date', 'case_.updated_date')
            .from('case_')
            .innerJoin('user_login', 'case_.created_by', 'user_login.user_login_id')
            .where('user_login.user_login_id', userLoginId);
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
        return knex('case_')
            .where({case_id: case_.caseId})
            .update({
                case_id: case_.caseId,
                case_type_id: case_.caseTypeId,
                case_category_id: case_.caseCategoryId,
                status_id: case_.statusId,
                from_party_id: case_.fromPartyId,
                priority: case_.priority,
                case_date: case_.caseDate,
                response_required_date: case_.responseRequiredDate,
                case_name: case_.caseName,
                description: case_.description,
                resolution_id: case_.resolutionId,
                created_by: case_.createdBy,
                created_date: case_.createdDate,
                updated_date: case_.updatedDate
        });
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
