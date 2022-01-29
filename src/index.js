const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' '
};

function decode(expr) {
    let i, j, exprBy10 = [], chunk = 10;
    for (i = 0, j = expr.length; i < j; i += chunk) {
        exprBy10.push(expr.slice(i, i + chunk));
    }
    return exprBy10.map(str => {
        const decodedKey = str.replace(/10|11|00/g, (tenOrEleven) => {
            if (tenOrEleven === '00') {
                return ''
            }
            return tenOrEleven === '10' ? '.' : '-'
        })
        return MORSE_TABLE[decodedKey]
    }).join('')
}

module.exports = {
    decode
}