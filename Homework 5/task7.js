//Create an array of fruits. Write a function that takes a fruit name as an argument and checks if it’s in the array. If it is, return a message like "The fruit is in the list." If not, return "The fruit is not in the list."

const fruits = ['melon', 'orange', 'strawberry', 'pear', 'apple', 'pomegranate'];

function checkFruit(fruitName) {
    if (fruits.includes(fruitName.toLowerCase())) {
        return "The fruit is in the list.";
    }
    return "The fruit is not in the list.";
}

console.log(checkFruit('watermelon'));
console.log(checkFruit('pear')); 