const board = require("./board");

module.exports = {
    getBotXCoord: function (board, bot, gameRound, ) {
      if (gameRound === 1) {
        return "22";
      } else if (gameRound === 2) {
        return module.exports.botXSecondMove(board,);
      } else if (module.exports.takeTheWin(board,bot) === false) {
        return module.exports.takeTheWin(board, bot)
      } else {
        return module.exports.preventLosing(board, bot)
      }
    },
    // botXFirstMove: function () {
    //     return "22"
    // },
    botXSecondMove: function (board) {
        if (board[1][1] === "O") {
            return "00"
        }
    },
    takeTheWin: function (board, bot) {
        if (board[0][0] === bot && board[0][1] === bot && board[0][2] === '.') {
            return "02";
          } 
          else if (board[0][0] === '.' && board[0][1] === bot && board[0][2] === bot) {
            return "00";
          }
          else if (board[0][0] === bot && board[0][1] === '.' && board[0][2] === bot) {
            return "01";
          }
          else if (board[1][0] === bot && board[1][1] === bot && board[1][2] === '.') {
            return "12";
          }
          else if (board[1][0] === bot && board[1][1] === '.' && board[1][2] === bot) {
            return "11";
          }
          else if (board[1][0] === '.' && board[1][1] === bot && board[1][2] === bot) {
            return "10";
          }
          else if (board[2][0] === bot && board[2][1] === bot &&board[2][2] === '.') {
            return "22";
          }
          else if (board[2][0] === bot && board[2][1] === '.' &&board[2][2] === bot) {
            return "21";
          }
          else if (board[2][0] === '.' && board[2][1] === bot &&board[2][2] === bot) {
            return "20";
          }
           else if (board[0][0] === bot && board[1][0] === bot && board[2][0] === '.') {
            return "20";
          } 
          else if (board[0][0] === bot && board[1][0] === '.' && board[2][0] === bot) {
            return "10";
          } 
          else if (board[0][0] === '.' && board[1][0] === bot && board[2][0] === bot) {
            return "00";
          } 
          else if (board[0][1] === bot && board[1][1] === bot && board[2][1] === '.') {
            return "21";
          } 
          else if (board[0][1] === bot && board[1][1] === '.' && board[2][1] === bot) {
            return "11";
          }
          else if (board[0][1] === '.' && board[1][1] === bot && board[2][1] === bot) {
            return "01";
          } 
          else if (board[0][2] === bot && board[1][2] === bot && board[2][2] === '.') {
            return "22";
          } 
          else if (board[0][2] === bot && board[1][2] === '.' && board[2][2] === bot) {
            return "12";
          }
          else if (board[0][2] === '.' && board[1][2] === bot && board[2][2] === bot) {
            return "02";
          }  
          else if (board[0][0] === bot && board[1][1] === bot && board[2][2] === '.') {
            return "22";
          } 
          else if (board[0][0] === bot && board[1][1] === '.' && board[2][2] === bot) {
            return "11";
          }
          else if (board[0][0] === '.' && board[1][1] === bot && board[2][2] === bot) {
            return "00";
          } 
          else if (board[2][0] === bot && board[1][1] === bot && board[0][2] === '.') {
            return "02";
          } 
          else if (board[2][0] === bot && board[1][1] === '.' && board[0][2] === bot) {
            return "11";
          }
          else if (board[2][0] === '.' && board[1][1] === bot && board[0][2] === bot) {
            return "20";
          }
          else { 
            return false
          }   
      },

        preventLosing: function (board, bot) {
          let opponent = bot === "X" ? "O" : "X"
          if (board[0][0] === opponent && board[0][1] === opponent && board[0][2] === '.') {
            return "02";
          } 
          else if (board[0][0] === '.' && board[0][1] === opponent && board[0][2] === opponent) {
            return "00";
          }
          else if (board[0][0] === opponent && board[0][1] === '.' && board[0][2] === opponent) {
            return "01";
          }
          else if (board[1][0] === opponent && board[1][1] === opponent && board[1][2] === '.') {
            return "12";
          }
          else if (board[1][0] === opponent && board[1][1] === '.' && board[1][2] === opponent) {
            return "11";
          }
          else if (board[1][0] === '.' && board[1][1] === opponent && board[1][2] === opponent) {
            return "10";
          }
          else if (board[2][0] === opponent && board[2][1] === opponent && board[2][2] === '.') {
            return "22";
          }
          else if (board[2][0] === opponent && board[2][1] === '.' && board[2][2] === opponent) {
            return "21";
          }
          else if (board[2][0] === '.' && board[2][1] === opponent && board[2][2] === opponent) {
            return "20";
          }
           else if (board[0][0] === opponent && board[1][0] === opponent && board[2][0] === '.') {
            return "20";
          } 
          else if (board[0][0] === opponent && board[1][0] === '.' && board[2][0] === opponent) {
            return "10";
          } 
          else if (board[0][0] === '.' && board[1][0] === opponent && board[2][0] === opponent) {
            return "00";
          } 
          else if (board[0][1] === opponent && board[1][1] === opponent && board[2][1] === '.') {
            return "21";
          } 
          else if (board[0][1] === opponent && board[1][1] === '.' && board[2][1] === opponent) {
            return "11";
          }
          else if (board[0][1] === '.' && board[1][1] === opponent && board[2][1] === opponent) {
            return "01";
          } 
          else if (board[0][2] === opponent && board[1][2] === opponent && board[2][2] === '.') {
            return "22";
          } 
          else if (board[0][2] === opponent && board[1][2] === '.' && board[2][2] === opponent) {
            return "12";
          }
          else if (board[0][2] === '.' && board[1][2] === opponent && board[2][2] === opponent) {
            return "02";
          }  
          else if (board[0][0] === opponent && board[1][1] === opponent && board[2][2] === '.') {
            return "22";
          } 
          else if (board[0][0] === opponent && board[1][1] === '.' && board[2][2] === opponent) {
            return "11";
          }
          else if (board[0][0] === '.' && board[1][1] === opponent && board[2][2] === opponent) {
            return "00";
          } 
          else if (board[2][0] === opponent && board[1][1] === opponent && board[0][2] === '.') {
            return "02";
          } 
          else if (board[2][0] === opponent && board[1][1] === '.' && board[0][2] === opponent) {
            return "11";
          }
          else if (board[2][0] === '.' && board[1][1] === opponent && board[0][2] === opponent) {
            return "20";
          }
          else {
            return false
        }
}
}
// let testBoard =[
//     ['.', '.', '.'],
//     ['.', '.', '.'],
//     ['.', '.', '.'],
//   ];
// console.log(module.exports.getBotXCoord(testBoard, "X", 1, undefined));