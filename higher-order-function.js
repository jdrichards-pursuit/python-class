/* JS HIGHER ORDER FUNCTION
A higher-order function is a function that can accept another function as an argument, or return a function, allowing us to enhance or transform functionality dynamically.
*/

function greet(name) {
  return `Hello, ${name}!`;
}

function shoutGreeting(greetingFunction) {
  return function (name) {
    return greetingFunction(name).toUpperCase();
  };
}

const loudGreet = shoutGreeting(greet);
console.log(loudGreet("Alice")); // Output: "HELLO, ALICE!"
