// classes in JS
// Recursion

// example "Fakultaät" (engl. factorial)
// 6! = 6 * 5 * 4 * 3 * 2 * 1

const factorial = (x) => {
  if (x == 1) return 1;

  return x * factorial(x - 1);
};

console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(65));

console.log("-----------------");

const countDown = (x) => {
  if (x < 0) return; // Bedingung für den Abbruch
  console.log(x);
  countDown(x - 1);
};

countDown(10);
console.log("-----------------");
