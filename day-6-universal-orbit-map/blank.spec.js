const {
  findOrbitedIndex,
  generateLineageObject,
  numberOfOrbits,
  numberOfTransfers
} = require("./blank");
const { expect } = require("chai");

const TEST_INPUT = [
  "COM)B",
  "B)C",
  "D)E",
  "E)F",
  "C)D",
  "B)G",
  "G)H",
  "D)I",
  "E)J",
  "J)K",
  "K)L"
];

const TEST_INPUT_2 = [
  "COM)B",
  "B)C",
  "D)E",
  "E)F",
  "C)D",
  "B)G",
  "G)H",
  "D)I",
  "E)J",
  "J)K",
  "K)L",
  "K)YOU",
  "I)SAN"
];

describe("findOrbitedIndex", () => {
  it("returns an array", () => {
    expect(findOrbitedIndex([], "")).to.be.an("array");
  });
  it("find index of orbited mass", () => {
    expect(findOrbitedIndex(TEST_INPUT, "COM")).to.eql([0]);
    expect(findOrbitedIndex(TEST_INPUT, "J")).to.eql([9]);
  });
  it("find index of multiple orbited masses", () => {
    expect(findOrbitedIndex(TEST_INPUT, "B")).to.eql([1, 5]);
    expect(findOrbitedIndex(TEST_INPUT, "E")).to.eql([3, 8]);
  });
});

describe("generateLineageObject", () => {
  it("returns an object", () => {
    expect(generateLineageObject(TEST_INPUT)).to.be.an("object");
  });
  it("array of orbits for COM is empty", () => {
    expect(generateLineageObject(TEST_INPUT).COM).to.eql([]);
  });
  it("array of orbits for B contains just COM", () => {
    expect(generateLineageObject(TEST_INPUT).B).to.eql(["COM"]);
  });
  it("array of orbits for C contains COM and B", () => {
    expect(generateLineageObject(TEST_INPUT).C).to.eql(["COM", "B"]);
  });
  it("array of orbits for D contains COM and B and C", () => {
    expect(generateLineageObject(TEST_INPUT).D).to.eql(["COM", "B", "C"]);
  });
  it("works for multiple indexs", () => {
    expect(generateLineageObject(TEST_INPUT).G).to.eql(["COM", "B"]);
  });
  it("works for multiple indexs", () => {
    expect(generateLineageObject(TEST_INPUT).E).to.eql(["COM", "B", "C", "D"]);
  });
  it("works for multiple indexs", () => {
    expect(generateLineageObject(TEST_INPUT).L).to.eql([
      "COM",
      "B",
      "C",
      "D",
      "E",
      "J",
      "K"
    ]);
  });
  it("works for multiple indexs", () => {
    expect(Object.keys(generateLineageObject(TEST_INPUT))).to.have.members([
      "COM",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L"
    ]);
  });
});

describe("numberOfOrbits", () => {
  it("returns number of orbital transfers", () => {
    expect(numberOfTransfers(TEST_INPUT_2)).to.equal(4);
  });
});
