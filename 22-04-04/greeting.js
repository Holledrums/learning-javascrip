// write a function that greet you

const userData = process.argv.splice(2);
function greet(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Hey ${name[i]}`);
  }
}

greet(userData);
