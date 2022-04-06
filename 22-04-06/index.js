// Übung function in js

// This question has 2 parts

// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// ---------------------------------
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

// function printIfDivisibleByTen (num) | console.log("Even 10!") prfüfen wenn durch 10 teilbar

function printIfDivisibleByTen(num) {
  let output = "";

  if (Number.isInteger(num / 10)) {
    output = "Even 10!";
  } else {
    output = "sorry no Output";
  }

  return console.log(output);
}

printIfDivisibleByTen(1);
printIfDivisibleByTen(30);
printIfDivisibleByTen(32);
printIfDivisibleByTen(10);
printIfDivisibleByTen(30);
printIfDivisibleByTen(90000);

// part b

for (let i = 1; i <= 125; i++) {
  console.log(i);
  printIfDivisibleByTen([i]);
}

console.log("------------");

// ---------------------------------

// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

// function arrow (1,2,3,4,5) mit 5 parameters mit einander vergleichen und Ausgeben;

const arrowFunction = (a, b, c, d, e) => {
  let largestNumber;
  largestNumber = Math.max(a, b, c, d, e);
  return largestNumber;
};

let result = arrowFunction(1, 2, 3, 4, 5);
console.log("largest Number: ", result);
console.log("------------");

// ------------------------
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments

function tellFortune(numberOfChildren, partnerName, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`
  );
}
tellFortune("yet no", "Andrea", "Leipzig", "WebDev");

console.log("------------");
// ------------------------
//  Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// use the following chrList
// let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomString = "";

function generRandomString(length) {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * charList.length); //random 0-0.9 daher mal länge von charList
    let char = charList[index];
    randomString += char;
  }
  return randomString;
}

console.log(generRandomString(8));
console.log(generRandomString(10));
console.log(generRandomString(12));
console.log(generRandomString(14));
console.log("------------");

// ------------------------
// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

function exponential(x, y) {
  let numExpo = [];
  for (let i = 0; i <= y; i++) {
    numExpo[i] = Math.pow(x, i);
  }

  return console.log(numExpo.splice(1));
}

exponential(2, 8);
exponential(3, 8);
exponential(1, 8);
console.log("------------");
// ------------------------
// Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

let fruit = "apple";

function printFavoriteFruit() {
  let x = fruit;

  console.log(`My favorite fruit is: ${x}`);
}
console.log(printFavoriteFruit());
