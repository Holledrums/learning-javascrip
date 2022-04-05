// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.
// i.e. findVowels("this is a string") ➞ 4

// function(str) // let vowelsArr = [a, e, i,o,u]

function findVowels(str) {
  let numVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str.toLowerCase()[i])) {
      numVowels += 1;
    }
  }
  console.log(numVowels);
}
findVowels("this is a string");
findVowels("dAnke SAlem für deine Hilfe");

// No Duplicates!

// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function creatNewArr(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
}

creatNewArr([1, 4, 4, 7, 7, 7]);
creatNewArr([1, 6, 6, 9, 9]);
creatNewArr([2, 2, 2, 2, 2, 2]);
creatNewArr([5, 10, 15, 20, 25]);

// is Palindrome AKA word that reads the same backward or forward.

// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

// isPalindrom function argument str, true / false array reverse()

const isPalindrome = (str) =>
  str.toLowerCase() == str.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("lagerregal"));
console.log(isPalindrome("Hadi"));
console.log(isPalindrome("tarrattarrat"));

// This question has 2 parts

// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:

// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
