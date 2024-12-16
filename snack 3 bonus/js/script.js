/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const arrayExample = []
for (let i = 1; i <= 20; i++) {
    arrayExample.push(i)
}
console.log(arrayExample)


let aExample = getRndInteger(1,5)
let bExample = getRndInteger(6,arrayExample.length-1)





/**
 * Determine the elements in an array between two index
 * @param {array} array - Array to filter
 * @param {number} a - mininum index (inclused)
 * @param {number} b - maximum index (inclused)
 * @returns {array} new array containing elements included
 */
function getMiddleValues(array, a, b) {
    let middleValues = []
    for (let i = 0; i < array.length; i++) {
        if ( array[i]-1 >= a && array[i]-1 <= b) {
            middleValues.push(array[i])
        }
    }
    return middleValues
}

console.log(aExample, bExample)
let example = getMiddleValues(arrayExample, aExample, bExample)
console.log(example)