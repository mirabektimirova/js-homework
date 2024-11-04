//Write a function that finds and returns the first non-repeating character in a string.

function firstNonRepeatingCharacter(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("chocolate"));
console.log(firstNonRepeatingCharacter("banana"));
console.log(firstNonRepeatingCharacter("aabbcc")); 
