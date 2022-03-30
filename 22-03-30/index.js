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

//cocat()
