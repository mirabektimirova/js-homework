//Merge and Sort Two Arrays
//Write a function that merges two arrays and returns a sorted array without duplicates.

function mergeAndSortArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

const array1 = [2, 5, 33, 13, 18];
const array2 = [7, 3, 88, 94, 656];
console.log("Result of Merged and Sorted Array:", mergeAndSortArrays(array1, array2));


