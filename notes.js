/**
 * Created by praneethkumar on 06/05/17.
 */

console.log("Starting notes.js");

const fs = require('fs');

// console.log(module);

//exports is the property of the module which gets exported.
//to experiment with modules we will property exports to add a new
//property called age into and see how it looks.


/**
 * ############################################
 * ###### Refactoring for Re-usability#########
 * ############################################
 *
 * Division of fetching of notes and saving of Notes.
 */

// We will pass the following fetchNotes into other functions
var fetchNotes = () => {
    // There's one drawback is we delete notes-data.json
    // it raises error. We will try catch to recover from
    // the error.

    try {
        // Everytime we add a new note it wipes off.
        // Here we will prevent this.

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// module.exports.age = 28;

// /***
//  * We are going to export addNote function
//  */
//
// module.exports.addNote = () => {
//     console.log('addNote');
//     return "New Note";
// }

// module.exports.add = (a, b) => {
//     return a + b;
// }

// Create an anonymous arrow function
// two arguments: title, body



var addNote = (title, body) => {
    /**
     * ###############################
     * ## Adding and Saving Notes#####
     * ###############################
     */
    // console.log('Adding note', title, body);
    var notes = fetchNotes();

    // Declare Individual note which will be an object
    // with two properties: title and body.
    var note = {
        title: title,
        body: body
    };



    // Here we are going to check if there are any duplicates.
    /***
     * filter() method creates a new array with all
     * elements that pass the test implemented by the
     * callback function.
     * var newArray = arr.filter(callback[, thisArg])
     *
     * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example
     *
     */

    // If there is only single statement after {
        // then we could remove {}.
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        // we are going to push note inside notes object.

        notes.push(note);

        // We are going to write stringify version notes
        // data into a json file.
        saveNotes(notes);
        return note;

    }


};


var getAll = () => {
  console.log('Getting ALL');
};

var getNote = (title) => {
  console.log('Getting Title', title)
};

var removeNote = (title) => {
  // console.log("Removing Notes with title", title);
    /**
     * ##################################
     * ## Removing Notes ################
     * ##################################
     */
    // Fetch Notes
    var notes = fetchNotes();

    // Filter Notes, removing the one with the title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);

    // save new notes array.

    saveNotes(filteredNotes);

    // console.log(filteredNotes);

    // How do we know if the notes with a particular title
    // removed or not.
    // We will compare the length of notes and filteredNotes.
    // If they match then note is not removed and if they don't
    // match note is removed.
    return (notes.length !== filteredNotes.length);
};
// We can define an entire object as exports

module.exports = {
  addNote,
    getAll,
    getNote,
    removeNote
};