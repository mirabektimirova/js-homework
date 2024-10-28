// Task 1. Write a function getFirstElement that takes an array and returns its first element. 
//If the array is empty, the function should return undefined.

function getFirstElement(arr) {
    return arr[0];
}

const elements = [1, 'apple', '?'];
console.log(`${getFirstElement(elements)} is first element`);

const emptyArray = [];
console.log(getFirstElement(emptyArray));