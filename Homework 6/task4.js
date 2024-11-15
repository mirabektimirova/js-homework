// Given an array of user objects, use the map method to create a new array containing just the names of the users.

const dogs = [
    { name: 'Monica', age: 11, breed: 'Pug' },
    { name: 'Chester', age: 13, breed: 'Jack Russell Terrier' },
    { name: 'May', age: 6, breed: 'French Bulldog' }
];

const dogNames = dogs.map(({ name }) => name);

console.log(dogNames); 