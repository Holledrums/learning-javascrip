// reduce
// old school style
const numbersArray = [3, 5, 8];
let acc = 0;
for (let i = 0; i < numbersArray.length; i++) {
  let cur = numbersArray[i];
  acc = acc + cur;
}
console.log(acc);

// New Style
const resultSum = numbersArray.reduce((acc, cur) => acc + cur);
console.log(resultSum);
console.log("------------");
// create a function that returns an object has following output, try this one in advance array methods

function countLetters(str) {
  let resultObj = {};
  for (let i = 0; i < str.length; i++) {
    let currentChr = str[i];
    if (resultObj.hasOwnProperty(currentChr)) {
      resultObj[currentChr] += 1;
    } else {
      resultObj[currentChr] = 1;
    }
  }
  return console.log(resultObj);
}
countLetters("tree and sun");
console.log("------------------");
//examples
//ABC - > {A: 1, B:1, C: 1} QQQ -> {Q:3}
//tree -> {t: 1, r: 1, e: 2}

const countLetter = (str) => {
  const arr = str.split("");
  const result = arr.reduce((box, cur) => {
    box[cur] = box[cur] ? box[cur] + 1 : 1;
    return box;
  }, {});
  return result;
};

console.log(countLetter("ABC"));
console.log("----------------");

const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
// Scrabble OLDSCHOOL : array -> loop, function, counter +=
function sumOfTheScrabble(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].score;
  }
  return result;
}
console.log(sumOfTheScrabble(scrabble));

// Scrabble NEWSCHOOL
const sumOfScore = (arr) => arr.reduce((result, cur) => result + cur.score, 0);
console.log(sumOfScore(scrabble));

// map

// filter
