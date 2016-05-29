/////////////////////////////////////////////////
// Business logic module for users.
//
// @file:   userController.js
// @author: Anurag Bhandari <anurag@ofssam.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */

var winston = require('winston');
var User = require('../entities/user');

var userController = function (knex) {
    // Get a reference to data layer module
    //
    var userData = require('../data/userData')(knex);


    // CONTROLLER METHODS
    // ==========================================
    //
    /**
     * Gets all security permissions for a user
     * @param {Number} userId - Id of the user whose permissions are to be fetched
     * @return {Object} promise - Fulfillment value is an array of permissions
     */
    var getPermissionGroupsByUserId = function (userId) {
        var promise = userData.getPermissionGroupsByUserId(userId)
            .then(function (permissions) {
                // Map the retrieved result set to corresponding entity
                var userPermissions = [];
                for (var i = 0; i < permissions.length; i++) {
                    // TODO: add logic to push only those permissions to the array
                    // that are still valid (based on from_date and thru_date)
                    userPermissions.push(permissions[0].permission_group_id);
                }
                return userPermissions;
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };
    
    /**
     * Add a new user
     * @param {Object} user - The new user to be added
     * @return {Object} promise - Fulfillment value is id of new user
     */
    var addUser = function (user) {
        // TODO
    };

    /**
     * Gets one user by its id
     * @param {Number} userId - Unique id of the user to be fetched
     * @return {Object} promise - Fulfillment value is a user entity
     */
    var getUserById = function (userId) {
        var promise = userData.getUserById(userId)
            .then(function (users) {
                if (users.length > 0) {
                    // Get all security permissions for this user
                    return getUserPermissionsById(userId).then(function(permissions) {
                        // Map the retrieved result set to corresponding entity
                        var userEntity;
                        userEntity = new User(
                            users[0].user_login_id,
                            users[0].password,
                            users[0].password_hint,
                            users[0].enabled,
                            users[0].disabled_date,
                            users[0].party_id,
                            users[0].created_date,
                            users[0].updated_date,
                            permissions
                        );
                        return userEntity;
                    });
                    
                }
            });
        promise.catch(function (error) {
            // Log the error
            winston.error(error);
        });
        return promise;
    };

    /**
     * Update a user in database
     * @param {Number} userId - Unique id of the user to be updated
     * @param {Object} user - The object that contains updated data
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateUser = function (userId, user) {
        // TODO
    };

    /**
     * Delete a user
     * @param {Number} userId - Unique id of the user to be deleted
     * @return {Object} promise - Fulfillment value is number of rows deleted
     */
    var deleteUser = function (userId) {
        // TODO
    };

    return {
        addUser: addUser,
        getUserById: getUserById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        getPermissionGroupsByUserId: getPermissionGroupsByUserId
    };
};

module.exports = userController;