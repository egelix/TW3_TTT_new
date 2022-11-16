const prompt = require('prompt-sync')({ sigint: true });
const menu = require('./menu'); 
const board = require('./board');
const coordinate = require('./coordinates');
const player = require('./player.js')
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
  let currentPlayer = 'X';
  let winningPlayer = false;
  let itsATie = false;
  let name1 = player.getNameOne(gameMode);
  let name2 = player.getNameTwo(gameMode);
  // let botNames = ['Her-bot', 'Ro-Bot', 'Elisa-Bot', 'Ro-Botra', 'Bot-rand'];
  // if (gameMode === 1) {
  //   console.log('Player 1 please enter your name: ');
  //   name1 = prompt();
  //   console.log('Player 2 please enter your name: ');
  //   name2 = prompt();
  // } else if (gameMode === 2) {
  // name1 = pickRandomBotName(botNames);
  //   name2 = pickRandomBotName(botNames);
  //   console.log(`${name1} will be playing against ${name2}!`);
  // } else if (gameMode === 3) {
  //   console.log('Player 1 please enter your name: ');
  //   name1 = prompt();
  //   name2 = pickRandomBotName(botNames);
  //   console.log(`${name1}, you will be playing against ${name2}`);
  // } else if (gameMode === 4) {
  //   console.log('Player 1 please enter your name: ');
  //   name1 = prompt();
  //   name2 = pickRandomBotName(botNames);
  //   console.log(
  //     `${name1}, you will be playing against the indominable ${name2}`
  //   );
  // }
  console.clear();
  console.log(`${name1} vs ${name2}\n`)
  while (isGameRunning) {
    console.clear();
    console.log(`${name1} vs ${name2}\n`)
    board.displayBoard(gameBoard);


    if (gameMode === 1) {
      await sleep(500);
      let humanCoord = coordinate.getPlayerMove(
        gameBoard,
        currentPlayer,
        name1,
        name2
      );
      gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;
    } else if (gameMode === 2) {
      let botCoord = coordinate.getRandomAiCoordinates(
        gameBoard,
        currentPlayer
      );
      gameBoard[botCoord[0]][botCoord[1]] = currentPlayer;
      await sleep(2000);
    } else if (gameMode === 3) {
      let humanCoord = coordinate.getPlayerMove(gameBoard, currentPlayer, name1);
      gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;
      board.displayBoard(gameBoard);
      winningPlayer = board.getWinningPlayer(gameBoard);
      if (winningPlayer) {
        board.displayBoard(gameBoard);
        console.log(`${currentPlayer} wins!`);
        break;
      }
      itsATie = board.isBoardFull(gameBoard);
      if (itsATie) {
        board.displayBoard(gameBoard);
        console.log("It's a tie!");
        break;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      let botCoord = coordinate.getRandomAiCoordinates(
        gameBoard,
        currentPlayer
      );
      gameBoard[botCoord[0]][botCoord[1]] = currentPlayer;
    } else if (gameMode === 4) {
      console.log('under construction');
      break;
    }

    winningPlayer = board.getWinningPlayer(gameBoard);
    if (winningPlayer) {
      console.clear();
      board.displayBoard(gameBoard);
      console.log(`\n${currentPlayer} wins!\n`);
      break;
    }
    itsATie = board.isBoardFull(gameBoard);
    if (itsATie) {
      console.clear();
      board.displayBoard(gameBoard);
      console.log("\nIt's a tie!\n");
      break;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

// function pickRandomBotName(names) {
//     return names[coordinate.getRandomInt(names.length)];
// }
}

main();
