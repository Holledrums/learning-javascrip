// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//    Example string : 'Web Development Tutorial'
//    Expected Output : 'Development'

//                   0123456789-------------24
let exampleString = "Web Development Tutorial";
let count1 = exampleString.indexOf(" ");
let count2 = exampleString.indexOf(" ", count1 + 1);
let count3 = exampleString.indexOf(" ", count2 + 1);

console.log(count1, count2, count3);
console.log(exampleString.indexOf(" "));
console.log(exampleString.length);
console.log(exampleString.indexOf(" ", 4));

if (count1 > count2) {
  console.log(exampleString.substring());
}

// beginne zu zählen bis leerzeichen
// beginne mit Zählen ab leerzeichen

// länge der wörter feststellen und vergleichen
// jedes Wort ausschneiden und vergergleichen mit substrring
