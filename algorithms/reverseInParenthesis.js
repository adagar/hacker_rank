function reverseInParentheses(inputString) {
  let stack = [[]];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      stack.push([]);
    } else if (inputString[i] === ")") {
      stack[stack.length - 1].reverse();
      stack[stack.length - 2].push(...stack[stack.length - 1]);
      stack.pop();
    } else {
      stack[stack.length - 1].push(inputString[i]);
    }
  }

  return stack[0].join("");
}
