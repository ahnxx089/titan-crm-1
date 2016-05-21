/////////////////////////////////////////////////
// Data access layer module for leads.
//
// @file:   leadData.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */

// NOT COMPLETED! 

var leadData = function (knex) {

    /**
     * Add a new lead in database
     * @param {Object} lead - The new lead entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addLead = function (lead) {
        // this achieves goals mentioned on slide # 17

        //NOTE TO LUCAS AND DIVINE: Below changes to this function were made by Eric to resolve errors crashing the app

        // returns a promise
        // #1
        knex.insert({
                party_type_id: lead.partyTypeId,
                preferred_currency_uom_id: lead.preferredCurrencyUomId,
                description: lead.description,
                status_id: lead.statusId,
                created_by: lead.createdBy,
                created_date: lead.createdDate,
                updated_date: lead.updatedDate
            })
            .into('party')
            .then(function () {
                return knex.insert({
                        party_id: lead.partyId,
                        salutation: lead.salutation,
                        first_name: lead.firstName,
                        middle_name: lead.middleName,
                        last_name: lead.lastName,
                        birth_date: lead.birthDate,
                        comments: lead.comments,
                        created_date: lead.createdDate,
                        updated_date: lead.updatedDate
                    })
                    .into('person');
            })
            .then(function () {
                return knex.insert({
                        party_id: lead.partyId,
                        parent_party_id: lead.parentPartyId,
                        company_name: lead.companyName,
                        annual_revenue: lead.annualRevenue,
                        currency_uom_id: lead.preferredCurrencyUomId, // not the same? 
                        num_employees: lead.numEmployees,
                        ownership_enum_id: lead.ownership_enum_id,

                        created_date: lead.createdDate,
                        updated_date: lead.updatedDate
                    })
                    .into('party_supplemental_data');
            });


        // would this be returned as well? 
        // #2
        /*return knex.insert({
            party_id: lead.partyId,
            salutation: lead.salutation,
            first_name: lead.firstName,
            middle_name: lead.middleName,
            last_name: lead.lastName,
            birth_date: lead.birthDate,
            comments: lead.comments,
            created_date: lead.createdDate,
            updated_date: lead.updatedDate
        })
        .into('person');*/

        // #3
        /*return knex.insert({
            party_id: lead.partyId,
            parent_party_id: lead.parentPartyId,
            company_name: lead.companyName,
            annual_revenue: lead.annualRevenue,
            currency_uom_id: lead.preferredCurrencyUomId, // not the same? 
            num_employees: lead.numEmployees,
            ownership_enum_id: lead.ownership_enum_id,
            
            created_date: lead.createdDate,
            updated_date: lead.updatedDate
        })
        .into('party_supplemental_data');*/

        // #4, #6, #7 are not to be implemented at this moment
        // #5: good


    };

    /**
     * Gets all parties from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getLeads = function () {
        return knex.select('party_id', 'salutation', 'first_name', 'middle_name', 'last_name', 'birth_date', 'comments', 'created_date', 'updated_date')
            .from('person');
    };

    /**
     * Gets one party by its id from database
     * @param {Number} partyId - Unique id of the party (grandparent of lead) to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getLeadById = function (id) {
        return knex.select('party_id', 'salutation', 'first_name', 'middle_name', 'last_name', 'birth_date', 'comments', 'created_date', 'updated_date')
            .from('person')
            .where({
                party_id: id
            });
    };


    // WARNING
    // updateLead, deleteLead ARE NOT IMPLEMENTED! 
    // updateParty, deleteParty should be deleted later! 


    /**
     * Update a lead in database
     * @param {Object} lead - The lead entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateLead = function (lead) {
        return knex('party')
            .where({
                party_id: lead.partyId
            })
            .update({
                party_type_id: lead.partyTypeId,
                preferred_currency_uom_id: lead.preferredCurrencyUomId,
                description: lead.description,
                status_id: lead.statusId,
                updated_date: (new Date()).toISOString()
            });
    };

    /**
     * Delete a lead from database
     * @param {Number} leadId - Unique id (actually partyId) of the lead to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteLead = function (leadId) {
        return knex('party')
            .where({
                party_id: leadId
            })
            .del();
    };

    return {
        addLead: addLead,
        getLeads: getLeads,
        getLeadById: getLeadById,
        updateLead: updateLead,
        deleteLead: deleteLead
    };

};

module.exports = leadData;