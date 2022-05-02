const myNumbers = [3, 6, 9, 45, 82, 1];

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i];
}
console.log(sum);
const sum2 = myNumbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum2);

const itemsList = [
  { title: "Phone", category: "electronics", price: 80, size: 20 },
  { title: "Notebook", category: "electronics", price: 139, size: 85 },
  { title: "Tomato", category: "food", price: 120, size: 18 },
];

const sum3 = itemsList.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
console.log(`${sum3}€`);

const sumCategory = itemsList.reduce((acc, cur) => {
  return acc + (cur.category === "electronics" ? cur.price : 0);
}, 0);

console.log(`${sumCategory}€`);

const sumObj = itemsList.reduce(
  (acc, cur) => {
    return { ...acc, [cur.category]: acc[cur.category] + cur.price };
  },
  { electronics: 0, food: 0 }
);

console.log(sumObj);
