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

for (const prop in steelObj) {
  // prop gibt an
  console.log(`${prop} : ${steelObj[prop]}`);
}

// For of

// callbacks

// map

// reduce

// filter
