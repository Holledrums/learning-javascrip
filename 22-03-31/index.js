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
num = 44444444;
num *= 5; // num = num * 5;
num /= 4; // num = num / 4;

let float = 22.23334455;
console.log("num ceil: ", Math.ceil(float)); // rundet immer auf
console.log("num floor: ", Math.floor(float)); // rundet immer ab
console.log("num round: ", Math.round(float)); // rundet nach den gelendet mathte regeln, bis 4 ab und ab 5 auf
console.log("PI: ", Math.PI); // ist ein Property, hat also bereits den Wert von 3,14 ..
const myPI = 3.141592653589793;
console.log("num parseInt: ", parseInt("123aaad1")); // zieht bzw erstell NUM wenn sie am anfang vom String steht
console.log("num parseFloat: ", parseFloat("2.33333")); // wandelt String in NUm
// trim
firstName = "          Holle     ";
console.log("trimStart: ", firstName.trimStart());
console.log("trimEnd: ", firstName.trimEnd());
console.log("trim: ", firstName.trim());

// true false

// and &&
// true && false => false
// false && true => false
// false && false => false
// true && true => true
//  or ||
// true || false => true
// false || true => true
// false || false => false
// true || true => true
//
if (1 == 1 && 22 != 2 && 5 == 5 && 2 != 2) {
  console.log("And OR:", "cool");
} else {
  console.log("And OR:", "Nooo");
}
// condition ? true : false

let bool = true; // 1 " " "ali" true
bool = false; // 0 "" null false
console.log("condition: ", 1 == 1 ? "cool" : "noo"); // == vergleicht nur den Value
console.log("condition: ", 1 == "1" ? "cool" : "noo");
console.log("condition: ", 1 === "1" ? "cool" : "noo"); // === vergleicht auch den Value, also hier muss(!) es genau übereinstimmen
// && || !
if (false) {
  //something
} else if (true) {
  //other thing
} else {
  // last thing
}

let age = 21;

switch (
  age // Im Unterschied zur schleife geht JS hier nur von oben nach unten, bei der Schleife beginnt java immer wieder oben bis die Bedingung erfülllt ist.
) {
  case 2:
    console.log("you are a baby");
    break;
  case 12:
    console.log("you are a boy");
    break;
  case 21:
    console.log("you are a young man");
    break;
  case 30:
    console.log("you are an adult");
    break;
  default:
    console.log("Sorry, write your name");
}

// condition ? true : false ;

// Übung
// 1- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//     Example string : 'the quick brown fox' // Expected Output : 'The Quick Brown Fox '

// function str Loop toUpperCase Substring lowercase
const stringUpp = (str) => {
  let output = "";
  let newArr = str.split(" ");
  console.log(newArr);
  for (i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1);
  }
  output = newArr.join(" ");
  return console.log(output);
};

stringUpp("the quick brown fox");

// 2- Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// longestCountryName(
//    ["Australia",
//    "Germany",
//    "United States of America"]
//    )
// Expected output : "United States of America"

// finction, array, length, loops, if/ condition

const longestCountryName = (arr) => {
  let longestWord = "";
  for (i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }
  return console.log(longestWord);
};

longestCountryName(["Australia", "Germany", "United States of America"]); // Expected output : "United States of America"
longestCountryName(["Amsterdam", "Paris", "LA"]);

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// gegeben: Function (str)
//          number
//          includes()  vowel = "AEIOUaeiou"
//          condition, Loop

const vowelCount = (str) => {
  let count = 0;
  const vowel = "AEIOUaeiou";
  for (i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return console.log(count);
};
vowelCount("Halloechen ich bon Holle");

// Hello Alex. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!
// old school

//  function array ["Maria", "Mike", "Paul", "Doven"]; output = "", loop

const grüße = (arr) => {
  let greet = "";
  for (let i = 0; i < arr.length; i++) {
    greet += `Hello ${arr[i]}! `;
  }
  return console.log(greet);
};

grüße(["Maria", "Mike", "Paul", "Doven"]);
