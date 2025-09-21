
// var Fizz = 3

// var Buzz = 5

// var FizzBuzz = 15

// for (i = 1; i<101; i++) {
    
//     if (i%3 == 0 && i%5 != 0) {
//         console.log("fizz")
//     } 

//     if (i%5 == 0 && i%3 != 0) {
//         console.log("buzz")
//     }

//     if (i%3 == 0 && i%5 == 0) {
//         console.log("fizzbuzz")
//     }
    
// }

// for (i = 1; i<101; i++) {

//     if (i%3 == 0) {
//         if (i%5 == 0) {
//             console.log("fizzbuzz")
//         } else {
//             console.log("fizz")
//         }
//     } else {
//         if (i%5 == 0)
//         console.log("buzz")
//     }
// }

i = 1

while (i<101) {

    if (i%3 == 0) {
        if (i%5 == 0) {
            console.log("fizzbuzz")
        } else {
            console.log("fizz")
        }
    } else {
        if (i%5 == 0)
        console.log("buzz")
    }
    i++
}