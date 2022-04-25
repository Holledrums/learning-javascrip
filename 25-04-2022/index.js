//Objects Part III && loops in Js

//CoffeeCode
/*var yourDrink;
var reverse = function (s) {
  return s.split("").reverse().join("");
};

var barista = {
  str1: "ion",
  str2: reverse("rcne"),
  str3: "ypt",
  request: function (preference) {
    return preference + "secret word: " + this.str2 + this.str3 + this.str1;
  },
};
console.log(barista.request(yourDrink));*/

// Wiederholung letzte woche
// Object
const personObj = {
  firstName: "Ali",
  display: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

// For
const names = ["Ali", "Nancy", "Olga", "Steel"];
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}`);
}
console.log("-------------");

// For in ---> arbeite nur mit Object,

const steelObj = {
  name: "steel",
  age: "25",
  add: "Paris",
};
//   const definiet variable | IN ist für diese schleife wichtig!
// for (CONST 'xyz' IN 'object) ...
for (const prop in steelObj) {
  // prop ist synonym um die Keys anzusteuern, hier kannst du ein beliebiges word definieren

  console.log(`${prop} : ${steelObj[prop]}`); // um die Values abzufragen musst du das Object mit [definierte Propertie] in console.log ausgeben
}

// For of:
// kannst du für arrays nutzen und ersetzt ab jetzt die standard 'i'- schleife

for (const element of names) {
  console.log(element);
}

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};
console.log(programming);
console.log("---------------");
// Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("go");
console.log(programming);
console.log("---------------");

// Using a loop, console.log all of the values in the programming object.

for (const key in programming) {
  console.log(programming[key]);
}
console.log("---------------");

// Write a command to add a new key called isFun and a value of true to the programming object.

programming["isFun"] = true;
console.log(programming);
console.log("---------------");
// Using a loop, iterate through the languages array and console.log all of the languages.

for (const element of programming.languages) {
  console.log(element);
}
console.log("---------------");
// Using a loop, console.log all of the keys in the programming object.

for (const key in programming) {
  console.log(key);
}

// const keyInProgramming = Object.keys(programming); auch ein richtiger lösungsweg
console.log("---------------");
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

programming.givItTry = function () {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
  }
};
console.log(programming.givItTry());
console.log("---------------");

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

console.log(programming);

// callbacks
// wenn eine 'große' Function eine weitere Function aufruft

function first(cb) {
  return cb;
}
function cb() {
  return "cool";
}

console.log(first(cb()));

// map ---> macht eine kopie/ bzw eine Referenz von meinem Array
const cities = ["Berlin", "Paris", "LA", "NY"];
const newCity = cities.map((element, i) => `you live in ${element}`);
console.log(newCity);

// reduce
const numArr = [3, 4, 5, 6, 8, 9];
const sumResult = numArr.reduce(
  (priviousValue, currentValue) => priviousValue + currentValue
);
// acc - accumulator //

console.log(sumResult);

// filter
