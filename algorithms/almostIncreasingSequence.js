function almostIncreasingSequence(sequence) {
  let firstFreebieUsed = false;
  for (let i = 0; i < sequence.length + 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      if (firstFreebieUsed) {
        return false;
      }
      if (sequence[i] >= sequence[i + 2]) {
        sequence.splice(i, 1);
        i -= 2;
      } else {
        sequence.splice(i + 1, 1);
        i--;
      }
      firstFreebieUsed = true;
    }
  }
  return true;
}
