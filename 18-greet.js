// WPU Coding Challenge 2024
// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function greet(name, owner) {
//   if (name === owner) {
//     return 'Hello boss';
//   } else {
//     return 'Hello guest';
//   }
// }

// const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest');

// const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

const greet = (name, owner) => 'Hello ' + ['guest', 'boss'][+(name === owner)];

console.log(greet('Daniel', 'Daniel'));
