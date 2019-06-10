function commonCharacterCount(s1, s2) {
  let count = 0;
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");

  for (let i = 0; i < s1Arr.length; i++) {
    const charLocation = s2Arr.indexOf(s1Arr[i]);
    if (charLocation >= 0) {
      count++;
      s2Arr.splice(charLocation, 1);
    }
  }

  return count;
}
