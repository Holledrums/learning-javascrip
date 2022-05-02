// Strings, Numbers, Booleans, Null, undefined data types & typeof operator

// Exercises to become familiar with data types and typeof operator.

// Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.
// let length = 16.78; // let lastName = "Johnson"; // let car = ""; // let isOpen = true; //
let length = 16.78; // Number
let lastName = "Johnson"; // String
let car = ""; // String
let isOpen = true; // Boolean
console.log(typeof length);
console.log(typeof lastName);
console.log(typeof car);
console.log(typeof isOpen);
console.log("------------------");
// Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.

let ageMark = 25;
let ageJohn = "32";

console.log(typeof ageMark);
console.log(typeof ageJohn);
console.log("------------------");

// Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"

let olderAge = true;
console.log(`John is older than Mark: ${olderAge}`);
console.log("------------------");
// Declare a variable called "str". Do not assign a value. Print str's data type to the console.

let str;
console.log(typeof str);
console.log("------------------");
// Assign a string to str. Print str's data type again.
str = "Assign a string";
console.log(typeof str);
console.log("------------------");
// Print the last character of str's string to the console.

console.log(str.charAt(11));
console.log("------------------");
// Print the length of str to the console, as well as the data type of str's length.
console.log(str.length, typeof str.length);
console.log("------------------");
// Declare three variables: "goals", "penalties", "injuries". Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(goals == penalties);). Do this for each possibility (goals, penalties) (goals, injuries), (penalties, injuries). Then, print the data type of this check to the console.

let goals = 20;
let penalties = 5;
let injuries = 10;

console.log(goals == penalties); // typeof boolean
console.log(goals == injuries); // typeof boolean
console.log(injuries == penalties); // typeof boolean
console.log("------------------");
// What is the type of Infinity? Comment your answer. Print the type of infinity to the console.

// type of infinity ist ein Nummerischer wert der die unendlichkeit repräsentiert

console.log(typeof Infinity);
console.log("------------------");
// Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".
let age = "fifteen";

console.log(`variable is NOT a number: ${isNaN(age)}`);
console.log("------------------");
// Print the data type of isNaN(variable) to the console.

console.log(typeof isNaN(age));
console.log("------------------");
