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

// Same as 2 but from smallest to largest

async function Program() {
    let number1 = await askQuestion("Enter Your first Number: ");
    let number2 = await askQuestion("Enter Your Second Number: ");
    if (number1 < number2) {
        console.log("The numbers in order are: ")
        console.log(number1)
        console.log(number2)
    } else if (number2 < number1) {
        console.log("The numbers in order are: ")
        console.log(number2)
        console.log(number1)
    } else {
        console.log(number2)
        console.log(number1)
    }
}

Program().then(() => {
    process.exit(0);
});
