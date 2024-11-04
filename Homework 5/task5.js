//Given an array of strings with repeated values, write a function that returns the last occurrence index of a specific string in the array.

function getLastOccurrence(arr, value) {
    let lastIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            lastIndex = i;
        }
    }

    return lastIndex;
}

const words = ['1', 'banana', 'car', 'Madrid', 'Barcelona', 'banana', 'Madrid', 'Madrid', '1', '2', '1', '6'];
console.log(getLastOccurrence(words, '1'));
console.log(getLastOccurrence(words, 'banana'));
console.log(getLastOccurrence(words, 'car'));
console.log(getLastOccurrence(words, 'Madrid'));
console.log(getLastOccurrence(words, 'Barcelona'));
console.log(getLastOccurrence(words, '2'));
console.log(getLastOccurrence(words, '6')); 