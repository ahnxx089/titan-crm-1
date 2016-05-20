/////////////////////////////////////////////////
// Business logic module for leads.
//
// @file:   leadController.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */

// NOT COMPLETED! 

var winston = require('winston');
var Lead = require('../entities/lead');

var leadController = function(knex) {
    // Get a reference to data layer module
    //
    var leadData = require('../data/leadData')(knex);

    
    
    // CONTROLLER METHODS
    // ==========================================
    //
    /**
     * Add a new 
     * @param {Object} lead - The new lead to be added
     * @return {Object} promise - Fulfillment value is id of new lead
    */
    var addLead = function (lead) {
        
    };
    
    /**
     * Gets all leads
     * @return {Object} promise - Fulfillment value is an array of lead entities
    */
    var getLeads = function () {
        var promise = leadData.getLeads()
            .then(function(leads) {
                // Map the retrieved result set to corresponding entities
                var leadEntities = [];
                for(var i=0; i < leads.length; i++) {
                    var lead = new Lead(); // this is the Lead constructor
                    lead.partyId = leads[i].party_id;
                    
                    // generic Party parementers - currency
                    /*
                    lead.partyTypeId = leads[i].party_type_id;
                    lead.preferredCurrencyUomId = leads[i].preferred_currency_uom_id;
                    lead.description = leads[i].description;
                    lead.statusId = leads[i].status_id;
                    lead.createdBy = leads[i].created_by;
                    lead.createdDate = leads[i].created_date;
                    lead.updatedDate = leads[i].updated_date;
                    */
                    
                    lead.salutation = leads[i].salutation;
                    lead.firstName = leads[i].first_name;
                    lead.middleName = leads[i].middle_name;
                    lead.lastName = leads[i].last_name;
                    lead.birthDate = leads[i].birth_date;
                    lead.comments = leads[i].comments;
                    lead.createdDate = leads[i].created_date;
                    lead.updatedDate = leads[i].updated_date;
                    
                    // Needed? 
                    /*
                    lead.parentPartyId = leads[i].parent_party_id;
                    lead.companyName = leads[i].company_name;
                    lead.annualRevenue = leads[i].annual_revenue;
                    lead.numEmployees = leads[i].num_employees;
                    lead.ownershipEnumId = leads[i].ownership_enum_id;
                    */
                    
                    leadEntities.push(lead);
                }
                return leadEntities;
            });
            promise.catch(function(error) {
                // Log the error
                winston.error(error);
            });
        return promise;
    };

    /**
     * Gets one lead by its id
     * @param {Number} leadId - Unique id (actually partyId) of the lead to be fetched
     * @return {Object} promise - Fulfillment value is a lead entity
    */
    var getLeadById = function (leadId) {
        var promise = leadData.getLeadById(leadId)
            .then(function(leads) {
                // Map the retrieved result set to corresponding entity
                var leadEntity = new Lead(
                    leads[0].party_id,
                    leads[0].salutation,
                    leads[0].first_name,
                    leads[0].middle_name,
                    leads[0].last_name,
                    leads[0].birth_date,
                    leads[0].comments,
                    leads[0].created_date,
                    leads[0].updated_date
                );
                return leadEntity;
            });
            promise.catch(function(error) {
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
    var leadEntity = new Party(
            partyId,
            lead.partyTypeId,
            lead.preferredCurrencyUomId,
            lead.description,
            lead.statusId,
            null,
            null,
            (new Date()).toISOString()
        );
        // Validate the data before going ahead
        var validationErrors = leadEntity.validateForUpdate();
        if(validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise = leadData.updateLead(leadEntity)
                .then(function(partyId) {
                   return partyId; 
                });
                promise.catch(function(error) {
                    winston.error(error);
                });
            return promise;
        }
        else {
            return null;
        }
    };
    
    /**
     * Delete a lead
     * @param {Number} leadId - Unique id of the lead (actually lead id in DB) to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
    */
    var deleteLead = function (leadId) {
    var promise = leadData.deleteParty(partyId)
            .then(function(result) {
                return result;
            });
            promise.catch(function(error) {
                // Log the error
                winston.error(error);
            });
        return promise;

    };

    return {
        //getLeads: getLeads,
        getLeadById: getLeadById,
        //addLead: addLead,
        //updateLead: updateLead,
        //deleteLead: deleteLead
    };
};

module.exports = leadController;