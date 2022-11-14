const prompt = require("prompt-sync")();
module.exports = {
    getMenuOption: function() {
        let menu = prompt("hello");

        while (menu !="1" || menu !="2" || menu !="3" || menu !="4") {
        console.log("Choose from the following options: 1. Human vs Human\n 2. Random AI vs Random AI\n 3. Human vs Random AI\n 4. Human vs Unbeatable AI")
        if (menu === "1") {
            return 1;
        }
        else if (menu === "2") {
            return 2;
        }
        else if (menu === "3") {
            return 3;
        }
        else if (menu === "4") {
            return 4;
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
    }
 }

// run this function to test whether you have correctly implemented the other function
function checkOptions()
{
    let option = menu.getMenuOption();
    console.log("If the user selected 1, it should print 1");
    console.log(option);
}


checkOptions();