const prompt = require('prompt-sync')();
const coordinate = require('./coordinates');
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
            name1 = module.exports.pickRandomBotName(botNames);
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
            name2 = module.exports.pickRandomBotName(botNames);
          } else if (gameMode === 3) {
            name2 = module.exports.pickRandomBotName(botNames);
          } else if (gameMode === 4) {
            name2 = module.exports.pickRandomBotName(botNames);
            console.log(
            );
          }
          return name2;
    },
    pickRandomBotName: function (names) {
        return names[coordinate.getRandomInt(names.length)];
    },
    assignRandomPlayerOne: function (name1, name2) {
        let names = [name1, name2];
        return names[module.exports.getRandomInt(2)]
    },
    getRandomInt: function (max) {
        return Math.floor(Math.random() * max);
    },
}
