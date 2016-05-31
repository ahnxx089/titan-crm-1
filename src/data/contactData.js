/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:    contactData.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
//           William T. Berg <william.thomas.berg@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxlen:1000 */
/* jshint shadow:true */

var contactData = function (knex) {

    /**
     * Add a new contact in the database:  insert into tables party, person, 
     *  party_role and party_relationship.
     * 
     *  CREDIT:  Much thanks to Lucas for demonstrating how to chain knex inserts into 
     *  more than just two tables as in addPerson.
     *
     * @param {Object} contact - The new contact entity to be added as a Party
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addContact = function (contact, user) {
        return knex('party')
            .returning('party_id') // for passing along to person table
            .insert({
                party_type_id: contact.partyTypeId,
                preferred_currency_uom_id: contact.preferredCurrencyUomId,
                description: contact.description,
                status_id: contact.statusId,
                created_by: contact.createdBy,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .then(function (passAlongPartyId) {
                return knex('person')
                    .returning('party_id') // for passing along to party_role table
                    .insert({
                        party_id: passAlongPartyId,
                        salutation: contact.salutation,
                        first_name: contact.firstName,
                        middle_name: contact.middleName,
                        last_name: contact.lastName,
                        birth_date: contact.birthDate,
                        comments: contact.comments,
                        created_date: contact.createdDate,
                        updated_date: contact.updatedDate
                    })
                    .then(function () {
                        return knex('party_role')
                            .returning('party_id') // for passing along to party_relationship table
                            .insert({
                                party_id: passAlongPartyId,
                                role_type_id: 'CONTACT',
                                created_date: contact.createdDate,
                                updated_date: contact.updatedDate
                            })
                            .then(function () {
                                return knex('party_relationship')
                                    .returning('party_id')
                                    .insert({
                                        party_id_from: passAlongPartyId,
                                        party_id_to: user.partyId,
                                        role_type_id_from: 'CONTACT',
                                        role_type_id_to: 'PERSON_ROLE',
                                        from_date: contact.createdDate,
                                        thru_date: null,
                                        status_id: 'PARTY_ENABLED',
                                        party_relationship_type_id: 'RESPONSIBLE_FOR',
                                        created_date: contact.createdDate,
                                        updated_date: contact.updatedDate
                                    }).then(function () {
                                        // return new Contact's party_id up to API layer
                                        return passAlongPartyId;
                                    });
                            });
                    });
            });
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
            .where('party_role.role_type_id', 'CONTACT')
            .andWhere('party.party_id', id);
    };

    /**
     * Gets all contacts from database for the user/owner making this GET request
     * @param {Number} ownerId - Unique party_id of the user/owner whose contacts to be fetched
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContactsByOwner = function (userPartyId) {

        // The ownership is all contained within the party_relationship table alone;
        // however, the party table is joined so that column party.party_id of the
        // contact can be passed by this function back to the controller layer.
        return knex.select('party.party_id', 'party.party_type_id', 'party.preferred_currency_uom_id', 'party.description', 'party.status_id', 'party.created_by', 'party.created_date', 'party.updated_date', 'person.salutation', 'person.first_name', 'person.middle_name', 'person.last_name', 'person.birth_date', 'person.comments')
            .from('party_relationship')
            .innerJoin('party', 'party.party_id', 'party_relationship.party_id_from')
            .innerJoin('person', 'party.party_id', 'person.party_id')
            .whereIn('role_type_id_to', ['PERSON_ROLE', 'SALES_REP', 'ACCOUNT_MANAGER'])
            .andWhere('party_relationship_type_id', 'RESPONSIBLE_FOR')
            .andWhere('role_type_id_from', 'CONTACT')
            .andWhere('party_id_to', userPartyId);
    };

    /** 
     * Gets all contacts from database by identity (first or last name matching)
     * @param {String} firstName - firstName of Contact to be fetched (can be empty string)
     * @param {String} lastName - lastName of Contact to be fetched (can be empty string)
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContactsByIdentity = function (firstName, lastName) {
        var columnsToSelect = ['party.party_id', 'party.party_type_id', 'party.preferred_currency_uom_id', 'party.description', 'party.status_id', 'party.created_by', 'party.created_date', 'party.updated_date', 'person.salutation', 'person.first_name', 'person.middle_name', 'person.last_name', 'person.birth_date', 'person.comments'];

        // search is by lastName only
        if (firstName.length === 0 && lastName.length > 0) {
            var lastNameLike = '%' + lastName + '%';
            return knex.select(columnsToSelect)
                .from('party_relationship')
                .innerJoin('person', 'person.party_id', 'party_relationship.party_id_from')
                .innerJoin('party', 'party.party_id', 'person.party_id')
                .andWhere('role_type_id_from', 'CONTACT')
                .andWhere('last_name', 'like', lastNameLike);
        }
        // search is by firstName only
        if (firstName.length > 0 && lastName.length === 0) {
            var firstNameLike = '%' + firstName + '%';
            return knex.select(columnsToSelect)
                .from('party_relationship')
                .innerJoin('person', 'person.party_id', 'party_relationship.party_id_from')
                .innerJoin('party', 'party.party_id', 'person.party_id')
                .andWhere('role_type_id_from', 'CONTACT')
                .andWhere('first_name', 'like', firstNameLike);
        }
        // search is by firstName and lastName both (more restrictive than previous two)
        if (firstName.length > 0 && lastName.length > 0) {
            var firstNameLike = '%' + firstName + '%';
            var lastNameLike = '%' + lastName + '%';
            return knex.select(columnsToSelect)
                .from('party_relationship')
                .innerJoin('person', 'person.party_id', 'party_relationship.party_id_from')
                .innerJoin('party', 'party.party_id', 'person.party_id')
                .andWhere('role_type_id_from', 'CONTACT')
                .andWhere('first_name', 'like', firstNameLike)
                .andWhere('last_name', 'like', lastNameLike);
        }
        // search is for empty strings, return an empty result
        else {
            return knex.select(columnsToSelect)
                .from('party_relationship')
                .innerJoin('person', 'person.party_id', 'party_relationship.party_id_from')
                .innerJoin('party', 'party.party_id', 'person.party_id')
                .andWhere('role_type_id_from', 'CONTACT')
                .andWhere('first_name', 'like', '')
                .andWhere('last_name', 'like', '');
        }

        /*// OLD CODE I WAS USING, DELETE ONCE CONFIRMED THE ABOVE IS WORKING AS PLANNED.
        var firstNameLike = '%' + firstName + '%';
        var lastNameLike = '%' + lastName + '%';
        return knex.select(columnsToSelect)
            .from('party_relationship')
            .innerJoin('person', 'person.party_id', 'party_relationship.party_id_from')
            .innerJoin('party', 'party.party_id', 'person.party_id')
            .andWhere('role_type_id_from', 'CONTACT')
            .andWhere('first_name', 'like', firstNameLike)
            .orWhere('last_name', 'like', lastNameLike);
        */
    };

    /**
     * Update a contact in database
     * @param {Object} contact - The contact entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateContact = function (contact, user) {
        //Update the properties shared with Person
        //var numRows = PersonData.updatePerson(contact);

        //Update the unique properies of Contact
        return knex('party_relationship')
            .where({
                party_id_from: contact.partyId
            })
            .orWhere({
                party_id_to: contact.partyId
            })
            .update({
                party_id_from: contact.partyId,
                party_id_to: user.partyId,
                role_type_id_from: 'CONTACT',
                role_type_id_to: 'PERSON_ROLE',
                from_date: contact.createdDate,
                thru_date: null,
                status_id: 'PARTY_ENABLED',
                party_relationship_type_id: 'RESPONSIBLE_FOR',
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .then(function (relationshipRows) {
                return knex('party_role')
                    .where({
                        party_id: contact.partyId
                    })
                    .update({
                        party_id: contact.partId,
                        role_type_id: 'CONTACT',
                        created_date: contact.createdDate,
                        updated_date: contact.updatedDate
                    })
                    .then(function (roleRows) {
                        return knex('person')
                            .where({
                                party_id: contact.partyId
                            })
                            .update({
                                party_id: contact.partyId,
                                salutation: contact.salutation,
                                first_name: contact.firstName,
                                middle_name: contact.middleName,
                                last_name: contact.lastName,
                                birth_date: contact.birthDate,
                                comments: contact.comments,
                                created_date: contact.createdDate,
                                updated_date: contact.updatedDate
                            })
                            .then(function (personRows) {
                                return knex('party')
                                    .where({
                                        party_id: contact.partyId
                                    })
                                    .update({
                                        party_type_id: contact.partyTypeId,
                                        preferred_currency_uom_id: contact.preferredCurrencyUomId,
                                        description: contact.description,
                                        status_id: contact.statusId,
                                        //created_by: contact.createdBy,
                                        created_date: contact.createdDate,
                                        updated_date: contact.updatedDate
                                    })
                                    .then(function (partyRows) {
                                        return partyRows + personRows + roleRows + relationshipRows;
                                    });
                            });
                    });
            });


        //This function does *not* handle any ContactMechs associated with this Contact
    };

    /**
     * Delete a contact from database
     * @param {Number} contactId - Unique id of the contact to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteContact = function (contactId) {
        return knex('party_contact_mech')
            .where({
                party_id: contactId
            })
            .del()
            .then(function (partyLinkRows) {
                return knex('party_relationship')
                    .where({
                        party_id_from: contactId
                    })
                    .orWhere({
                        party_id_to: contactId
                    })
                    .del()
                    .then(function (relationshipRows) {
                        return knex('party_role')
                            .where({
                                party_id: contactId
                            })
                            .del()

                        .then(function (roleRows) {
                            return knex('person')
                                .where({
                                    party_id: contactId
                                })
                                .del()
                                .then(function (personRows) {
                                    return knex('party')
                                        .where({
                                            party_id: contactId
                                        })
                                        .del()
                                        .then(function (partyRows) {
                                            return partyRows + personRows + roleRows + relationshipRows + partyLinkRows;
                                        });
                                });
                        });
                    });
            });

        //Does *not* delete any associated ContactMechs
    };

    return {
        addContact: addContact,
        getContactById: getContactById,
        getContactsByOwner: getContactsByOwner,
        getContactsByIdentity: getContactsByIdentity,
        updateContact: updateContact,
        deleteContact: deleteContact
    };

};

module.exports = contactData;
