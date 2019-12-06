const { plotLine, findCrossOverPoints, calculateDistance, fewestSteps } = require ("./calculateDistance");
const { expect } = require("chai")

describe('plotLine', () => {
  it('increases x-coordinate if moved right', () => {
    expect(plotLine(["R1"])).to.eql(["[1,0]"]);
  });
  it('decreases x-coordinate if moved left', () => {
    expect(plotLine(["L1"])).to.eql(["[-1,0]"]);
  });
  it('increases x-coordinate if moved right', () => {
    expect(plotLine(["U1"])).to.eql(["[0,1]"]);
  });
  it('decreases x-coordinate if moved left', () => {
    expect(plotLine(["D1"])).to.eql(["[0,-1]"]);
  });
  it('should handle multiple coordinates', () => {
    expect(plotLine(["D1", "R1"])).to.eql(["[0,-1]", "[1,-1]"]);
  });
  it('should handle multiple increments in any direction', () => {
    expect(plotLine(["D2", "R1"])).to.eql(["[0,-1]", "[0,-2]", "[1,-2]"]);
  });
});

describe('findCrossOverPoints', () => {
  it('expect ["R8","U5","L5","D3"] and  ["U7","R6","D4","L4"] to equal 6', () => {
    expect(findCrossOverPoints(["R8","U5","L5","D3"], ["U7","R6","D4","L4"])).to.eql([ '[6,5]', '[3,3]' ] )
  });
});

describe('calculateDistance', () => {
  it('expect ["R8","U5","L5","D3"] and  ["U7","R6","D4","L4"] to equal 6', () => {
    expect(calculateDistance(["R8","U5","L5","D3"], ["U7","R6","D4","L4"])).to.equal(6)
  });
});

describe('fewestSteps', () => {
  it('expect fes steps for ["R8","U5","L5","D3"] and ["U7","R6","D4","L4"] to equal 30', () => {
    expect(fewestSteps(["R8","U5","L5","D3"], ["U7","R6","D4","L4"])).to.equal(30)
  });
});

