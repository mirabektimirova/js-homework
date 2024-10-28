// Task 4. Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only even numbers. 

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers = [2, 3, 5, 6, 8, 22, 27, 32, 46, 55, 60, 65, 75];
console.log(`${filterEvenNumbers(numbers)} are even numbers`);