function containsDuplicates(a) {
  var set = new Set();
  for (var num of a) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}
