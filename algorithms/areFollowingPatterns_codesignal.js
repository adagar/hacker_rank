function areFollowingPatterns(strings, patterns) {
  let patternKey = {};
  for (let i = 0; i < patterns.length; i++) {
    if (patternKey.hasOwnProperty(patterns[i])) {
      if (patternKey[patterns[i]] === strings[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      //check if this has already been entered in another value
      const keyList = Object.keys(patternKey);
      //console.log(keyList);
      for (let j = 0; j < keyList.length; j++) {
        //console.log(`Checking if ${strings[i]} has already been entered.`);
        if (patternKey[keyList[j]] === strings[i]) {
          return false;
        }
      }
      patternKey[patterns[i]] = strings[i];
    }
  }
  return true;
}
