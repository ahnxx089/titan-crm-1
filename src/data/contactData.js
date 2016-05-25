/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:    contactData.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

//var PersonData = require('./personData.js');

var contactData = function (knex) {

    /**
     * Add a new party in the database -- IN DEVELOPMENT
     *
     * @param {Object} contact - The new contact entity to be added as a Party
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addContact = function (contact) {
        return knex('party')
            .returning('party_id')
            .insert({
                party_type_id: contact.partyTypeId,
                preferred_currency_uom_id: contact.preferredCurrencyUomId,
                description: contact.description,
                status_id: contact.statusId,
                created_by: contact.createdBy,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .then(function (party_id) {
                return knex('person').insert({
                    party_id: party_id,
                    salutation: contact.salutation,
                    first_name: contact.firstName,
                    middle_name: contact.middleName,
                    last_name: contact.lastName,
                    birth_date: contact.birthDate,
                    comments: contact.comments,
                    created_date: contact.createdDate,
                    updated_date: contact.updatedDate
                });
            });
            // ADDITIONAL WORK TO BE DONE HERE TO EXPAND KNEX STATEMENT TO DO THE MANY MORE INSERTS
            // INTO SUB-TABLES, OR FIGURE OUT SOME OTHER WAY.  JUST REMEMBER THAT I GET ONE RETURN
            // STATEMENT-- addContact GETS ONE return knex(...).().() OR WHATEVER.   BUT AT LEAST FIRST
            // TEST AND CONFIRM THAT THIS contactData.js DOES AT LEAST WHAT addPerson DOES.
    };

    /**
     * Gets one contact by its id from database
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getContactById = function (id) {
        //A party is a contact iff role_type_id in party_role is set to CONTACT
        return knex.select('party.party_id', 'party.party_type_id', 'party.preferred_currency_uom_id', 'party.description', 'party.status_id', 'party.created_by', 'party.created_date', 'party.updated_date')
            .from('party')
            .innerJoin('party_role', 'party_role.party_id', 'party.party_id')
            //.innerJoin('role_type', 'role_type.role_type_id', 'party_role.role_type_id')
            .where('party_role.role_type_id', 'CONTACT')
            .andWhere('party.party_id', id);

        //.andWhere({
        //party_id: id
        //});
    };

    /**
     * Gets all contacts from database for the user/owner making this GET request
     * @param {Number} ownerId - Unique party_id of the user/owner whose contacts to be fetched
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContactsByOwner = function (ownerId) {
        // The ownership is all contained within the party_relationship table alone;
        // however, the party table is joined so that column party.party_id of the
        // contact can be passed by this function back to the controller layer.
        return knex.select('party.party_id')
            .from('party_relationship')
            .innerJoin('party', 'party.party_id', 'party_relationship.party_id_from')
            .whereIn('role_type_id_to', ['PERSON_ROLE', 'SALES_REP', 'ACCOUNT_MANAGER'])
            .andWhere('party_relationship_type_id', 'RESPONSIBLE_FOR')
            .andWhere('role_type_id_from', 'CONTACT')
            .andWhere('party_id_to', ownerId);
    };

    /**
     * Update a contact in database
     * @param {Object} contact - The contact entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contact) {
        //Update the properties shared with Person
        //var numRows = PersonData.updatePerson(contact);

        //Update the unique properies of Contact
        knex('party_role')
            .where({
                party_id: contact.partyId
            })
            .update({
                role_type_id: 'CONTACT',
                updated_date: (new Date()).toISOString()
            });

        //This function does *not* handle any ContactMechs associated with this Contact
    };

    /**
     * Delete a contact from database
     * @param {Number} contactId - Unique id of the contact to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteContact = function (contactId) {
        return knex('party')
            .where({
                party_id: contactId
            })
            .del();
        //Does *not* delete any associated ContactMechs
    };

    return {
        addContact: addContact,
        getContactById: getContactById,
        getContactsByOwner: getContactsByOwner,
        updateContact: updateContact,
        deleteContact: deleteContact
    };

};

module.exports = contactData;