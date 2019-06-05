function allLongestStrings(inputArray) {
  let longest = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length;
    }
  }
  return inputArray.filter(word => {
    return word.length === longest;
  });
}
