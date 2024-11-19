//Write a function combineArrays that takes two arrays and returns a new array containing all the elements of both arrays using the .

function combineArrays(line1, line2) {
    return [...line1, ...line2];
}

const line1 = ['cat', 1, 'capybara'];
const line2 = [2, 'dog', 3];

const combinedArray = combineArrays(line1, line2);
console.log(combinedArray); 