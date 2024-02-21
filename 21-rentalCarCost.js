// WPU Coding Challenge 2024
// 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   let diskon = 0;
//   if (d >= 7) {
//     diskon = 50;
//   } else if (d >= 3) {
//     diskon = 20;
//   }
//   return d * 40 - diskon;
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log(rentalCarCost(2));
