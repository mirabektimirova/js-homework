// Task 5. Write a function removeDuplicates that takes an array and returns a new array with all duplicate elements removed.

function removeDuplicates(arr) {
    const noDuplicatesArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!noDuplicatesArr.includes(arr[i])) {
            noDuplicatesArr.push(arr[i]);
        }
    }

    return noDuplicatesArr;
}

const elements = ["Hydrogen", "Hydrogen", "Sodium", "Magnesium", "Cobalt", "Copper", "Sodium", "Silver", "Cobalt"];
const uniqueElements = removeDuplicates(elements);
console.log(`"${removeDuplicates(elements)}" is the list of elements without duplicates`);