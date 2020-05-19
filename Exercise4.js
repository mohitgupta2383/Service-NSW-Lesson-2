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
    let newArray = [];
    let i = 0
    while (i < 5) {
        newArray.push( await askQuestion("Enter Your first String: "))
        i++
    }
    console.log(newArray);
}

Program().then(() => {
    process.exit(0);
});
