// advanced array method pt. II

//for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const personObj = {
  firstName: "Steel",
  age: 35,
};
for (const prop in personObj) {
  console.log(`${prop} : ${personObj[prop]}`);
}
console.log("------ for in -------");

const namesArr = ["Nancy", "Ali", "Olga", "steel"];
console.log("------ for of -------");
for (const name of namesArr) {
  console.log(name);
}

// do while -> schaut am anfang in eine schleife und prüft die Bedingung min. einmal und gibt diese aus, selbst wenn die Bedingung false ist
console.log("------ do while -------");
let i = 0; // do while prüft mindestens 1 mal ob die bedingen erfüllt ist, dannach stoppt die abfrage wennn die bedingung nicht erfüllt ist. wenn bsplsw let i = 4 gibt er in diesem fall erst die 4 aus und prüft dann die 5 und gibt diese zusätzlich als erfüllte bedingung aus. (gilt nur im Fall: while (i == 5))
do {
  console.log(i);
  i++;
} while (i < 5);

// while schaut in die schleife und stoppt sobald bedingung false ist
console.log("------ while -------");
let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}

// forEach -> ist eine schleife, ist eine Methode und ein Callback
const cities = ["Berlin", "Leipzig", "Prag", "Buda Pest"];
cities.forEach((ele) => console.log(ele)); // ele -> ist das gleiche wie arr[i]

// find
const numbers = [1, 1, 1, 1, 2, 2, 3];
const numResult = numbers.find((ele) => ele == 2);
const filterNumResult = numbers.filter((ele) => ele == 2);
console.log("------ find -------");
console.log(numResult); // gibt nur das erste ergebnis der suche aus -> nicht als array
console.log("------ filter -------");
console.log(filterNumResult); // filter gibt array mit allen gesuchten aus

// alle advanced arry methods außer reduce
// arr.method((element, index, array)=> {return "something"})

// findIndex
console.log("------ findIndex -------");
const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const emojiFindIndex = emojis.findIndex((ele) => ele == "😎");
console.log(emojiFindIndex);

// indexOf
console.log("------ IndexOF -------");
const emojiIndexOF = emojis.indexOf("🤓");
console.log(emojiIndexOF);

// some
console.log("------ some -------");
console.log(emojis.some((ele) => ele == "🤓")); // true / false

// every
console.log("------ every -------");
console.log(emojis.every((ele) => ele == "🤓")); // true / false

// javascript Overview
