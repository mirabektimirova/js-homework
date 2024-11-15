// Use a for...in loop to iterate over the properties of an object and log each key and value to the console.

const user = {
    name: 'Monica',
    age: 11,
    breed: 'Pug'
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
