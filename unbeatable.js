module.exports = {
    botStartsFirstMove: function () {
        return "22"
    },
    botStartsSecondMove: function (board, playerCoord) {
        if (playerCoord === "11") {
            return "00"
        }
    },
    takeTheWin: function (board, bot) {
        if (board[0][0] === bot && board[0][1] === bot && board[0][2] === '.') {
            return board[0][2];
          } 
          else if (board[0][0] === '.' && board[0][1] === bot && board[0][2] === bot) {
            return board[0][0];
          }
          else if (board[0][0] === bot && board[0][1] === '.' && board[0][2] === bot) {
            return board[0][1];
          }
          else if (board[1][0] === bot && board[1][1] === bot && board[1][2] === '.') {
            return board[1][2];
          }
          else if (board[1][0] === bot && board[1][1] === '.' && board[1][2] === bot) {
            return board[1][1];
          }
          else if (board[1][0] === '.' && board[1][1] === bot && board[1][2] === bot) {
            return board[1][0];
          }
          else if (board[2][0] === bot && board[2][1] === bot &&board[2][2] === '.') {
            return board[2][2];
          }
          else if (board[2][0] === bot && board[2][1] === '.' &&board[2][2] === bot) {
            return board[2][1];
          }
          else if (board[2][0] === '.' && board[2][1] === bot &&board[2][2] === bot) {
            return board[2][0];
          }
           else if (board[0][0] === bot && board[1][0] === bot && board[2][0] === '.') {
            return board[2][0];
          } 
          else if (board[0][0] === bot && board[1][0] === '.' && board[2][0] === bot) {
            return board[1][0];
          } 
          else if (board[0][0] === '.' && board[1][0] === bot && board[2][0] === bot) {
            return board[0][0];
          } 
          else if (board[0][1] === bot && board[1][1] === bot && board[2][1] === '.') {
            return board[2][1];
          } 
          else if (board[0][1] === bot && board[1][1] === '.' && board[2][1] === bot) {
            return board[1][1];
          }
          else if (board[0][1] === '.' && board[1][1] === bot && board[2][1] === bot) {
            return board[0][1];
          } 
          else if (board[0][2] === bot && board[1][2] === bot && board[2][2] === '.') {
            return board[2][2];
          } 
          else if (board[0][2] === bot && board[1][2] === '.' && board[2][2] === bot) {
            return board[1][2];
          }
          else if (board[0][2] === '.' && board[1][2] === bot && board[2][2] === bot) {
            return board[0][2];
          }  
          else if (board[0][0] === bot && board[1][1] === bot && board[2][2] === '.') {
            return board[2][2];
          } 
          else if (board[0][0] === bot && board[1][1] === '.' && board[2][2] === bot) {
            return board[1][1];
          }
          else if (board[0][0] === '.' && board[1][1] === bot && board[2][2] === bot) {
            return board[0][0];
          } 
          else if (board[2][0] === bot && board[1][1] === bot && board[0][2] === '.') {
            return board[0][2];
          } 
          else if (board[2][0] === bot && board[1][1] === '.' && board[0][2] === '.') {
            return board[1][1];
          }
          else if (board[2][0] === '.' && board[1][1] === bot && board[0][2] === '.') {
            return board[2][0];
          } 
        },

        preventLosing: function (board, bot) {
          let opponent = bot === "X" ? "O" : "X"
          if (board[0][0] === opponent && board[0][1] === opponent && board[0][2] === '.') {
            return board[0][2];
          } 
          else if (board[0][0] === '.' && board[0][1] === opponent && board[0][2] === opponent) {
            return board[0][0];
          }
          else if (board[0][0] === opponent && board[0][1] === '.' && board[0][2] === opponent) {
            return board[0][1];
          }
          else if (board[1][0] === opponent && board[1][1] === opponent && board[1][2] === '.') {
            return board[1][2];
          }
          else if (board[1][0] === opponent && board[1][1] === '.' && board[1][2] === opponent) {
            return board[1][1];
          }
          else if (board[1][0] === '.' && board[1][1] === opponent && board[1][2] === opponent) {
            return board[1][0];
          }
          else if (board[2][0] === opponent && board[2][1] === opponent && board[2][2] === '.') {
            return board[2][2];
          }
          else if (board[2][0] === opponent && board[2][1] === '.' && board[2][2] === opponent) {
            return board[2][1];
          }
          else if (board[2][0] === '.' && board[2][1] === opponent && board[2][2] === opponent) {
            return board[2][0];
          }
           else if (board[0][0] === opponent && board[1][0] === opponent && board[2][0] === '.') {
            return board[2][0];
          } 
          else if (board[0][0] === opponent && board[1][0] === '.' && board[2][0] === opponent) {
            return board[1][0];
          } 
          else if (board[0][0] === '.' && board[1][0] === opponent && board[2][0] === opponent) {
            return board[0][0];
          } 
          else if (board[0][1] === opponent && board[1][1] === opponent && board[2][1] === '.') {
            return board[2][1];
          } 
          else if (board[0][1] === opponent && board[1][1] === '.' && board[2][1] === opponent) {
            return board[1][1];
          }
          else if (board[0][1] === '.' && board[1][1] === opponent && board[2][1] === opponent) {
            return board[0][1];
          } 
          else if (board[0][2] === opponent && board[1][2] === opponent && board[2][2] === '.') {
            return board[2][2];
          } 
          else if (board[0][2] === opponent && board[1][2] === '.' && board[2][2] === opponent) {
            return board[1][2];
          }
          else if (board[0][2] === '.' && board[1][2] === opponent && board[2][2] === opponent) {
            return board[0][2];
          }  
          else if (board[0][0] === opponent && board[1][1] === opponent && board[2][2] === '.') {
            return board[2][2];
          } 
          else if (board[0][0] === opponent && board[1][1] === '.' && board[2][2] === opponent) {
            return board[1][1];
          }
          else if (board[0][0] === '.' && board[1][1] === opponent && board[2][2] === opponent) {
            return board[0][0];
          } 
          else if (board[2][0] === opponent && board[1][1] === opponent && board[0][2] === '.') {
            return board[0][2];
          } 
          else if (board[2][0] === opponent && board[1][1] === '.' && board[0][2] === '.') {
            return board[1][1];
          }
          else if (board[2][0] === '.' && board[1][1] === opponent && board[0][2] === '.') {
            return board[2][0];
          } 
        }
}

   