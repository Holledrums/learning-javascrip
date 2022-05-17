// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
let first = { firstName: "John", lastName: "Vooo" };
let last = { lastName: "Smith" };

const createObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(createObj(first, last));

// Expected output:
// {firstName: "John", lastName: "Smith"}
console.log("-------------------");

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};

/*const flipKey = (obj) => {
  return Object.keys(obj).reduce((flip, key) => {
    flip[obj[key]] = key;
    return flip;
  }, {});
};*/

const flipKey = (obj) => {
  let flip = {};
  for (let prop in obj) {
    flip[obj[prop]] = prop;
  }
  return flip;
};
console.log(flipKey(person));

// Expected Output:
// {"John": name, "teacher": job}

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

const returnArr = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};

console.log(returnArr({ a: 1, b: 2, c: 3 }));
console.log(returnArr({ key: true }));

// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100

const convertBin = (num) => num.toString(2);

console.log(convertBin(20));
console.log(convertBin(10));
console.log(convertBin(44));

// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
//isPandigital(0123456789) -> true

const isPandigital = (num) => {
  let numToArr = num.toString().split("").sort();
  let filteredArr = numToArr.filter((el, i) => numToArr.indexOf(el) == i);
  return filteredArr.join("") == "0123456789";
};
console.log(isPandigital(45362718905));
console.log(isPandigital(987654321100000007777));
console.log(isPandigital(126789));

// const isPandigital2 = (num) => new Set(num.toString().split("")).size === 10;

const arr1 = ["name", "age", "country"];
const arr2 = ["Tom", 30, "Chile"];

const obj = {};

arr1.forEach((element, index) => {
  obj[element] = arr2[index];
});

console.log(obj);

/*B-3. Create Grid (10 Points)
Create a function createGrid

It should return a nested array representing a 2D grid, filled with a char.

It should accept two arguments:

size (which determines the number of nested arrays and the number of elements in each nested array) and
char (which determines the characters in each nested array).
Call your function and print the return value to the console.

Example and expected output:

console.log(createGrid(3, "*"));
[ [ '*', '*', '*' ], [ '*', '*', '*' ], [ '*', '*', '*' ] ]  */

const createGrid = (size, char) => {
  let newArr = Array(size);

  for (let i = 0; i < char.length; i++) {
    newArr[i] += size;
  }
  return newArr;
};

console.log(createGrid(3, "*"));
console.log(createGrid(3, "**"));

/*l
  }
  return newArr; */
