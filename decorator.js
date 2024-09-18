/* JS DECORATOR IMITATION START CODE:
A decorator is just a higher-order function that is applied to a function in a special way using the @decorator syntax.

Decorators do not exist in JS
*/

function shout(func) {
  return function (text) {
    return func(text).toUpperCase();
  };
}

function whisper(func) {
  return function (text) {
    return func(text).toLowerCase();
  };
}

// main function
function greet(name) {
  return `Hello, ${name}!`;
}

// main function
function sayGoodbye(name) {
  return `Goodbye, ${name}.`;
}

const loudGreet = shout(greet);
const quietGoodbye = whisper(sayGoodbye);

console.log(loudGreet("Alice")); // Output: "HELLO, ALICE!"
console.log(quietGoodbye("Bob")); // Output: "goodbye, bob."
