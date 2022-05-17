// Clones vs. References
let x = 5;
let val = x;
// console.log(val);
val = 333;
console.log(x);
const obj = {
  id: 22,
};
let ref = obj;
ref.id = 55;
console.log(obj.id);

const names = ["nancy", "zain", "Steel"];
let arrRef = names; //ref
names.push("jack");
console.log(arrRef);

// Primitive  (Simple values are always clones)
// String, Number, Boolean

// Cloning Array using:
// Method 1
const newArrSpresd = [...names]; // clone

// Method 2
const newArrMap = names.map((ele) => ele); // clone

// Method 3
const newArrSlice = names.slice(0); // clone

// Method 4
const newArrConcat = [].concat(0); // clone

//
// copy von einem Object
const car = {
  brandName: "audi",
  modelYears: 2022,
  colors: ["red", "silver", "white"],
  op: {
    leatherFinish: true,
    dash: "wood",
  },
};

// Shallow clone for an object using ... --> nur mit primitiven Values möglich
const objShallowClone = { ...car }; // keine komplette copie
console.log(objShallowClone);
console.log("-----------");
objShallowClone.brandName = "bmw"; // ändert nicht das original object car
objShallowClone.colors.push("blue"); // ändert das original object car
objShallowClone.op.dash = "old Wood"; // ändert das original object car
console.log(objShallowClone);
console.log("-----------");
console.log(car);
//  Recursion
const fact = (num) => {
  //stop
  if (num == 1) {
    return 1;
  }
  // 7 *6 *=5 *=4 *=3 *=2 *=2 *=1
  return num * fact(num - 1);
};

console.log(fact(7));

// Deep copy using recursion 🤨
function deepClone(val) {
  //array
  if (Array.isArray(val)) {
    return val.map(deepClone);
  }
  // Object
  if (typeof val == "object") {
    return Object.keys(val)
      .map((key) => {
        return { [key]: deepClone(val[key]) };
      })
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  }
  // all other val
  return val;
}

const newCarDeepClone = deepClone(car);
newCarDeepClone.op.dash = "cool wood";
console.log(car);
