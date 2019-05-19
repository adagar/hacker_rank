function sumInRange(nums, queries) {
  let sum = 0;
  const prefixSumsArr = prefixSums(nums);
  for (let i = 0; i < queries.length; i++) {
    let prefixSumDiff =
      prefixSumsArr[queries[i][1] + 1] - prefixSumsArr[queries[i][0]];
    sum += prefixSumDiff;
  }
  let mod = 10 ** 9 + 7;
  return ((sum % mod) + mod) % mod;
}

const prefixSums = (arr) => {
  //console.log(arr);
  let prefixSumsArr = [0];
  for (let i = 1; i < arr.length + 1; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += arr[j];
    }
    prefixSumsArr.push(sum);
  }
  //console.log(prefixSumsArr);
  return prefixSumsArr;
};
