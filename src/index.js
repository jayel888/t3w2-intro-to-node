// const inquirer = require("inquirer").default;
const promptSync = require('prompt-sync')();

console.log("Dice Roller Application starts...")


/**
 * Roll a random dice side from a vairable-sided die
 * @param {number} [diceSide=6] The total number of sides of a die
 * @returns {number} The side of the die rolled
 */

function rollDice(diceSide=6) {
    if (diceSide <= 0) {
        throw new Error ("Dice sides must be greater than 0.")
    }
    let diceResult = Math.ceil(Math.random()* diceSide);
    // diceResult = Math.ceil(Math.random()* diceSide)
    return diceResult
}

// console.log("The side you rolled is: " + rollDice());

// prompt([
//     {
//         type: "number",
//         name: "dice_side",
//         message: "How many sided dice do you want to roll?"
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer.dice_side))
// });

// const prompt = inquirer.createPromptModule();

function getDiceSide(){
    const diceSide = promptSync("How many sided dice do you want to roll?")

    try {
        const parsedDiceSide = parseInt(diceSide);
        if (isNaN(parsedDiceSide)) {
            throw new Error('Please enter a valid number.');
        }
        const diceResult = rollDice(parsedDiceSide);
        console.log(`You rolled a ${diceResult}-sided die.`);
    } catch (error) {
        console.error("You got an error!")
        console.log(error);
    }
}

getDiceSide()
