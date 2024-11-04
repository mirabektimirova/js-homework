//Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('abba'));
console.log(isPalindrome('dog'));