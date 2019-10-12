// process.argv.forEach((value, index) => {
//     console.log(`${index}: ${value}`)
// })

// const args = process.argv.slice(2)
const { readFile, existsSync } = require('fs')

const args = require('./lib/node_modules/minimist/index')(process.argv.slice(2))
const { filePath, maxWordLength } = args;

if (!filePath) {
    console.log('Please type in file path')
    return
}

if (existsSync(filePath)) {
    readFileAndCountWords(filePath)
} else {
    console.log(` file ${filePath} not found`)
    return
}

function readFileAndCountWords (filePath) {
// readFile
    readFile(filePath, countWordsInFile)
}

function countWordsInFile (err, data) {
    if (err) {
        console.log('Error occured while reading data', error)
        return
    }
    // console.log(data.toString())
    const wordsArray = splitTextToWords(data.toString());
    const wordsObject = {}
    for (const word of wordsArray){
        wordsObject[word.length] = {}
    }

    for (const word of wordsArray){
        const currentWords = Object.keys(wordsObject[word.length])
        if (!currentWords.includes(word)) {
            wordsObject[word.length][word] = 1;
        } else {
            let count = wordsObject[word.length][word]
            wordsObject[word.length][word] = count + 1
        }
    }
    console.log(wordsObject)
}

function splitTextToWords (text) {
    const words = text.match(/\b(\w+)\b/g);
    return words;
}


// readFile
// readFileSync






