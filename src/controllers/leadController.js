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
// deleteLead and updateLead are wrong. 

var winston = require('winston');
var Lead = require('../entities/lead');

var leadController = function (knex) {
    // Get a reference to data layer module
    //
    var leadData = require('../data/leadData')(knex);


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
        //var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_CREATE');
        //if (hasPermission !== -1)

            var leadEntity = new Lead(
            // ok to put dummy data here, eg, null and birthDate
            null,
            lead.partyTypeId,
            lead.preferredCurrencyUomId,
            lead.description,
            lead.statusId,
            user.userId,
            //            'admin', // single quotes are must. For testing only
            (new Date()).toISOString(), (new Date()).toISOString(),

            lead.salutation,
            lead.firstName,
            lead.middleName,
            lead.lastName,
            //            lead.birthDate,
            (new Date()).toISOString(), // for testing only
            lead.comments,

            lead.parentPartyId,
            lead.companyName,
            lead.annualRevenue,
            lead.numEmployees,

            lead.industryEnumId,
            lead.ownershipEnumId,
            lead.tickerSymbol,
            lead.importantNote,
            lead.primaryPostalAddressId,
            lead.primaryTelecomNumberId,
            lead.primaryEmailId,

            lead.roleTypeId,

            /*
            lead.contactMechId,
            lead.contactMechPurposeTypeId,
            lead.fromDate,
            lead.thruDate,
            */
            null,
            null, (new Date()).toISOString(), // for testing only
            null, // for testing only
            lead.verified,
            lead.comments

        );

        // Validate the data before going ahead
        var validationErrors = leadEntity.validateForInsert();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = leadData.addLead(leadEntity)
                .then(function (partyId) {
                    return partyId;
                });
            promise.catch(function (error) {
                winston.error(error);
            });
            return promise;
        } else {
            return validationErrors;
        }
    };

    // Lucas's taking this
    // Not finished, nor used. 
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
                    lead.partyId = leads[i].party_id;

                    lead.partyTypeId = leads[i].party_type_id;
                    lead.preferredCurrencyUomId = leads[i].preferred_currency_uom_id;
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
                    //                    lead.createdDate = leads[i].created_date;
                    //                    lead.updatedDate = leads[i].updated_date;

                    lead.parentPartyId = leads[i].parent_party_id;
                    lead.companyName = leads[i].company_name;
                    lead.annualRevenue = leads[i].annual_revenue;
                    lead.numEmployees = leads[i].num_employees;

                    lead.industryEnumId = leads[i].industry_enum_id;
                    lead.ownershipEnumId = leads[i].ownership_enum_id;
                    lead.tickerSymbol = leads[i].ticker_symbol;
                    lead.importantNote = leads[i].important_note;
                    lead.primaryPostalAddressId = leads[i].primary_postal_address_id;
                    lead.primaryTelecomNumberId = leads[i].primary_telecom_number_id;
                    lead.primaryEmailId = leads[i].primary_email_id;

                    lead.roleTypeId = leads[i].role_type_id;

                    lead.contactMechId = leads[i].contact_mech_id;
                    lead.contactMechPurposeTypeId = leads[i].contact_mech_purpose_type_id;
                    lead.fromDate = leads[i].from_date;
                    lead.thruDate = leads[i].thru_date;
                    lead.verified = leads[i].verified;
                    lead.pc_comments = leads[i].comments;

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
    var getLeadsByOwner = function (userId) {
        //var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_LEAD_CREATE');
        //if (hasPermission !== -1)

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
                        leads[i].primary_postal_address_id,
                        leads[i].primary_telecom_number_id,
                        leads[i].primary_email_id,

                        leads[i].role_type_id,

                        leads[i].contact_mech_id,
                        leads[i].contact_mech_purpose_type_id,
                        leads[i].from_date,
                        leads[i].thru_date,
                        leads[i].verified,
                        leads[i].comments

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
                // Map the retrieved result set to corresponding entity
                var leadEntity = new Lead(
                    // this is the order in which values show
                    // the order in which keys show, is determined by knex
                    leads[0].party_id,
                    //
                    leads[0].party_type_id,
                    leads[0].preferred_currency_uom_Id,
                    leads[0].description,
                    leads[0].statusId,
                    leads[0].created_by,
                    //
                    leads[0].created_date,
                    leads[0].updated_date,

                    leads[0].salutation,
                    leads[0].first_name,
                    leads[0].middle_name,
                    leads[0].last_name,
                    leads[0].birth_date,
                    leads[0].comments,


                    leads[0].parent_party_id,
                    leads[0].company_name,
                    leads[0].annual_revenue,
                    leads[0].num_employees,

                    leads[0].industry_enum_id,
                    leads[0].ownership_enum_id,
                    leads[0].ticker_symbol,
                    leads[0].important_note,
                    leads[0].primary_postal_address_id,
                    leads[0].primary_telecom_number_id,
                    leads[0].primary_email_id,

                    leads[0].role_type_id,

                    leads[0].contact_mech_id,
                    leads[0].contact_mech_purpose_type_id,
                    leads[0].from_date,
                    leads[0].thru_date,
                    leads[0].verified,
                    leads[0].comments
                );
                return leadEntity;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };


    // Divine: your implementation of update and delete below are wrong. Should not use new Party() or .deleteParty()
    /**
     * Update a lead in database
     * @param {Number} leadId - Unique id of the lead to be updated
     * @param {Object} lead - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateLead = function (leadId, lead) {
        //        var leadEntity = new Party(
        //                partyId,
        //                lead.partyTypeId,
        //                lead.preferredCurrencyUomId,
        //                lead.description,
        //                lead.statusId,
        //                null,
        //                null,
        //                (new Date()).toISOString()
        //        );
        //        // Validate the data before going ahead
        //        var validationErrors = leadEntity.validateForUpdate();
        //        if(validationErrors.length === 0) {
        //            // Pass on the entity to be added to the data layer
        //            var promise = leadData.updateLead(leadEntity)
        //                .then(function(partyId) {
        //                   return partyId; 
        //                });
        //                promise.catch(function(error) {
        //                    winston.error(error);
        //                });
        //            return promise;
        //        }
        //        else {
        //            return null;
        //        }
    };

    /**
     * Delete a lead
     * @param {Number} leadId - Unique id of the lead (actually lead id in DB) to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteLead = function (leadId) {
        var promise = leadData.deleteParty(leadId)
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
        //getLeads: getLeads,
        getLeadById: getLeadById,
        getLeadsByOwner: getLeadsByOwner,
        addLead: addLead,
        //updateLead: updateLead,
        //deleteLead: deleteLead
    };
};

module.exports = leadController;
