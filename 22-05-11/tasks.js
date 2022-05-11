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
