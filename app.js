// console.log('Hello World');

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar2){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar2 * 106.58;
    // retornamos el valor
    return valueInYen;
}


const fromYentoPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.006;
    // retornamos el valor
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound }