const fs = require("fs");
const { EOL } = require("os");

function read(nameFile) {
  const file = fs.readFileSync(`${__dirname}/${nameFile}`, "utf-8");
  //console.log(file);
  const allFieldsStr = file.trim().split(EOL); // завернули в массив
  // console.log(allFieldsStr);
  const allRows = [];
  for (let el of allFieldsStr) {
    // проходимся по каждому судоку
    for (let i = 0; i < el.length; i += 9) {
      allRows.push(el.slice(i, i + 9));
    }
  }
  // console.log(allRows);

  const allFields = [];
  for (let i = 0; i < allRows.length; i += 9) {
    allFields.push(allRows.slice(i, i + 9));
  }

  // console.log(allFields);

  for (let i = 0; i < allFields.length; i++) {
    for (let j = 0; j < allFields[i].length; j++) {
      allFields[i][j] = allFields[i][j].split("");
    }
  }
  // console.log(allFields);
  return allFields;
}

function solve(arr, numFild) {
  const Field = arr[numFild];
  return Field;
}

function searchEl(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "-") {
        const values = posValues(arr, i, j);
        // console.log(values[0], values);
        arr[i][j] = values[0];
      }
    }
  }
  return arr;
}

function posValues(arr, x, y) {
  const elements = [];
  for (let el of arr[x]) {
    if (el === "-") continue;
    elements.push(el);
  }
  // console.log(elements, 1111);
  for (let i = 7; i < arr.length; i++) {
    if (arr[i][y] === "-") continue;
    elements.push(arr[i][y]);
  }
  const posVal = [];
  for (let i = 0; i < 10; i++) {
    if (elements.includes(`${i}`)) continue;
    posVal.push(`${i}`);
  }
  //console.log(posVal);
  return posVal;
}

console.table(searchEl(solve(read("puzzles.txt"), 0)));

