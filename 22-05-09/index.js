"use strict";

// local vs  global
/* 

global 
let x = 3;

{
    local 
}

*/
// outer function

function main(num1, num2) {
  // inner function
  function second(n) {
    // innerfunction
    if (n != 0) {
      return "sorry";
    }
    return n;
  }
  return second(num1) + second(num2);
}

main(2, 3);
console.log("----------------------");

// nested Scope

let nice = true;
const outerFunction = (x, y) => {
  let big = false;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = true;
    nice = false;
    let fat = true;
  };
  innerFunction();
  console.log(`innerFunction : big = ${big}, nice = ${nice}`);
};
outerFunction();

// Closure
// function return to otherfunction

function fun() {
  let num = 10;
  function iDoSomething() {
    return num;
  }
  return iDoSomething();
}

fun(); // 10

// Invoke == call
// SIAF
// sel-invoking anonymous function
(function (name, add) {
  console.log("hi " + name + add);
})("Holle ", "Leipzig");

(() => console.log("cool"))(); // ES6
// IIFE
// Immediatly - involved function erxpression
const sum = ((x, y, ...args) => x + y)(3, 5, 5, 60, 9, 5);
console.log(sum);
console.log(sum);
// (()=>)()
// write a functiion add that uses a closure that performs addition on arguments in two separate function calls

const add = (a) => (b, c) => a + b + c;
console.log(add(2)(3, 4));

// write a function multiplier theat uses a closure to per form a multiplication. However, the outer function sghould be stored in a variable which is then called
//
const multiplier = (
  (num) => (x) =>
    num * x
)(3)(4);

console.log(multiplier);

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000*/

((age, retire, income, saves) => {
  if (age >= retire) {
    return "sorry, you should enjoy your retirement";
  } else {
    let monthlySaved = (saves * income) / 100;
    let timeToRetire = retire - age;
    let totalSaved = (saves * (income * 12 * timeToRetire)) / 100;

    console.log(
      `You are ${age} and you need to work ${timeToRetire} more years. you are currently saving ${monthlySaved}, per month. so after ${
        retire - age
      } years of work you will save ${totalSaved}`
    );
  }
})(36, 60, 2600, 20);

/* const retirePay = (
  (age, retire, income, saves) => () =>
    (saves * (income * 12 * (retire - age))) / 100
)(40, 65, 2000, 5);

console.log(retirePay()); */

// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> `this is not a bank account`
// DE33nn54637 -> this is a wrong bank account
// DE -> this is correct, I'll take your money :leichtes_lächeln:

const bankAccount = (str) => {
  if (str.substring(0, 2) != "DE") {
    return `this is not a bank account`;
  }
  if (str.substring(2) == isNaN()) {
    return `this is a wrong bank account`;
  }
  if (str.length != 22) {
    return `This is not a complete bank account`;
  } else {
    return `this is correct, I'll take your money `;
  }
};
console.log(bankAccount("DE25102556985689533254"));
console.log(bankAccount("DE25102556985"));
console.log(bankAccount("QQ25102556985689533254"));
console.log(bankAccount("DE33nn54637"));
