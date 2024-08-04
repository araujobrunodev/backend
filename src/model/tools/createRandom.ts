// iv need has 16 in bytes 
//key need has 32 in bytes

function createRandom (size: number):string {
    let random = ""
    const allCaracter = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "!@#$%¨&*()_+-`[{}]/;.,{}?°",
        "abcdefghijklmnopqrstuvwxyz"
    ]

    for (let count = 0; count < size; count++) {
        const index = Math.round(Math.random() * 2)
        const randomAlphabetOrSymbols = allCaracter[index]
        const indexCaracters = Math.round(Math.random() * randomAlphabetOrSymbols.length)
        const randomCaracter = randomAlphabetOrSymbols[indexCaracters]

        random += randomCaracter;
    }

    return random;
}

export {createRandom}