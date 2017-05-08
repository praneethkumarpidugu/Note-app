/**
 * Created by praneethkumar on 07/05/17.
 *
 * Here we will explore how json works.
 */

// var obj = {
//     name: 'Praneeth'
// };
//
// If we want to send above obj object between servers
// as string or save it as a text file, we need
// to call a JSON Method.

// For More Reference to JSON methods.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// After passing stringify method it is no longer an object.
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// Here we will test with reverse method parsing.

// var personString = '{"name": "Praneeth", "age": 28}';
//
// console.log(typeof personString);
// console.log(personString);
// result: string

// Hence we need to take this string and convert this
// into an object.

// We are going to do opposite of what we did with above
// JSON stringify. take string and convert it to object.
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

/**
 * we are going to store something inside our file
 * using fs module.
 */

const fs = require('fs');

// We declare a regular javascript object property

var originalNote = {
  title: 'Some title',
    body: 'Some body'
};

// We are going to write this data to a JSON file.
// using writeFileSync method.
// https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
console.log(originalNoteString);
// We are going to read out the content by parsing JSON

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(note);

console.log(typeof originalNoteString);
console.log(typeof note);
console.log(note.title);