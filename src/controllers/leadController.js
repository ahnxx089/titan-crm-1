/////////////////////////////////////////////////
// Business logic module for leads.
//
// @file:   leadController.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint shadow:true */
/* jshint maxcomplexity: false */
/* jshint esversion: 6 */


var winston = require('winston');
var _ = require('lodash');
var Lead = require('../entities/lead');
var ContactMech = require('../entities/contactMech');
var contactInfoHelper = require('../controllers/helpers/contactInfoHelper');


var leadController = function (knex) {
    // Get a reference to data layer module, and contactMechController
    // 
    var leadData = require('../data/leadData')(knex);
    var contactMechData = require('../data/contactMechData')(knex);
    var contactMechController = require('../controllers/contactMechController')(knex);
    
    // CONTROLLER METHODS
    //
    /**
     * Methods in XXXcontroller.js are called from API layer.
     * They take care of assembling lead entities using params given from API layer. 
     * They pass the finished entity to leadData where they are inserted. 
     * They call functions in Data layer to query based on the creteria. 
     * They assemble lead entities using columns given from data layer, and return them. 
     * 
     */
    // ==========================================

    
    // Author: Lucas
    /**
     * Update three contact info fields in party_supplemental_data table, upon the creation of a lead 
     * Link this column to party_contact_mech.contact_mech_id
     * @param {Number} partyId - Unique id of the party (grandparent of lead)
     * @param {Object} contactMechId - Unique id of the contact mechanism of the lead
     * @param {String} purposeTypeId - Purpose type id of a contact mechanism
     * @return {Object} promise - Fulfillment value is a message that PSD was successfully updated
     */
    var updatePSD = function (partyId, contactMechId, purposeTypeId) {
        var promise = leadData.updatePSD(partyId, contactMechId, purposeTypeId)
            .then(function (result) {
                return result; // 1 here means 1 row was updated. 
            });

        // Trying new arrow function in ES6
        promise.catch(error => {
            winston.error(error);
        });
        return promise;
    };
    
    
    /**
     * For each promise delivered by contactMechController.addContactMech(),
     * create entry in party_contact_mech table
     * and chain all promises together with .then()
     * @param {object} addContactMechPromises - An array of promises returned by addContactMech
     * @param {object} contactMechEntities - An array containing the contactMechs used to generate the first array
     * @param {Number} partyId - The partyId of the contact to be linked to these contactMechs
     * @return {object} addContactMechPromises - Fulfillment value is the fulfillment value of the last promise in the array
     */
    var addContactMechCallback = function (addContactMechPromises, contactMechEntities, partyId) {
        var promise;
        var contactMech;
        var purposeTypeId;
        // if there are more than one contactMech to be added
        if (addContactMechPromises.length > 1) {
            promise = addContactMechPromises.pop();
            contactMech = contactMechEntities.pop();
            purposeTypeId = contactMech.contactMechPurposeTypeId;
            return promise.then(function (contactMechId) {
                return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                    .then(function () {
                        if (purposeTypeId !== 'PRIMARY_WEB_URL') {
                            updatePSD(partyId, contactMechId, purposeTypeId);
                            return partyId;
                        }
                    })
                    .then(function () {
                        return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                    });
            });
        }
        // else: base case, only one contactMech to be added
        else {
            promise = addContactMechPromises.pop();
            contactMech = contactMechEntities.pop();
            purposeTypeId = contactMech.contactMechPurposeTypeId;
            return promise.then(function (contactMechId) {
                return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                    .then(function () {
                        if (purposeTypeId !== 'PRIMARY_WEB_URL') {
                            updatePSD(partyId, contactMechId, purposeTypeId);
                        }
                    })
                    .then(function () {
                        return partyId;
                    });
            });
        }
    };
    
    
    // Author: Lucas
    /**
     * Create a new lead entity, validate, pass it to leadData to create a new lead if valid. Otherwise return errors. 
     * When leadData finished adding this lead, it will return a promise. If error, log the error. 
     * @param {Object} lead - The new lead (from API layer) to be added
     * @param {Object} user - The current logged-in user entity
     * @return {Object} promise - Fulfillment value is id of new lead
     * @return {Object} validationErrors - An array that has all the validation error message
     * @return {Object} null - A null indicates current user does not have add lead permission
     */
    var addLead = function (lead, user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_CREATE');
        var now = (new Date()).toISOString();

        if (hasPermission !== -1) {
            // Contact mechanisms
            var contactMechEntities = contactInfoHelper(lead); 
            
            var dob;
            if (lead.birthDate) {
                try {
                    dob = new Date(lead.birthDate).toISOString();
                } catch (e) {
                    dob = null;
                }
            } else {
                dob = null;
            }
            
            var leadEntity = new Lead(
                // put dummy data here when testing, eg, null and birthDate
                // Single quotes are must.
                
                null, // lead.partyId, auto_incremented in DB
                'PERSON', // lead.partyTypeId, 
                lead.currencyUomId,
                lead.description,
                'PARTY_ENABLED', // lead.statusId,
                user.userId, 
                now,
                now,
                // for party
                lead.salutation,
                lead.firstName,
                lead.middleName,
                lead.lastName,
                dob, 
                lead.comments,
                // for person
                lead.parentPartyId,
                lead.companyName,
                lead.annualRevenue,
                lead.numEmployees,

                lead.industryEnumId,
                lead.ownershipEnumId,
                lead.tickerSymbol,
                lead.importantNote,
                // for party_supplemental_data (partially). The rest three attributes will be done at updatePSD

                'LEAD' //lead.roleTypeId. 

            );

            // Validate the data before going ahead
            var validationErrors = leadEntity.validateForInsert();
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                // insert new lead, get the promise first
                var promise = leadData.addLead(leadEntity);
                
                // code block below: to add contactMech
                var addContactMechPromises = [];
                var mechPromise;
                for (var i = 0; i < contactMechEntities.length; i++) {
                    mechPromise = contactMechController.addContactMech(contactMechEntities[i]);
                    // return type of mechPromise can be a promise, or an array (validationErrors)
                    
                    if(mechPromise instanceof Array) {
                        // the condition is same as (mechPromise.constructor === Array)
                        return mechPromise;
                        //continue;
                    }
                    // Make sure we have promise, and not array of errors
                    if ('then' in mechPromise) {
                        addContactMechPromises.push(mechPromise);
                        // this catch necessary? Maybe move it inside the for loop?
                        mechPromise.catch(function (error) {
                            winston.error(error);
                        });
                    }
                }
                
                promise.catch(function (error) {
                    winston.error(error);
                });
                
                
                if (addContactMechPromises.length > 0) {
                    // there should not be any potential errors in here
                    return promise.then(function (partyId) {
                        return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                    });
                    // never reachable here is
                } else {
                    return promise;
                }
            } else {
                return validationErrors;
            }
        } else {
            return null;
        }
    };


    // Author: Lucas
    /**
     * Gets all leads created by owner 
     * @param {Object} user - Passed user object. DIFFERENT FROM userId, which is a number, of logged-in user (owner)
     * @return {Object} promise - Fulfillment value is an array of lead entities
     */
    var getLeadsByOwner = function (user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_VIEW');
        // if found
        if (hasPermission !== -1) {
            var userId = user.userId;
            var promise = leadData.getLeadsByOwner(userId)
                .then(function (leads) {
                    var leadEntities = [];
                    for (var i = 0; i < leads.length; i++) {
                        var lead = new Lead(
                            // this is the order in which values show
                            // the order in which keys show, is determined by knex
                            leads[i].party_id,
                            leads[i].party_type_id,
                            leads[i].preferred_currency_uom_Id,
                            leads[i].description,
                            leads[i].statusId,
                            leads[i].created_by,

                            leads[i].created_date,
                            leads[i].updated_date,

                            leads[i].salutation,
                            leads[i].first_name,
                            leads[i].middle_name,
                            leads[i].last_name,
                            leads[i].birth_date,
                            leads[i].comments,

                            leads[i].parent_party_id,
                            leads[i].company_name,
                            leads[i].annual_revenue,
                            leads[i].num_employees,
                            leads[i].industry_enum_id,
                            leads[i].ownership_enum_id,
                            leads[i].ticker_symbol,
                            leads[i].important_note,

                            leads[i].role_type_id
                            
                            // because this does not JOIN with contactMech related relations, some fields are not present 
                            
                        );
                        leadEntities.push(lead);
                    }
                    return leadEntities;
                });
            promise.catch(function (error) {
                // Log the error
                winston.error(error);
            });
            return promise;
        } else {
            return null;
        }
    };

    // Author: Lucas
    /**
     * Gets one lead by its id
     * @param {Number} leadId - Unique id (actually partyId) of the lead to be fetched
     * @return {Object} promise - Fulfillment value is a lead entity
     */
    var getLeadById = function (leadId, user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_VIEW');
        if (hasPermission !== -1) {
            var promise = leadData.getLeadById(leadId)
                .then(function (leads) {
                    var leadEntity;
                    var partyContactMechs = [];
                    if (leads.length > 0) {
                        // Map the retrieved result set to corresponding entity
                        for(var i = 0; i < leads.length; i++){
                            var newPartyContactMech = new ContactMech(
                                leads[i].contact_mech_id,
                                leads[i].contact_mech_type_id,
                                leads[i].contact_mech_purpose_type_id,
                                leads[i].info_string,
                                leads[i].created_date,
                                leads[i].updated_date,

                                leads[i].country_code,
                                leads[i].area_code,
                                leads[i].contact_number,
                                leads[i].ask_for_name,
                                leads[i].to_name,
                                leads[i].attn_name,
                                leads[i].address1,
                                leads[i].address2,
                                leads[i].directions,
                                leads[i].city,
                                leads[i].state_province_geo_id,
                                leads[i].postal_code,
                                leads[i].country_geo_id
                            );
                            partyContactMechs.push(newPartyContactMech);
                        }

                        leadEntity = new Lead(
                            // this is the order in which values show
                            leads[0].party_id,
                            //
                            leads[0].party_type_id,
                            leads[0].preferred_currency_uom_id,
                            leads[0].description,
                            leads[0].status_id,
                            leads[0].created_by,
                            leads[0].created_date,
                            leads[0].updated_date,
                            //
                            leads[0].salutation,
                            leads[0].first_name,
                            leads[0].middle_name,
                            leads[0].last_name,
                            leads[0].birth_date,
                            leads[0].p_comments,
                            //
                            leads[0].parent_party_id,
                            leads[0].company_name,
                            leads[0].annual_revenue,
                            leads[0].num_employees,
                            leads[0].industry_enum_id,
                            leads[0].ownership_enum_id,
                            leads[0].ticker_symbol,
                            leads[0].important_note,
                            //
                            leads[0].role_type_id,
                            //
                            partyContactMechs

                        );
                    }
                    return leadEntity;
                });

            promise.catch(function (error) {
                // Log the error
                winston.error(error);
            });
            return promise;
        } else {
            return null;
        }
    };
    

    return {
        // left is returnName, right is defedName
        getLeadById: getLeadById,
        getLeadsByOwner: getLeadsByOwner,
        addLead: addLead
    };
};

module.exports = leadController;
