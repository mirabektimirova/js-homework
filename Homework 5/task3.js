//Implement a function that checks if two strings are anagrams (contain the same characters in different orders).

function areAnagrams(str1, str2) {
    const charCount = {};
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];
        if (!charCount[char]) {
            return false;
        }
        charCount[char] -= 1;
    }
    for (let key in charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("act", "cat"));
console.log(areAnagrams("below", "elbow"));
console.log(areAnagrams("banana", "Anna"));

