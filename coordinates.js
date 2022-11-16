const prompt = require("prompt-sync")();
const POSSIBLE_COORD1 = ["a", "b", "c"];
const POSSIBLE_COORD2 = ["1", "2", "3"];

module.exports = {
  getPlayerMove: function (board, current_player) {
    let coordinates = "";
    let newCoordinates = "";
    console.log(`Player ${current_player}, please enter coordinates: `)
    while (true) {
      coordinates = prompt();          
      if (coordinates === "") {
      console.log("Please enter a move:")
      } else if (POSSIBLE_COORD1.includes(coordinates[0].toLowerCase()) && POSSIBLE_COORD2.includes(coordinates[1])) {
        newCoordinates = module.exports.translateCoordinates(coordinates);
        if (board[newCoordinates[0]][newCoordinates[1]] === ".") {
          return newCoordinates;
        } else {
          console.log("Coordinates already taken. Please try again: ")
        }
      } else if (coordinates.toLowerCase() === "quit") {
        process.exit(1);
      } else {
        console.log("Invalid Coordinates. Please enter again:")
      }
    }
    // let indexOnBoard1 = null;
    // let indexOnBoard2 = coordinates2 - 1;
    //   for (let i = 0; i < POSSIBLE_COORD1.length; i++) {
    //     if (POSSIBLE_COORD1[i] === coordinates[0].toLowerCase) {
    //         indexOnBoard1 = i;
    //     }
    //   }
     
    //   if (board[indexOnBoard1][indexOnBoard2] !== ".") {
    //     console.log("Coordinates already taken. Please enter again: ")
    
    
    /*
        Should return the read coordinates for the tic tac toe board from the terminal.
        The coordinates should be in the format  letter, number where the letter is 
        A, B or C and the number 1, 2 or 3.
        If the user enters an invalid coordinate (like Z0 or 1A, A11, sadfdsaf) 
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters a coordinate that is already taken on the board.
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters the word "quit" in any format of capitalized letters the program
        should stop.
        */
  },
  translateCoordinates: function (coordinates) {    
    let newCoordinates = [];
    for (let i = 0; i < POSSIBLE_COORD1.length; i++) {
      if (POSSIBLE_COORD1[i] === coordinates[0].toLowerCase()) {
        newCoordinates.push(i);
      }
    }
    newCoordinates.push(coordinates[1] - 1);
    return newCoordinates.join("").toString();
  },
  getRandomAiCoordinates: function (board, current_bot) {
    console.log("Bot-move");
      while (true) {
      let randomCoord1 = module.exports.getRandomInt(3);
      let randomCoord2 = module.exports.getRandomInt(3);
      if (board[randomCoord1][randomCoord2] === ".") {
        let currentBotMove = "" + randomCoord1 + randomCoord2;
        return currentBotMove;
      }
    }
    /*
        Should return a tuple of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
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
    return Math.floor(Math.random() * max)
  }
};

// run this function to test whether you have correctly implemented the other functions
// function checkCoordinates() {
  board_1 = [
    ["X", "X", "."],
    ["X", ".", "."],
    ["X", "X", "."],
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