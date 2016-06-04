/////////////////////////////////////////////////
// Business logic module for contacts.
//
// @file:    contactController.js
// @authors: Dinesh Shenoy <astroshenoy@gmail.com>
/////////////////////////////////////////////////

/* jshint camelcase: false */
/* jshint maxcomplexity: false */
/* jshint shadow:true */

var winston = require('winston');
var Quote = require('../entities/quote');
var QuoteItem = require('../entities/quoteItem');
var _ = require('lodash');

var quoteController = function (knex) {
    // Get a reference to data layer module
    //
    var quoteData = require('../data/quoteData')(knex);

    // CONTROLLER METHODS
    // ==========================================
    //

    /**
     * Add a new quote  
     * @param {Object} quote - The new quote to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is id of new contact
     */
    var addQuote = function (quote, user) {
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_CASE_CREATE');
        if (hasPermission !== -1) {
            var now = (new Date()).toISOString();

            var quoteEntity = new Quote(
                null,
                quote.quoteTypeId,
                quote.partyId,
                quote.issueDate,
                quote.statusId,
                quote.currencyUomId,
                quote.salesChannelEnumId,
                quote.validFromDate,
                quote.validThruDate,
                quote.quoteName,
                quote.description,
                quote.contactPartyId,
                quote.createdByPartyId,
                now,
                now
            );

            // Validate the quoteItem data before going ahead
            var validationErrors = [];
            var quoteValidationErrors = quoteEntity.validateForInsert();
            for (var i = 0; i < quoteValidationErrors.length; i++) {
                if (quoteValidationErrors[i]) {
                    validationErrors.push(quoteValidationErrors[i]);
                }
            }
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                var promise = quoteData.addQuote(quote)
                    .then(function (quoteId) {
                        return quoteData.addQuoteRole(quoteId);
                    });
                promise.catch(function (error) {
                    winston.error(error);
                });

                return promise;
            } else {
                return validationErrors;
            }
        } else {
            // user does not have permissions to add a quote, return null
            return null;
        }
    };

    /**
     * Add a new item to a quote (which must exist already first)
     * @param {Object} quoteItem - entity containing existing quote_id to add an Item onto.
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var addQuoteItem = function (quoteItem, user) {

        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // proceed towards data layer
            var now = (new Date()).toISOString();

            // QuoteItem entity
            var quoteItemEntity = new QuoteItem(
                quoteItem.quoteId,
                quoteItem.quoteItemSeqId,
                quoteItem.quoteItemOptionSeqId,
                quoteItem.productId,
                quoteItem.quantity,
                quoteItem.selectedAmount,
                quoteItem.quoteUnitPrice,
                quoteItem.estimatedDeliveryDate,
                quoteItem.comments,
                quoteItem.isPromo,
                quoteItem.description,
                now,
                now
            );

            // Validate the quoteItem data before going ahead
            var validationErrors = [];
            var quoteItemValidationErrors = quoteItemEntity.validateForInsert();
            //Errors are non-empty validation results
            for (var i = 0; i < quoteItemValidationErrors.length; i++) {
                if (quoteItemValidationErrors[i]) {
                    validationErrors.push(quoteItemValidationErrors[i]);
                }
            }
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                var promise = quoteData.addQuoteItem(quoteItemEntity)
                    .then(function (quoteItemInserted) {
                        return quoteItemInserted;
                    });
                promise.catch(function (error) {
                    winston.error(error);
                });
                return promise;
            } else {
                return validationErrors;
            }
        } else {
            // user does not have permissions to add a quote, return null
            return null;
        }
    };

    /**
     * Update a quote item in database by adding an option
     * @param {Object} quoteItem - quoteItem to update with 
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuoteItem = function (quoteItem, user) {
        
        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // proceed towards data layer
            var now = (new Date()).toISOString();

            // QuoteItem entity
            var quoteItemEntity = new QuoteItem(
                quoteItem.quoteId,
                quoteItem.quoteItemSeqId,
                quoteItem.quoteItemOptionSeqId,
                quoteItem.productId,
                quoteItem.quantity,
                quoteItem.selectedAmount,
                quoteItem.quoteUnitPrice,
                quoteItem.estimatedDeliveryDate,
                quoteItem.comments,
                quoteItem.isPromo,
                quoteItem.description,
                now,
                now
            );

            // Validate the quoteItem data before going ahead
            var validationErrors = [];
            var quoteItemValidationErrors = quoteItemEntity.validateForInsert();
            //Errors are non-empty validation results
            for (var i = 0; i < quoteItemValidationErrors.length; i++) {
                if (quoteItemValidationErrors[i]) {
                    validationErrors.push(quoteItemValidationErrors[i]);
                }
            }
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                var promise = quoteData.updateQuoteItem(quoteItemEntity)
                    .then(function (quoteItemInserted) {
                        return quoteItemInserted;
                    });
                promise.catch(function (error) {
                    winston.error(error);
                });
                return promise;
            } else {
                return validationErrors;
            }
        } else {
            // user does not have permissions to add a quote, return null
            return null;
        }
    };

    /**
     * Add a new quote note
     * @param {Number} quoteId - Unique quote_id of the quote to add a note to
     * @param {String} quoteNote - Note to be added
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is note_id of new note
     */
    var addQuoteNote = function (quoteId, quoteNote, user) {

    };

    /**
     * Gets one quote by its id
     * @param {Number} quoteId - Unique id of the quote to be fetched
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is a quote entity
     */
    var getQuoteById = function (quoteId, user) {

    };

    /**
     * Gets quotes owned by the user/owner
     * @return {Object} promise - Fulfillment value is an array of quote entities
     */
    var getQuotesByOwner = function (user) {
        // Check user's security permission to own quotes
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // user has permission, proceed to the data layer
            var promise = quoteData.getQuotesByOwner(user.partyId)
                .then(function (quotes) {
                    // Map the retrieved result set to corresponding entities
                    var quoteEntities = [];
                    for (var i = 0; i < quotes.length; i++) {
                        var quote = new Quote(
                            quotes[i].quoteId,
                            quotes[i].quoteTypeId,
                            quotes[i].partyId,
                            quotes[i].issueDate,
                            quotes[i].statusId,
                            quotes[i].currencyUomId,
                            quotes[i].salesChannelEnumId,
                            quotes[i].validFromDate,
                            quotes[i].validThruDate,
                            quotes[i].quoteName,
                            quotes[i].description,
                            quotes[i].contactPartyId,
                            quotes[i].createdByPartyId,
                            quotes[i].createdDate,
                            quotes[i].updatedDate
                        );
                        quoteEntities.push(quote);
                    }
                    return quoteEntities;
                });
            promise.catch(function (error) {
                // Log the error
                winston.error(error);
            });
            return promise;
        } else {
            // user does not have permissions of a contact owner, return null
            return;
        }
    };

    /**
     * Update a quote in database (equiv to Opentaps' Edit Quote & Accept/Send/Finalize/Reject/Cancel)
     * @param {Number} quoteId - Unique quote_id of the quote to update
     * @param {Object} quote - The object that contains the item to update quote with
     * @param {Object} user - The logged in user
     * @return {Object} promise - Fulfillment value is number of rows updated
     */
    var updateQuote = function (quoteId, quote, user) {

        // Check user's security permission to own contacts
        var hasPermission = _.indexOf(user.securityPermissions, 'CRMSFA_QUOTE_CREATE');
        if (hasPermission !== -1) {
            // proceed towards data layer
            var now = (new Date()).toISOString();

            // build Quote Entity.  (Reminder to self on how created_by column will not
            // be affected:  UI will be filling quote.createdDate with the value that this
            // quote already has.  Only updated_date column is receiving new value called "now")
            var quoteEntity = new Quote(
                quoteId,
                quote.quoteTypeId,
                quote.partyId,
                quote.issueDate,
                quote.statusId,
                quote.currencyUomId,
                quote.salesChannelEnumId,
                quote.validFromDate,
                quote.validThruDate,
                quote.quoteName,
                quote.description,
                quote.contactPartyId,
                quote.createdByPartyId,
                quote.createdDate,
                now
            );

            // Validate the quoteItem data before going ahead
            var validationErrors = [];
            var quoteValidationErrors = quoteEntity.validateForUpdate();
            //Errors are non-empty validation results
            for (var i = 0; i < quoteValidationErrors.length; i++) {
                if (quoteValidationErrors[i]) {
                    validationErrors.push(quoteValidationErrors[i]);
                }
            }
            if (validationErrors.length === 0) {
                // Pass on the entity to be added to the data layer
                var promise = quoteData.updateQuote(quoteEntity)
                    .then(function (quoteUpdated) {
                        return quoteUpdated;
                    });
                promise.catch(function (error) {
                    winston.error(error);
                });
                return promise;
            } else {
                return validationErrors;
            }
        } else {
            // user does not have permissions to add a quote, return null
            return null;
        }
    };

    return {
        addQuote: addQuote,
        addQuoteItem: addQuoteItem,
        updateQuoteItem: updateQuoteItem,
        addQuoteNote: addQuoteNote,
        getQuoteById: getQuoteById,
        getQuotesByOwner: getQuotesByOwner,
        updateQuote: updateQuote
    };
};

module.exports = quoteController;
