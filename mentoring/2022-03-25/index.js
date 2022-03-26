// Einfache Funktion  mit return
// return gibt das Ergebnis der Funktion an das aufrufende Programm zurück
// mit return "verlassen" wir die Funktion alles was (innerhalb der Funktion) danach geschrieben wird wird ausgegraut dargestellt und führt zu einem Bug (Fehler)
// hier wird die Funtion nur "deklariert", aber noch nicht aufgerufen
// eine Funktion wird mit "argumenten" aufgerufen (hier num1 num2)
// die namen der argumente können wir frei wählen
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

let sum = add(4, 5);
console.log("4 + 5 = ", sum);
console.log("2 + 9 = ", add(2, 9));

function substract(num1, num2) {
  const result = num1 - num2;
  return result;
}

console.log("10 - 5 = ", substract(10, 5));

// Math.random
console.log("Zufallswert zwischen 0 und 1 ", Math.random());

function getRandomInt(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  const random = Math.random();
  const range = max - min + 1;
  const randomRange = random * range;
  const floorRandomRange = Math.floor(randomRange);
  const result = floorRandomRange + min;

  return result;
}

let result = getRandomInt(5, 10);
console.log(result);

// Emojis
