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
    let newArray = []
    let match = false
    while (match == false) {
        let userString = await askQuestion("Enter a string: ")
        let i = 0
        while (i > newArray.length) {
            if (userString == newArray[i]) {
                match = true
            } 
           
            i++
        }
        newArray.push(userString)
    }
        console.log(newArray)
    
}

Program().then(() => {
    process.exit(0);
});
