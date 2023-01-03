#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let play = true;
let score = 0;
(async () => {
    await showBanner('Guess Number', 'Guess to Win!');
})();
async function guessNumber() {
    while (play) {
        let randomNumber = Math.ceil((Math.random() * 4) + 1);
        let answer = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter any Number 1 to 5"
            }]);
        if (answer.userNumber === randomNumber) {
            console.log(chalk.green("You Guess a Right Number "));
            score += 10;
            console.log(chalk.yellow(`Yours scores are: ${score}`));
        }
        else {
            console.log(chalk.red("Try Again!!"));
            play = false;
        }
    }
}
setTimeout(() => {
    guessNumber();
}, 1000);
