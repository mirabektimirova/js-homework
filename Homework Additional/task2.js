//Filter Out Even Numbers from an Array
//Write a function that filters out even numbers from an array and returns only odd numbers.

function filterOddNumbers(array) {
    return array.filter((num) => num % 2 !== 0);
}

const numbers = [0, 2, 30, 44, 12, 15, 56, 77, 8, 945, 1000, 4];
console.log("Odd numbers are:", filterOddNumbers(numbers));