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
  if (isNaN(num) || num.length <= 13) {
    return `this is not correct`;
  } else if (num.length == 15) {
    if (num[0] == "4") {
      return `this is Visa card, I need your money`;
    } else if (num[0] == "5") {
      return `this is Master card, I need your money`;
    }
  } else if (num[0] == "3" && num.length == 14) {
    return `this is AmEpx, I need your money`;
  }
};

console.log(visaOrMaster("412178679036597"));
console.log(visaOrMaster("512178679036597"));
console.log(visaOrMaster("34121786790365"));
console.log(visaOrMaster("11111"));
console.log(visaOrMaster("de343ee"));
console.log("-----------------");
// Phone number, Write a function that checks if a user give a correct German (landline Berlin 030) phone number
// 030-1247893 -> I'll call now
// 333-332222 -> this is not a phone number
// 030-33 -> This is not complete !

const phoneCheck = (str) => {
  if (isNaN(str)) {
    return console.log("WTF not a number in Europe!");
  }
  let vorWahl = str.substring(0, 2);
  if (str.length != 10) {
    return console.log("this is not complete");
  }
  switch (vorWahl) {
    case "01":
      console.log("Handynummer");
      break;
    case "02":
      console.log("Nordrheinwestfalen");
      break;
    case "03":
      console.log("Berlin, Brandenburg, Saschsen, Thüringen");
      break;
    case "04":
      console.log("Schleswig-Holstein");
      break;
    default:
      console.log("check one more time");
  }
};
phoneCheck("0341599852");
