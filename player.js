const prompt = require('prompt-sync')();
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

module.exports = {
    getNameOne: function (gameMode) {
        let name1 = "";
        let botNames = ['Her-bot', 'Ro-Bot', 'Elisa-Bot', 'Ro-Botra', 'Bot-rand'];
        if (gameMode === 1) {
            console.log('Player 1 please enter your name: ');
            name1 = prompt();
            
          } else if (gameMode === 2) {
            name1 = pickRandomBotName(botNames);
          } else if (gameMode === 3) {
            console.log('Player 1 please enter your name: ');
            name1 = prompt();
          } else if (gameMode === 4) {
            console.log('Player 1 please enter your name: ');
            name1 = prompt();
          }
          return name1
    },
    getNameTwo: function (gameMode) {
        let name2 = '';
        let botNames = ['Her-bot', 'Ro-Bot', 'Elisa-Bot', 'Ro-Botra', 'Bot-rand'];
        if (gameMode === 1) {
            console.clear();
            console.log('Player 2 please enter your name: ');
            name2 = prompt();
          } else if (gameMode === 2) {
            name2 = pickRandomBotName(botNames);
          } else if (gameMode === 3) {
            name2 = pickRandomBotName(botNames);
          } else if (gameMode === 4) {
            name2 = pickRandomBotName(botNames);
            console.log(
            );
          }
          return name2;
    },
    pickRandomBotName: function (names) {
        return names[coordinate.getRandomInt(names.length)];
    }
}



//   let name2 = '';
//   let botNames = ['Her-bot', 'Ro-Bot', 'Elisa-Bot', 'Ro-Botra', 'Bot-rand'];
//   if (gameMode === 1) {
//     console.log('Player 1 please enter your name: ');
//     name1 = prompt();
//     console.log('Player 2 please enter your name: ');
//     name2 = prompt();
//   } else if (gameMode === 2) {
//     name1 = pickRandomBotName(botNames);
//     name2 = pickRandomBotName(botNames);
//     console.log(`${name1} will be playing against ${name2}!`);
//   } else if (gameMode === 3) {
//     console.log('Player 1 please enter your name: ');
//     name1 = prompt();
//     name2 = pickRandomBotName(botNames);
//     console.log(`${name1}, you will be playing against ${name2}`);
//   } else if (gameMode === 4) {
//     console.log('Player 1 please enter your name: ');
//     name1 = prompt();
//     name2 = pickRandomBotName(botNames);
//     console.log(
//       `${name1}, you will be playing against the indominable ${name2}`
//     );
//   }