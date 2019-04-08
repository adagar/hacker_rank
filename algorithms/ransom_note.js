"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  //console.log(magazine, note);
  for (let i = 0; i < note.length; i++) {
    let word = note[i];
    let found = false;
    for (let j = 0; j < magazine.length; j++) {
      //console.log(word, magazine[j]);
      if (word === magazine[j]) {
        magazine.splice(j, 1);
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

function main() {
  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const magazine = readLine().split(" ");

  const note = readLine().split(" ");

  checkMagazine(magazine, note);
}
