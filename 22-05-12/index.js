class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printData() {
    return console.log(`Hey ${this.name} you are ${this.age} years old`);
  }
}

const steelObj = new Person("steel", 34);
console.log(steelObj);
//Kinder
class Kind extends Person {
  constructor(name, age, height = 50) {
    super(name, age);
    this.height = height;
  }
}

class KindUndKind extends Kind {
  constructor(name, age, height, color) {
    super(name, age, height);
    this.color = color;
  }
}

const zainBabyObj = new Kind("Zain", 1, 75);

// convert Array int object

const phoneNames = ["iphone", "Samsung", "GooglePhone", "Nokia", "LGPhone"];
const phonePrises = [1150, 1253, 999, 100, 699];
const result = phoneNames.reduce((acc, item, i) => {
  acc[item] = phonePrises[i];
  return acc;
}, {});
console.log(result);

// Hour Tracking

const workingTime = [
  { day: "Mon", start: 8, end: 17 },
  { day: "Tue", start: 9, end: 16 },
  { day: "Wed", start: 9, end: 16 },
  { day: "Thur", start: 8, end: 17 },
  { day: "Fri", start: 8, end: 18 },
];

const workingHour = workingTime.reduce((acc, day) => {
  return (acc += day.end - day.start);
}, 0);

console.log(workingHour);

const studyTime = [
  { day: "Mon", start: 9, end: 16, practice: 1 },
  { day: "Tue", start: 9, end: 16, practice: 0 },
  { day: "Wed", start: 9, end: 16, practice: 1 },
  { day: "Thur", start: 9, end: 16, practice: 0 },
  { day: "Fri", start: 9, end: 16, practice: 1 },
  { day: "sat", start: 0, end: 0, practice: 2 },
  { day: "Sun", start: 0, end: 0, practice: 2 },
];
const studyHour = studyTime.reduce((acc, day) => {
  return (acc += day.end - day.start + day.practice);
}, 0);

console.log(studyHour);
