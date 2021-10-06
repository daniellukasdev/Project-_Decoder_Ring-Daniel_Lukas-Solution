const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("encoding messages", () => {
    it("should translate each letter of a single word message into number pairs", () => {
      const expected = "4432423352125413";
      const actual = polybius("thinkful");

      expect(actual).to.equal(expected);
    });
    it("should translate each letter of a phrase into number pairs and leave spaces unchanged", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("hello world");

      expect(actual).to.equal(expected);
    });
    it("should translate each letter of a phrase into number pairs and ignore character case", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello World");

      expect(actual).to.equal(expected);
    });
    it("should translate each letter of a phrase into number pairs and translate both i and j to 42", () => {
      const expected = "42424242";
      const actual = polybius("ijij");

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding messages", () => {
    it("should decode a single-worded message by translating each pair of numbers into a letter", () => {
      const expected = "hello";
      const actual = polybius("3251131343", false);

      expect(actual).to.equal(expected);
    });
    it("should decode a message with spaces and leave the spaces unchanged", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);

        expect(actual).to.equal(expected);
    })
    it("should decode a message containing 42 and translate it to (i/j)", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);

        expect(actual).to.equal(expected);
    })
    it("should return false if the numbers in the message has an odd ammount", () => {
        const expected = false;
        const actual = polybius("443242335212541", false);

        expect(actual).to.equal(expected);
    })
  });
});
