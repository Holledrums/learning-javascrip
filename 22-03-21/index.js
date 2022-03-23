// comment
console.log(3 == 3);
// ; , - _ ? ! " " ' ' § $ & / | \ = : * + - ~ { } [ ] ~ # @ ` ´ ^ % < > . ( )
console.log("hi, I am Holle");
console.log(1 < 44);
// true & false boolean
console.log(1 + 1);
// number
// Object --> ist z.B. die Console
// Boolean --> vergleich true & fals
// String --> textausgabe
// Number
// null

let x;
//
x = 5;
let str = "Holle";
let bool = true;
let empty;

// undifined - variable ohne wert
// not defined - variable noch nicht bekannt
let cool = "JS is cool";
x = 44;

console.log(x);
console.log(cool);
console.log(x * 55 + x - 44);
// DRY - dont repeat your self - code
empty = 9;
console.log(empty * 100);

// consol.log(typeof );

function iDoSomething() {
  // funtion scope -> innerhalb der Curli klammer können wir die Function aufbauen
  console.log("Hello Hello");
}
iDoSomething();

let local = "I am local var ";

function sum(a, b) {
  //scope
  let local = "I am local var ";
  let x = "cool, again";
  console.log(x);
  console.log(a + b);
}
//a + b sind hier locale variablen
console.log(local);
sum(22, 44);
sum(3, 8);
sum(144, -44);
// x ist eine globale Variable
console.log(x);

function printOut(name, age, address) {
  console.log(
    "i'm",
    name,
    age,
    "years old",
    "I live in" + address + " " + 1 + 1
  );
  console.log(`hi I'm ${name} ${age} years old I live in ${address}`);
}
printOut("Holle", 35, "Leipzig");

// let's Practice
/* These exercises are aimed at making you familiar with using node to run your scripts & the console.log method. For each exercise, run your script in node to check if your console.log(s) are working. Remember to use camelCase where needed.
Make your own JavaScript file and work from there. Open up your terminal in VS Code. */

// Console log a line of text eg. "this is an exercise in console logging" (do not forget quotation marks).
console.log("this is an exercise in console logging");

// Declare a variable and give your variable the following value: "This is the value.". Console log your variable.
let longStr = "this is the value";
console.log(longStr);

// Declare a variable called firstName and assign your first name to that variable. Do the same with your last name. Console log both variables. NOTE: When console logging two variables, separate the variables with a comma (,) in the console log e.g. console.log(variable1, variable2);
let firstName = "Holger";
let lastName = "Klose";
console.log(firstName, lastName);
//In javaScript arbeiten wir immer mit camelCase! --> erste Buchstat erstes wort klein, zweites Wort beginnt mit Großbuchstaben

// Make a profile of someone's information. Store all the information in variables eg. name, city, job etc. (five variables total) Console log the variables.

let firstAndLastName = "Steel";
let city = "paris";
let job = "WebDev";
let age = 35;
let sex = "male";
console.log(firstAndLastName, city, job, age, sex);

// Print a sentence using the profile variables above, adding text where necessary for sentence flow, i.e., "John Smith is a 43 year old teacher who lives in Berlin". you can combine variables with text in the console by using the plus symbol (+) e.g. console.log("this is a " + variable);
console.log(
  `My name is ${firstAndLastName} I'm a ${age} years old ${job}, living in ${city}`
);
console.log(
  "My name is" +
    " " +
    firstAndLastName +
    " " +
    "I'm a" +
    " " +
    age +
    " " +
    "years old" +
    " " +
    job +
    ", " +
    "living in" +
    " " +
    city
);
