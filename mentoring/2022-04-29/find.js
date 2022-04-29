// wiederholung higher Array function

// .find()
console.log("---------.find()----------");
const myNumbers = [1, 3, 8, 9, 2, 5, 6];
// finde das erste Element mit dem wert 2
const result1 = myNumbers.find((number) => number === 2);
console.log(result1);
// finde das erste Element, welches genau 1 größer ist als sein vorgänger
const result2 = myNumbers.find((number, index) => {
  if (index === 0) return false;
  return myNumbers[index - 1] + 1 === number;
});
console.log(result2); // ergebnis 9

const customers = [
  { firstName: "Gerd", lastName: "Müller" },
  { firstName: "Sepp", lastName: "Meier" },
];

const result3 = customers.find((customer) => customer.firstName === "Sepp");
console.log(result3);
