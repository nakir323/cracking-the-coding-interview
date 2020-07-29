const isPermutationOfPalindrome = require("./index").isPermutationOfPalindrome;
const isPermutationOfPalindrome2 = require("./index").isPermutationOfPalindrome2;

describe("Test isPermutationOfPalindrome method", function () {
  it("'Tact Coa' is true", function () {
    expect(isPermutationOfPalindrome("Tact Coa")).toBeTrue();
  });

  it("'zbyz' is false", function () {
    expect(isPermutationOfPalindrome("zbyz")).toBeFalse();
  });

  it("'a' is true", function () {
    expect(isPermutationOfPalindrome("a")).toBeTrue();
  });

  it("'' is false", function () {
    expect(isPermutationOfPalindrome("")).toBeFalse();
  });
});

describe("Test isPermutationOfPalindrome2 method", function () {
  it("'Tact Coa' is true", function () {
    expect(isPermutationOfPalindrome2("Tact Coa")).toBeTrue();
  });

  it("'zbyz' is false", function () {
    expect(isPermutationOfPalindrome2("zbyz")).toBeFalse();
  });

  it("'a' is true", function () {
    expect(isPermutationOfPalindrome2("a")).toBeTrue();
  });

  it("'' is false", function () {
    expect(isPermutationOfPalindrome2("")).toBeFalse();
  });
});