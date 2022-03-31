// OVERVIEW

console.log("Hi JavaScript");

// let const var --> zum definieren unserer Variablen // var gibts noch wird heute aber nicht mehr genutzt

let x, firsName, lastName; // drei Variablen vorbereitet, der platz ist reserviert aber noch undefined
firstName = null;
console.log(x);
console.log(firstName);
console.log(typeof x);

// Hoisting
var global = "I'm a global hoistet var";
console.log(global);
function sum(str, arr) {
  // Scope- bezeichnet den umfang der Funktion // global bezeichnet Scope den Umfang und Inhalt der JS-Datei
  global = "yes";
  let x = "Nice I'm local var";
  console.log(x);
}
sum("hi,", [1, 3, 4]);

// String - darstellung von Test in ""-Zeichen
console.log("Holle !!§$%&%&\" '\n Oh this is fun ");

let str = "I like JanvaScript";
console.log("str length: ", str.length);
console.log("str substring(): ", str.substring(2, 6));
console.log("str Uppercase(): ", str.toUpperCase());
console.log("str LowerCase(): ", str.toLowerCase());
console.log("str substring + UpperCase: ", str.toUpperCase().substring(5));
console.log("str [8]: ", str[8]); // a
console.log("str charAt(8): ", str.charAt(8)); // a

// UTF 16 -  ist eine Kodierung mit variabler Länge für Unicode-Zeichen.
console.log("str charCodeAr(8): ", str.charCodeAt(8), "UTF-16 (ASI-Code)"); // gibt die Zahl im UTF-16 code aus
console.log("str includes: ", str.includes("I")); // gibt nur True und False aus

// ** --
let num = 0;
num++; // num = num + 1; // num += 1;
num--; // num = num - 1; // num -= 1;

let float = 22.23334455;
console.log("num ceil: ", Math.ceil(float));
console.log("num floor: ", Math.floor(float));
