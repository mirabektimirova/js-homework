// Create an object named user that stores information such as name, age, and gender. 
//Add a method greet to the object that logs a greeting message including the user's name.

const user = {
  name: "Mira",
  age: 28,
  gender: "female",

  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

user.greet(); 