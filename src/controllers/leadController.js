/////////////////////////////////////////////////
// Business logic module for leads.
//
// @file:   leadController.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */

// NOT COMPLETED! 
// addLead, getLeadsByOwner, getLeadById are tested and functional. 
// getLeads is not finished, not used. Lucas will look at it later. 
// deleteLead and updateLead are (maybe not) wrong. 

var winston = require('winston');
var Lead = require('../entities/lead');
var ContactMech = require('../entities/contactMech');
var _ = require('lodash');

var leadController = function (knex) {
    // Get a reference to data layer module
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
    //

    
    var addContactMechCallback = function (addContactMechPromises, contactMechEntities, partyId) {
        // if there are more than one contactMech to be added
        if (addContactMechPromises.length > 1) {
            var promise = addContactMechPromises.pop();
            var contactMech = contactMechEntities.pop();
            var purposeTypeId = contactMech.contactMechPurposeTypeId;
            return promise.then(function (contactMechId) {
                return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                    .then(function () {
                        return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                    });
            });
        } 
        // else: base case, only one contactMech to be added
        else {
            var promise = addContactMechPromises.pop();
            var contactMech = contactMechEntities.pop();
            var purposeTypeId = contactMech.contactMechPurposeTypeId;
            return promise.then(function (contactMechId) {
                return contactMechController.linkContactMechToParty(partyId, contactMechId, purposeTypeId)
                    .then(function () {
                        return partyId;
                    });
            });
        }
    };
    
    
    // Lucas's taking this
    /**
     * Create a new lead entity, validate, pass it to leadData to create a new lead if valid. Otherwise return errors. 
     * When leadData finished adding this lead, it will return a promise. If error, log the error. 
     * @param {Object} lead - The new lead (from API layer) to be added
     * @param {Object? or String?} user - The current logged-in user
     * @return {Object} promise - Fulfillment value is id of new lead
     * @return {Object} validationErrors - An array that has all the validation error message
     */
    var addLead = function (lead, user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_CREATE');
        if (hasPermission !== -1) {
            var now = (new Date()).toISOString();
            // Contact mechanisms
            var contactMechEntities = [];

            if (lead.emailAddress) {
                var emailContactMech = new ContactMech(
                    null,
                    'EMAIL_ADDRESS',
                    'PRIMARY_EMAIL',
                    lead.emailAddress,
                    now,
                    now
                );
                contactMechEntities.push(emailContactMech);
            }
            if (lead.webAddress) {
                var webContactMech = new ContactMech(
                    null,
                    'WEB_ADDRESS',
                    'PRIMARY_WEB_URL',
                    lead.webAddress,
                    now,
                    now
                );
                contactMechEntities.push(webContactMech);
            }
            if (lead.contactNumber) {
//                var info = lead.countryCode + ' ' + lead.areaCode + ' ' + lead.contactNumber + ' ' + lead.askForName;
                var phoneContactMech = new ContactMech(
                    null,
                    'TELECOM_NUMBER',
                    'PRIMARY_PHONE',
                    null, // null info string
//                    info,
                    now,
                    now,
                    lead.countryCode,
                    lead.areaCode,
                    lead.contactNumber,
                    lead.askForName
                );
                contactMechEntities.push(phoneContactMech);
            }
            if (lead.countryGeoId) {
//                var info = lead.toName + ' ' + lead.attnName + ' ' + lead.address1 + ' ' + lead.address2 + ' ' + lead.directions
//                    + ' ' + lead.city + ' ' + lead.stateProvinceGeoId + ' ' + lead.zipOrPostalCode + ' ' + lead.countryGeoId;
                var addressContactMech = new ContactMech(
                    null,
                    'POSTAL_ADDRESS',
                    'PRIMARY_LOCATION',
                    null, // null info string
//                    info,
                    now,
                    now,
                    null,
                    null,
                    null,
                    null,
                    lead.toName,
                    lead.attnName,
                    lead.address1,
                    lead.address2,
                    lead.directions,
                    lead.city,
                    lead.stateProvinceGeoId,
                    lead.zipOrPostalCode,
                    lead.countryGeoId
                );
                contactMechEntities.push(addressContactMech);
            }
            
            var leadEntity = new Lead(
                // ok to put dummy data here, eg, null and birthDate
                // Single quotes are must.
                null,
                lead.partyTypeId,
                lead.currencyUomId,
                lead.description,
                lead.statusId,
                user.userId,
                //            'admin', // For testing only
                (new Date()).toISOString(),
                (new Date()).toISOString(),
                // for party
                lead.salutation,
                lead.firstName,
                lead.middleName,
                lead.lastName,
                //            lead.birthDate,
                (new Date()).toISOString(), // for testing only
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
                // for party_supplemental_data (partially). 

                
//                lead.primaryPostalAddressId,
//                lead.primaryTelecomNumberId,
//                lead.primaryEmailId,
                
                
                lead.roleTypeId

                /*
                lead.contactMechId,
                lead.contactMechPurposeTypeId,
                lead.fromDate,
                lead.thruDate,
                */
                
//                null,
//                null, (new Date()).toISOString(), // for testing only
//                null, // for testing only
//                lead.verified,
//                lead.comments

            );

            // Validate the data before going ahead
            var validationErrors = leadEntity.validateForInsert();
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                // insert new lead, get the promise first
                var promise = leadData.addLead(leadEntity);
                
                // below: to add contactMech
                var addContactMechPromises = [];
                var mechPromise;
                for (var i = 0; i < contactMechEntities.length; i++) {
                    mechPromise = contactMechController.addContactMech(contactMechEntities[i]);
                    // Make sure we have promise,
                    // and not array of errors
                    if ('then' in mechPromise) {
                        addContactMechPromises.push(mechPromise);
                    }
                }
                // above
                
                // this catch necessary?
                mechPromise.catch(function (error) {
                    winston.error(error);
                });
                promise.catch(function (error) {
                    winston.error(error);
                });
                
                if (addContactMechPromises.length > 0) {
                    // there should not be any potential errors in here
                    return promise.then(function (partyId) {
                        return addContactMechCallback(addContactMechPromises, contactMechEntities, partyId);
                    });
                    // but for safety, add a .catch block here anyway (this is never reachable)
                    promise.catch(function (error) {
                        winston.error(error);
                    });
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

    // Lucas's taking this
    // NOT finished, NOR used. 
    /**
     * Gets all leads
     * @return {Object} promise - Fulfillment value is an array of lead entities
     */
    var getLeads = function () {
        var promise = leadData.getLeads()
            .then(function (leads) {
                // Map the retrieved result set to corresponding entities
                var leadEntities = [];
                for (var i = 0; i < leads.length; i++) {
                    var lead = new Lead(); // this is the Lead constructor
                    // open injection here vs closed constructor in GETs below
                    lead.partyId = leads[i].party_id;

                    lead.partyTypeId = leads[i].party_type_id;
                    lead.currencyUomId = leads[i].preferred_currency_uom_id;
                    lead.description = leads[i].description;
                    lead.statusId = leads[i].status_id;
                    lead.createdBy = leads[i].created_by;
                    lead.createdDate = leads[i].created_date;
                    lead.updatedDate = leads[i].updated_date;


                    lead.salutation = leads[i].salutation;
                    lead.firstName = leads[i].first_name;
                    lead.middleName = leads[i].middle_name;
                    lead.lastName = leads[i].last_name;
                    lead.birthDate = leads[i].birth_date;
                    lead.comments = leads[i].comments;

                    lead.parentPartyId = leads[i].parent_party_id;
                    lead.companyName = leads[i].company_name;
                    lead.annualRevenue = leads[i].annual_revenue;
                    lead.numEmployees = leads[i].num_employees;

                    lead.industryEnumId = leads[i].industry_enum_id;
                    lead.ownershipEnumId = leads[i].ownership_enum_id;
                    lead.tickerSymbol = leads[i].ticker_symbol;
                    lead.importantNote = leads[i].important_note;
//                    lead.primaryPostalAddressId = leads[i].primary_postal_address_id;
//                    lead.primaryTelecomNumberId = leads[i].primary_telecom_number_id;
//                    lead.primaryEmailId = leads[i].primary_email_id;

                    lead.roleTypeId = leads[i].role_type_id;

//                    lead.contactMechId = leads[i].contact_mech_id;
//                    lead.contactMechPurposeTypeId = leads[i].contact_mech_purpose_type_id;
//                    lead.fromDate = leads[i].from_date;
//                    lead.thruDate = leads[i].thru_date;
//                    lead.verified = leads[i].verified;
//                    lead.pc_comments = leads[i].comments;

                    leadEntities.push(lead);
                }
                return leadEntities;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };


    // Lucas's taking this
    /**
     * Gets all leads created by owner 
     * @param {String?} userId - Unique id of logged-in user (owner)
     * @return {Object} promise - Fulfillment value is an array of lead entities
     */
    // 2:49 May 29 changed param, from userId to user
    var getLeadsByOwner = function (user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_CREATE');
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

                            leads[i].role_type_id//,
                            
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

    // Lucas's taking this
    /**
     * Gets one lead by its id
     * @param {Number} leadId - Unique id (actually partyId) of the lead to be fetched
     * @return {Object} promise - Fulfillment value is a lead entity
     */
    var getLeadById = function (leadId) {
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
//                    console.log('type of party id is '+  typeof leads[0].party_id); // number
                    
                    leadEntity = new Lead(
                        // this is the order in which values show
                        // the order in which keys show, is determined by knex
                        leads[0].party_id,
                        //
                        leads[0].party_type_id,
                        leads[0].preferred_currency_uom_Id,
                        leads[0].description,
                        leads[0].statusId,
                        leads[0].created_by,
                        leads[0].created_date,
                        leads[0].updated_date,
                        //
                        leads[0].salutation,
                        leads[0].first_name,
                        leads[0].middle_name,
                        leads[0].last_name,
                        leads[0].birth_date,
                        leads[0].comments,
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
    };


    
    /**
     * Update a lead in database
     * @param {Number} leadId - Unique id of the lead to be updated
     * @param {Object} lead - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateLead = function (leadId, lead) {
        //Converty lead to an entity
        var leadEntity = new Lead(
            leadId,
            lead.partyTypeId,
            lead.currencyUomId,
            lead.description,
            lead.statusId,
            lead.createdBy,
            lead.createdDate,
            lead.updatedDate,
            lead.salutation,
            lead.firstName,
            lead.middleName,
            lead.lastName,
            lead.birthDate,
            lead.p_comments
        );

        // Validate the data before going ahead

        var validationErrors = leadEntity.validateForUpdate();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = leadData.updateLead(leadEntity)
                .then(function (leadId) {
                    return leadId;
                });
            promise.catch(function (error) {
                winston.error(error);
            });
            return promise;
        } else {
            return null;
        }
    };

    /**
     * Delete a lead
     * @param {Number} leadId - Unique id of the lead (actually lead id in DB) to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteLead = function (leadId) {
        var promise = leadData.deleteLead(leadId)
            .then(function (result) {
                return result;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;

    };

    return {
        getLeads: getLeads,
        getLeadById: getLeadById,
        getLeadsByOwner: getLeadsByOwner,
        addLead: addLead,
        updateLead: updateLead,
        deleteLead: deleteLead
    };
};

module.exports = leadController;
