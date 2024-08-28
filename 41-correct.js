// WPU Coding Challenge 2024
// 41/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

// function correct(string) {
//   return string
//     .split('')
//     .map((char) => {
//       if (char === '5') return 'S';
//       if (char === '0') return 'O';
//       if (char === '1') return 'I';
//       return char;
//     })
//     .join('');
// }

// function correct(string) {
//   return string.replace(/[015]/g, (c) => {
//     return { 0: 'O', 1: 'I', 5: 'S' }[c];
//   });
// }

const correct = (string) => string.replace(/[015]/g, (c) => ({ 0: 'O', 1: 'I', 5: 'S' }[c]));

console.log(correct('1ND0NE51A'));
