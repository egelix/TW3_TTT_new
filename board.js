module.exports = {
  
  getEmptyBoard: function () 
  {
    return [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
  },

  displayBoard: function (board) {
    console.log("       ","1"," ","2"," ","3")
    console.log(`    A   ${board[0].join(" | ")}`)
    console.log("       ---+---+---")
    console.log(`    B   ${board[1].join(" | ")}`)
    console.log("       ---+---+---")
    console.log(`    C   ${board[2].join(" | ")}`)
    console.log("       ---+---+---")
 
        // Should console.log the tic tac toe board in a format similar to
        //     1   2   3
        //     A   X | O | . 
        //     ---+---+---
        //     B   X | O | .
        //     --+---+---
        //     C   0 | X | . 
        //     --+---+---
        // */
  },

  isBoardFull: function (board) {

    boardFull = true

    for (let i = 0; i < board.length; i++) {
      if (board[i].includes(".")) {
        return false;
      } else {
        return boardFull;
      }
    }

    /*
        should return True if there are no more empty place on the board,
        otherwise should return False
        */
  },

  getWinningPlayer: function (board) {

    if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
      return 'X';
    } else if (
      board[1][0] === 'X' &&
      board[1][1] === 'X' &&
      board[1][2] === 'X'
    ) {
      return 'X';
    } else if (
      board[2][0] === 'X' &&
      board[2][1] === 'X' &&
      board[2][2] === 'X'
    ) {
      return 'X';
    } else if (
      board[0][0] === 'X' &&
      board[1][0] === 'X' &&
      board[2][0] === 'X'
    ) {
      return 'X';
    } else if (
      board[0][1] === 'X' &&
      board[1][1] === 'X' &&
      board[2][1] === 'X'
    ) {
      return 'X';
    } else if (
      board[0][2] === 'X' &&
      board[1][2] === 'X' &&
      board[2][2] === 'X'
    ) {
      return 'X';
    } else if (
      board[0][0] === 'X' &&
      board[1][1] === 'X' &&
      board[2][2] === 'X'
    ) {
      return 'X';
    } else if (
      board[2][0] === 'X' &&
      board[1][1] === 'X' &&
      board[0][2] === 'X'
    ) {
      return 'X';
    } else if (
      board[0][0] === 'O' &&
      board[0][1] === 'O' &&
      board[0][2] === 'O'
    ) {
      return 'O';
    } else if (
      board[1][0] === 'O' &&
      board[1][1] === 'O' &&
      board[1][2] === 'O'
    ) {
      return 'O';
    } else if (
      board[2][0] === 'O' &&
      board[2][1] === 'O' &&
      board[2][2] === 'O'
    ) {
      return 'O';
    } else if (
      board[0][0] === 'O' &&
      board[1][0] === 'O' &&
      board[2][0] === 'O'
    ) {
      return 'O';
    } else if (
      board[0][1] === 'O' &&
      board[1][1] === 'O' &&
      board[2][1] === 'O'
    ) {
      return 'O';
    } else if (
      board[0][2] === 'O' &&
      board[1][2] === 'O' &&
      board[2][2] === 'O'
    ) {
      return 'O';
    } else if (
      board[0][0] === 'O' &&
      board[1][1] === 'O' &&
      board[2][2] === 'O'
    ) {
      return 'O';
    } else if (
      board[2][0] === 'O' &&
      board[1][1] === 'O' &&
      board[0][2] === 'O'
    ) {
      return 'O';
    } else return 'none';
    // board[0][0] && board[0][1] && board [0][2] === "X" ? console.log() 
    



    /*
      Should return the player that wins based on the tic tac toe rules.
      If no player has won, than "None" is returned.
      */
  },
};

// run this function to test whether you have correctly implemented the other function
function checkBoards() {
  let board = module.exports.getEmptyBoard();
  console.log(board);

  board = [["X", "O", "."],["X", "O", "."],["0", "X", "."]];

  console.log(`Should give out:"

        1   2   3
    A   X | O | . 
       ---+---+---
    B   X | O | .
       ---+---+---
    C   0 | X | . 
       ---+---+---`);
  module.exports.displayBoard(board);

  board_1 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return False");
  console.log(module.exports.isBoardFull(board_1));

  board_2 = [
    [".", "O", "O"],
    [".", "O", "X"],
    [".", "X", "X"],
  ];
  console.log("Should return False");
  console.log(module.exports.isBoardFull(board_2));

  board_3 = [
    ["O", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ];
  console.log("Should return True");
  console.log(module.exports.isBoardFull(board_3));

  board_4 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return X");
  console.log(module.exports.getWinningPlayer(board_4));

  board_5 = [
    ["X", "O", "O"],
    ["X", "O", "."],
    ["O", "X", "X"],
  ];
  console.log("Should return O");
  console.log(module.exports.getWinningPlayer(board_5));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("Should return None");
  console.log(module.exports.getWinningPlayer(board_6));
}

checkBoards();