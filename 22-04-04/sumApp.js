function sum(x, y) {
  return console.log(x + y);
}

const userData = process.argv.slice(2);
console.log(userData);

sum(parseInt(userData[0]), parseInt(userData[1]));
