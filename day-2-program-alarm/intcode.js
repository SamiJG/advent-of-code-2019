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

const calculateNounAndVerb = (inputArray, expectedOutput) => {
  const newInputArray = [...inputArray];
  newInputArray[1] = 1;
  const outputBaseCase = intcode(inputArray)[0];
  const outputPlusOneNoun = intcode(newInputArray)[0];

  const nounMultiplier = outputPlusOneNoun - outputBaseCase;

  const noun = Math.floor((expectedOutput - outputBaseCase) / nounMultiplier);

  const verb = expectedOutput - outputBaseCase - noun * nounMultiplier;

  return `${noun}${verb}`;
};

module.exports = { intcode, calculateNounAndVerb };

// console.log(intcode(inputArray)[0]);
// console.log(calculateNounAndVerb(inputArray, 19690720))
