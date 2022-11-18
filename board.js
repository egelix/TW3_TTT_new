const prompt = require('prompt-sync')({ sigint: true });

module.exports = {
  getEmptyBoard: function () {
    return [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.'],
    ];
  },

  displayBoard: function (board) {
    console.log('       ', '1', ' ', '2', ' ', '3');
    console.log(`    A   ${board[0].join(' | ')}`);
    console.log('       ---+---+---');
    console.log(`    B   ${board[1].join(' | ')}`);
    console.log('       ---+---+---');
    console.log(`    C   ${board[2].join(' | ')}`);
    console.log('       ---+---+---');
  },

  ifItsATie: function (board, player1, player2) {
    if (module.exports.isBoardFull(board) === true) {
      console.clear();
      console.log(`     ${player1} (X) vs ${player2} (O)\n`)
      module.exports.displayBoard(board);
      console.log("\nIt's a tie!\n");
      return true;
      }
  },

  isBoardFull: function (board) {
    let boardFull = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i].includes('.')) {
        boardFull = false;
      }
    }
    return boardFull;
  },

  ifPlayerWon: function (board, player1, player2, currentPlayer) {
    if (module.exports.getWinningPlayer(board) === true) {
      console.clear();
      console.log(`     ${player1} (X) vs ${player2} (O)\n`)
      module.exports.displayBoard(board);
      console.log(`\n${currentPlayer} wins!\n`);
      return true;
    }
  },

  getWinningPlayer: function (board) {
    if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
      return true;
    } else if (
      board[1][0] === 'X' &&
      board[1][1] === 'X' &&
      board[1][2] === 'X'
    ) {
      return true;
    } else if (
      board[2][0] === 'X' &&
      board[2][1] === 'X' &&
      board[2][2] === 'X'
    ) {
      return true;
    } else if (
      board[0][0] === 'X' &&
      board[1][0] === 'X' &&
      board[2][0] === 'X'
    ) {
      return true;
    } else if (
      board[0][1] === 'X' &&
      board[1][1] === 'X' &&
      board[2][1] === 'X'
    ) {
      return true;
    } else if (
      board[0][2] === 'X' &&
      board[1][2] === 'X' &&
      board[2][2] === 'X'
    ) {
      return true;
    } else if (
      board[0][0] === 'X' &&
      board[1][1] === 'X' &&
      board[2][2] === 'X'
    ) {
      return true;
    } else if (
      board[2][0] === 'X' &&
      board[1][1] === 'X' &&
      board[0][2] === 'X'
    ) {
      return true;
    } else if (
      board[0][0] === 'O' &&
      board[0][1] === 'O' &&
      board[0][2] === 'O'
    ) {
      return true;
    } else if (
      board[1][0] === 'O' &&
      board[1][1] === 'O' &&
      board[1][2] === 'O'
    ) {
      return true;
    } else if (
      board[2][0] === 'O' &&
      board[2][1] === 'O' &&
      board[2][2] === 'O'
    ) {
      return true;
    } else if (
      board[0][0] === 'O' &&
      board[1][0] === 'O' &&
      board[2][0] === 'O'
    ) {
      return true;
    } else if (
      board[0][1] === 'O' &&
      board[1][1] === 'O' &&
      board[2][1] === 'O'
    ) {
      return true;
    } else if (
      board[0][2] === 'O' &&
      board[1][2] === 'O' &&
      board[2][2] === 'O'
    ) {
      return true;
    } else if (
      board[0][0] === 'O' &&
      board[1][1] === 'O' &&
      board[2][2] === 'O'
    ) {
      return true;
    } else if (
      board[2][0] === 'O' &&
      board[1][1] === 'O' &&
      board[0][2] === 'O'
    ) {
      return true;
    } else {
      return false;
    }
  },
};
