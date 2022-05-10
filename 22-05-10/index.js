const obj = {
  name: "Ali",
  age: 22,
  visitedCities: ["Berlin", "LA", "London", "Paris"],
  showInfo: function () {
    return `I'm ${this.name}, I have been in ${this.visitedCities}`;
  },
};
let objName = obj.name;
console.log(obj.name);
console.log(obj.age);

console.log(obj.visitedCities);
// Destructuring objects as function parameters
function funObj(obj) {
  let firstName = obj.name; // op1
  console.log(firstName);
}
funObj({ name: "Nancy", tel: 2324455 });
const ppl = [
  {
    firstName: "Anna",
    age: 22,
    add: "Berlin",
    avatar: "😎",
    likes: 222,
    comments: 232,
  },
  {
    firstName: "Uli",
    age: 22,
    add: "LA",
    avatar: "😈",
    likes: 222,
    comments: 765,
  },
  {
    firstName: "Leo",
    age: 22,
    add: "Berlin",
    avatar: "😉",
    likes: 2,
    comments: 7,
  },
  {
    firstName: "Nancy",
    age: 22,
    add: "LA",
    avatar: "😇",
    likes: 4566,
    comments: 456,
  },
  {
    firstName: "Ali",
    age: 22,
    add: "LA",
    avatar: "😀",
    likes: 3,
    comments: 232,
  },
  {
    firstName: "Steel",
    age: 22,
    add: "Amsterdam",
    avatar: "😅",
    likes: 5,
    comments: 43,
  },
  {
    firstName: "Olga",
    age: 22,
    add: "NY",
    avatar: "🤓",
    likes: 54,
    comments: 43,
  },
  {
    firstName: "Zain",
    age: 22,
    add: "Dubai",
    avatar: "🫣",
    likes: 678,
    comments: 654,
  },
];
// const newPPlCopy = ppl.map((person) =>
const newPPlCopy = ppl.map(
  ({ firstName, age, add, avatar, likes, comments }) => {
    // let name = person.firstName;
    // let age = person.age;
    console.log(`
    -------------------------------------
    |this person ${firstName} ${avatar}  
    |lives in ${add}   
    |👍🏻: ${likes}    📝: ${comments}              
    ------------------------------------
    `);
  }
);

const userCarData = {
  year: 2020,
  model: "A7",
  speed: 250,
  price: 75000,
  get fullCarName() {
    if (this.model == undefined || this.price < 5000) {
      return `This data is not ready`;
    }
    return `Our Car ${this.model} price : ${this.price}€`;
  },
};

console.log(userCarData.fullCarName);

// getter

// setter

// constructor our own
