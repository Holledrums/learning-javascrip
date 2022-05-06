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

const mainNav = () => {};
