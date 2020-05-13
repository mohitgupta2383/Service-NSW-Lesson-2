
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}

// Write a console app that takes 2 numbers entered by the user and prints the larger number to the console

async function Program() {
    let number1 = await askQuestion("Enter Your first Number ");
    let number2 = await askQuestion("Enter Your Second Number: ");
    if (number1 > number2) {
        console.log("The larger number is: " + number1)
    } else if (number2 > number1) {
        console.log("The larger number is: " + number2)
    } else {
        console.log("They are equal")
    }
}

      

Program().then(() => {
    process.exit(0);
});
