/////////////////////////////////////////////////
// Business logic module for notes.
//
// @file:    noteController.js
// @authors: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */


var winston = require('winston');
var Note = require('../entities/note.js');
var dateTime = require('../common/dateTime');

var noteController = function (knex) {
    // Get a reference to data layer module
    //
    var noteData = require('../data/noteData')(knex);

    /**
     * Add a new note
     * @param {Object} note - The new note to be added
     * @return {Object} promise - Fulfillment value is id of new note
     */
    var addNote = function (note) {
        var now = dateTime();

        // Convert the received object into an entity
        var noteEntity = new Note(
            note.noteId,
            note.noteName,
            note.noteInfo,
            note.noteDateTime,
            note.noteParty,
            now,
            now
        );

        // Validate the data before going ahead
        var validationErrors = noteEntity.validateForInsert();
        if (validationErrors.length === 0) {
            // Pass on the entity to be added to the data layer
            var promise;
            promise = noteData.addNote(noteEntity)
                .then(function (noteId) {
                    return noteId;
                });
            promise.catch(function (error) {
                winston.error(error);
            });
            return promise;
        } else {
            return validationErrors;
        }
    };

    /**
     * Link a note to a case
     * @param {Number} caseId - Unique id of the case
     * @param {Number} noteId - Unique id of the note
     * @return {Object} promise - Fulfillment value is the id of new record in mapping table (case_note)
     */
    var linkNoteToCase = function (caseId, noteId) {
        var promise = noteData.linkNoteToCase(caseId, noteId)
            // this .then is actually used. See addCase() in caseData for explanation.
            .then(function (result) {
                return result;
            });
        promise.catch(function (error) {
            winston.error(error);
        });
        return promise;
    };

    return {
        addNote: addNote,
        linkNoteToCase: linkNoteToCase
    };
};

module.exports = noteController;
