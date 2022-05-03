const foods = [
  { name: "Kebab", price: 12 },
  { name: "humus", price: 3 },
  { name: "falafel", price: 5 },
  { name: "Schawarma", price: 8 },
];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i].name, foods[i].price);
}

console.log("-------------------------");

// for of --> für Arrays
for (const element of foods) {
  console.log(element.name, element.price);
}

console.log("-------------------------");

// for in --> für Objects

for (const element in foods) {
  console.log(foods[element].name, foods[element].price);
}

/* Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
 * Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 * Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' */

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

for (const book of bookList) {
  console.log(`${book.titel} by ${book.author}`);
}

console.log("------------");

for (const book of bookList) {
  console.log(
    book.alreadyRead ? `You already read` : `You still need to read`,
    `${book.titel} by ${book.author}`
  );
}
console.log("------------");
