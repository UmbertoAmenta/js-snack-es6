/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console. */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const teams = [
    {
        name : "Inter",
        pointsScored : 0,
        foulsSuffered : 0,
    },
    {
        name : "Milan",
        pointsScored : 0,
        foulsSuffered : 0,
    },
    {
        name : "Juve",
        pointsScored : 0,
        foulsSuffered : 0,
    }
]

for (let i = 0; i < teams.length; i++) {
    const team = teams[i]
    team.pointsScored = getRndInteger(0,10)
    team.foulsSuffered = getRndInteger(0,30)
}

const warnings = []
for (let i = 0; i < teams.length; i++) {
    const team = teams [i]
    warnings.push({
        name: team.name,
        foulsSuffered: team.foulsSuffered,
    })
}

console.log(teams)
console.log(warnings)

