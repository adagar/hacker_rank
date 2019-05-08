function isCryptSolution(crypt, solution) {
  //I'd prefer to work with an obj so a quick function to convert
  const solutionObject = convertArrayToObject(solution);
  //console.log(solutionObject);
  let expectedSum = 0;
  let actualSum = 0;

  const cryptIntVal_0 = convertWordToValue(crypt[0], solutionObject);
  console.log("Crypt int value 1: ", cryptIntVal_0);
  const cryptIntVal_1 = convertWordToValue(crypt[1], solutionObject);
  console.log(cryptIntVal_1);
  const cryptIntVal_2 = convertWordToValue(crypt[2], solutionObject);
  console.log(cryptIntVal_2);

  if (
    cryptIntVal_0[0] === "0" ||
    cryptIntVal_1[0] === "0" ||
    cryptIntVal_2[0] === "0" ||
    parseInt(cryptIntVal_0) + parseInt(cryptIntVal_1) !==
      parseInt(cryptIntVal_2)
  ) {
    return false;
  }
  return true;
}

const convertArrayToObject = arrayContent => {
  let newObj = {};
  for (let i = 0; i < arrayContent.length; i++) {
    newObj[arrayContent[i][0]] = arrayContent[i][1];
  }
  return newObj;
};

const convertWordToValue = (word, key) => {
  console.log(word);
  const wordArr = word.split("");
  console.log(wordArr);
  let numList = "";
  for (let i = 0; i < wordArr; i++) {
    numList += key.wordArr[i];
  }
  return numList;
};
