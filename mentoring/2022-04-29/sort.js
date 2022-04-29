const footballers = [
  { firstName: "Gerd", lastName: "Müller", goals: 365 },
  { firstName: "Sepp", lastName: "Meier", goals: 0 },
  { firstName: "Thomas", lastName: "Müller", goals: 136 },
  { firstName: "Franz", lastName: "Beckenbauer", goals: 44 },
];

const result = footballers.sort((a, b) => {
  return a.goals > b.goals ? 1 : -1;
});

console.log(result);
