function sortByHeight(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      continue;
    }
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] !== -1 && a[i] > a[j]) {
        //swap
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}
