const { inputArray } = require("./input");

const intcode = inputArray => {
  for (let i = 0; i < inputArray.length; i += 4) {
    const valueOne = inputArray[inputArray[i + 1]];
    const valueTwo = inputArray[inputArray[i + 2]];
    const replacedIndex = inputArray[i + 3];

    switch (inputArray[i]) {
      case 1:
        inputArray[replacedIndex] = valueOne + valueTwo;
        break;

      case 2:
        inputArray[replacedIndex] = valueOne * valueTwo;
        break;

      case 99:
        return inputArray;
      default:
        break;
    }
  }
  return inputArray;
};

module.exports = { intcode };

// console.log(intcode(inputArray));
