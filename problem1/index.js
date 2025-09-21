console.log("hello")


// for (let i = 1; i < 11; i++) {
//     if (i<11) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <10; i++) {
//     if (i%3 == 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <10; i++) {
//     if (i%5 == 0) {
//         console.log(i)
//     }
// }

var myNumber = 0;  

for (let i = 1; i <1000; i++) {
    if (i%3 == 0 || i%5 == 0) {
        myNumber = myNumber + i
    }
}

console.log(myNumber)