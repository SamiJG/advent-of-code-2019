const {
  isPossiblePassword,
  isPossiblePasswordPart2,
  possiblePasswords
} = require("./possiblePasswords");
const { expect } = require("chai");

describe("possiblePasswords", () => {
  it("returns an number", () => {
    expect(possiblePasswords()).to.be.a("number");
  });
});

describe("isPossiblePassword", () => {
  it("returns a boolean", () => {
    expect(isPossiblePassword(111111)).to.be.a("boolean");
  });
  it("returns true if password in range 273025 - 767253", () => {
    expect(isPossiblePassword(345677)).to.equal(true);
    expect(isPossiblePassword(277777)).to.equal(true);
    expect(isPossiblePassword(666666)).to.equal(true);
  });
  it("returns false if password NOT in range 273025 - 767253", () => {
    expect(isPossiblePassword(245678)).to.equal(false);
    expect(isPossiblePassword(777777)).to.equal(false);
  });
  it("returns false if password has no consecutive numbers", () => {
    expect(isPossiblePassword(345678)).to.equal(false);
  });
  it("returns true if password has at least 2 consecutive numbers", () => {
    expect(isPossiblePassword(333333)).to.equal(true);
    expect(isPossiblePassword(345677)).to.equal(true);
  });
  it("returns false if digits in password decrease", () => {
    expect(isPossiblePassword(335878)).to.equal(false);
  }); 
  it("returns true if digits in password inecrease", () => {
    expect(isPossiblePassword(345688)).to.equal(true);
  });
});

describe("isPossiblePasswordPart2", () => {
  it("returns a boolean", () => {
    expect(isPossiblePasswordPart2(111111)).to.be.a("boolean");
  });
  it("returns true if password in range 273025 - 767253", () => {
    expect(isPossiblePasswordPart2(345677)).to.equal(true);
    expect(isPossiblePasswordPart2(277788)).to.equal(true);
    expect(isPossiblePasswordPart2(666677)).to.equal(true);
  });
  it("returns false if password NOT in range 273025 - 767253", () => {
    expect(isPossiblePasswordPart2(245678)).to.equal(false);
    expect(isPossiblePasswordPart2(777777)).to.equal(false);
  });
  it("returns false if password has no consecutive numbers", () => {
    expect(isPossiblePasswordPart2(345678)).to.equal(false);
  });
  it("returns false if password doesn't have 2 consecutive numbers exactly", () => {
    expect(isPossiblePasswordPart2(444444)).to.equal(false);
  });
  it("returns true if password has 2 consecutive numbers exactly", () => {
    expect(isPossiblePasswordPart2(345677)).to.equal(true);
  });
  it("returns false if digits in password decrease", () => {
    expect(isPossiblePasswordPart2(335878)).to.equal(false);
  });
  it("returns true if digits in password inecrease", () => {
    expect(isPossiblePasswordPart2(345688)).to.equal(true);
  });
});
