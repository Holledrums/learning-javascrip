// overview from  yester day

let x = 4;
console.log(1 == 2 ? "yeah" : "nope");
console.log(5 % 2);
if (1 > 5 || 1 == 1) {
  //true
  console.log("Cool let's go");
} else {
  //false
  console.log("nope, Sorry");
}

//BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

let myFirstName = "Holger";
let myAge = 35;

if (myAge < 13) {
  console.log(myFirstName + " is a Child");
} else if (myAge >= 13 && myAge < 20) {
  console.log(myFirstName + " is a Teenager");
} else if (myAge >= 20 && myAge < 30) {
  console.log(myFirstName + " is a young adult");
} else {
  console.log(myFirstName + " is a adult");
}

// DRY + KISS

if (myAge < 13) {
  console.log(`${myFirstName} is child`);
} else if (myAge >= 13 && myAge < 20) {
  console.log(`${myFirstName} is Teenager`);
} else if (myAge > 20 && myAge < 30) {
  console.log(`${myFirstName} is young adult`);
} else {
  console.log(`${myFirstName} is adult`);
}

// Math in JavaScript

// is NaN is Not a Number

console.log(isNaN("h"));

// Convert String into Number
// parseInt()
console.log("200");
console.log(parseInt("200a111")); // stoppt ab dem ersten Buchstaben
console.log(parseInt("Hadi 1234 is cool")); // NaN wenn es nicht mit Nummer beginnt

// dezimalsystem (10)
// 0123456789

// binär system (2)
// 0 | 1 0000 = 0 0001 = 1 0011 = 2 0111 = 3 1111 = 4
