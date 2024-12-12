/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const numbersExample = []
for (let i = 1; i <= 10; i++) {
    numbersExample.push(i)
}
console.log(numbersExample)


let minExample = getRndInteger(1,5)
let maxExample = getRndInteger(6,10)





/**
 * Determine the numbers in an array between two extremes
 * @param {array} numbers - Array of numbers to filter
 * @param {number} min - mininum value (inclused)
 * @param {number} max - maximum value (inclused)
 * @returns {array} new array containing numbers included
 */
function getMiddleValues(numbers, min, max) {
    let middleValues = []
    for (let i = 0; i < numbers.length; i++) {
        if ( numbers[i] >= min && numbers[i] <= max) {
            middleValues.push(numbers[i])
        }
    }
    return middleValues
}

console.log(minExample, maxExample)
let example = getMiddleValues(numbersExample, minExample, maxExample)
console.log(example)