function add7(number) {
    return number + 7
}

function multiply(number1, number2) {
    return number1 * number2
}

function capitalize(word) {
    let lowercase = word.toLowerCase()
    let firstUpper = lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
    return firstUpper
}

function lastLetter(word) {
    return word.slice(-1)
}