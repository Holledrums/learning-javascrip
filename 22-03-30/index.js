// Overview
const arr = new Array(); // JS erstellt eine Klasse die leer ist, ein Array
const arr2 = []; // die kürzere Variante ein Array zu erstellen
// Delete  const let new for ... log
console.log(arr);
arr2[0] = "Ali";
arr2.push("steel");
arr2.unshift("nancy");
arr2.unshift("olga");
let lastDeletedItem = arr2.pop();
console.log("Deleted Item: ", lastDeletedItem);
let firstDeletedItem = arr2.shift();
console.log("Last Item: ", firstDeletedItem);
console.table(arr2);
console.log(arr2.length);
arr2[1] = "alex";
arr2.reverse();
let userName = arr2[0];
console.log(userName);

//No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
//[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
//[1, 6, 6, 9, 9] ➞ [1, 6, 9]
//[2, 2, 2, 2, 2, 2] ➞ [2]
//[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function cleanUp(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    // arr.length limitiert die Abfrage und beendet die Schleife wenn die bedingung erfüllt ist
    if (resultArr.indexOf(arr[i]) == -1) {
      resultArr.push(arr[i]);
    }
  }
  return console.table(resultArr);
}

cleanUp([1, 4, 4, 7, 7, 7]);
cleanUp([1, 6, 6, 9, 9]);

// function clearUp(arr) {
//    let result = [];
//    for (let i = 0; i < arr.length; i++) {
//    if (!result.includes(arr[i])) {
// ! ausrufezeichen bedeutet NOT
//    result.push(arr[i]);
//    }
//    }
//    return console.log(result);
//    }

//    clearUp([1, 4, 4, 7, 7, 7]);

// ARRAYS && LOOPS

// Splice() - Löscht die Elemente aus dem Arry
const days = ["mon", "mitt", "don", "fr"];
days.splice(1, 2); // die zahl nach Komma gibt an wieviele Items entnommen werden
console.log(days);
console.table(days);

// slice() - erstellet einer Kopie des Arrys, das origanal bleibt erhalten
const cities = ["London", "Berlin", "Dubai", "LA"];
let newArr = cities.slice(0, 2);
console.log(cities);
console.log(newArr);

// split()
let str = "This. is. a long Text";
console.table(str.split("")); // splittet jedes Zeichen auf, auch Leer- und Satzzeichen
console.table(str.split(" ")); // splittet den text in einzelne Wörter, trenn nach Leerzeichen
console.table(str.split(" ").length); // mit length gib ts die summe der Leerzeichen an

//join() - Nimmt Array und bringt String zurück

const text = ["hi", "i", "am", "hadi"];
console.log(text.join(". "));

// Beispiel:
// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

function toCamelCase(str) {
  let result = "";
  let newArr = str.toLowerCase().split("_");
  for (i = 1; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1);
  }
  result = newArr.join("");
  return console.log(result);
}

toCamelCase("hello_world");
toCamelCase("javascript_is_fun");

// arrow function =>

const toCamelCaseArrow = (str) => {
  let result = "";
  let newArr = str.toLowerCase().split("_");
  for (i = 1; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1);
  }
  result = newArr.join("");
  return console.log(result);
};
toCamelCaseArrow("Was_Geht_ab");

// Old School
function sum(x, y) {
  return x + y;
}
sum(2, 5);

// Es6 --> New School

const sumArrow = (x, y) => x + y;

sumArrow(3, 3);

console.log(sum, sumArrow);

// Weitere Beispiele

function display(str) {
  return console.log(str);
}

const displayArrow = (str) => console.log(str);

// Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

const dictionary = (str, arr) => {
  let resultArr = [];
  let stringLength = str.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substring(0, str.length) == str) {
      resultArr.push(arr[i]);
    }
  }
  return console.log(resultArr);
};

// function dictionary(str, arr) {
//   let outputArr = []
//   for (i = 0; i == arr.substring(0,1) i++) {
//
//  }
//return console.log(arr)
//}

dictionary("bu", ["button", "breakfast", "border"]);
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]);
dictionary("beau", ["pastry", "delicious", "name", "boring"]);

// Hello Alex. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!
// old school
function greeting(arr) {
  let greet = "";
  for (i = 0; i < arr.length; i++) {
    greet += `Hello ${arr[i]}! `;
  }
  return console.log(greet);
}
// Es6
const greeting2 = (arr) => {
  let greet = "";
  for (i = 0; i < arr.length; i++) {
    greet += `Hello ${arr[i]}! `;
  }
  return console.log(greet);
};

greeting(["Maria", "Mike", "Paul", "Doven"]);
greeting2(["Maria", "Mike", "Paul", "Doven"]);

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

// gegeben: function; array mit 3 Numbers; sum + produkt

const sumOfNum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return console.log(sum);
};

sumOfNum([1, 2, 3]);
