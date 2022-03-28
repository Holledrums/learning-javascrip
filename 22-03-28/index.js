// Wdh
// if else
// parseInt() -> wandelt String in number (aber nur wenn Zahl am anfang vom string)
console.log(parseInt("0100", 2));
// isNaN() -> is not a number - gibt true/false wenn wert eine Zahle / keine Zahl ist

// ++ -- += -= /= *=
let x = 4;
x *= 5;
console.log(x);

// Math && Numbers

// Math object

// Math.floor() --> rundet immer nach unten
console.log("Math");
console.log(Math.floor(22.999));

// Math.ceil() --> rundet immer noch oben
console.log(Math.ceil(22.000000011119));

// Math.round() Rundet nach den geltenden Mathe regeln
console.log(Math.round(22.546)); // 23
console.log(Math.round(22.156)); // 22

// Math.max()
let num1 = parseInt(2);
let num2 = parseInt("16");
let num3 = parseInt(6);

console.log("Max", Math.max(num1, num2, num3)); // 44

// Math.min()

console.log("Min", Math.min(num1, num2, num3)); // 2

// Math.random() - Ausgabe einer Zufälligen Zahl
console.log(Math.floor(Math.random() * 6) + 1); // 1 - 6

// toFixed() gibt an wieviele nachkommastellen wir haben
let num4 = Math.PI;
console.log(num4.toFixed(2));

let num5 = "1.25e+4";
console.log(parseFloat(num5));

let alpha = "ABCDEFGHIJKLMNOPQRST";
console.log(alpha[Math.floor(Math.random() * alpha.length)]);

// loops - Schleife, wiederholung ab bestimmten punkt bis eine Bedingung erfüllt ist
// for Schleife
// for (Start ; condition ; Increment) {
// was soll passieren
// }
// i == index
// for (let i=0; i<=10 && ; i=i+1)
// for (let i=0; i<=10 && ; i+= 1)
for (let i = 0; i <= 10; i++) {
  console.log("i now is", i);
}
console.log("cool");

for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 2 = ${i * 2}`);
}

let str = "";
for (let i = 0; i <= 10; i++) {
  str += `Nice ${i}, `;
}
console.log(str);

for (let i = 10; i <= 100; ) {
  console.log(i);
  i += 2;
}
console.log("--------");
// 100 200 300 400 500 600 700 800 900 1000
for (let i = 1; i <= 10; i++) {
  console.log(`${i * 100}`);
}

let str1 = "";
for (let i = 100; i <= 1000; ) {
  str1 += `${i} `;
  i += 100;
}
console.log(str1);
// 1 1 1 2 2 2 3 3 3 4 4 4
let str2 = "";
for (let i = 1; i <= 4; i++) {
  str2 += `${i} ${i} ${i} `;
}
console.log(str2);

// 0 2 4 6 8 10

let str3 = "";
for (let i = 0; i <= 10; ) {
  str3 += `${i} `;
  i += 2;
}
console.log(str3);

let str4 = "";
for (let i = 3; i <= 15; ) {
  str4 += `${i} `;
  i += 3;
}
console.log(str4);

// ------------------------

// Schleife innerhalb einer Schleife // Nested Loops

for (let i = 0; i <= 10; i++) {
  console.log("nice");
  for (let j = 0; j <= 10; j++) {
    console.log("something");
  }
}

for (let i = 1; i <= 10; i++) {
  // i=1
  for (j = 1; j <= 10; j++) {
    //  j=2
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("----------");
}

//0 1 2 3 0 1 2 3 0 1 2 3
let str5 = "";
for (i = 1; i <= 3; i++) {
  for (j = 0; j <= 3; j++) {
    str5 += `${j} `;
  }
}
console.log(str5);
// 1 1 1 |2 2 2| 3 3 3| 4 4 4| 5 5 5

let str6 = "";
for (i = 1; i <= 5; i++) {
  for (j = 0; j <= 2; j++) {
    str6 += `${i} `;
  }
}
console.log(str6);

// +
// ++
// +++
// ++++

let str7 = "";
for (i = 1; i <= 4; i++) {
  str7 += "+";
  console.log(str7);
}

for (i = 4; i >= 1; i--) {
  let stern = "";
  for (j = 1; j <= i; j++) {
    stern += "*";
  }
  console.log(stern);
}
