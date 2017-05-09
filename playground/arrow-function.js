/**
 * Created by praneethkumar on 09/05/17.
 *
 * Arrow Functions with ES6
 */

// Start with square of a number using expression syntax

var squareStatement = (x) => x * x;

console.log(squareStatement(4));

// Statement syntax

var squareExpression = (x) => {
    result = x * x;
    return result;
};

console.log(squareExpression(3));

// If we have only argument we could even remove (x) by just x.

// Create an object user with name and a method sayHi

var user = {
    name: 'Praneeth',
    sayHi: () => {
        // console.log(arguments);
        // With arrow function you will get global arguments.
        console.log(`hi`);
    },
    sayHiAlt() {
        console.log(arguments)
        console.log(`Hi ${this.name}`);
    }
};
user.sayHi();
user.sayHiAlt(1, 2, 3);

//We cannot define this inside arrow functions
//
// var user1 = {
//     name: 'Alex',
//     sayHi: () => {
//         console.log(`Hi ${this.name}`);
//     }
// };
//
// user1.sayHi();


//An alternate way is to remove: and => from the object to utilize this.

// var user3 = {
//     name: 'Matrix',
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
// };
//
// user3.sayHi();