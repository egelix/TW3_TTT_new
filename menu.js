const prompt = require('prompt-sync')({ sigint: true });
const POSSIBLE_OPTIONS = ['1', '2', '3', '4'];

module.exports = {
  getMenuOption: function () {
    console.log(
      'Choose from the following options:\n 1. Human vs Human\n 2. Random AI vs Random AI\n 3. Human vs Random AI\n 4. Human vs Unbeatable AI'
    );
    while (true) {
      let menu = prompt();
      if (POSSIBLE_OPTIONS.includes(menu)) {
        return parseInt(menu);
      } else {
        console.log('Not a valid option. Please choose again: ');
      }
    }
  },
};
