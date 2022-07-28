// Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str) {
//     let result = {};
//     for (i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/a-z0-9/.test(char)) {
//             if (result[char] > 0) {
//                 result[char]++;
//             } else {
//                 result[char] = 1;
//             };
//         }
//     }
//     return result;
// }

function charCount(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

charCodeAt(0)