function sumOfTwo(a, b, v) {
  bSorted = b.sort((a, b) => {
    return a - b;
  });
  //aSorted = a.sort((a, b) => {return a - b});
  for (let i = 0; i < a.length; i++) {
    let min = 0;
    let max = bSorted.length - 1;
    const seekValue = v - a[i];

    while (min <= max) {
      const guess = Math.floor((max + min) / 2);
      if (bSorted[guess] > seekValue) {
        max = guess - 1;
      } else if (bSorted[guess] < seekValue) {
        min = guess + 1;
      } else {
        return true;
      }
    }
  }
  return false;
}

/*
const binSearch = (arr, val) => {
    //console.log(arr);
    const min = 0;
    const max = arr.length - 1;
    const guess = Math.floor(max / 2);
    
    if(arr[guess] === val){
        return true;
    } else if(arr.length <= 1){ //our search comes up and fails
        return false;
    } else{
        if(arr[guess] > val){
            return binSearch(arr.slice(0, guess - 1), val);
        } else{
            return binSearch(arr.slice(guess + 1), val);
        }
    }
}
*/
