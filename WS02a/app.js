const {add, subtract} = require('./modules/math');
const {toUpperCase, reverseString} = require('./modules/stringUtils');
const {getCurrentDate, formatDate} = require('./modules/dateUtils');

console.log("Hello, Node.js!");
console.log('Addition: ', add(5, 3));
console.log('Subtraction: ', subtract(5, 3));
console.log('Uppercase: ', toUpperCase("Roy"));
console.log('Reversed: ', reverseString("Roy"));
console.log('Current Date: ', getCurrentDate());
console.log('Formatted Date:', formatDate("2025-02-12"));