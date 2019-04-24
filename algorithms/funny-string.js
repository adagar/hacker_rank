"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the funnyString function below.
function funnyString(s) {
  let r = s
    .split("")
    .reverse()
    .join("");
  let sAsciiVals = [];
  let rAsciiVals = [];
  for (let i = 0; i < s.length; i++) {
    sAsciiVals.push(s.charCodeAt(i));
    rAsciiVals.push(r.charCodeAt(i));
  }

  let sDiff = [];
  let rDiff = [];
  for (let i = 0; i < s.length - 1; i++) {
    sDiff.push(Math.abs(sAsciiVals[i] - sAsciiVals[i + 1]));
    rDiff.push(Math.abs(rAsciiVals[i] - rAsciiVals[i + 1]));
  }

  for (let i = 0; i < sDiff.length; i++) {
    if (sDiff[i] !== rDiff[i]) {
      return "Not Funny";
    }
  }
  return "Funny";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = funnyString(s);

    ws.write(result + "\n");
  }

  ws.end();
}
