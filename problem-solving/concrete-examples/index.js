// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); // {a: 4}
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}

"my phone number is 182763" 
"Hello hi"
charCount("")

// how to count number of ways of splitting a string into two equal parts

function countString(str) {
    let count = {};
    for (let char of str) {
        count[char] = count[char] + 1 || 1;
    }
    return count;
}