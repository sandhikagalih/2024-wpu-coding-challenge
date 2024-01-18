// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([2, 2, 2, 2, 2, 2]));
