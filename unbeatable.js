const board = require("./board");
const coordinates = require("./coordinates");

module.exports = {
    getBotXCoord: function (board, bot, currentPlayer, name2, gameRound) {
        if (gameRound === 1) {
        return "22";
      } else if (gameRound === 3) {
        return module.exports.botXSecondMove(board, bot, currentPlayer, name2, gameRound);
      } else if (module.exports.takeTheWin(board, bot, currentPlayer, name2, gameRound) !== false) {
        return module.exports.takeTheWin(board, bot, currentPlayer, name2, gameRound);
      } else if (module.exports.preventLosing(board, bot, currentPlayer, name2, gameRound) !==false) {
        return module.exports.preventLosing(board, bot, currentPlayer, name2, gameRound);
      } else if (gameRound === 5) {
        return module.exports.botXThirdMove(board, bot, currentPlayer, name2, gameRound);
      }
    },
    
    getBotOCoord: function (board, bot, currentPlayer, name2, gameRound) {
        if (board[1][1] === ".") {
            return "11";
        } else if (gameRound === 2 && board[1][1] !== ".") {
            return "20"
        } else if (module.exports.takeTheWin(board, bot, currentPlayer, name2, gameRound) !== false) {
            return module.exports.takeTheWin(board, bot, currentPlayer, name2, gameRound);
        } else if (module.exports.preventLosing(board, bot, currentPlayer, name2, gameRound) !==false) {
            return module.exports.preventLosing(board, bot, currentPlayer, name2, gameRound);
        } else {
            // return module.exports.getRandomAiCoordinates(board, bot, currentPlayer, name2, gameRound);
        }
    },
 
    botXSecondMove: function (board, bot, currentPlayer, name2, gameRound) {
        if (board[1][1] === "O") {
            return "00"
        } else if (board[0][1] === "O" || board[0][2] === "O" || board[1][2] === "O") {
            return "20";
        } else if (board[1][0] === "O" || board[2][0] === "O" || board[2][1] === "O") {
            return "02";
        } else if (board[0][0] === "O") {
            return "20";
        }
    },
    
    botXThirdMove: function (board, bot, currentPlayer, name2, gameRound) {
        if (board[0][1] === "O" && board[2][1] === "O" && board[2][0] === "X") {
            return "11";
        } else if (board[1][2] === "O" && board[2][1] === "O" && board[2][0] === "X") {
            return "11";
        } else if (board[0][2] === "O" && board[2][1] === "O" && board[2][0] === "X") {
            return "00";
        } else if (board[0][0] === "O") {
            return "11";
        } else if (board[1][0] === "O" && board[1][2] === "O" && board[0][2] === "X") {
            return "11";
        } else if (board[2][1] === "O" && board[1][2] === "O" && board[0][2] === "X") {
            return "11";
        } else {
            return "00";
        }
    },
    
    botOSecondMove: function (board, bot, currentPlayer, name2, gameRound) {
        return;
    },

    takeTheWin: function (board, bot, currentPlayer, name2, gameRound) {
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
            return false;
          }   
      },

        preventLosing: function (board, bot, currentPlayer, name2, gameRound) {
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
            return false;
        }
}
}
// let testBoard =[
//     ['.', '.', '.'],
//     ['.', '.', '.'],
//     ['.', '.', '.'],
//   ];
// console.log(module.exports.getBotXCoord(testBoard, "X", 1, undefined));