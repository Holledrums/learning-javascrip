// .filter()

const footballers = [
  { firstName: "Gerd", lastName: "Müller" },
  { firstName: "Sepp", lastName: "Meier" },
  { firstName: "Thomas", lastName: "Müller" },
  { firstName: "Franz", lastName: "Beckenbauer" },
];
// vergleich find()
console.log("-------find()-------");
const result = footballers.find(
  (footballer) => footballer.lastName === "Müller"
);
console.log(result);
console.log("-------FILTER()-------");

const result2 = footballers.filter(
  (footballer) => footballer.lastName === "Müller"
);
console.log(result2);
