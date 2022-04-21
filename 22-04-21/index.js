// Object
const obj = {};
const obj2 = new Object();
console.log(typeof obj);
console.log(typeof obj2);

const person = {
  firstName: "Ali",
  lastName: "Steel",
  age: 22,
  act: ["sleep", "eat", "dream"],
  display: () => {},
  print: function () {},
};

person.firstName = "Jack";
person["middleName"] = "Daniels";
person["ageSum"] = () => {};
console.log(person);

const bikes = { number: 5, storage: 3 };
const house = { city: "leipzig", add: "xyz str" };
const myData = Object.assign(bikes, house, { name: "Mike", age: 99 });
console.log(myData);
Object.seal(myData);
console.log(Object.isSealed(myData));
delete myData.name;
console.log(myData);

const objKeys = Object.keys(myData);
console.log(objKeys);

const objValues = Object.values(myData);
console.log(objValues);

const ppl = [
  { name: "Ali", age: 22 },
  { name: "Nancy", age: 25 },
  { name: "Klaus", age: 35 },
  { name: "Gabi", age: 33 },
];

console.log(ppl[1].name);
console.log(ppl[3]["name"]);

// Object.defineProperty()

const userInfoObj = {};

Object.defineProperty(userInfoObj, "name", { value: "Hadi", writable: true });
userInfoObj.add = "Berlin";
console.log(userInfoObj);

// Object.defineProperties()

Object.defineProperties(userInfoObj, {
  lastName: { value: "Nsreeny", writable: true },
  act: { value: ["cooking", "Biking"] },
  bikes: { value: ["Trek Remedy"], writable: false },
});
console.log(userInfoObj.bikes);

// Object.hasOwnProperty()

console.log(userInfoObj.hasOwnProperty("lastName")); // gibt true || false aus
console.log(userInfoObj.hasOwnProperty("age"));

// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

// function, split, Loop, return Obj, counter, {t: 1, r:1, e:2}, if else, hasOwnProperty
// OP1
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

countLetters("tree");

// OP2

function countLetter(str) {
  let resultObj = {};
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let currentChr = arr[i];
    if (resultObj.hasOwnProperty(currentChr)) {
      resultObj[currentChr] += 1;
    } else {
      resultObj[currentChr] = 1;
    }
  }
  return console.log(resultObj);
}

countLetter("Hallo Holle");

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

// function, object, array, loops

data = [
  { signName: "Not real day!", from: "0000" },
  { signName: "Capricorn", from: "0101" },
  { signName: "Aquarius", from: "0120" },
  { signName: "Pisces", from: "0220" },
  { signName: "Aries", from: "0321" },
  { signName: "Taurus", from: "0420" },
  { signName: "Gemini", from: "0521" },
  { signName: "Cancer", from: "0621" },
  { signName: "Leo", from: "0723" },
  { signName: "Virgo", from: "0823" },
  { signName: "Libra", from: "0923" },
  { signName: "Scorpio", from: "1023" },
  { signName: "Sagittarius", from: "1123" },
  { signName: "Capricorn", from: "1222" },
  { signName: "Not real day!", from: "1232" },
];
