// WPU Coding Challenge 2024
// 42/366
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

// var humanYearsCatYearsDogYears = function (humanYears) {
//   let catYears = 0;
//   let dogYears = 0;

//   if (humanYears === 1) {
//     catYears += 15;
//     dogYears += 15;
//   }
//   if (humanYears === 2) {
//     catYears += 15 + 9;
//     dogYears += 15 + 9;
//   }

//   if (humanYears >= 3) {
//     catYears += 15 + 9 + 4 * (humanYears - 2);
//     dogYears += 15 + 9 + 5 * (humanYears - 2);
//   }

//   return [humanYears, catYears, dogYears];
// };

// const humanYearsCatYearsDogYears = (y) => (y <= 1 ? [1, 15, 15] : [y, 24 + (y - 2) * 4, 24 + (y - 2) * 5]);

const humanYearsCatYearsDogYears = (y) => [y, 15 + (y > 1) * 9 + (y > 2 && y - 2) * 4, 15 + (y > 1) * 9 + (y > 2 && y - 2) * 5];

console.log(humanYearsCatYearsDogYears(10));
