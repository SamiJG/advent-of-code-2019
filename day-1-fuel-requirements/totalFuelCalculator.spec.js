const { fuelCalculator, totalFuelCalculator, fuelOffsetCalculator } = require("./totalFuelCalculator");
const { expect } = require("chai");

describe("fuelCalculator", () => {
  it("for mass of 12, returns 2", () => {
    expect(fuelCalculator(12)).to.equal(2);
  });
  it("for mass of 14, returns 2", () => {
    expect(fuelCalculator(14)).to.equal(2);
  });
  it("for mass of 1969, returns 654", () => {
    expect(fuelCalculator(1969)).to.equal(654);
  });
  it("for mass of 100756, returns 33583", () => {
    expect(fuelCalculator(100756)).to.equal(33583);
  });
});

describe("fuelOffsetCalculator", () => {
  it("for mass of 14, returns 2", () => {
    expect(fuelOffsetCalculator(14)).to.equal(2);
  });
  it("for mass of 1969, returns 654", () => {
    expect(fuelOffsetCalculator(1969)).to.equal(966);
  });
  it("for mass of 100756, returns 33583", () => {
    expect(fuelOffsetCalculator(100756)).to.equal(50346);
  });
});

describe("totalFuelCalculator", () => {
  it("for mass of 10, returns 1", () => {
    expect(totalFuelCalculator([10])).to.equal(1);
  });
  it("for masses of 12 and 14, returns 4", () => {
    expect(totalFuelCalculator([12, 14])).to.equal(4);
  });
  it("for masses of 12, 14 and 1969, returns 658", () => {
    expect(totalFuelCalculator([12, 14, 1969])).to.equal(970);
  });
});