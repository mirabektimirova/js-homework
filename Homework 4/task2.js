// Task 2. Write a function sumArray that takes an array of numbers and returns the sum of all elements in the array.  

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const numbers = [3, 8, 100, 202, 4000];
console.log(`${sumArray(numbers)} is the sum of numbers in array`);