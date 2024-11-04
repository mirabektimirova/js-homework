//Given an array of numbers, write a function to find and return the maximum number in the array.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}
const numbers = [3, 7, 1, 9, 12, 5];
console.log(findMax(numbers)); 