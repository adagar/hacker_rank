const stairCountList = [];

function climbingStairs(n) {
  return countStairs(n + 1);
}

const countStairs = (stairs) => {
  //console.log(stairs);
  if (stairs <= 1) {
    return stairs;
  } else {
    let min2;
    let min1;

    if (stairCountList[stairs - 1]) {
      min1 = stairCountList[stairs - 1];
    } else {
      min1 = countStairs(stairs - 1);
      stairCountList[stairs - 1] = min1;
    }

    if (stairCountList[stairs - 2]) {
      min2 = stairCountList[stairs - 2];
    } else {
      min2 = countStairs(stairs - 2);
      stairCountList[stairs - 2] = min2;
    }

    return min1 + min2;
  }
};
