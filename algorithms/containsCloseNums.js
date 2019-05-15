function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length && j <= i + k; j++) {
      //console.log(`Is ${nums[i]} a match for ${nums[j]}`);
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
