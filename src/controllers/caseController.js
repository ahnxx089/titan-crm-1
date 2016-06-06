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
var User = require('../entities/user');// is this ever used?
var Note = require('../entities/note');
var _ = require('lodash');

var caseController = function (knex) {
    // Get a reference to data layer module
    //
    var caseData = require('../data/caseData')(knex);
    var noteData = require('../data/noteData')(knex);
    var noteController = require('../controllers/noteController')(knex);
    
    // CONTROLLER METHODS
    // ==========================================
    //
    
    
    // Lucas wrote this
    /**
     * For each (and the only) promise delivered by addNote,
     * create entry in case_note table
     * and chain all promises together with .then()
     * @param {object} addNotePromises - An array of promises each of which is returned by noteController.addNote
     * @param {object} intenalNoteEntity - The single internal note entity to be linked
     * @param {object} caseId - The Id of the case to be linked to these notes
     * @return {object} caseId - Fulfillment value is the id of the case that is linked
     */
    var addNoteCallback = function (addNotePromises, intenalNoteEntity, caseId) {
        var promise;
        
        /*param 1*/
        promise = addNotePromises.pop();
        
        /*param 2*/
        
        return promise.then(function (noteId) {
            return noteController.linkNoteToCase(caseId, noteId)
                .then(function () {
                return caseId;
            });
        });
        //}
    };
    
    
    
    // Lucas wrote this
    /**
     * Add a new case  
     * @param {Object} case_ - The new case to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new case
     */
    var addCase = function (case_, user) {
//        console.log('in case controller A');
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CASE_CREATE');
        if (hasPermission !== -1) {
            var now = (new Date()).toISOString();
            // Convert the received objects into entities (protect the data layer)
            //
            // Notes
            var intenalNoteEntity;
            if (case_.intenalNote) {
                intenalNoteEntity = new Note(
                    null,
                    case_.intenalNote, 
                    case_.intenalNote, 
                    now, 
                    case_.fromPartyId, 
                    now, 
                    now
                );
            }
            
            var caseEntity = new Case(
//                case_.caseId,
                null,
                case_.caseTypeId,
                case_.caseCategoryId,
                case_.statusId,
                case_.fromPartyId,
                case_.priority,
//                case_.caseDate,
                now,
//                case_.responseRequiredDate,
                now,
                case_.caseName,
                case_.description,
                case_.resolutionId,
                case_.createdBy,
                now,
                now
//                case_.createdDate,
//                case_.updatedDate
            );
//            console.log('in case controller B');

            // Validate the data before going ahead
            var validationErrors = caseEntity.validateForInsert();
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer. Insert new case_, get the promise first
                var promise = caseData.addCase(caseEntity);
                
                // if there is a field called internalNote
                if(intenalNoteEntity){
                    var addNotePromises = [];
                    var notePromise;
                    notePromise = noteController.addNote(intenalNoteEntity);
                    // Make sure we have promise,
                    // and not array of errors
                    if ('then' in notePromise) {
                        addNotePromises.push(notePromise);
                    }
                    if (addNotePromises.length > 0) {
                        promise.then(function (caseId) {
                            return addNoteCallback(addNotePromises, intenalNoteEntity, caseId);
                        });
                        promise.catch(function (error) {
                            winston.error(error);
                        });
                    }
                    // if there isn't such internalNote
                    else {
                        promise.then(function (caseId) {
                            return caseId;
                        });
                        promise.catch(function (error) {
                            winston.error(error);
                        });
                    }
                }
                return promise;
            } else {
                return validationErrors;
            }
        } else {
            return null;
        }
    };

    /**
     * Gets one case by its id
     * @param {Number} caseId - Unique id of the case to be fetched
     * @return {Object} promise - Fulfillment value is a case entity
     */
    var getCaseById = function (caseId) {
        var promise = caseData.getCaseById(caseId)
            .then(function (caseResult) {
                var caseEntity;
                if (caseResult.length > 0) {
                    caseEntity = new Case(
                        caseResult[0].case_id,
                        caseResult[0].case_type_id,
                        caseResult[0].case_category_id,
                        caseResult[0].status_id,
                        caseResult[0].from_party_id,
                        caseResult[0].priority,
                        caseResult[0].case_date,
                        caseResult[0].response_required_date,
                        caseResult[0].case_name,
                        caseResult[0].description,
                        caseResult[0].resolution_id,
                        caseResult[0].created_by,
                        caseResult[0].created_date,
                        caseResult[0].updated_date
                    );
                }
                return caseEntity;
            });
        promise.catch(function (errors) {
            winston.error(errors);
        });
        return promise; //this return value is the caseEntity corresponding to specified caseId input
    };

    /**
     * Gets case owned by the user/owner
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is an array of case entities
     */
    var getCasesByOwner = function (user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CASE_CREATE');
        if (hasPermission !== -1) {
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
            // user does not have permissions of a case owner, return null
            return null;
        }
    };

    /** 
     * Gets cases by advanced search
     * @param {String} SOME ARGUMENT - DESCRIPTION OF THAT ARGUMENT
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is an array of case entities
     */
    var getCasesByAdvanced = function (query, user) {
        //Check security permission of user
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CONTACT_CREATE');
        if (hasPermission !== -1) {
           /* /api/cases?subject=
              /api/cases?priority=
              /api/cases?status=
              /api/cases?type=
              If block set these things
           */
            var subject = query.subject;
            var priority = query.priority;
            var status = query.status;
            var type = query.type;
            var promise = caseData.getCasesByAdvanced(subject, priority, status, type)
                .then(function (cases) {
                    
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
            // user does not have permissions of a case owner, return null
            return null;
        }
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
