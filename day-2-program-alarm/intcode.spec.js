const { intcode } = require("./intcode");
const { expect } = require("chai");

describe("intcode", () => {
  it("if hit 99 code exits program and returns result", () => {
    expect(intcode([99])).to.eql([99]);
  });
  it("if hits 1 opcode adds correct positions and return in correct position", () => {
    expect(intcode([1, 0, 0, 0, 99])).to.eql([2, 0, 0, 0, 99]);
  });
  it("if hits 2 opcode adds correct positions and return in correct position", () => {
    expect(intcode([2, 3, 0, 3, 99])).to.eql([2, 3, 0, 6, 99]);
  });
  it("2,4,4,5,99,0 becomes 2,4,4,5,99,9801", () => {
    expect(intcode([2, 4, 4, 5, 99, 0])).to.eql([2, 4, 4, 5, 99, 9801]);
  });
  it("1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99", () => {
    expect(intcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).to.eql([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ]);
  });
  it("99,1,1,4,99,5,6,0,99 does not change", () => {
    expect(intcode([99, 1, 1, 4, 1, 5, 6, 0, 99])).to.eql([
      99,
      1,
      1,
      4,
      1,
      5,
      6,
      0,
      99
    ]);
  });
  it("1,9,10,3,2,3,11,0,99,30,40,50 becomes 3500,9,10,70,2,3,11,0,99,30,40,50", () => {
    expect(intcode([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).to.eql([
      3500,
      9,
      10,
      70,
      2,
      3,
      11,
      0,
      99,
      30,
      40,
      50
    ]);
  });
});
