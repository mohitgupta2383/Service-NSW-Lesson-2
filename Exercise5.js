// let i = 0
// while ( i <= 8 ) {
//     console.log(i + 1);
//     i++
// }

// let i = 0
// while ( i <= 8 ) {
//     console.log(i);
//     i += 2
// }

// let newArray = ["trent", "mohit", "glen"]
// let i = 2
// while (i >= 0) {
//     console.log(newArray[i])
//     i--
// }


let newArray = ["andy", "brett", "andrew"]
let i = 0
while (i < newArray.length) {
    if (newArray[i][0] == "a") {
        console.log(newArray[i] + " you're a genius")
    } else {    
        console.log(newArray[i] + " sorry - you are not a genius")
    }
    i++
}
