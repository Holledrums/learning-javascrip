// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// gesucht: function calculateDogAge (dogAge) factor *7 loop
// output "Your doggie is NN years old in dog years!"
// überprüfe die function mit drei unterschiedlien angaben

function calculateDogAge(dogAge) {
  console.log(`Your doggie is ${dogAge * 7} years old in human years!`);
  console.log(`Your human is ${7 / dogAge} years old in doggi years!`);
}

calculateDogAge(5, 3);
calculateDogAge(8);
calculateDogAge(9);
console.log("------------------------");

// ------------------------
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

//ges:
//function calculateSupply (age, perDay)
// const ageMax 80 years time 356 day
// log "You will need NN to last you until the ripe old age of X"

function calculateSupply(age, perDay) {
  let ageMax = 80;
  let supply = (ageMax - age) * 365 * perDay;
  return console.log(
    `You will need ${supply} to last you until the ripe old age of ${ageMax}`
  );
}

calculateSupply(30, 3);
calculateSupply(36, 2);
calculateSupply(54, 5);

console.log("------------------------");

// ------------------------
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// function celsiusToFahrenheit // fahrenheitToCelsius
// variable in Celsius Umrechnung °F = °C * 1,8 + 32 // °C = (°F - 32) * 5/9

function celsiusToFahrenheit(celsius) {
  let tempF = celsius * 1.8 + 32;
  console.log(`${celsius}°C is ${tempF.toFixed(2)}°F`);
}

celsiusToFahrenheit(25);
celsiusToFahrenheit(-275);
celsiusToFahrenheit(0);

console.log("--------------");

function fahrenheitToCelsius(fahrenheit) {
  let tempC = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F is ${tempC.toFixed(2)}°C`);
}
fahrenheitToCelsius(0);
fahrenheitToCelsius(75);
fahrenheitToCelsius(-463);
console.log("--------------");

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments

function tellFortune(city, job, kids, married) {
  console.log(
    `You will be a ${job} in ${city}, and married to ${married} with ${kids} kids.`
  );
}

tellFortune("Leipzig", "WebDev", "2", "none");
tellFortune("hamburg", "Hartz IV", "5", "Sandy");
tellFortune("Bangladesh", "Öl-Scheich", "3", "Fatima");

console.log("--------------");

// ------------------------
//  Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// use the following chrList
//let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// suchen einen String // function // random Characters Loop

function passwortGen() {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let passwort = "";
  let passwortLaenge = 8;
  for (i = 0; i < passwortLaenge; i++) {
    passwort += charList[Math.floor(Math.random() * charList.length)];
  }
  console.log(passwort);
}
passwortGen();
console.log("---------------");
// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
