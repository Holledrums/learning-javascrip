// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
  name: "Mike",
  class: "4A",
  course: "English",
};
console.log(Object.keys(person));

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
console.log(Object.values(getObjectValues));

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
