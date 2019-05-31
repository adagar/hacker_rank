function adjacentElementsProduct(inputArray) {
  let largest = null;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (largest === null || product > largest) {
      largest = product;
    }
  }
  return largest;
}
