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

// Complete the maximumToys function below.
function maximumToys(prices, k) {
  let spent = 0;
  let purchasedToys = 0;
  prices = prices.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; spent < k && i < prices.length; i++) {
    if (prices[i] < k - spent) {
      spent += prices[i];
      purchasedToys++;
    } else {
      return purchasedToys;
    }
  }
  return purchasedToys;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const prices = readLine()
    .split(" ")
    .map((pricesTemp) => parseInt(pricesTemp, 10));

  let result = maximumToys(prices, k);

  ws.write(result + "\n");

  ws.end();
}
