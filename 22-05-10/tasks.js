// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

const calculator = (str) => {
  let result = 0;
  str = str.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
  while (str.length) {
    result += parseFloat(str.shift());
  }
  return console.log(result);
};

calculator("23+4");
calculator("45-15");
calculator("13+2-5*2");
calculator("49/7*2-3");

const calculatorNew = (str) => Function(`return ${str}`)();

console.log(calculatorNew("23+4"));
console.log(calculatorNew("45-15"));
console.log(calculatorNew("13+2-5*2"));
console.log(calculatorNew("49/7*2-3"));

// Visa oer Master, write a function that checks if the user has entered a valid card data
// Example:
// 412178679036597 -> this is Visa card, I need your money
// 512178679036597 -> this is Master card, I need your money
// 34121786790365 -> this is AmEpx card, I need your money
// 11111 -> this is not correct
// de343ee -> this is not correct

const visaOrMaster = (num) => {
  if (num.substring(0) == "4" && num.length == 15) {
    return `this is Visa card, I need your money`;
  }
  if (num.substring(0) == "5" && num.length == 15) {
    return `this is Master card, I need your money`;
  }
  if (num.substring(0) == "3" && num.length == 14) {
    return `this is AmEpx, I need your money`;
  }
  if (num.substring(0) == isNaN() || num.length <= 13) {
    return `this is not correct`;
  }
};

console.log(visaOrMaster("412178679036597"));
console.log(visaOrMaster("512178679036597"));
console.log(visaOrMaster("34121786790365"));
console.log(visaOrMaster("11111"));
console.log(visaOrMaster("de343ee"));

// Phone number, Write a function that checks if a user give a correct German (landline Berlin 030) phone number
// 030-1247893 -> I'll call now
// 333-332222 -> this is not a phone number
// 030-33 -> This is not complete !
function name(params) {}
