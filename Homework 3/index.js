// First Task. Write a program that checks whether a number is positive, negative, or zero using the if...else statement.
function checkNumber(numberToCheck) {
  if (numberToCheck > 0) {
    console.log(`${numberToCheck} is positive`);
  } else if (numberToCheck < 0) {
    console.log(`${numberToCheck} is negative`);
  } else {
    console.log(`${numberToCheck} is zero`)
  }
}

checkNumber(15);
checkNumber(-10);
checkNumber(0);

// Second Task. Use a for loop to print the multiplication table for numbers from 1 to 10.(number 4)
for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i} = ${i * 4}`);
}

// Third Task. Write a program that uses a while loop to print all even numbers from 1 to 20.

let number = 0;

while (number < 20) {
  number++;

  if (number % 2 === 0) {
    console.log(number);
  }
}


// Fourth Task. Use a switch statement to print the name of the day of the week based on a number (1 for Monday, 7 for Sunday).
function getWeekDay(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid, should be from 1 to 7");
  }
}

for (let i = 1; i <= 8; i++) {
  getWeekDay(i);
}


// Fifth Task. Write a program that uses a do...while loop to calculate the sum of numbers from 1 to 100.
let sum = 0;
let currentNumber = 1;

do {
  sum += currentNumber;
  currentNumber++;
} while (currentNumber <= 100)

console.log(`The sum of numbers from 1 to 100 is: ${sum}`);

