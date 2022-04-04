// Js methods from Math(.max , .min  , .floor , .ceil ,random )
// Js methods for str (.trim , .length , .includes , .split , .toUpperCase , .toLowerCase)

// concat() --> ist wie ein kleber, nimmt unterschiedle Array<s und verbindet diese miteinander und gibt sie als ein neues Array aus

const arr1 = ["hi", "cool"];
const arr2 = [22, 33];
const totalArray = arr1.concat(arr2, ["This is fun", "noo"]);
console.log(totalArray);

// functions in JS

function sum(x, y) {
  // x,y sin parameter

  return console.log(x + y);
}

sum(2, 4);

// Es6 2015

// Function arguments

function iPrint(str, num, arr) {
  return console.log(
    `I had an array "${arr}" and a Number "${num}" and a string "${str}"`
  );
}
iPrint("nice", 22, ["no this", "Not cool"]);
// default argument --> hier kann man werte vorgeben für den fall das der nutzer etwas nicht eingibt

function sumDefault(x = 9, y = 22) {
  return console.log(x + y);
}
sumDefault();

// many arguments --> spread Operator
function manyArgs(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return console.log(total);
}

manyArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
manyArgs(1, 2, 9, 10, 11, 12);
manyArgs(1, 4, 5, 6, 7, 8, 9, 10, 11, 12);

// V8 Engine für Browser und Node

// read user input 😎

// String [] vs charAt()
