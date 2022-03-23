// Wiederholung vom 22.03.22
console.log("hi HoLLe".toLowerCase());
console.log("hi HoLLe".toUpperCase());
console.log("         hi HoLLe       ".trim());
console.log("         hi HoLLe       ".trimStart());
console.log("         hi HoLLe       ".trimEnd());
console.log("hi Java is cool!".substring(3, 9));
console.log("hi, I am  HoLLe".includes("@"));
let num = 0;
console.log(num);
num++;
console.log(num);
num--;
num--;
num--;
console.log(num);
console.log("hi HoLLe".length);

let str1 = "hi";
str1 += " this is cool";
console.log(str1);

num += 5;
console.log(num);
num -= 100;
console.log(num);
num *= 5;
console.log(num);
num /= 20;
console.log(num);
// bracket notation [0] -> einzelne Zeichern ausschneiden
console.log("hi HoLLe"[1]);

// Numbers
// Odd und Even
// even 0,2,4,6,8 ..
// odd 1,3,5,7,9 ..
console.log(99 % 2);

// Conditional ternary Operator
// condition ? true : false
// Frage ? richtig : falsch
// Bedingung ? Ausdruck1: Ausdruck2
99 % 2 == 0 ? console.log("even") : console.log("odd");
100 == 100 ? console.log("cool") : console.log("not nice");
10 == 100 ? console.log("cool") : console.log("not nice");
10 > 100 ? console.log("cool") : console.log("not nice");
10 < 100 ? console.log("cool") : console.log("not nice");
1 + 2 + 10 == 55 ? console.log("cool") : console.log("not nice");
console.log(1 / 4 + 55);
1 / 4 + 55 == 55.25 ? console.log("cool") : console.log("not nice");
console.log(1 % 2);
1 % 2 == 0 ? console.log("cool") : console.log("not nice");
2 % 2 == 0 ? console.log("Even") : console.log("Odd");
// Wir können auch DRY coden

console.log(1 == 2 ? "cool" : "nooo");

let islogged = true;
console.log(islogged ? "logout" : "log in");

// Check if the following numbers are even / Odd numbers. Use ternary and if if the number is even print 30, else print that it is odd
33, 40, 2, 1, 22;

console.log(33 % 2 == 0 ? "30" : "odd");
console.log(40 % 2 == 0 ? "30" : "odd");
console.log(2 % 2 == 0 ? "30" : "odd");
console.log(1 % 2 == 0 ? "30" : "odd");
console.log(22 % 2 == 0 ? "30" : "odd");
let number = 22;
console.log(number % 2 == 0 ? `${number} is even` : `${number} is odd`);

function oddOrEven(num) {
  console.log(num % 2 == 0 ? `${num} is even` : `${num} is odd`);
}

oddOrEven(100);
oddOrEven(99);
oddOrEven(54);

// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = false;
console.log(isDog ? "pat, pat" : "find me a doggoo");

//Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 50;
let mySpeed = 50;
console.log(mySpeed >= speedCheck ? "too fast" : "oma");

//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent = false;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 35;
console.log(age < 16 ? "serve butter beer" : "serve beer");

// If und else

let bool = {};
// 1 == true --> gilt für jede Nummer (zahl), egal ob positiv oder negativ
// 0 == false
// String == true --> JavaScrip checkt nur ob es String gibt, nicht den Inhalt
// emptyString == false
// null == false
// undefined == false
// object == true
// array == true

if (bool) {
  console.log("cool");
  console.log("This is amazing");
} else {
  console.log("nooo");
  console.log("I am Sorry");
}

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
//
// && 'and' in English und in Javascript
// || or in JavaScript

let startRange = 50;
let endRange = 99;
let userFirst = 20;
let userSecond = 56;

// kiss -keep it super simpel!!
// if (firstNum check up || scondNum check up)
//                                true               ||
if (
  (userFirst >= startRange && userFirst <= endRange) ||
  //                                false
  (userSecond >= startRange && userSecond <= endRange)
) {
  console.log("true");
} else {
  console.log("false");
}
// && ||

// true && true = true
// false && true = false
// true && false = false
// flase && false = false

// true || true = true
// false || true = true
// true || false = true
// flase || false = false

// Check if three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range.

let userThird = 100;

if (
  (userFirst >= startRange && userFirst <= endRange) ||
  (userSecond >= startRange && userSecond <= endRange) ||
  (userThird >= startRange && userThird <= endRange)
) {
  console.log("nice");
} else {
  console.log("nein nein");
}

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// Wenn ersten beiden Buchstaben "Py" enthalten mit substring checken
// ob ersten beiden

let text = "Holger";
if (text.substring(0, 2) == "Py") {
  console.log(text);
} else {
  console.log("Py" + text);
}

console.log(text.substring(0, 2) == "Py" ? text : "Py" + text);

//9. Calculate the sum of the two given integers. If the two values are same, then return triple their sum.

let int1 = 6;
let int2 = 6;

console.log(int1 == int2 ? (int1 + int2) * 3 : "sorry not the same");

// isBigger, check if a given number is bigger then 55, write that in funtion
//check the following 55,4,2,51,2.2

//let isBigger = 55;

//console.log(isBigger >= 55 ? "true" : "false");

function isBigger(userNum) {
  return userNum >= 55; // return bring immer nur einen value zurück: true / false
}
function isBigger2(userNum) {
  console.log(userNum >= 55);
}
console.log(isBigger(55));
console.log(isBigger(44));
console.log(isBigger(2));
console.log(isBigger(51));
console.log(isBigger(2.1));

isBigger2(23);
isBigger2(65);

//BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let myFirstName = "Holger";
let myAge = 35;
let userAge = 13;
let userAge20 = 20;

if (myAge < 13) {
  console.log(myFirstName + " is a Child");
} else if (myAge >= 13 && myAge < 20) {
  console.log(myFirstName + " is a Teenager");
} else if (myAge >= 20 && myAge < 30) {
  console.log(myFirstName + " is a young adult");
} else {
  console.log(myFirstName + " is a adult");
}

//myAge >= 13 && myAge < 20 ) //(myAge >=20 && myAge < 30) ) }

// isNaN

// * + - /

// ++ --
