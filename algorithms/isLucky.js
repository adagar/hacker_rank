function isLucky(n) {
  let firstSum = 0;
  let lastSum = 0;
  nArr = (n + "").split("");
  for (let i = 0; i < nArr.length / 2; i++) {
    firstSum += parseInt(nArr[i]);
    lastSum += parseInt(nArr[nArr.length - (1 + i)]);
  }
  console.log(firstSum, lastSum);
  return firstSum === lastSum;
}
