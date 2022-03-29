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

console.log("indexOf: ", names.indexOf("Ali"));
console.log("lastIndexOf: ", names.lastIndexOf("Ali"));

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
