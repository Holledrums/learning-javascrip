// 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

const freeShipping = (order) => {
  const sumOrder = Object.values(order).reduce((acc, cur) => acc + cur) > 50;
  console.log(sumOrder);
};
freeShipping({ Sponge: 3.5, Soap: 5.99 });
freeShipping({ "Surround Sound Equipment": 499.99 });
freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 });

console.log("--------------");

// MakePairs - Write a method that returns a deep array like [[key, value]]
// Task description: Write a method that returns a deep array like [[key, value]]
// Expected Result: () => [['a', 1], ['b', 2]]

const objectToArray2 = (obj) => {
  console.log(Object.entries(obj));
};

objectToArray2({ a: 1, b: 2 });
console.log("--------------");
// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person = {
  firstName: "Holle",
  lastName: "drums",
  age: "geht dich nix an",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("--------------");
//2. Get Values. Create a function that returns an array of all values of an object's properties.
//Examples:

function getObjectValues(obj) {
  console.log(Object.values(obj));
}

// Expected output:
// ["tea", "coffee", "milk"]

getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
});
console.log("--------------");
// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
let personNew = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  display: function () {
    console.log(
      `${this.firstName}, ${this.lastName}, ${this.job}, ${this.age}, ${this.city}`
    );
  },
};
personNew.display();
console.log("--------------");
// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
// Examples:
//objectToArray({
// A: 1,
// B: 2,
// C: 3,
// });
//Expected output:
// [["A", 1], ["B", 2], ["C", 3]]

const objectToArray = (obj) => Object.entries(obj);
console.log(
  objectToArray({
    A: 1,
    B: 2,
    C: 3,
  })
);
console.log("--------------");

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example

let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

const objToArr = () => Object.keys(student);
console.log(objToArr());
