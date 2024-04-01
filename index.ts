#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between (1-6) :",
  },
]);
if (answer.userGuessNumber === randomNumber) {
  console.log("Correct! you won the game ");
} else {
  console.log("Wrong! You lost the game");
}
