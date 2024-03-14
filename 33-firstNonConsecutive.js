// WPU Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive(arr) {
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp + 1) {
      return arr[i];
    }
    temp = arr[i];
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
