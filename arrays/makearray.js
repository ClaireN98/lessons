// initialise myArray as an empty array
// strict typed languages will declare the type and size
// this is so that the maximum amount of memory can be
// // reserved for the array on initialisation
// myArray = []

// while (myArray.length < 5) {
//     // we would declare a new array, being one length longer
//     // this reserves the space in memory to be bigger than the
//     // previous array by the size of one value
//     // as with above, because javascript isn't strict typed, and
//     // doesn't have immutable arrays, we don't need to specify
//     // the length explicity
//     myNewArray = []
    
//     // copy over all the values into the newly instantiated array
//     for (i = 0; i < myArray.length; i++) {
//         myNewArray[i] = myArray[i]
//     }
    
//     // set the last element in the array to a new value
//     myNewArray[myArray.length] = Math.round(Math.random(1, 1e6) * 100)

//     // move the pointer of the old array to the new one
//     myArray = myNewArray
// }

// console.log(myArray)


// myArray = []
// myVar = 1

// while (myArray.length < 5) {
//     myNewArray = []
//     for (i = 0; i < myArray.length; i++) {
//         myNewArray[i] = myArray[i]
//     }
//     myNewArray[myArray.length] = myVar++ 

//     myArray = myNewArray
// }

// console.log(myArray)

// myVar = 1 
// myArray = []

// while (myArray.length < 5) {
//     myArray.push(myVar++)
// }

// console.log(myArray)

myArray = []

// for (i = 0; i <= 10; i++) {
//     if (i%2 == 0) {
//         myArray.push(i)
//     }
// }

// console.log(myArray)

for (x = 0; x < 10; x++) {
    if (x%2 != 0) {
        continue
    }

    // copy the array
    myNewArray = []
    for (i = 0; i < myArray.length; i++) {
        myNewArray[i] = myArray[i]
    }

    // add new value
    myNewArray[myArray.length] = x

    myArray = myNewArray
}

console.log(myArray)



