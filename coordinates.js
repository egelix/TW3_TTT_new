const prompt = require('prompt-sync')();
const POSSIBLE_COORD1 = ['a', 'b', 'c'];
const POSSIBLE_COORD2 = ['1', '2', '3'];

module.exports = {
  getPlayerMove: function (board, currentPlayer) {
    let coordinates = '';
    let newCoordinates = '';
    // if (currentPlayer === 'X') {
    //   console.log(`\n${name1}, please enter your move: `);
    // } else {
    //   console.log(`\n${name2}, please enter your move: `);
    // }
    console.log(`${currentPlayer}... please enter your move:`)
    while (true) {
      coordinates = prompt();
      if (coordinates === '') {
        console.log('Please enter a move:');
      } else if (
        POSSIBLE_COORD1.includes(coordinates[0].toLowerCase()) &&
        POSSIBLE_COORD2.includes(coordinates[1])
      ) {
        newCoordinates = module.exports.translateCoordinates(coordinates);
        if (board[newCoordinates[0]][newCoordinates[1]] === '.') {
          return newCoordinates;
        } else {
          console.log('Coordinates already taken. Please try again: ');
        }
      } else if (coordinates.toLowerCase() === 'quit') {
        process.exit(1);
      } else {
        console.log('Invalid Coordinates. Please enter again:');
      }
    }
  },
  translateCoordinates: function (coordinates) {
    let newCoordinates = [];
    for (let i = 0; i < POSSIBLE_COORD1.length; i++) {
      if (POSSIBLE_COORD1[i] === coordinates[0].toLowerCase()) {
        newCoordinates.push(i);
      }
    }
    newCoordinates.push(coordinates[1] - 1);
    return newCoordinates.join('').toString();
  },
  getRandomAiCoordinates: function (board, currentPlayer) {
    console.log(`${currentPlayer} is on the move`);
    while (true) {
      let randomCoord1 = module.exports.getRandomInt(3);
      let randomCoord2 = module.exports.getRandomInt(3);
      if (board[randomCoord1][randomCoord2] === '.') {
        let currentBotMove = '' + randomCoord1 + randomCoord2;
        return currentBotMove;
      }
    }
  },

  getUnbeatableAiCoordinates: function (board, current_player) {
    /*
        Should return an array of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        The chosen coordinate should always stop the other player from winning or
        maximize the current player's chances to win.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  },
  getRandomInt: function (max) {
    return Math.floor(Math.random() * max);
  },
};

// run this function to test whether you have correctly implemented the other functions
// function checkCoordinates() {
board_1 = [
  ['X', 'X', '.'],
  ['X', '.', '.'],
  ['X', 'X', '.'],
];
//   console.log(
//     "It should console.log the coordinates selected by the human player"
//   );
//   let coordinates = module.exports.getPlayerMove(board_1, "X");
//   console.log(coordinates);

// board_2 = [
//   ["O", "O", "."],
//   ["X", "O", "."],
//   ["X", "X", "O"],
// ];
// console.log("The console.loged coordinate should be only (0,2) or (1,2)");
// console.log(getRandomAiCoordinates(board_2));
// console.log("The console.loged coordinate should be only (0,2) or (1,2)");
// console.log(getRandomAiCoordinates(board_2));
// console.log("The console.loged coordinate should be only (0,2) or (1,2)");
// console.log(getRandomAiCoordinates(board_2));

// board_3 = [
//   ["O", "X", "X"],
//   ["X", "O", "X"],
//   ["X", "O", "X"],
// ];
// console.log("The console.loged coordinate should be None");
// console.log(getRandomAiCoordinates(board_3));

// board_4 = [
//   [".", "O", "."],
//   ["X", "O", "."],
//   ["X", "X", "O"],
// ];
// console.log("The console.loged coordinate should always be (0, 0)");
// console.log(getUnbeatableAiCoordinates(board_4, "X"));

// board_5 = [
//   ["X", "O", "."],
//   ["X", ".", "."],
//   ["O", "O", "X"],
// ];
// console.log("The console.loged coordinate should always be (1, 1)");
// console.log(getUnbeatableAiCoordinates(board_5, "O"));

// board_6 = [
//   ["O", "O", "."],
//   ["O", "X", "."],
//   [".", "X", "."],
// ];
// console.log("The console.loged coordinate should either (0, 2) or (2, 0)");
// console.log(getUnbeatableAiCoordinates(board_6));
// }
// board_1 = [
//   ["X", "O", "."],
//   ["X", "O", "."],
//   ["X", "X", "O"],
// ];
// console.log(module.exports.getPlayerMove(board_1, "X"));
// console.log(module.exports.getRandomAiCoordinates(board_1, "X"))
