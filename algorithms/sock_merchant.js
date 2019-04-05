"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
/*
function sockMerchant(n, ar) {
    let counter = 0;
    for(let i = 1; i < ar.length; i++)
        {
            for(let j = 0; j < i; j++)
                {
                    if(ar[i] == ar[j] && ar[i] >= 0)
                        {
                            counter++;
                            ar[j] = ar[j] * -1;
                            ar[i] *= -1;
                        }
                }
        }
        return counter;
}
*/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let pairs = 0;
  while (ar.length > 0) {
    let seekingSock = ar.shift();
    for (let i = 0; i < ar.length; i++) {
      if (seekingSock === ar[i]) {
        ar.splice(i, 1);
        pairs++;
        //need a break here or else it clears out EVERY matching fella for this sock
        break;
      }
    }
  }
  return pairs;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
