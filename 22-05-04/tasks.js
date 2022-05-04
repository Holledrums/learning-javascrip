// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

const arrowFunc = (arg) => console.log(arg);
arrowFunc(3);
arrowFunc("3");
arrowFunc(true);
console.log("----------------");
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

const calculateFuel = (num) =>
  num * 10 >= 100 ? console.log(num * 10) : console.log(100);
calculateFuel(15);
calculateFuel(23.5);
calculateFuel(3);
console.log("----------------");
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

const points = (x, y) => console.log(x * 2 + y * 3);
points(1, 1);
points(7, 5);
points(38, 8);

// Create a function that takes an array containing only numbers and return the first element.

const getFirstValue = (num) => {
  console.log(num[0]);
};

//Examples
getFirstValue([1, 2, 3]); // ➞ 1

getFirstValue([80, 5, 100]); // ➞ 80

getFirstValue([-500, 0, 50]); // ➞ -500

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

const nextEdge = (x, y) => console.log(x + y - 1);

// Examples
nextEdge(8, 10); // ➞ 17

nextEdge(5, 7); // ➞ 11

nextEdge(9, 2); // ➞ 10
