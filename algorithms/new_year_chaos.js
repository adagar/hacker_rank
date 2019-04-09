"use strict";

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let count = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    //so I'm at position i + 1 but I should be at position q[i]. So I must have been bribed
    let me = q[i];
    //console.log(me);
    if (me - i > 3) {
      console.log("Too chaotic");
      return;
    }
    for (let j = me - 2; j < i; j++) {
      let them = q[j];
      let diff = them - me;
      //console.log(diff);
      if (them > me) {
        count++;
      }
    }
  }
  console.log(count);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(" ")
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
