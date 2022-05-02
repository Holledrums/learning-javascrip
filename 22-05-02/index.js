// Javascript Overview
// let || const || var nameSpace = value; Hoisting
let x = 0;

console.log(sumUp(22, 3)); // mit hoisting kann ich meine Funktion aufgerufen werden die weiter unten im code steht
console.log(globalVar); // das funktioniert für Variablen (hier: globalVar) können beim Hoisting noch nicht ausgegeben werden.
let something = "Text";
function sumUp(x, y) {
  return x + y;
}

var globalVar = "I'm Global";
console.log(globalVar); // ab hier kann die Variable ausgegeben werden --> für variablen gilt Synchronous von oben nach unten, von links nach rechts

// if else

let totalItems = 550;
if (totalItems > 150) {
  console.log("nice you got a free gift");
} else {
  console.log("Oh no you need to buy more ;) ");
}

// ? true : false
// ternary condition ? ex if true : ex if false

let userIsLogged = true;
console.log(userIsLogged ? "welcome back :)" : "You need to log in :)");
console.log(5 > 6 || 1 == 1 ? "cool" : "noo"); // bei einer Oder || abfrage reicht es wenn eine antwort true ist um true auszugeben
console.log(5 > 6 && 1 == 1 ? "cool" : "noo"); // bei einer und && abfrage müssen beide abfragen true sein um true auszugeben

// strings
let str = "this is a long text";
console.log(str.length); // length ist ein property

// Loops (break || continue)
console.log("---------break----------");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("---------continue----------");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// switch
let color = "blue";
// () [] {}
let resultText = "";

switch (color) {
  case "blue":
  case "lightBlue":
    // do something
    resultText = `this is ${color}`;
    break;
  case "green":
    // do something
    resultText = `this is ${color}`;
    break;
  case "black":
    // do something
    resultText = `this is ${color}`;
    break;
  case "red":
    // do something
    resultText = `this is ${color}`;
    break;
  default:
    resultText = "sorry this color is not on your list";
}

console.log(resultText);
