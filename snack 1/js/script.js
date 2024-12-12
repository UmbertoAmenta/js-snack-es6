/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */



const bikes = [
    {
        brand : "Decathlon",
        name : "Weg",
        weight_kg : 15,
    },
    {
        brand : "Btwin",
        name : "Fold",
        weight_kg : 13.5,
    },
    {
        brand : "Riverside",
        name : "R.120",
        weight_kg : 14.5,
    }
]



const allWeight = []
for (let i = 0; i < bikes.length; i++) {
    allWeight.push(bikes[i].weight_kg)
}
console.log(allWeight)

let lowerWeight = allWeight[0]
for (let i = 1; i < bikes.length; i++) {
    if (allWeight[i] < lowerWeight) {
        lowerWeight = allWeight[i]
    }
}
console.log(lowerWeight)
