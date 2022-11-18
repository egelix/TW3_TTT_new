const prompt = require('prompt-sync')({ sigint: true });
const menu = require('./menu'); 
const board = require('./board');
const coordinate = require('./coordinates');
const player = require('./player.js');
const { ifPlayerWon, ifItsATie } = require('./board');
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function main() {
  console.clear();
  console.log("Welcome to TIC TAC TOE!\n")
  let gameMode = menu.getMenuOption();
  console.clear();
  let gameBoard = board.getEmptyBoard();
  let isGameRunning = true;
  let winningPlayer = false;
  let itsATie = false;
  let botNames = ['Her-bot', 'Ro-Bot', 'Elisa-Bot', 'Ro-Botra', 'Bot-rand'];
  let name1 = player.getNameOne(gameMode);
  let name2 = player.getNameTwo(gameMode, name1);
  let player1 = player.assignRandomPlayerOne(name1, name2);
  let player2 = player1 === name1 ? name2 : name1;
  let currentPlayer = player1;
  let botStartingPlayer = player1 === name2 ? true : false;
  let botSign = botStartingPlayer === true ? "X" : "O";
  let gameRound = 1;

  while (isGameRunning) {
    console.clear();
    console.log(`     ${player1} (X) vs ${player2} (O)\n`)
    board.displayBoard(gameBoard);
    console.log('');

    let playerCoord = '';
    let latestMove = playerCoord;
    if (gameMode === 1) {
      await sleep(500);
      playerCoord = coordinate.getPlayerMove(gameBoard, currentPlayer);
    } else if (gameMode === 2) {
      playerCoord = coordinate.getRandomAiCoordinates(gameBoard, currentPlayer);
      await sleep(2000);
    } else if (gameMode === 3) {
      playerCoord = coordinate.getHumanOrBotCoord(botNames, currentPlayer, gameBoard);
    } else if (gameMode === 4) {
      playerCoord = coordinate.getHumanOrUnbeatableCoord(gameBoard, botSign, currentPlayer, name2, gameRound);
    }
    gameBoard[playerCoord[0]][playerCoord[1]] = currentPlayer === player1 ? "X" : "O";
    gameRound += 1;

    if (board.ifPlayerWon(gameBoard, player1, player2, currentPlayer) === true || board.ifItsATie(gameBoard, player1, player2) === true) {
      break;
    }

    currentPlayer = currentPlayer === player1 ? player2 : player1;
    
  
}
};
main();
