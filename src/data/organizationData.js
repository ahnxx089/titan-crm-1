/////////////////////////////////////////////////
// Account entity.
// Inherits from Organization.
// Properties and validation methods.
//
// @file:   account.js
// @author: Eric Brichetto <brichett13@gmail.com>
/////////////////////////////////////////////////

var orgData = function (knex) {
    
    /**
     * Add a new organization in database.  
     *
     * @param {Object} organization - The new organization entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addOrganization = function (organization) {};

    
        

    /**
     * Gets all organizations from database
     * @return {Object} promise - Fulfillment value is an array of raw data objects
     */
    var getOrganizations = function () {};

    /**
     * Gets one organization by its id from database
     * @param {Number} organizationId - Unique id of the organization to be fetched
     * @return {Object} promise - Fulfillment value is a raw data object
     */
    var getOrganizationById = function (id) {};

    /**
     * Update an organization in database
     * @param {Object} organization - The organization entity that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateOrganization = function (organization) {};

    /**
     * Delete a organization from database
     * @param {Number} organizationId - Unique id of the organization to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteOrganization = function (organizationId) {};
    
    
    
};
    


module.exports = orgData;