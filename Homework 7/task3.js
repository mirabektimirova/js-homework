//Write a function safeParseJSON that accepts a JSON string and tries to parse it. If parsing fails, it should return an error message instead of throwing an error. (JSON.parse())
//const validJSON = '{"name": "John", "age": 30}'; 
//const invalidJSON = '{"name": "John", "age": }';  

function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return { error: "Invalid request" };
    }
}

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": }';

console.log(safeParseJSON(validJSON));
console.log(safeParseJSON(invalidJSON));