/////////////////////////////////////////////////
// Data access layer module for leads.
//
// @file:   leadData.js
// @author: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */

// NOT COMPLETED! 
// WARNING!
// updateLead, deleteLead ARE NOT FULLY IMPLEMENTED! 
// addLead, getLeadById, getLeadsByOwner are tested and functional. 
// getLeads may need revision. It is not used now. Don't remove yet. 

var leadData = function (knex) {


    // DATA METHODS
    /**
     * Methods in XXXdata.js are called from Controller layer,
     * They accept lead entities from controllers, and insert them into database.
     * They also query the database based on the creteria from controllers, and giving back (queried) columns to controllers. 
     */
    // ==========================================
    //


    // Lucas's taking this
    /**
     * Add a new lead in database
     * @param {Object} lead - The new lead entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addLead = function (lead) {
        // this achieves goals mentioned on slide # 17
        // #1, 2, 3, 5, 6: good
        // part of 4
        // #7 is not implemented at this moment


        //NOTE TO LUCAS AND DIVINE: Below changes to this function were made by Eric to resolve errors crashing the app
        //Thank you from Lucas. 

        return knex('party')
            .returning('party_id')
            .insert({
                // ok to put dummy data here
                party_type_id: lead.partyTypeId,
                preferred_currency_uom_id: lead.preferredCurrencyUomId,
                description: lead.description,
                status_id: lead.statusId,
                created_by: lead.createdBy,
                created_date: lead.createdDate,
                updated_date: lead.updatedDate
            })
            .then(function (res) {
                return knex('person')
                    .returning('party_id')
                    .insert({
                        party_id: res[0],
                        salutation: lead.salutation,
                        first_name: lead.firstName,
                        middle_name: lead.middleName,
                        last_name: lead.lastName,
                        birth_date: lead.birthDate,
                        comments: lead.comments,
                        created_date: lead.createdDate,
                        updated_date: lead.updatedDate
                    })
            .then(function () { // maybe change the param to res? ABSOLUTELY NO! Requiring numeric param while passing a promiss is not right 
                return knex('party_supplemental_data')
                    //.returning('party_id')
                    .insert({
                        party_id: res[0],
                        parent_party_id: lead.parentPartyId,
                        company_name: lead.companyName,
                        annual_revenue: lead.annualRevenue,
                        currency_uom_id: lead.preferredCurrencyUomId, // the same
                        num_employees: lead.numEmployees,
                        created_date: lead.createdDate,
                        updated_date: lead.updatedDate, 
                        
                        industry_enum_id: lead.industryEnumId,
                        ownership_enum_id: lead.ownershipEnumId,
                        ticker_symbol: lead.tickerSymbol,
                        important_note: lead.importantNote
//                        primary_postal_address_id: lead.primaryPostalAddressId,
//                        primary_telecom_number_id: lead.primaryTelecomNumberId,
//                        primary_email_id: lead.primaryEmailId
                    })
            .then(function () {
                return knex('party_role')
                    .insert({
                        party_id: res[0],
//                        role_type_id: lead.roleTypeId,
                        role_type_id: 'LEAD', // just so
                        created_date: lead.createdDate,
                        updated_date: lead.updatedDate
                    })
//            .then(function() {
//                 return knex('contact_mech')
//                    .returning('contact_mech_id')
//                    .insert({
//                        contact_mech_type_id: 'EMAIL_ADDRESS',
//                        info_string: lead.primaryEmailId,
//                        created_date: lead.createdDate,
//                        updated_date: lead.updatedDate
//                    })
                
//             .then(function(cm_id) {
//                 return knex('party_contact_mech')
//                     .insert({
//                        party_id: res[0],
//                        contact_mech_id: cm_id,
//                        contact_mech_purpose_type_id: 'PRIMARY_EMAIL',
//                        from_date: lead.createdDate,
//                        thru_date: null,
//                        verified: 0,
//                        comments: '',
//                        created_date: lead.createdDate,
//                        updated_date: lead.updatedDate
//                    })
             .then(function() {
                   return res[0];
                    });
//            });
//            });
            });
            });
            });
    };

    // Lucas's taking this
    /**
     * Gets all leads from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     * THIS FUNCTION IS OBSOLETE. Need revision or removal. 
     */
    var getLeads = function () {
        return knex.select('party_id', 'salutation', 'first_name', 'middle_name', 'last_name', 'birth_date', 'comments', 'created_date', 'updated_date')
            .from('person');
    };

    // Lucas's taking this
    /**
     * Gets one lead by its id from database
     * @param {Number} partyId - Unique id of the party (grandparent of lead) to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getLeadById = function (id) {
        //        return knex.select('party_id', 'salutation', 'first_name', 'middle_name', 
        //                           'last_name', 'birth_date', 'comments', 'created_date', 'updated_date')
        //            .from('person')
        //            .where({
        //                party_id: id
        //            });

        return knex.from('person')
            .innerJoin('party', 'person.party_id', 'party.party_id')
            .innerJoin('party_supplemental_data', 'person.party_id', 'party_supplemental_data.party_id')
            .innerJoin('party_role', 'person.party_id', 'party_role.party_id')
            .innerJoin('party_contact_mech', 'person.party_id', 'party_contact_mech.party_id')
            .where('person.party_id', id);
    };


    // Lucas's taking this
    /**
     * Gets leads by its owner (the one by whom they are created) from database
     * @param {Number} ownerId - Unique id of the owner of leads
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getLeadsByOwner = function (ownerId) {
        return knex.from('person')
            .innerJoin('party', 'person.party_id', 'party.party_id')
            .innerJoin('party_supplemental_data', 'person.party_id', 'party_supplemental_data.party_id')
            .innerJoin('party_role', 'person.party_id', 'party_role.party_id')
//            .innerJoin('party_contact_mech', 'person.party_id', 'party_contact_mech.party_id')
            .where('party.created_by', ownerId);
    };



    // WARNING
    // updateLead, deleteLead ARE NOT FULLY IMPLEMENTED! See beginning for more detail. 

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


    // Divine: Follow my example of adding leads. 
    // You need to delete the leads from Party_supplemental_data, Person and serveral other tables, 
    // before deleting (the rest of) that lead in Party table
    /**
     * Delete a lead from database
     * @param {Number} leadId - Unique id (actually partyId) of the lead to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteLead = function (leadId) {
        return knex('party_contact_mech')
            .where({
                party_id: leadId
            })
            .del()
            .then(function (partyLinkRows) {
                return knex('contact_mech')
                    .where({
                        party_id: leadId
                    })
                    .del()
                    .then(function (contactMechRows) {
                        return knex('party_role')
                            .where({
                                party_id: leadId

                            })
                            .del()
                            .then(function (partyRoleRows) {
                                return knex('party_supplemental_data')
                                    .where({
                                        party_id: leadId
                                    })
                                    .del()
                                    .then(function (partySuppRows) {
                                        return knex('person')
                                            .where({
                                                party_id: leadId

                                            })
                                            .del()
                                            .then(function (personRows) {
                                                return knex('party')
                                                    .where({
                                                        party_id: leadId
                                                    })
                                                    .del()
                                                    .then(function (partyRows) {
                                                        return partyRows + personRows + partyRoleRows + partySuppRows + contactMechRows + partyLinkRows;
                                                    });

                                            });
                                    });
                            });
                    });
            });
    };

    return {
        addLead: addLead,
        getLeadsByOwner: getLeadsByOwner,
        getLeads: getLeads,
        getLeadById: getLeadById,
        updateLead: updateLead,
        deleteLead: deleteLead
    };

};

module.exports = leadData;