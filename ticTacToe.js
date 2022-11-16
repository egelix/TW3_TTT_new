const prompt = require('prompt-sync')({ sigint: true });
const menu = require('./menu'); // use it e.g. like menu.get_menu_option()
const board = require('./board');
const coordinate = require('./coordinates');
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function main() {
  let gameMode = menu.getMenuOption();
  let gameBoard = board.getEmptyBoard();
  let isGameRunning = true;
  let currentPlayer = 'X';
  let winningPlayer = false;
  let itsATie = false;
  let name1 = '';
  let name2 = '';
  let botNames = ['Her-bot', 'Ro-Bot', 'Elisa-Bot', 'Ro-Botra', 'Bot-rand'];
  if (gameMode === 1) {
    console.log('Player 1 please enter your name: ');
    name1 = prompt();
    console.log('Player 2 please enter your name: ');
    name2 = prompt();
    console.log(`${name1} will be playing against ${name2}`);
  } else if (gameMode === 2) {
    name1 = pickRandomBotName(botNames);
    name2 = pickRandomBotName(botNames);
    console.log(`${name1} will be playing against ${name2}!`);
  } else if (gameMode === 3) {
    console.log('Player 1 please enter your name: ');
    name1 = prompt();
    name2 = pickRandomBotName(botNames);
    console.log(`${name1}, you will be playing against ${name2}`);
  } else if (gameMode === 4) {
    console.log('Player 1 please enter your name: ');
    name1 = prompt();
    name2 = pickRandomBotName(botNames);
    console.log(
      `${name1}, you will be playing against the indominable ${name2}`
    );
  }

  while (isGameRunning) {
    board.displayBoard(gameBoard);

    /* TODO

        in each new iteration of the while loop the program should 
        alternate the value of `currentPlayer` from `X` to `O`
        */

    /* TODO

        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
    if (gameMode === 1) {
      let humanCoord = coordinate.getPlayerMove(gameBoard, currentPlayer, name1, name2);
      gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;
    } else if (gameMode === 2) {
      let botCoord = coordinate.getRandomAiCoordinates(
        gameBoard,
        currentPlayer
      );
      gameBoard[botCoord[0]][botCoord[1]] = currentPlayer;
      await sleep(2000);
    } else if (gameMode === 3) {
      let humanCoord = coordinate.getPlayerMove(gameBoard, currentPlayer,);
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

    /* TODO 

        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */
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
  }

  function pickRandomBotName(names) {
    return names[coordinate.getRandomInt(names.length)];
  }
}

main();
