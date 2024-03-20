// WPU Coding Challenge 2024
// 37/366
// https://www.codewars.com/kata/515e188a311df01cba000003

// function getPlanetName(id) {
//   var name;
//   switch (id) {
//     case 1:
//       return 'Mercury';
//
//     case 2:
//       return 'Venus';
//
//     case 3:
//       return 'Earth';
//
//     case 4:
//       return 'Mars';
//
//     case 5:
//       return 'Jupiter';
//
//     case 6:
//       return 'Saturn';
//
//     case 7:
//       return 'Uranus';
//
//     default:
//       return 'Neptune';
//
//   }

//   return name;
// }

// function getPlanetName(id) {
//   switch (id) {
//     case 1:
//       return 'Mercury';
//     case 2:
//       return 'Venus';
//     case 3:
//       return 'Earth';
//     case 4:
//       return 'Mars';
//     case 5:
//       return 'Jupiter';
//     case 6:
//       return 'Saturn';
//     case 7:
//       return 'Uranus';
//     default:
//       return 'Neptune';
//   }
// }

const getPlanetName = (id) => {
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  }[id];
};

console.log(getPlanetName(2));
