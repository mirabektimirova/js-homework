//Write a function that counts the number of vowels (a, e, i, o, u) in a given string. 

function countVowels(inputString) {
    const vowels = "aeiou";
    let count = 0;

    const lowerCaseString = inputString.toLowerCase();


    for (let char of lowerCaseString) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const text = "What the number of vowels?";
console.log("Number of vowels:", countVowels(text));