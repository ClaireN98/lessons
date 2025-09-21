console.log("hello")

// var myNumber = 1
// var myTotal = 0

// console.log(myNumber)

// for (i = 1; i<4000000; i = i + myNumber) {  
//     myNumber = myNumber + i

//     if (i%2 == 0) {
//         myTotal = myTotal + i
//     }

//     if (myNumber%2 == 0) {
//         myTotal = myTotal + myNumber
//     }
// }

// console.log(myTotal)




// var myTotal = 0

// function myFunction(i, myNumber) {
//     if (i % 2 == 0) {
//         return myTotal + i
//     }
    
//     if (myNumber % 2 == 0) {
//         return myTotal + myNumber
//     } 
    
//     return myTotal
// }


// var myNumber = 1
// console.log(myNumber)

// for (i = 1; i < 4000000; i = i + myNumber) {
//     myNumber = myNumber + i

//     myTotal = myFunction(i, myNumber)
// }

// console.log(myTotal)
// // 4613732

var myNumber = 1 
myArray = []
myArray.push(1)

for (i = 1; i < 4000000; i = i + myNumber) {
      
    myArray.push(i)
    myNumber = myNumber + i
    myArray.push(myNumber) 
}



myTotal = 0

for (i = 1; i < myArray.length; i++) {
    myTotal = myArray[i] + myTotal
}

console.log(myTotal)
console.log(myArray)

3010349