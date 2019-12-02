const { inputArray } = require("./input");


const fuelCalculator = n => Math.floor(n / 3) - 2;

const fuelOffsetCalculator = value => {
  const LOWEST_OFFEST_VALUE = 9;
  const totalFuel = fuelCalculator(value);
  let fuelOffset = [totalFuel];
  let latestFuelOffset = totalFuel;
  
  while (latestFuelOffset >= LOWEST_OFFEST_VALUE) {
    const result = fuelCalculator(latestFuelOffset);
    fuelOffset.push(result);
    latestFuelOffset = result;
  }
  
  return fuelOffset.reduce((sum, value) => sum += value, 0);

}

const totalFuelCalculator = inputArray =>
  inputArray.reduce((sum, value) => (sum += fuelOffsetCalculator(value)), 0);

module.exports = { fuelCalculator, totalFuelCalculator, fuelOffsetCalculator };


// console.log(totalFuelCalculator(inputArray));