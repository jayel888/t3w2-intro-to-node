const inquirer = require("inquirer").default;

console.log("Dice Roller Application starts...")


/**
 * Roll a random dice side from a vairable-sided die
 * @param {number} [diceSide=6] The total number of sides of a die
 * @returns {number} The side of the die rolled
 */

function rollDice(diceSide=6) {
    let diceResult = 0;
    diceResult = Math.ceil(Math.random()* diceSide)
    return diceResult
}

// console.log("The side you rolled is: " + rollDice());

const prompt = inquirer.createPromptModule();
prompt([
    {
        type: "number",
        name: "dice_side",
        message: "How many sided dice do you want to roll?"
    }
]).then((answer) => {
    console.log(rollDice(answer.dice_side))
});