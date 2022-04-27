// The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipe = {
  title: "Salmon pasta in cream sauce",
  serves: 2,
  ingredients: ["Salmon", "pasta", "cream", "mustard", "dill", "garlic"],
};
console.log(recipe.title);
console.log("Serves: ", recipe.serves);
console.log("Ingrediens:");
for (const index of recipe.ingredients) {
  console.log(index);
}

// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

const bookList = [
  { titel: "Harry Potter", author: "J.K. Rowlin", alreadyRead: true },
  {
    titel: "Sophia der Tod und ich",
    author: "Thees Uhlmann",
    alreadyRead: false,
  },
  { titel: "Sherlok Holmes", author: "Arthur Conan Doyle", alreadyRead: true },
];
console.log("------------");
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

for (const book of bookList) {
  console.log(`${book.titel} by ${book.author}`);
}

console.log("------------");

for (const book of bookList) {
  book.alreadyRead
    ? console.log(`You already read ${book.titel} by ${book.author}`)
    : console.log(`You still need to read ${book.titel} by ${book.author}`);
}
console.log("------------");
//DRY // KISS
for (const book of bookList) {
  console.log(
    book.alreadyRead ? `You already read` : `You still need to read`,
    `${book.titel} by ${book.author}`
  );
}
console.log("------------");

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// Get Names. Create a function that takes an array of objects containing students' names e.g. {name: "John"}, and returns an array of just student names.
// Example:
// getNames([{ name: "Jane" },
//        { name: "Jack" },
//        { name: "John" }
//    ])
// ➞ ["Jane", "Jack", "John"]

const students = [{ name: "Jane" }, { name: "Jack" }, { name: "John" }];
const resultArr = [];
for (const student of students) {
  resultArr.push(student.name);
}
console.log(resultArr);
console.log("------------");

// mit map

const getNames = students.map((student) => student.name);

console.log(getNames);
