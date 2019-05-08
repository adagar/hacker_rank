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

const genSubStrings = (s) => {
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let thisSub = s.slice(i, j);
      if (thisSub !== s) {
        substrings.push(thisSub);
      }
    }
  }

  return substrings;
};
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  //first let's generate all substrings
  const substrings = genSubStrings(s);

  //now that we have substrings, determine if each is an anamagram of another
  let countedAnagrams = 0;
  //make all strings sorted fellas
  for (let i = 0; i < substrings.length; i++) {
    substrings[i] = substrings[i]
      .split("")
      .sort()
      .join("");
  }
  //substrings.sort();
  console.log(substrings);
  //then loop through all strings
  for (let i = 0; i < substrings.length; i++) {
    for (let j = i + 1; j < substrings.length; j++) {
      if (substrings[i] === substrings[j]) {
        console.log("Pair at: ", i, j);
        countedAnagrams++;
      }
    }
  }
  console.log(substrings);
  return countedAnagrams;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}
