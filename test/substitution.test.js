const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("error handling", () => {
        it("should return false if no alphabet arg is passed in", () => {
            const actual = substitution("thinkful");

            expect(actual).to.be.false;
        });
        it("should return false if alphabet arg has a length other than 26", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibevsgsgsg");

            expect(actual).to.be.false;
        });
        it("should return false if alphabet arg has repeating characters", () => {
            const actual = substitution("thinkful", "xoxqmqgrukswaflnthdjpzibev");

            expect(actual).to.be.false;
        });
    })
    describe("encoding messages", () => {
        it("should translate a single word by using the provided substituion alphabet", () => {
            const expected = "jrufscpw";
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

            expect(actual).to.equal(expected);
        });
        it("should translate a message using the provided substituion alphabet and preserve spaces", () => {
            const expected = "jrufscpw jrufscpw";
            const actual = substitution("thinkful thinkful", "xoyqmcgrukswaflnthdjpzibev");

            expect(actual).to.equal(expected);
        });
        it("should translate special characters of a message using the provided substituion alphabet", () => {
            const expected = "yp ysii$rs";
            const actual = substitution("my message", "$waeszrdxtfcygvuhbijnokmpl");

            expect(actual).to.equal(expected);
        });

    })
    describe("decoding messages", () => {
        it("should decode a single word by using the provided substituion alphabet", () => {
            const expected = "thinkful";
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);

            expect(actual).to.equal(expected);
        });
        it("should decode a message using the provided substituion alphabet and preserve spaces", () => {
            const expected = "thinkful thinkful";
            const actual = substitution("jrufscpw jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);

            expect(actual).to.equal(expected);
        });
        it("should decode special characters of a message using the provided substituion alphabet", () => {
            const expected = "my message";
            const actual = substitution("yp ysii$rs", "$waeszrdxtfcygvuhbijnokmpl", false);

            expect(actual).to.equal(expected);
        });
    })
})
