



// for (y = 0; y <5; y++) {
//     AtSign = "@"
//     for (x = 0; x <5; x++) {
//         console.log(AtSign + AtSign + AtSign + AtSign + AtSign)
//     }
// }


// for (x = 1; x <= 5; x++) {
//     AtSign = "@"
//     for (y = 1; y < 5; y++) {
//         AtSign = AtSign + "@"
//     }
//     if (x%2 == 0) {
//         AtSign = "#"
//         for (y = 1; y < 5; y++) {
//             AtSign = AtSign + "#"
//         }
//     }
//     console.log(AtSign)    



// if (y == x) {
//     AtSign = "#" 
//     } else { 
//     for (x = 1; x <= 5; x++) {
//     AtSign = "@"

//     for (y = 1; y <= 5; y++) {
//         AtSign = AtSign + "@"
//     }
// }
// console.log(AtSign)
// }




// for (x = 1; x <= 5; x++) {
//     AtSign = ""

//     for (y = 1; y <= 5; y++) {
//         if (y != x) {
//             AtSign = AtSign + "@"
//         } else { 
//             AtSign = AtSign + "#"
//         }
//     }

//     console.log(AtSign)
// }



// x = 1 

// while (x <= 5) {
//     AtSign = ""
//     y = 1 
//     while (y <= 5) {
//         if (y != x) {
//             AtSign += "@"
//         } else {
//             AtSign += "#"
//         }
//         y++
//     }
//     console.log(AtSign)
//     x++
// }


// function getNextCharacter(x, y) {
//     if (y != x) {
//         return "@"
//     }
    
//     return "#"
// }

// x = 1
// while (x <= 5) {
//     AtSign = ""
//     y = 1 
//     while (y <= 5) {
//         AtSign += getNextCharacter(x, y)
//         y++
//     }
//     console.log(AtSign)
//     x++
// }

myArray = []


function getNextCharacter(x, y) {
    if (y != x) {
        return "@"
    }
    
    return "#"
}

for (y = 1; y <= 5; y++) {
    gridLine = ""
    for (x = 1; x <= 5; x++) {
        gridLine += getNextCharacter(x, y)
    }
myArray.push(gridLine)
}

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}