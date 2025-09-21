const prices = [
    411.56,
    411.56,
    411.56,
    411.56,
    569.86,
    633.18,
    433.14,
]

/**
 * calcTotal sums the values within the prices array
 * 
 * @param {number[]} prices The list of prices we need to total
 * @return {number} the total of the numbers in the prices array
 */
function calcTotal(prices) {
    length = prices.length
    myTotal = 0  

    for (index = 0; index < length; index++) {
       myTotal = prices[index] + myTotal
    }
    return myTotal
}

console.log("total price is £" + calcTotal(prices) + ".")
