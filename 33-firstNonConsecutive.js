// WPU Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// function firstNonConsecutive(arr) {
//   let temp = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== temp + 1) {
//       return arr[i];
//     }
//     temp = arr[i];
//   }

//   return null;
// }

// by onecthree, LOVEJOY & mednoob 🔥
function firstNonConsecutive(arr) {
  return arr.find((e, i) => e !== arr[0] + i) ?? null;
}

console.log(firstNonConsecutive([-2, 0]));
