const fs = require("fs");
const { EOL } = require("os");

function read(nameFile) {
  const text = fs.readFileSync(`${__dirname}/${nameFile}`, "utf-8");
  const string = text.trim().split(EOL);
  const mainarr = [];
  for (let elem of string) {
    for (let i = 0; i < elem.length; i += 9) {
      mainarr.push(elem.slice(i, i + 9)); // по 9 элементов ряду
    }
  }
  //console.log(mainarr);
  const arrstr = [];
  for (let i = 0; i < mainarr.length; i += 9) {
    arrstr.push(mainarr.slice(i, i + 9));
  }

  for (let i = 0; i < arrstr.length; i++) {
    for (let j = 0; j < arrstr[i].length; j++) {
      arrstr[i][j] = arrstr[i][j].split("");
    }
  }
  //console.log(arrstr);
  return arrstr;
}
// const readFile = read("puzzles.txt");
// console.log(readFile);
//----------------------------------------------------------------------------------------
function solve(arr, fildSudoku) {
  const field = arr[fildSudoku];
  return field;
}

//----------------------------------------------------------------------------------------

function posValues(arr, x, y) {
  const elements = [];
  for (let el of arr[x]) {
    if (el === "-") continue;
    elements.push(el);
  }
  console.log(elements);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][y] === "-") continue;
    elements.push(arr[i][y]);
  }
  const posVal = [];
  for (let i = 1; i < 10; i++) {
    if (elements.includes(`${i}`)) continue;
    posVal.push(`${i}`);
  }
  //console.log(posVal);
  return posVal;
}

console.table(solve(read("puzzles.txt"), 0));
