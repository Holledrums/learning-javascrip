// WDHG

// Constructerfunction, erstellt ein Object für uns und ist ein Blueprint für ein Template was wir immer wieder verwenden können

function Person(name, age, add) {
  this.firstName = name;
  this.age = age;
  this.add = add;
  this.showData = function () {
    return `this is me ${this.name}, I'm ${this.age} Years old.`;
  };
}

const holleData = new Person("Holle", 36, "Leipzig");

console.log(holleData.showData());

// Classes in JavaScript

class Animals {
  //constructor methode aka setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
    //    this.print = function(){}; // wird nur selten hier gemacht
  }
  //instances properties after constructor
  display() {
    return `This animal ${this.kind} lives in ${this.hometown}`;
  }
}
const cat = new Animals("cat", "Leipzig");
const dog = new Animals("dog", "berlin");

console.log(cat.display());
console.log(dog.kind, cat.kind);
console.log(typeof Animals);

class Color {
  constructor() {
    this.name = "";
    this.tem = 0;
  }
  darkness = 0;
}

const red = new Color();
console.log(red);
red.name = "RED";
red.tem = 332;
console.log(red);
const orange = new Color();
orange.name = "ORANGE";
console.log(orange);

//tv-App

class Tv {
  constructor(brand, channel, volume = 10) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  inVolume() {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log("this is too loud");
    }
  }
  decVolume() {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("mute");
    }
  }
  rest() {
    this.channel = 1;
    this.volume = 10;
  }
  randomChannel() {
    this.channel = Math.floor(Math.random() * 50) + 1;
  }
  info() {
    return `This ${this.brand} TV, has channel ${this.channel} on right now. the volume is currently at ${this.volume}`;
  }
}

const samsung = new Tv("samsung", 50, 20);
console.log(samsung);
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.decVolume();
samsung.decVolume();
samsung.decVolume();
samsung.decVolume();
samsung.randomChannel();
console.log(samsung);
const lg = new Tv("LG", 80);
console.log(lg.brand);
console.log(lg.info());

// extends && super

// test
