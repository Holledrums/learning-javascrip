//Objects in JavaScript

// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value

let str = "";
let num = 0;
let bool = true;
const arr = [];
const sumFunction = () => {};
const personObj = {
  //  KEY: Value, <- Key kann für andere Objekte wieder verwendet werden
  firstName: "Holger",
  lastName: "Klose",
  age: 35,
  add: "Leipzig",
  toolStack: ["JavaScript", "HTML/CSS"],
  hasKids: false,
  display: () => {},
};
console.log(typeof personObj);

const bikeObj = {
  model: "Trek Remedy",
  color: "red",
  price: 3999.0,
  eBike: false,
};
console.log(personObj);
// method 1
console.log(personObj["age"]);

// method 2
console.log(personObj.toolStack[1]);
console.log(bikeObj.model);

// Object Literal
const obj = {};
console.log(obj);
obj["name"] = "Olga";
console.log(obj);
obj.name = "Jeanna";
console.log(obj);
// Accessing properties
// 1- with (bracket notation)

// 2- with (dot notation)

// Assignment using dot notation, more used to access a property value

// Assigning using bracket notation, more used for an empty object

// Tell us more about you

// Object.keys

// Object.values

// Object.assign

// Object.defineProperty()

// Object.defineProperties()

// Object.hasOwnProperty()

// Object.seal()
