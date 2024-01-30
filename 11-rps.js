// WPU Coding Challenge 2024
// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   if (p1 === 'rock' && p2 === 'scissors') {
//     return 'Player 1 won!';
//   } else if (p1 === 'scissors' && p2 === 'paper') {
//     return 'Player 1 won!';
//   } else if (p1 === 'paper' && p2 === 'rock') {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };

// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };

// const rps = (p1, p2) => (p1 === p2 ? 'Draw!' : (p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') ? 'Player 1 won!' : 'Player 2 won!');

const rps = (p1, p2) => {
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`;
};

console.log(rps('paper', 'rock'));
