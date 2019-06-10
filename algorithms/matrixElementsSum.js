function matrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let floor = matrix[i];
    for (let j = 0; j < floor.length; j++) {
      //top floor? no problem!
      if (i === 0) {
        sum += floor[j];
      }
      //check if any floors above is haunted
      else {
        let haunted = false;
        for (let k = i - 1; k >= 0; k--) {
          if (matrix[k][j] === 0) {
            haunted = true;
            break;
          }
        }
        if (!haunted) {
          sum += floor[j];
        }
      }
    }
  }
  return sum;
}
