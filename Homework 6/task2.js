// Create an object and make a shallow copy of it using both Object.assign and the spread operator (...). 
//Modify the properties in the cloned object and check if the original object remains unchanged.

const dog1 = {
    name: 'Monica',
    age: 11,
    breed: ['pug']
};

const dog2 = Object.assign({}, dog1);
dog2.name = 'Chester';
dog2.breed = ['jack russell terrier'];

const dog3 = {
    ...dog1,
    breed: ['pug']
};
dog3.name = 'Jackie'
dog3.age = 1;
dog3.breed.push('french bulldog')

console.log('Original Object:', dog1);
console.log('Shallow Copy (using Object.assign):', dog2);
console.log('Shallow Copy (using Spread Operator):', dog3);
