const unbeatable = require('./unbeatable');
const prompt = require('prompt-sync')();
const POSSIBLE_COORD1 = ['a', 'b', 'c'];
const POSSIBLE_COORD2 = ['1', '2', '3'];
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = {
  getPlayerMove: function (board, currentPlayer) {
    let coordinates = '';
    let newCoordinates = '';
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
  getHumanOrBotCoord: function (botNames, currentPlayer, board) {
    if (botNames.includes(currentPlayer)) {
      return module.exports.getRandomAiCoordinates(board, currentPlayer);
    } else {
      return module.exports.getPlayerMove(board, currentPlayer);
    }
  },

  getHumanOrUnbeatableCoord: function (board, bot, currentPlayer, name2, gameRound) {
    if (currentPlayer === name2) {
      return module.exports.getUnbeatableAiCoordinates(board, bot, currentPlayer, name2, gameRound);
    } else {
      return module.exports.getPlayerMove(board, currentPlayer);
    }
  },

  getUnbeatableAiCoordinates: function (board, bot, currentPlayer, name2, gameRound) {
    if (bot === "X") {
      return unbeatable.getBotXCoord(board, bot, currentPlayer, name2, gameRound);
    } else {
      return unbeatable.getBotOCoord(board, bot, currentPlayer, name2, gameRound);
    }
    
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
// let testBoard =[
//     ['.', '.', '.'],
//     ['.', 'O', '.'],
//     ['.', '.', 'X'],
//   ];
// let gameRound = 3
// console.log(module.exports.getHumanOrUnbeatableCoord(testBoard, "X", "Her-Bot", "Her-Bot", gameRound));
// console.log(gameRound)