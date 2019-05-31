function checkPalindrome(inputString) {
  const inputStringArr = inputString.split("");
  for (let i = 0; i < inputStringArr.length / 2; i++) {
    if (inputStringArr[i] !== inputStringArr[inputStringArr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}
