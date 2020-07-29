const hasSameChars = require("./index").hasSameChars;
const hasSameChars2 = require("./index").hasSameChars2;

describe("Test hasSameChars method", function () {
  it("abcd is false", function () {
    expect(hasSameChars("abcd")).toBeFalse();
  });

  it("abcda is true", function () {
    expect(hasSameChars("abcda")).toBeTrue();
  });

  it("{empty} is false", function () {
    expect(hasSameChars("")).toBeFalse();
  });

  it("a is false", function () {
    expect(hasSameChars("a")).toBeFalse();
  });

  it("aaaaaaaaaaaaaa is true", function () {
    expect(hasSameChars("aaaaaaaaaaaaaa")).toBeTrue();
  });
});

describe("Test hasSameChars2 method", function () {
  it("abcd is false", function () {
    expect(hasSameChars2("abcd")).toBeFalse();
  });

  it("abcda is true", function () {
    expect(hasSameChars2("abcda")).toBeTrue();
  });

  it("{empty} is false", function () {
    expect(hasSameChars2("")).toBeFalse();
  });

  it("a is false", function () {
    expect(hasSameChars2("a")).toBeFalse();
  });

  it("aaaaaaaaaaaaaa is true", function () {
    expect(hasSameChars2("aaaaaaaaaaaaaa")).toBeTrue();
  });
});
