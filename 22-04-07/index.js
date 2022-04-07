// Recap zu functionen mit Thomas

let vorname = "Holger";

function printGreeting(firstName) {
  console.log("Hallo, ", firstName);
}

printGreeting(vorname);

console.log("Wie geht's");

//01.
// Erstelle ein Program, das ein angegebenen Array kopiert und zurückgibt. Drucke das Ergebnis in die Konsole.
//Beispiele:
//copyArray([12, 66, 10]) => [12, 66, 10]
//copyArray([5, -20, "Salem", true]) => [5, -20, "Salem", true]
//copyArray([]) => []

function copyArray(katze) {
  //katze.slice(0);
  //console.log(katze);
  return katze.slice();
}

console.log(copyArray([12, 66, 10]));
console.log(copyArray([5, -20, "Salem", true]));
console.log(copyArray([]));

function copyArraySpread(arr) {
  let output = [];
  output.push(...arr);

  return output;
}

console.log(copyArraySpread([12, 66, 10]));
console.log(copyArraySpread([5, -20, "Salem", true]));
console.log(copyArraySpread([]));

//02.
//Schreibe ein Programm, um ein String umzukehren.
//Beispiele:
//reverseString("Hallo Welt") => tleW ollaH
//reverseString("Bonjour le monde") => ednom el ruojnoB

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("Hallo Welt"));
console.log(reverseString("Bonjour le monde"));

// als Arrow function
const reverseStrArrow = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverseStrArrow("Hallo Welt"));
console.log(reverseStrArrow("Bonjour le monde"));

// noch kürzere Arrow Function (shorthand Arrowfunction)

const reverseStrArrow2 = (string) => string.split("").reverse().join("");

console.log(reverseStrArrow2("Hallo Welt"));
console.log(reverseStrArrow2("Bonjour le monde"));

//03.
//Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

function missingNums(arrNum) {
  let output;

  for (let i = 1; i <= 10; i++) {
    if (!arrNum.includes(i)) {
      output = i;
    }
  }

  return output;
}

console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

//04.
//Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw"
const alphaOrder = (str) => console.log(str.split("").sort().join(""));

alphaOrder("webdev");
alphaOrder("Holler");
