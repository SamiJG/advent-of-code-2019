const { inputArray, inputArray2 } = require("./input");

const plotLine = inputArray => {
  let coordinates = [];
  let currentPosition = [0, 0];
  inputArray.forEach(vector => {
    const direction = vector[0];
    const momentum = vector.slice(1);
    let newPosition;
    switch (direction) {
      case "R":
        for (let i = 1; i <= momentum; i++) {
          currentPosition[0]++;
          newPosition = JSON.stringify(currentPosition);
          coordinates.push(newPosition);
        }
        break;
      case "L":
        for (let i = 1; i <= momentum; i++) {
          currentPosition[0]--;
          newPosition = JSON.stringify(currentPosition);
          coordinates.push(newPosition);
        }
        break;
      case "U":
        for (let i = 1; i <= momentum; i++) {
          currentPosition[1]++;
          newPosition = JSON.stringify(currentPosition);
          coordinates.push(newPosition);
        }
        break;
      case "D":
        for (let i = 1; i <= momentum; i++) {
          currentPosition[1]--;
          newPosition = JSON.stringify(currentPosition);
          coordinates.push(newPosition);
        }
        break;
      default:
        break;
    }
  });

  return coordinates;
};

const findCrossOverPoints = (inputArray, inputArray2) => {
  const wireOne = plotLine(inputArray);
  const wireTwo = plotLine(inputArray2);
  let crossOverPoints = [];
  for (let i = 0; i < wireOne.length; i++) {
    const coordinate = wireOne[i];
    if (wireTwo.includes(coordinate)) {
      crossOverPoints.push(coordinate);
    }
  }
  return crossOverPoints;
};

const calculateDistance = (inputArray, inputArray2) => {
  let crossOverPoints = findCrossOverPoints(inputArray, inputArray2);
  let manhattenDistances = crossOverPoints.map(coordinate => {
    const [x, y] = JSON.parse(coordinate);
    return Math.abs(x) + Math.abs(y);
  });

  return Math.min(...manhattenDistances);
};

const fewestSteps = (inputArray, inputArray2) => {
  let crossOverPoints = findCrossOverPoints(inputArray, inputArray2);
  const wireOne = plotLine(inputArray);
  const wireTwo = plotLine(inputArray2);

  let stepsTaken = [];

  crossOverPoints.forEach(coordinate => {
    const stepsWireOne = wireOne.indexOf(coordinate) + 1;
    const stepsWireTwo = wireTwo.indexOf(coordinate) + 1;
    const totalSteps = stepsWireOne + stepsWireTwo;
    stepsTaken.push(totalSteps)
  })
  return Math.min(...stepsTaken)
};

module.exports = {
  plotLine,
  findCrossOverPoints,
  calculateDistance,
  fewestSteps
};

// console.log(fewestSteps(inputArray, inputArray2));
