const capitalizeFirstLetter = (str) =>
  str
    .toString()
    .split(" ")
    .map((arr) => arr[0].toUpperCase() + arr.slice(1))
    .join(" ");
// {
//   let newString = str.toString().split(" ");
//   for (let i = 0; i < newString.length; i++) {
//     newString[i] =
//       newString[i][0].toUpperCase() + newString[i].substring(1).toLowerCase();
//   }
//   return newString.join(" ");
// };

console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter(true));
