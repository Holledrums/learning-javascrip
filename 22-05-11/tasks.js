// Build a class of your washing machine

class WashingMachine {
  constructor(_brand, _id, _energyClass, _program = 13) {
    this.brand = _brand;
    this.program = _program;
    this.id = _id;
    this.energyClass = _energyClass;
  }
  randomProg() {
    this.program = Math.floor(Math.random() * 13) + 1;
  }
  washingProgram() {
    if (this.program <= 2) {
      console.log(`Programm Nr. ${this.program} is for boil wash with 90°`);
    } else if (this.program > 3 && this.program < 9) {
      console.log(
        `Programm Nr. ${this.program} is for regular laundry sorted by color 40° to 60°`
      );
    } else {
      console.log(
        `Programm Nr. ${this.program} is for fine laundry and sportswear 30°`
      );
    }
  }
}

const indesit = new WashingMachine("indesit", 195077190.02, "A++");

console.log(indesit);
indesit.randomProg();
console.log(indesit.program);
indesit.washingProgram();

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

const zodiac = (str) => {
  let arr = str.split("-");
  console.log(arr);
  const result = {
    dd: arr[0],
    mm: arr[1],
    yy: arr[2],
    yourZodiac: function () {
      let monthDay = this.mm + this.dd;
      console.log(monthDay);
      let i = 0;
      while (monthDay >= data[i].from && i < data.length) {
        i++;
      }
      let yourSign = data[i - 1].signName;
      return console.log(`your Zodiac sign is ${yourSign}`);
    },
  };
  const data = [
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
  return result.yourZodiac();
};

zodiac("14-02-2002");
zodiac("04-09-1986");

// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Product(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;
  this.showData = function () {
    return `from item ${this.productName} selling prise ${this.price}€. we have ${this.inventory} in our store`;
  };
}

const pepsiData = new Product("Pepsi", 2.33, 2232);

console.log(pepsiData.showData());

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const newCar = {
  get newCarData() {
    return `Our Car ${this.modelName} with Nr ${this.modelNumber} has ${this.enginCapacity} horsepower.`;
  },
  set newCarData(str) {
    let arr = str.split(" ");
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.enginCapacity = arr[2];
  },
};
// getter
console.log(newCar.newCarData);
console.log("------------");
newCar.newCarData = "VW-UP 458up 54";
console.log(newCar.newCarData);
