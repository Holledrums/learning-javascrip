//05.
//Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

// Examples:

// isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
// isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
// isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

const isFourLetters = (str) => {
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].length == 4) {
      newArr.push(str[i]);
    }
  }
  return console.log(newArr);
};

isFourLetters(["John", "James", "Jack", "Jeanne"]);
isFourLetters(["Tomato", "Corn", "Lettuce"]);
isFourLetters(["Dog", "Cat", "Deer"]);

console.log("---------------------------------------");

//06
//Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// Examples:

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

const amplify = (num) => {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 != 0) {
      newArr.push(i);
    } else {
      newArr.push(i * 10);
    }
  }

  return console.log(newArr);
};

amplify(4);
amplify(3);
amplify(25);

console.log("---------------------------------------");

//07
//One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

// Examples:

// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

function unique(num) {
  for (let i = 0; i < num.length; i++) {
    if (num.indexOf(num[i]) == num.lastIndexOf(num[i]))
      return console.log(num[i]);
  }
}
unique([3, 3, 3, 7, 3, 3]);
unique([0, 0, 0.77, 0, 0]);
unique([0, 1, 1, 1, 1, 1, 1, 1]);
console.log("---------------------------------------");

//08.
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// Examples:

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

const hackerSpeak = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "a") {
      newString += 4;
    } else if (string[i] == "e") {
      newString += 3;
    } else if (string[i] == "i") {
      newString += 1;
    } else if (string[i] == "o") {
      newString += 0;
    } else if (string[i] == "s") {
      newString += 5;
    } else {
      newString += string[i];
    }
  }
  return console.log(newString);
};

hackerSpeak("javascript is cool");
hackerSpeak("programming is fun");
hackerSpeak("become a coder");

console.log("---------------------------------------");

//09.
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

// Examples:

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true

const isSymmetrical = (num) => {
  let text = num.toString();
  let newArr = text.split("");

  if (text == newArr.reverse().join("")) {
    return console.log("true");
  } else {
    return console.log("false");
  }
};
isSymmetrical(7227);
isSymmetrical(12567);
isSymmetrical(44444444);
isSymmetrical(9939);
isSymmetrical(1112111);

console.log("---------------------------------------");

//10.
//Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!
// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// removeNumbers("mubashir1") ➞ "mubashir"
// removeNumbers("12ma23tt") ➞ "matt"
// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"

console.log("---------------------------------------");
