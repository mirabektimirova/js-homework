//Find the Second Largest Number in an Array
//Write a function that returns the second largest number from an array of numbers.

function findSecondLargest(array) {
    if (array.length < 2) {
        throw new Error("Array must contain at least 2 elements.");
    }

    const max = Math.max(...array);
    const filteredArray = array.filter((num) => num !== max);

    if (filteredArray.length === 0) {
        throw new Error("Array must contain at least 2 distinct numbers.");
    }

    return Math.max(...filteredArray);
}

try {
    const numbers1 = [3, 18, 4, 911, 356, 445, 23, 3456];
    console.log("2nd Largest Number Is:", findSecondLargest(numbers1));

    const numbers2 = [5];
    console.log("2nd Largest Number Is:", findSecondLargest(numbers2));
} catch (error) {
    console.error("Error:", error.message);
}





