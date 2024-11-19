//Write a function validateAge that accepts an age as an argument. If the age is less than 18, throw an error with a custom message. Handle the error using try...catch.

function validateAge(age) {
    if (age < 18) {
        throw new Error("Age not accepted; should be 18 or more.");
    }
    return "Age accepted.";
}

try {
    console.log(validateAge(18));
    console.log(validateAge(17));
} catch (error) {
    console.error(`Error: ${error.message}`);
}