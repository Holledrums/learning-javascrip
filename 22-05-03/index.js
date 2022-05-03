// wdhg Arrays && Objects

// was ist loosely typed vs strongly typed language

let str;
str = 5;
str = "cool";

// function params
// returns

// function sum(x,y){
//    return x + y;
//}
const sum = (x = 2, y = 2, ...numbers) => {
  // default value ist ein Backup wenn keine eingabe erfolgt
  console.table(numbers);

  return x + y;
};

let globalStr = "";
let logIn = false;
function changeStr() {
  globalStr = "i did something";
}

console.log(sum(2, 1, 5, 6, 9, 8, 88, 9, 5, 4, 777, 44, 654));

// Arrays
const arr = [];
const arr2 = new Array();
console.log(Object.getOwnPropertyNames(arr));

const printAll = (obj) =>
  console.log(
    Object.getOwnPropertyNames(
      Array.prototype.filter(
        (prop) => typeof Array.prototype[prop] == "function"
      )
    )
  );
printAll(arr.prototype);
// Objects
// Advanced test am 17.05.
// SAIF
// Closuer
// callbacks
// array methods
// Class 16.05.
// recap
// Team-project (3Tage) 23.05.-25.05.
