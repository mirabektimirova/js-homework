
// Task 3. Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.

function reverse(arr) {
    const reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray;
}

const numbers = [3, 8, 100, 202, 4000];
console.log(`${reverseArray(numbers)} is reverse order`);