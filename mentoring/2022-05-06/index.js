// recursive Funktion

// countdown
console.log("-------------countDown-------------");
function countDown(num) {
  let nextNum = num - 1;
  console.log(num);
  if (nextNum > 0) {
    countDown(nextNum);
  } else if (nextNum == 0) {
    console.log("happy new year!!");
  }
}
countDown(3);
console.log("----------MainNAv----------");

const mainNavTree = [
  {
    title: "Home",
  },
  {
    title: "Folder",
    children: [
      {
        title: "Item1",
      },
      {
        title: "Item2",
      },
      {
        title: "Subfolder1",
        children: [
          {
            title: "Subitem1",
          },
          {
            title: "Subitem2",
          },
        ],
      },
    ],
  },
  {
    title: "Something else",
  },
];

// 1. aufruf mit dem Hauptnav
// 2. iterieren über einträge
// 3. wenn der eintrag keine Kinder hat => ausgabe
// 4. wenn der eintrag kinder hat, ausgabe + recursiver aufruf der Funktion mit den Kindern als argument

const mainNav = (arr, level = 0) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("\t".repeat(level), `=> ${arr[i].title} \n`);
    if (arr[i].hasOwnProperty("children")) {
      mainNav(arr[i].children, level + 1);
    }
  }
};
mainNav(mainNavTree);
