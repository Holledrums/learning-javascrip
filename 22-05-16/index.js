// Closures, SIAF, Constructor und noch mehr
// Closure
// function return other function
function outerFunction(num) {
  function innerFunction() {
    return num * 10;
  }

  return innerFunction();
}

console.log(outerFunction(2));

function priceCheck(num) {
  const discount = () => (num * 5) / 100;

  return `if you pay ${num}€, you earn a discount of ${discount()}€`;
}

console.log(priceCheck(50));

// destructuring objects as function paramneters
// OP 1
const printFunction = (obj) => {
  let name = obj.name;
  // name = "someone";

  let firstName = "Hadi"; //
  firstName = "steel";
  let age = obj.age;
  console.log(name, age);
};

printFunction({ name: "steel", age: 22 });

// OP 2
const printFunction2 = ({ name, age }) => {
  console.log(name, age);
};

printFunction2({ name: "Holger", age: 35, hight: 172, add: "Leipzig" });

const ppl = [
  { name: "Hadi", age: 25 },
  { name: "Nancy", age: 30 },
  { name: "Kathrin", age: 32 },
  { name: "Dennis", age: 18 },
  { name: "Holger", age: 35 },
];
const newInfo = ppl.map(({ name, age }) => name);
console.log(newInfo);
// SIAF
// self-invoked function Expression => eine funktion die keinen namen hat und sich selber aufruft

(function (num1, num2) {
  console.log(num1 + num2);
})(2, 4);

// IIFE
// Imidiatly Invoked function expression
const sum = ((x, y) => x + y)(4, 5);
console.log("sum", typeof sum);

// cunstructor function

function AnimalsKrank(name, age, sickType) {
  this.name = name;
  this.age = age;
  this.sickType = sickType;
  this.display = function () {
    return console.log(`${this.name} has ${this.sickType}, gute besserung`);
  };
}

const dog = new AnimalsKrank("Pfiffi", 7, "Kopfschmerzen");
console.log(dog);
dog.display();
