
/**
 * Created by praneethkumar on 09/05/17.
 *
 * debugging instructions for node.js
 *
 * node debug debugging.js
 *
 * node debug app.js read --title="hello23"
 *
 * repl
 *
 * > watch variables
 *
 * CTRL+C to quit
 *
 * c
 *
 * ALso we could place debugger statement anywhere
 * in the program and simply continue to hit that statement
 * in the code.
 *
 */

var person = {
    name: "Praneeth"
};

person.age = 28;

debugger;
person.name = "Pavan";

console.log(person);

