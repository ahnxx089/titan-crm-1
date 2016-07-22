/////////////////////////////////////////////////
// Data access layer module for notes.
//
// @file:    noteData.js
// @authors: Xiaosiqi Yang <yang4131@umn.edu>
/////////////////////////////////////////////////

/* jshint camelcase: false */
var dateTime = require('../common/dateTime');

var noteData = function (knex) {


    /**
     * Add a new note in database
     * @param {Object} note - The new note entity to be added
     * @return {Object} promise - Fulfillment value is id of row inserted
     */
    var addNote = function (note) {
        return knex
            .insert({
                note_name: note.noteName,
                note_info: note.noteInfo,
                note_date_time: note.noteDateTime,
                note_party: note.noteParty,
                created_date: dateTime(),
                updated_date: dateTime()
            })
            .into('note_data');
    };


    /**
     * Map notes to cases
     * @param {Number} caseId - Unique id of the case to be linked
     * @param {Number} noteId - Unique id of the note to be linked
     * @return {Object} promise - Fulfillment value should be, if knex if A+ compliant, number of rows (type Number) linked at the mapping table: case_note. But in reality, fulfillment value is 0 (type object).
     */
    var linkNoteToCase = function (caseId, noteId) {
        return knex.insert({
                case_id: caseId,
                note_id: noteId,
                created_date: dateTime(),
                updated_date: dateTime()
            })
            .into('case_note');
    };

    return {
        addNote: addNote,
        linkNoteToCase: linkNoteToCase
    };
};

module.exports = noteData;
