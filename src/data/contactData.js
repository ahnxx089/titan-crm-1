/////////////////////////////////////////////////
// Data access layer module for contacts.
//
// @file:   contactData.js
// @author: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

//var PersonData = require('./personData.js');

var contactData = function (knex) {

    /* There are two scenarios for adding Contacts:
        (1) A Contact might be a new Party/Person in the database (for example,
            we already have an Account and they assign one of their employees
            to be our new contact for processing their orders.)  Therefore 
            contactData gets functions addParty() and addPerson() below.
        (2) A Contact might already be a Party/Person in our database because
            they started as a Lead and have just been converted to a Contact
            due to their Organization becoming an Account.  In this case adding 
            the new Contact should NOT involve adding a new Party/Person.
            HOW SHOULD THIS SECOND CASE BE HANDLED?  SEE COMMENTS BELOW AT THE END
            OF FUNCTIONS addParty() AND addPerson(), IS THERE A WAY TO DO IT WITH KNEX?
    */

    /**
     * Add a new party in the database for this contact (SCENARIO 1 ABOVE)
     *
     * @param {Object} contact - The new contact entity to be added as a Party
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addContact = function (contact) {
        return knex.insert({
                party_type_id: contact.partyTypeId,
                preferred_currency_uom_id: contact.currencyUomId,
                description: contact.description,
                status_id: contact.statusId,
                created_by: contact.createdBy,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('party');
        /* CAN/MUST KNEX BE GIVEN AN ADDITIONAL OPTION HERE TO DEAL WITH 
            THE CASE OF A LEAD BEING CONVERTED TO A CONTACT, SINCE A LEAD 
            ALREADY HAS A PARTY_ID? */
    };

    /**
     * Add a new person in the database for this contact (SCENARIO 1 ABOVE)
     *
     * @param {Object} contact - The new contact entity to be added as a Person
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addPerson = function (contact) {
        return knex.insert({
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
            .into('person');
        /* CAN/MUST KNEX BE GIVEN AN ADDITIONAL OPTION HERE TO DEAL WITH 
            THE CASE OF A LEAD BEING CONVERTED TO A CONTACT, SINCE A LEAD 
            ALREADY EXISTS IN THE PERSON TABLE WITH A PARTY_ID? */
    };

    /**
     * Add Contact's partyId to party_role table.  The value for role_type_id
     * is 'CONTACT' (compare opentaps db tables party_role and role_type)
     *
     * @param {Object} contact - The new contact entity with info to add
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addPartyRole = function (contact) {
        return knex.insert({
                party_id: contact.partyId,
                role_type_id: 'CONTACT',
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('party_role');
    };

    /**
     * @param {Object} contact - The new contact entity with info to add
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addPartyRelationship = function (contact) {
        /* EMPTY FOR NOW-- compare to opentaps db table party_relationship,
            looks like adding a contact will require adding to this table,
            but I am not yet clear what to add and why.  If adding to this table
            also requires adding to table party_relationship_type, maybe
            it can be taken care of in here too?  Moving on for now . . . 
        */
    };

    /** Many entries into table party_supplemental_data will be null for 
     *  a Contact that was not a Lead previously.  Presumably the Lead module
     *  or Account module may add company info to this party in future? 
     *  That will probably be accomplished when we implement a "Convert Lead"
     *  feature as available in opentaps.
     *
     * @param {Object} contact - The new contact entity with info to add
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addPartySupplementalData = function (contact) {
        return knex.insert({
                party_id: contact.partyId,
                parent_party_id: null,
                company_name: null,
                annual_revenue: null,
                currency_uom_id: contact.CurrencyUomId,
                num_employees: null,
                industry_enum_id: null,
                ownership_enum_id: null,
                ticker_symbol: null,
                important_note: null,
                primary_postal_address_id: null,
                primary_telecom_number_id: null,
                primary_email_id: null,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('party_supplemental_data');
    };

    /* No addContactMech function:  Rather than make an addContactMech function, 
        below are functions called addEmailAddress, addPostalAddress and 
        addTelecomNumber.  This is done because a Contact can have one or more
        types of contact mechanisms.  Following the opentaps db table contact_mech
        structure, a Contact will get one or more unique contact_mech_id values in 
        the contact_mech table if the Contact object comes in with one or more non-null
        values for attributes emailAddress, addressLine1, contactNumber, etc.  
        
        We have no separate additional table of email addresses; instead in table
        contact_mech the column contact_mech_type_id is set to 'EMAIL_ADDRESS'
        and column info_string is set to the email address (as in opentaps).
        
        For postal addresses and telecom numbers, the contact_mech_type_id is set 
        to their respective types and the unique contact_mech_id is also used
        in their tables.
        
        QUESTION:  Do I need to do the necessary inserts to the matching table
        party_contact_mech that will allow a Contact's unique party_id to be
        matched to its one or more contact_mech_id's?  Or are matching tables
        somehow generated automatically?
    */

    /** Add this Contact's email address to table contact_mech.  
     *  String 'EMAIL_ADDRESS' is hardwired for column contact_mech_type_id,
     *  that is how opentaps does it. 
     *  
     *  AUTO-GENERATION OF contact_mech_id:  The controller layer should pass in
     *  null, so that contact_mech_id is autogenerated . . . 
     * 
     * @param {Object} contact - The new contact entity with info to add
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addEmailAddress = function (contact) {
        return knex.insert({
                contact_mech_type_id: 'EMAIL_ADDRESS',
                info_string: contact.emailAddress,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('contact_mech');
    };

    /** Add this Contact's postal address to BOTH table contact_mech AND
     *  table postal_address.  Table postal_address needs the contact_mech_id
     *  value auto-generated by inserting 'POSTAL_ADDRESS' to table contact_mech.
     *
     * @param {Object} contact - The new contact entity with info to add
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addPostalAddress = function (contact) {

        // declare empty array to push two knex inserts onto; return below
        var insertArr = [];

        // insert into table contact_mech, generating a contact_mech_id
        insertArr.push(
            knex.insert({
                contact_mech_type_id: 'POSTAL_ADDRESS',
                info_string: null,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('contact_mech')
        );

        // insert into table postal_address
        // QUESTION:  HOW TO KNOW WHAT contact_mech_id WAS JUST ASSIGNED
        // IN ORDER TO INSERT INTO postal_address TABLE?
        insertArr.push(
            knex.insert({
                contact_mech_id: contact.contactMechId,
                to_name: contact.toName,
                attn_name: contact.attentionName,
                address1: contact.addressLine1,
                address2: contact.addressLine2,
                directions: null,
                city: contact.city,
                postal_code: contact.zipOrPostalCode,
                country_geo_id: contact.countryId,
                state_province_geo_id: contact.stateOrProvinceId,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('postal_address')
        );

        return insertArr;
    };

    /** Add this Contact's postal address to BOTH table contact_mech AND
     *  table telecom_number.  Table telecom_number needs the contact_mech_id
     *  value auto-generated by inserting 'TELECOM_NUMBER' to table contact_mech.
     *
     * @param {Object} contact - The new contact entity with info to add
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addTelecomNumber = function (contact) {

        // declare empty array to push two knex inserts onto; return below
        var insertArr = [];

        // insert into table contact_mech, generating a contact_mech_id
        insertArr.push(
            knex.insert({
                contact_mech_type_id: 'TELECOM_NUMBER',
                info_string: null,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('contact_mech')
        );

        // insert into table telecom_number
        // QUESTION:  HOW TO KNOW WHAT contact_mech_id WAS JUST ASSIGNED
        // IN ORDER TO INSERT INTO telecom_number TABLE?
        insertArr.push(
            knex.insert({
                contact_mech_id: contact.contactMechId,
                area_code: contact.areaCode,
                contact_number: contact.contactNumber,
                ask_for_name: contact.askForName,
                created_date: contact.createdDate,
                updated_date: contact.updatedDate
            })
            .into('telecom_number')
        );

        return insertArr;
    };


    /**
     * Gets all contacts from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContacts = function () {
        // A party is a contact iff role_type_id in party_role is set to 'CONTACT'.
        // Reach that info by joining table party to matching table party_role to 
        // table role_type.   
        return knex.select('party.party_id')
            .from('party')
            .innerJoin('party_role', 'party_role.party_id', 'party.party_id')
            .innerJoin('role_type', 'role_type.role_type', 'party_role.role_type_id')
            .where('role_type.role_type', 'CONTACT');
    };

    /**
     * Gets one contact by its id from database
     * @param {Number} contactId - Unique id of the contact to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getContactById = function (id) {
        //A party is a contact iff role_type_id in party_role is set to CONTACT
        return knex.select('party_id', 'party_type_id', 'preferred_currency_uom_id', 'description', 'status_id', 'created_by', 'created_date', 'updated_date')
            .from('party')
            .innerJoin('party_role', 'party_role.party_id', 'party.party_id')
            .innerJoin('role_type', 'role_type.role_type_id', 'party_role.role_type_id')
            .where('role_type.role_type_id', 'CONTACT')
            .andWhere({
                party_id: id
            });
    };

    /**
     * Gets all contacts from database for a specified owner's party_id
     * @param {Number} ownerId - Unique party_id of the owner whose contacts to be fetched
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getContactsByOwner = function (ownerId) {
        // The ownership is all contained within the party_relationship table alone;
        // however, the party table is joined so that column party.party_id of the
        // contact can be passed by this function back to the controller layer.
        return knex.select('party.party_id')
            .from('party_relationship')
            .innerJoin('party','party.party_id','party_relationship.party_id_from')
            .whereIn('role_type_id_to', ['PERSON_ROLE','SALES_REP','ACCOUNT_MANAGER'])
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
        getContacts: getContacts,
        getContactById: getContactById,
        getContactsByOwner: getContactsByOwner,
        updateContact: updateContact,
        deleteContact: deleteContact
    };

};

module.exports = contactData;
