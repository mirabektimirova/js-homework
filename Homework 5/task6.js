//Given an array of colors (like ['red', 'blue', 'red', 'green', 'blue', 'blue']), use reduce() to count the occurrences of each color and return an object with the count for each color. 

function getCount(colors) {
    return colors.reduce((acc, currentColor) => {
        if (acc[currentColor] == null) {
            acc[currentColor] = 0;
        }
        return {
            ...acc,
            [currentColor]: acc[currentColor] + 1,
        }
    }, {})
}

console.log(getCount(['orange', 'red', 'pink', 'blue', 'red', 'green', 'blue', 'blue', 'pink', 'pink']));
