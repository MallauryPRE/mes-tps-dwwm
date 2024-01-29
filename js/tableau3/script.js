'use strict';

// function checkPalindrome(word){
//     let len = Math.floor(str.length / 2);
//     for (let i = 0 < len; i++) {
//         if (str[i] !== str[str.length - i - 1])
//             return false;
//             return true;
// }
// }


function checkPalindrome(word) {
    let len = Math.floor(word.length / 2);
    for (let i = 0; i < len; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}

let motAVerifier = "lunatique";

if (checkPalindrome(motAVerifier)) {
    console.log(motAVerifier + " est un palindrome.");
} else {
    console.log(motAVerifier + " n'est pas un palindrome.");
}