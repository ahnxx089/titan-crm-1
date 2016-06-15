/////////////////////////////////////////////////
// Data access layer module for cases.
//
// @file:    caseData.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxlen: false */

//var _ = require('lodash'); // not used anymore

var caseData = function (knex) {

    // Lucas wrote this
    /**
     * Add a new case in the database:  
     * @param {Object} case_ - The new case entity to be added 
     * @return {Object} promise - Fulfillment value is id of row inserted (in other words, case id)
     */
    var addCase = function (case_, user) {
        
        /*
        return knex('case_')
            .returning('case_id')
            .insert({
            case_type_id: case_.caseTypeId, case_category_id: case_.caseCategoryId,             
            status_id: case_.statusId, from_party_id: case_.fromPartyId, priority: case_.priority,
            case_date: case_.caseDate, response_required_date: case_.responseRequiredDate,
            case_name: case_.caseName, description:case_.description, resolution_id: case_.resolutionId,
            created_by: case_.createdBy, created_date: case_.createdDate, updated_date: case_.updatedDate
        }).then(function (cid1) {
            return cid1;
        });
        */
        
        
        return knex('case_')
            .returning('case_id')
            .insert({
            // for case_ table
            case_type_id: case_.caseTypeId, case_category_id: case_.caseCategoryId,             
            status_id: case_.statusId, from_party_id: case_.fromPartyId, priority: case_.priority,
            case_date: case_.caseDate, response_required_date: case_.responseRequiredDate,
            case_name: case_.caseName, description:case_.description, resolution_id: case_.resolutionId,
            created_by: case_.createdBy, created_date: case_.createdDate, updated_date: case_.updatedDate
        }).then(function (cid) {
            return knex.select('role_type_id')
                .from('party_role')
                .where('party_id', case_.fromPartyId)
                /*.then(function (rows) {
                return _.map(rows, 'role_type_id');
                // _.pluck, which is used in knex.org, is no longer supported in lodash v4+
            })*/
                .then(function (rtids) {
//                console.log(rtids);
//                Object.values() function is not supported Node yet
                
                // for case_role table
                return knex('case_role')
                    .insert({
                    case_id: cid,
                    party_id: case_.fromPartyId, 
                    role_type_id: /*rtids[0].role_type_id*/ 'CONTACT',
                    // HARD CODED. can be account as well
                    // Anurag explained this design. Stick with it. 
                    // This design is letting anyone in party_role table, regardless of his type, add a case.
                    // However, Opentaps only allows a CONTACT or ACCOUNT to do so.
                    created_date: case_.createdDate,
                    updated_date: case_.updatedDate
                }).then(function() {
                    return knex('case_status')
                        .insert({
                        case_id: cid,
                        status_id: case_.statusId,
    //                    status_datatime: case_.createdDate,
                        created_date: case_.createdDate,
                        updated_date: case_.updatedDate
                    }).then(function() {
                        // this is CRUCIAL, as this will become the 3rd param of addNoteCallback()
                        return cid;
                    });
                });
            });
        });
        
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
    var getCasesByAdvanced = function (subject, priority, status, type) {
        return knex.select('case_.case_id', 'case_.case_type_id', 'case_.case_category_id', 'case_.status_id', 'case_.from_party_id', 'case_.priority', 'case_.case_date', 'case_.response_required_date', 'case_.case_name', 'case_.description', 'case_.resolution_id', 'case_.created_by', 'case_.created_date', 'case_.updated_date')
            .from('case_')
            .innerJoin('status_item', 'case_.status_id', 'status_item.status_code')
            .where('case_.case_name',subject)
            .where('case_.priority', priority)
            .where('status_item.status_code', status)
            .where('case_.case_type_id', type);
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
                //from_party_id: case_.fromPartyId, //is this createdBy?
                priority: case_.priority,
                case_date: case_.caseDate,
                response_required_date: case_.responseRequiredDate,
                case_name: case_.caseName,
                description: case_.description,
                resolution_id: case_.resolutionId,
                created_by: case_.createdBy,
                //created_date: case_.createdDate,
                updated_date: case_.updatedDate
        });
    };

    /**
     * Delete a case from database
     * @param {Number} caseId - Unique id of the case to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
var deleteCase = function (case_) {
        return knex('case_')
            .where({case_id: case_.caseId})
            .delete({
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
