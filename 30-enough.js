// WPU Coding Challenge 2024
// 30/366
// https://www.codewars.com/kata/5875b200d520904a04000003

// function enough(cap, on, wait) {
//   if (cap >= on + wait) {
//     return 0;
//   } else {
//     return wait - (cap - on);
//   }
// }

function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : wait - (cap - on);
  // return Math.max(wait + on - cap, 0);
}

// const enough = (cap, on, wait) => (cap >= on + wait ? 0 : wait - (cap - on));

console.log(enough(20, 5, 5));
