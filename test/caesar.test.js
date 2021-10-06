const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if there is no shift or shift is 0", () => {
    const actualMissing = caesar("Shift is missing");
    expect(actualMissing).to.be.false;
    const actualZero = caesar("Shift is 0", 0);
    expect(actualZero).to.be.false;
    const actualLess = caesar("Shift is < -25", -35);
    expect(actualLess).to.be.false;
    const actualGreater = caesar("Shift is > 25", 35);
    expect(actualGreater).to.be.false;
  });
  it("should return a new string from single-word input", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });
  it("sshould return a new string from the input and ignore spaces", () => {
    const expected = "bpqa qa i amkzmb umaaiom";
    const actual = caesar("this is a secret message", 8);
    expect(actual).to.equal(expected);
  });
  it("should return a new string from the input and ignore non-alphabetic symbols", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("this is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should return a new string from the input with a negative shift value", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const expected = "thinkful";
    const actual = caesar("qefkhcri", -3, false);
    expect(actual).to.equal(expected);
  });
});
