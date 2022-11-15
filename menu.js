const prompt = require('prompt-sync')({ sigint: true });
const POSSIBLE_OPTIONS = ["1", "2", "3", "4"]

module.exports = {
  getMenuOption: function () {
    console.log(
      'Choose from the following options:\n 1. Human vs Human\n 2. Random AI vs Random AI\n 3. Human vs Random AI\n 4. Human vs Unbeatable AI');
    while (true) {
        let menu = prompt();
        if (POSSIBLE_OPTIONS.includes(menu)) {
            return parseInt(menu);
        } else {
            console.log("Not a valid option. Please choose again: ")
        }
    }
    //   return 1;
    // } else if (menu === '2') {
    //   return 2;
    // } else if (menu === '3') {
    //   return 3;
    // } else if (menu === '4') {
    //   return 4;
    // }

    // while (menu != '1' && menu != '2' && menu != '3' && menu != '4') {
    //   console.log('Please enter a number between 1 and 4');
    //   let menu = prompt();
    //   if (menu === '1') {
    //     return 1;
    //   } else if (menu === '2') {
    //     return 2;
    //   } else if (menu === '3') {
    //     return 3;
    //   } else if (menu === '4') {
    //     return 4;
    //   }
      }
}

    /*
        Should print a menu with the following options:
        1. Human vs Human
        2. Random AI vs Random AI
        3. Human vs Random AI
        4. Human vs Unbeatable AI
        The function should return a number between 1-4.
        If the user will enter invalid data (for example 5), than a message will appear
        asking to input a new value.
        */
//   },
// };

// run this function to test whether you have correctly implemented the other function
// function checkOptions() {
//     let option = module.exports.getMenuOption();
//     console.log(option);
// }

// checkOptions();
// module.exports.getMenuOption();