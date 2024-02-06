// WPU Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }

const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr)
    : 0;

console.log(sumArray([0, 1, 6, 10, 10]));
