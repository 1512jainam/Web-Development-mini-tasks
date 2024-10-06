const util = require('util');

// Creating a JSON object
const jsonObject = {
  name: 'Jainam',
  age: 19,
  city: 'Goa',
  hobbies: ['Reading', 'Coding', 'Gaming'],
};

const jsonString = util.inspect(jsonObject, { depth: null });

console.log(jsonString);