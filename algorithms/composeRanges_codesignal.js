function composeRanges(nums) {
  let start;
  let end;
  let ranges = [];
  for (let i = 0; i < nums.length; i++) {
    if (start === undefined) {
      start = nums[i];
    }
    if (nums[i + 1] - nums[i] === 1) {
      continue;
    } else {
      end = nums[i];
      const newRange = new range(start, end);
      ranges.push(newRange);
      start = nums[i + 1];
    }
  }
  console.log(ranges);
  let rangeArr = [];
  for (let i = 0; i < ranges.length; i++) {
    rangeArr.push(ranges[i].print());
  }
  return rangeArr;
}

class range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print() {
    if (this.start !== this.end) {
      return `${this.start}->${this.end}`;
    } else {
      return `${this.end}`;
    }
  }
}
