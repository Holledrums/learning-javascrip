// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// console.log(Object.keys(person));

function objKeys(obj) {
  return Object.keys(obj);
}
console.log(objKeys(person));
// Expected output:
//   ["name", "class", "course"]

// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: "D05",
  display: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}}`
    );
  },
};
student.display();
// Create a method that prints the following: "Zain Oil a student in class D05"

// Get Values. Create a function that returns an array of all values of an object's properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
//console.log(Object.values(getObjectValues));

function objValues(obj) {
  return Object.values(obj);
}
console.log(objValues(getObjectValues));

// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// (4, { min: 0, max: 5 }) ➞ true

// (4, { min: 4, max: 5 }) ➞ true

// (4, { min: 6, max: 10 }) ➞ false

// (5, { min: 5, max: 5 }) ➞ true

function range(num, object) {
  if (num <= object.max && num >= object.min) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

range(4, { min: 0, max: 5 });
range(4, { min: 4, max: 5 });
range(4, { min: 6, max: 10 });
range(5, { min: 5, max: 5 });

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
// console.log(Object.values(scrabble));

function sum(scrabble) {
  let totalSum = 0;
  for (let i = 0; i < scrabble.length; i++) {
    totalSum += scrabble[i].score;
  }

  return console.log(totalSum);
}

sum(scrabble);

// Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// {} ➞ true

// function return if

function isEmpty(obj) {
  return Object.keys(obj).length != 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));
