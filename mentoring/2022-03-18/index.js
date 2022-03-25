//Variablen Deklaration
const constVar = "Ich bin constant";
let letVar = "ich bin let";

// String-Variable (String = Text)
let myName = "Holger";
let greeting = "Guten Morgen";

// Number - Variable
let a = 4;
let b = 5;

// Boolean-Variable
let boolVariable = true;

console.log("wert von boolVariable: " + boolVariable);

boolVariable = false;
console.log("wert von boolVariable: " + boolVariable);

// String Concatenation
console.log(greeting + " " + myName);

//Number Calculation
console.log(a + b);

// Variable Reassignment
b = 8;
console.log(a + b);

// Variablen können beim Reassignment einen andern Typen annehmen
b = "Hallo";
console.log(a + b);
