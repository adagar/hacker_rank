hasPathWithGivenSum = (t, s) => {
  if (!t) return s === 0; //if there isn't a tree, just check if we're NOT supposed to even have a sum
  return traverse(t, s);
};

const traverse = (t, s) => {
  //we've been counting down S on values, so if this is a leaf, and the right amount is remaining, we're good!
  if (t.left === null && t.right === null && t.value === s) {
    return true;
  }
  //knock down value by what we've traversed on this branch
  s = s - t.value;
  //check the paths going forward
  return (
    (!!t.left && !!traverse(t.left, s)) || (!!t.right && !!traverse(t.right, s))
  );
};
