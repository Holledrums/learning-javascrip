// Advanced Array methods

const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const discounts = [22, 3, 45, 6];
// map
// Have 4 toDos
// 1. method
// 2. callBack
// 3. loop
// 4. make a copy for the original array

const emojiCopy = emojis.map((element, index) => {
  return `Hi ${element} ${index}`;
});
console.log(emojiCopy);

const copyDiscounts = discounts.map((ele) => (ele * 10) / 100);
console.log(copyDiscounts);

const users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
const greeting = users.map((user) => {
  return {
    text: `Hey ${user.name}, you are awesome ${user.age} years old.`,
  };
});
console.log(greeting);

// filter -> nimmt array und gibt array aus

const filteredEmoji = emojis.filter((emoji) => {
  return emoji == "😎"; // mit filter können wir die Value nicht ändern, wenn es etwas nicht gibt wird ein lehres array ausgegeben
});
console.log(filteredEmoji);

const words = ["this", "is", "longText", "somethingLong", "at"];
const filteredWords = words.filter((word) => word.length == 2);
console.log(filteredWords);

const jobs = [
  { title: "teacher", salary: 1500, location: "Amsterdam", remote: true },
  { title: "IT", salary: 2400, location: "LA", remote: true },
  { title: "Web developer", salary: 1800, location: "London", remote: false },
];

const filteredJob = jobs.filter(
  (job) => job.salary >= 2000 || job.location == "Amsterdam"
);
console.log(filteredJob);

// reduce
const itemList = [
  { title: "quad lock", price: 80 },
  { title: "NikeAir", price: 139 },
  { title: "Ringlicht", price: 25 },
];
const totalCost = itemList.reduce((acc, item) => acc + item.price, 0);
console.log(`You have to pay: ${totalCost}€`);
// fill
const arr = [1, 2, 5, 3, 9];
console.log(arr.fill("🤓", 2, 3));

// sort // UTF-16 code
// method
// kann Callback sein (optional)
// kann auch 2 parameter anbieten
const sortedArr = arr.sort();
console.log(sortedArr);
const alpha = ["a", "c", "b", "A", ":"].sort();
console.log(alpha);
console.log(
  arr.sort((a, b) => a - b),
  alpha.sort((a, b) => b + a)
);

// forEach

// find

// some

// every
