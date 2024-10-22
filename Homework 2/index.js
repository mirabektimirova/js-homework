// First Task
const numericValue = 12;
console.log(typeof numericValue);

const stringValue = 'Mira';
console.log(typeof stringValue);

const booleanValue = true;
console.log(typeof booleanValue);

const nullValue = null;
console.log(typeof nullValue);

const undefinedValue = undefined;
console.log(typeof undefinedValue);

const symbolValue = Symbol("foo");
console.log(typeof symbolValue);

const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER);
console.log(typeof bigIntValue);

// Second Task
const stringValueOne = 'Mira';
const stringValueTwo = "Mira's Homework";
const stringValueThree = `Course ${1 + 1}`

console.log(stringValueOne.toUpperCase());
console.log(stringValueTwo.toLowerCase());
console.log(stringValueThree.charAt(3))

// Third Task
const book = {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    year: 1997,
};

console.log(book.title);
console.log(book.author);
console.log(book.year);

console.log(book['title']);
console.log(book['author']);
console.log(book['year']);

// Fourth Task
const testArray = [1996, 1997, 2012, 2020, 2024];
console.log(testArray);