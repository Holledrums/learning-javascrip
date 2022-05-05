// edabit tasks
/*From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
Notes
JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number. */

function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

console.log(bitwiseAND(7, 12));

console.log(bitwiseOR(7, 12));

console.log(bitwiseXOR(7, 12));
console.log("--------------");

/* Add up the Numbers from a Single Number
  Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. 
  
  Examples
  addUp(4) ➞ 10
  
  addUp(13) ➞ 91
  
  addUp(600) ➞ 180300
  Notes
  Expect any positive number between 1 and 1000.
  */

const addUp = (num) => {
  return (num * (num + 1)) / 2;
};

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log("--------------");

/* Matchstick Houses
  This challenge will help you interpret mathematical relationships both algebraically and geometrically.
  Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
  
  
  Examples
  matchHouses(1) ➞ 6
  
  matchHouses(4) ➞ 21
  
  matchHouses(87) ➞ 436
  Notes
  Step 0 returns 0 matchsticks.
  The input (step) will always be a non-negative integer.
  Think of the input (step) as the total number of houses that have been connected together.
  
  */

const matchHouses = (step) => {
  return step == 0 ? 0 : step * 6 - step + 1;
};
console.log(matchHouses(0));
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
console.log("--------------");

/* Left Shift by Powers of Two
  The left shift operation is similar to multiplication by powers of two.
  
  Sample calculation using the left shift operator (<<):
  
  10 << 3 = 10 * 2^3 = 10 * 8 = 80
  -32 << 2 = -32 * 2^2 = -32 * 4 = -128
  5 << 2 = 5 * 2^2 = 5 * 4 = 20
  Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
  
  Examples
  shiftToLeft(5, 2) ➞ 20
  
  shiftToLeft(10, 3) ➞ 80
  
  shiftToLeft(-32, 2) ➞ -128
  
  shiftToLeft(-6, 5) ➞ -192
  
  shiftToLeft(12, 4) ➞ 192
  
  shiftToLeft(46, 6) ➞ 2944
  Notes
  There will be no negative values for the second parameter y.
  This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
  Alternatively, you can solve this challenge via recursion. */

const shiftToLeft = (x, y) => {};

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(12, 4));
console.log(shiftToLeft(46, 6));
