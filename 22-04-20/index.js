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

const userObj = {
  name: "Tobi",
  age: 33,
  add: "xxx str 13040 Berlin",
  act: ["draw", "sleep", "eating"],
  job: "HR",
  fat: true,
};

// Tell us more about you

const privatObj = {
  firstName: "Holger",
  lastName: "Klose",
  age: 35,
  hobbysSports: ["biking", "climbing", "running"],
  hobbysArt: ["drumming @ Mein Neues Nicki"],
  city: "Leipzig",
  degree: "Bachelor of Engineering",
  university: "University of Applied Science Mittweida",
  job: "training for Web Development",
  currentGoal: [
    "become a WebDevelopper",
    "mindfulness",
    "400km by bike in 24h",
    "run a half marathon",
  ],
  bike: {
    type: "Randonneur",
    color: "black",
    km: 50000,
  },
  display: function () {
    // function innerhalb eines Objects wird methode gennant
    console.log(
      `hey ${this.firstName}, you are ${this.age}. I hope you have fun in ${this.city}`
    );
  },
};
console.log(privatObj);
console.log("---------1----------");
console.log(privatObj.currentGoal[2]);
console.log("---------2----------");
console.log(privatObj.bike.type);
console.log("---------3----------");
privatObj.display();
console.log("----------4---------");
privatObj.print = function () {
  console.log("This is a cool method");
};
console.log("-----------5--------");
console.log(privatObj);
console.log("-----------6--------");
privatObj.print();
console.log("----------7---------");

// Object.keys gibt alle Parameter (Keys) des objects aus
console.table(Object.keys(privatObj));

// Object.values -> gibt alle Eingaben (values) des objects aus
console.log(Object.values(privatObj));

// Object.assign
const obj1 = { kids: 2, bikes: 5 };
const obj2 = { colors: ["red", "orange"], pet: false };
const totalObj = Object.assign({ name: "steel", age: 25 }, obj1, obj2);
console.log(totalObj);

// Object.defineProperty()

// Object.defineProperties()

// Object.hasOwnProperty()

// Object.seal()

Object.seal(privatObj);
privatObj.age = 33;
console.log(privatObj);
delete privatObj.name;
console.log(privatObj);
console.log(Object.isSealed(privatObj));
