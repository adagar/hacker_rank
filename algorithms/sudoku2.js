function sudoku2(grid) {
  for (let i = 0; i < 9; i++) {
    if (
      checkDupes(genArr(grid, 1, 9, 0, i)) &&
      checkDupes(genArr(grid, 9, 1, i, 0))
    ) {
      continue;
    } else {
      return false;
    }
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      console.log(genArr(grid, 3, 3, i, j));
      if (checkDupes(genArr(grid, 3, 3, i, j))) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

const genArr = (arr, height, width, startX, startY) => {
  let tempArr = [];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      tempArr.push(arr[i + startX][j + startY]);
    }
  }
  return tempArr;
};

const checkDupes = (arr) => {
  let counted = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ".") {
      if (counted.hasOwnProperty(arr[i])) {
        return false;
      } else {
        counted[arr[i]] = true;
      }
    }
  }
  return true;
};
