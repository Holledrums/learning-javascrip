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
