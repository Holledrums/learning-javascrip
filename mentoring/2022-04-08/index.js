// Higher order Function

const numbers = [9, 3, 1, 34, 10];

const result1 = numbers.sort();

// sort ohne Parameter sortiert alphabetisch! Bei numerischen werten ist das meistens nicht das was man möchte.

console.log("Result: ", result1); // ergebnis [ 1, 10, 3, 34, 9 ]

const result2 = numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log("result 2: ", result2);

// klassische schreibweise

function compareNum(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

// als Arrow function

const compareNumArrow = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

// sort aufrufen und compare function als Parameter übergeben

const result3 = numbers.sort(compareNumArrow);

console.log("result 3", result3);

// inline mit Ternary-Operator

const result4 = numbers.sort((a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
});
console.log("result 4: ", result4);

// sort mit verschieden Kriterien auf komplexen Datentypen (array objekten)

const friends = [
  { name: "Karl", age: 34 },
  { name: "Anna", age: 32 },
  { name: "Fred", age: 36 },
  { name: "Johanna", age: 24 },
];

const compareByeAge = (a, b) => {
  return a.age > b.age ? 1 : a.age < b.age ? -1 : 0;
};
const compareByeName = (a, b) => {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
};

const result5 = friends.sort(compareByeAge);
console.log("result 5: ", result5);

const result6 = friends.sort(compareByeName);
console.log("result 5: ", result6);
