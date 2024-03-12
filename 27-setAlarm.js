// WPU Coding Challenge 2024
// 27/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed, vacation) {
//   if (employed) {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function setAlarm(employed, vacation) {
//   return employed && !vacation;
// }

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true));

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false
