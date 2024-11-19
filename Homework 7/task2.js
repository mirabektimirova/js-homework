//Create a function sumAll that accepts any number of arguments using the and returns their sum.

function sumAll(...numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(sumAll(0, -6, 12, 34, 199));
console.log(sumAll(678, 9999, 56789));