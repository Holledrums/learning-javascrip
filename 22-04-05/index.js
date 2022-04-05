// overview
// .concat() methode um arrays zusammen zu führen
const arr1 = [2, 34, 5];
const arr2 = ["hi", "this is JS"];
const totalArr = arr1.concat(arr2, [3, 5]);
console.table(totalArr);
// process
// console.log(process); gibt sämtliche Information zum System aus

// ... spread operator

function sum(...args) {
  console.log(args);
}
sum(4, 5, 6, 7, 8, 9);

// return -> gibt das Ergebnis einer Funktion zurück; steh immer zum Schluss

function iGreet(name) {
  let newText = `Hey ${name}`;
  return console.log(newText); // hier wäre Return nicht unbedingt notwendig
}
iGreet("Ali");

function multi(x, y) {
  // in diesem beispiel benötigen wir Return weil wir
  return x * y; // mit dem ergebnis der function weiterrechnen
}
const bigNum = 3 + 5 * 55 - multi(3, 55);
console.log(bigNum);

// Function in JS

//function Decleration as Values
// const function = functionName(parameters){...}
// Oldschool
const iDoSomeThing = function (str) {
  return "Something";
};

// newSchool ES6
const iDoSomethingEs6 = (str) => "something"; // wenn ich nur einen Wert hab, sonst auch hier {...} + return
console.log(iDoSomethingEs6());

const trueOrFalse = (x, y) => x > y;
console.log(trueOrFalse(3, 6));

// Call stack 65536 -> ist die maximale durchlauf einer endlos function und stoppt nach 65536 durchläufen

// Callback

function iDoCoffee() {
  let milk = iHaveMilk();
  let sweetner = iHaveSweetner();
  let spoon = iHaveSpoon();
  let eis = iHaveEis();

  return `Your coffee with ${milk}, ${sweetner}, ${spoon} and ${eis} is ready`;
}

const iHaveMilk = () => `Oat Milk`;
const iHaveSweetner = () => `a Spoon of Honey`;
const iHaveEis = () => `witout Eis`;
const iHaveSpoon = () => `a Spoon`;

console.log(iDoCoffee());

// Array Methods

// map() es6 - 2015

const names = ["Ali", "Nancy", "Olga", "Steel"];
const greetingArr = names.map(
  (name, i) => `Hey ${name} your index num is ${i}`
);
console.log(greetingArr);

// Recursion
