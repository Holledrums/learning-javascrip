// let const var
let lastName = ""; // Es6 2015
var global = "I'm global"; // ist veralteter code und sollte nicht mehr verwendet werden

// const
const birthday = "04.09.1986";
// DRY
// String
//             0123456789
let longStr = "Hi, I'm Holle. I'm 35 year old.";
console.log(longStr.length); //23
let shortStr = longStr.substring(4, 14); // start , ende
console.log(shortStr);
console.log(longStr);
console.log(typeof longStr);
console.log(longStr.toUpperCase());
console.log(longStr.toLowerCase());
let firstHi = longStr.substring(0, 2).toUpperCase();
console.log(firstHi);
let restOfStr = longStr.substring(4).toLocaleLowerCase();
console.log(restOfStr);
console.log(firstHi, restOfStr);

// Holger holger HolGer holgeR
let myName = "holGer";
// let firstNameChr = myName[0];
// console.log(firstNameChr);
// let restString = myName.substring(1);
// console.log(restString);
// firstNameChr = firstNameChr.toUpperCase();
// restString = restString.toLowerCase();
// console.log(firstNameChr + restString);

myName = myName[0].toUpperCase() + myName.substring(1).toLowerCase();
console.log(myName);

let longString = "Hi, this ist FBw D05 with Hadi";
let isHadi = longString.toLowerCase().includes("hadi"); // ja oder nein
console.log(isHadi);

let email = "holgeraliusklose@gmail.com";
let at = email.includes("@");
console.log(at);

let strExtraOne = "I can walk in the park all day";
console.log(strExtraOne.substring(18, 22));

let helloStr = "Hello World";
console.log(helloStr.toUpperCase());

let earth = "Earthlings";
console.log(earth.toLowerCase());

//        0123456789
let js = "JavaScript";
console.log(js.substring(3, 6));

let nice = "nice shoes";
console.log(nice.includes("l"));

//create a new string from a given string

let JavaScript = "JavaScript";
let firstJavaChr = JavaScript[0];
console.log(firstJavaChr);
console.log(firstJavaChr + JavaScript + firstJavaChr);

let myAge = 35;
let myJob = "webdev";
let avatar = "lol";
console.log(`
Hey ${avatar}
---------------
| I'm ${myName}  |
| I'm ${myAge}      |
| years old   |
---------------
likes comments share`);

// + - =
console.log(1 + 1);
let herFirstName = "     nancy     ";
let herLastName = "olga";
//trimEnd()
//trimStart()
//trim()
console.log(herFirstName.trimEnd() + " " + herLastName.trim());

// + - =
let strOne = "hi";
let strTwo = "I live in Berlin";

let longStrOneAndTwo = strOne + " " + strTwo + " " + "and i like the Summer";
console.log(longStrOneAndTwo);

strOne += " I also like Winter";
console.log(strOne);

// num = num -2
let num = 22;
num -= 2; // 20
console.log(num);
// num = num -1
num--; //19
console.log(num);
// num = num + 1
num++; // 20
console.log(num);

// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt

let jsTwo = "JavaScript";
let lastThreeChr = jsTwo.substring(jsTwo.length - 3); //hardcode
console.log(lastThreeChr);
console.log(lastThreeChr + jsTwo + lastThreeChr);

//Übung
// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".

let myFirstName = "Holger";
let myCity = "Leipzig";
//let myJob = "WebDev";
console.log(
  `My name is ${myFirstName}. I live in ${myCity} and I become a ${myJob}.`
);

// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

//myName = myName[0].toUpperCase() + myName.substring(1).toLowerCase();
//console.log(myName);

let fox = "the quick brown fox";
fox = fox[0].toUpperCase() + fox.substring(1).toLowerCase();
console.log(fox);

// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
// DRY
// KISS - Keep It Supper Simpel
let boo = "BoogieWoogie";
let firstChr = boo[0];
let endChr = boo[boo.length - 1];
let finishedBoo = boo.substring(1, boo.length - 1);
console.log(firstChr);
console.log(endChr);
console.log(finishedBoo);
console.log(endChr + finishedBoo + firstChr);
