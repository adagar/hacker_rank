function isCryptSolution(crypt, solution) {
  //I'd prefer to work with an obj so a quick function to convert
  const solutionObject = convertArrayToObject(solution);
  let expectedSum = 0;
  let actualSum = 0;

  const cryptIntVal_0 = convertWordToValue(crypt[0], solutionObject);
  const cryptIntVal_1 = convertWordToValue(crypt[1], solutionObject);
  const cryptIntVal_2 = convertWordToValue(crypt[2], solutionObject);
  console.log([cryptIntVal_0, cryptIntVal_1, cryptIntVal_2]);
  if (
    !validEquation([cryptIntVal_0, cryptIntVal_1, cryptIntVal_2]) ||
    parseInt(cryptIntVal_0) + parseInt(cryptIntVal_1) !==
      parseInt(cryptIntVal_2)
  ) {
    return false;
  }
  return true;
}

const validEquation = cryptIntegers => {
  for (let i = 0; i < cryptIntegers.length; i++) {
    if (cryptIntegers[i][0] === "0" && cryptIntegers[i].length > 1) {
      return false;
    }
  }
  return true;
};
const convertArrayToObject = arrayContent => {
  let newObj = {};
  for (let i = 0; i < arrayContent.length; i++) {
    newObj[arrayContent[i][0]] = arrayContent[i][1];
  }
  return newObj;
};

const convertWordToValue = (word, key) => {
  const wordArr = word.split("");
  let numList = "";
  for (let i = 0; i < wordArr.length; i++) {
    numList += key[wordArr[i]];
  }
  return numList;
};
