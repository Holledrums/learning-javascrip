//Variablennamen: camelCase (Konvention) erster Buchstabe klein, folgende Wörter beginnen mitgroßbuchstaben (keine leerzeichen)
let numChildren = 2;
let userAge = 48;

if (userAge > 50 && numChildren > 0)
  console.log(
    "ganz schön anstrengend mit Kindern, du bist schon ganz schönn alt !"
  );

if (numChildren !== 10) {
  console.log("wow! das sind echt viele!1!!11!!elf!!");
  console.log("sie haben nicht genug kinder");
}

let userHasChildren = numChildren > 0;
console.log("userHasChildren: " + userHasChildren);
console.log(typeof userHasChildren);
console.log(typeof numChildren);

if (userHasChildren) {
  console.log("Sie haben " + numChildren + " kinder");
} else {
  console.log("Sie haben keine Kinder");
}
