//Find Common Elements Between Two Arrays
//Write a function that finds and returns the common elements between two arrays.

function findCommonElements(array1, array2) {
    return array1.filter((element) => array2.includes(element));
}

const array1 = [2, 5, 33, 88, 18];
const array2 = [7, 5, 88, 94, 656];
console.log("Common Elements Between Two Arrays:", findCommonElements(array1, array2));