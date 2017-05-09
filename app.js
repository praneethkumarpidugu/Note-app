/**
 * Initialization file for our application.
 * Created by praneethkumar on 06/05/17.
 */

console.log('Starting app.js.')

/**
 * Built in modules API for node-js.
 * nodejs.org/api
 * * */

// Create a file and append some text into it.
    // require : loads in module functionality.

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes = require('./notes.js');

// adding lodash for modular javascript functionalities.

const _ = require('lodash');



//fs.appendFile(file, data[, options], callback)


//fs.appendFile('greetings.txt', 'Hello World');

//call back is called when an error occurs or file gets returned too.
//
// fs.appendFile('greetings.txt', 'Hello World', function (err) {
//    console.log("Unable to create a file greetings.txt due to duplicate")
// });

// we will tweak a little bit with OS Module in node.js

// We will store the user information with os module into a text file.

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', user, function (err) {
//     if (err) {
//         console.log("Unable to Parse in date");
//     } else {
//         console.log("Success");
//     }
// });

// console.log(user);

//
// fs.appendFile('greetings.txt', 'Hello ' + user['username'] + ' !');
//
// // template strings in ES6
//
// // Since we have exported age in the notes file with a property age we could import
// // it since we have added it here with a require module.
//
// fs.appendFile('greeting1.txt', `Hello ${user.username} ! You are ${notes.age}`);
//
// var res = notes.addNote();
//
// console.log(res);

// var res = notes.add(1, 2);
//
// console.log(res);

/**
 * we are going to explore few of
 * utilities which comes with lodash.
 *  First :- isString
 *  https://lodash.com/docs/4.17.4#isString
 *
 *  _.isString(value)

 description :-

 Checks if value is classified as a String primitive or object.

 Arguments

 value (*): The value to check.

 Returns

 (boolean): Returns true if value is a string, else false.
 * */

// var some = _.isString(23);
//
// if (some == true) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }
//
// console.log(_.isString(true));
// console.log(_.isString("Praneeth"));

/**
 * _.uniq(array)

 Creates a duplicate-free version of an array,
 using SameValueZero for equality comparisons, in
 which only the first occurrence of each element is kept.
 The order of result values is determined by the order they occur in the array.

 Arguments

 array (Array): The array to inspect.

 Returns

 (Array): Returns the new duplicate free array.

 * */
//
// var some = [1, 2, 3, 1, 1, 1];
//
// console.log(_.uniq(some));
//
// var filterArray = _.uniq(["Praneeth", 1, "Praneeth"]);
//
// console.log(filterArray);

/**##################################
 * #### Getting Input from User.#####
 * ##################################
 *
 * If a user wants to add a note we need to know notes title
 * and body of the notes.
 *
 * commands :- node app.js add
 *             node app.js remove
 *             node app.js list
 */

/**
 * What is process object ?
 *
 * It provides control over the current node.js process throughout
 * the application without require.
 *
 * argv is the arguments vector.
 *
 * https://nodejs.org/api/process.html#process_process
 */

// console.log(process.argv);

var command = process.argv[2];
const argv = yargs.argv;
console.log("Command: ", command);

if (command === 'add') {
    // console.log('Adding Notes');
    //We are going to call addNote from notes.js
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note Created");
        notes.logNote(note);
    } else {
        console.log("Note already exists");
    }
} else if (command === 'list') {
    // console.log('Listing all Notes.');
    // debugger;
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

//    To represent out notes list a bit nice
//    we are going to utilize logNotes utility
//    notes.js
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){
    var note = notes.getNote(argv.title);

    var message = note ? notes.logNote(note): `Note not Found`;

    // console.log('Reading Notes');
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    // console.log('Removing Notes.');
    // if (removednote) {
    //     console.log("Note Removed");
    // } else {
    //     console.log("Note Not Removed");
    // }
    // We are going to replace above if else condition with terinary operator

    var message = noteRemoved ? `Note Removed` : `Note Not Found`;
    console.log(message);
} else {
    console.log('command not recognized.');
}

// node app.js add --title=secrets
// If we want to spaces in the title.
// node app.js add --title="secrets 232"
// node app.js add --title "secrets 232"


// console.log("Process: ", process.argv);

/**
 * we will use a third party module called yargs to make
 * the command line parsing effortless.
 *
 * ###########################################
 * ### Simplified input with Yargs ###########
 * ###########################################
 *
 * yargs provides an interactive command line tools
 * by parsing arguments.
 *
 * Installation :-
 *
 * npm install yargs@4.7.1 --save
 */



console.log("Yargs: ", argv);

// For example if we pass
// node app.js add module
// yargs consoles _ as ['add', 'module'] which as below
// Yargs:  { _: [ 'add', 'module' ], '$0': 'app.js' }

// Next if we pass key value pairs as arguments with add.
// $ node app.js add --title="secrets"
// OR
// $ node app.js add --title secrets
// Then output would be as below.
// Yargs:  { _: [ 'add' ], title: 'secrets', '$0': 'app.js' }

// Since now we have added two more arguments like below :-
// node app.js add --title="secrets" --body="mysecrets"
// which calls the addNote function from notes.js


/**
 * How do we get unique input from user
 * and where we could store it ?
 *
 * ######################################
 * ### Working with JSON ################
 * ######################################
 *
 * To learn a new feature we will create a new
 * folder playground.
 */


// How json works in playground/json.js






