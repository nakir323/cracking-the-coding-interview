const checkPermutation = require("./index").checkPermutation;

describe("Test checkPermutation method", function () {
  it("abc, aba is false", function () {
    expect(checkPermutation("abc", "aba")).toBeFalse();
  });

  it("abc, cba is true", function () {
    expect(checkPermutation("abc", "cba")).toBeTrue();
  });

  it("null, a is false", function () {
    expect(checkPermutation(null, "a")).toBeFalse();
  });

  it("a, a is true", function () {
    expect(checkPermutation("a", "a")).toBeTrue();
  });

  it("{empty}, {empty} is false", function () {
    expect(checkPermutation("", "")).toBeFalse();
  });

  it("a, aa is false", function () {
    expect(checkPermutation("a", "aa")).toBeFalse();
  });
});

