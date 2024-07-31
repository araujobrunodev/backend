const IV = createRandom(16) // iv need has 16 in bytes 
const key = createRandom(32) //key need has 32 in bytes

function createRandom (size: number):string {
    let random = ""
    const allCaracter = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "!@#$%¨&*()_+-`[{}]/\;.,"
    ]

    for (let count = 0; count < size; count++) {
        const index = Math.round(Math.random() * 1)
        const randomAlphabetOrSymbols = allCaracter[index]
        const indexCaracters = Math.round(Math.random() * randomAlphabetOrSymbols.length)
        const randomCaracter = randomAlphabetOrSymbols[indexCaracters]

        random += randomCaracter;
    }

    return random;
}

export {IV, key, createRandom}