// Arrays
//Arrys starten wir immer mit const

//               0       1         2      3       4
const names = ["Ali", "Nancy", "Steel", "Olga", "Ali"];

console.log(names[1]);
console.log(names.length);
// Um einzelne Zeichen aus einem Bestimmten Array auszuwählen
console.log(names[0][0]);
console.log(names[1][0]);
console.log(names[2].substring(2, 4)); // Auswahl von zwei oder Mehr Buchstaben

// Bracket Notation
names[1] = "Carlo";
console.log(names);
const arr = [];
console.log(arr);
arr[0] = 22;
console.log(arr);
arr[1] = 12;
console.log(arr);
// push() --> bringt einen wert ins array, an die nächste noch nicht besetzte stelle
arr.push(55);
arr.push(43);
arr.push("Holle");
console.log(arr);
console.table(arr);
console.log(arr.length);

// indexOf()

console.log("indexOf: ", names.indexOf("Ali")); // zählt vom Anfang / -1 gibt an das ein wert nicht vorhanden ist 
console.log("lastIndexOf: ", names.lastIndexOf("Ali")); // zählt vom ende / -1 gibt an das ein wert nicht vorhanden ist

// unshift() Macht das gegenteil von push() und setz den wert immer an erste Stelle (also 0)
arr.unshift("hi");
arr.unshift("Cool");
console.table(arr);

// pop() --> Löscht immer den letzten Index
arr.pop();
console.table(arr);

//shift() --> Löscht den ersten Index
arr.shift();
console.table(arr);

// reverse()
const numbers = [1, 2, 3, 4, 5, 6];
numbers.reverse();
console.log(numbers);
console.table(numbers);

// Übungen

// [Maria, Mike, Paul, Doven] -> Expact Output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
const namesArr = ["Maria", "Mike", "Paul", "Doven"];
let namesLength = namesArr.length;
let str = "";
for (let i = 0; i < namesLength; i++) {
  str += `Hello ${namesArr[i]}! `;
}
console.log(str);

// Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".

const friendsArr = ["Susan", "Rezvane", "Hadi"];
let strFriends = "";
for (let i = 0; i < friendsArr.length; i++) {
  strFriends += `${
    friendsArr[i]
  } is at index ${i} of my friends and family array${
    i == friendsArr.length - 1 ? "." : ","
  } `;
}
console.log(strFriends);

// City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples: [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome"

const cityArr = ["Berlin", "Paris", "Prague", "Rome"];
let strCity = "";
for (let i = 0; i < cityArr.length; i++) {
  strCity += `${cityArr[i]}${i == cityArr.length - 1 ? " " : ", "}`;
}
console.log(strCity);
console.log("-------------------------");

// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.
// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

// Declare another variable and assign the second item of the array as a value.

let bigCity = euroCities[1];
console.table(euroCities);

// Change the first item in the array to "Berlin".

euroCities.unshift("Berlin");
console.table(euroCities);

// Print the length of the array "euroCities".

console.log(euroCities.length);

// Remove the last item of the array "euroCities".

euroCities.pop();
console.table(euroCities);

// Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.table(euroCities);

// Bonus: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.table(euroCities);

// Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Hong Kong", "Bangkok", "Dubai", "Bischkek", "Tokio"];

// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

function capitalize(arr) {
  for (let i = 0; i < arr.length; i++) {
    // let first = arr[i][0].toUpperCase();
    // let rest = arr[i].substring(1).toLowerCase();
    // arr[i] = first + rest;
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  return console.table(arr);
}

const arr1 = ["matt", "sara", "lara"];
const arr2 = ["samuel", "MARIA", "luke", "mary"];
const arr3 = ["Cynthia", "Karen", "Jane", "Carrie"];

capitalize(arr1);
capitalize(["HoLgEr", "BasIL"]);
capitalize(arr2);
capitalize(arr3);

//Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]

const item = ["Bleistift"];
const times = [];

function timesLikeThees(str, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = str;
  }
  return console.table(arr);
}
timesLikeThees("Holle", 6);

// Word Ranking. Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// The returned string should only contain alphabetic characters (a-z).
// Preserve case in the returned string (see 4th example above).
// Examples:
// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday"

let newStr = "Nancy is very cool";
console.log(newStr.split(" ")); // --> " " Teilt den String nach jeden leerzeichen, und gibt in Array haerus; "" Teilt den String nach jeden zeichen und gibt in Array heraus

function wordRank(str) {
  let longestWord = "";
  let strToArr = str.split(" ");
  console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    if (longestWord.length < strToArr[i].length) longestWord = strToArr[i];
  }

  return console.log(longestWord);
}
wordRank("The quick brown fox.");
wordRank("Nancy is very pretty.");
wordRank("Check back tomorrow, man!");
wordRank("Today is Wednesday.");

// The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

function findGreatest(arr, num) {
  let str = [];
  // console.table(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      check.push(check[i]);
    }
  }
  return console.log(arr);
}

findGreatest([3, 4, 5], 4);
findGreatest([10, 20, 30], 12);
findGreatest([0, 10, 3], 4);


// Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

function dictionary(str, arr) {
    let outputArr = []
    for (i = 0; i == arr.substring(0,1) i++) {

    }
return console.log(arr)
}



dictionary("bu", ["button", "breakfast", "border"])