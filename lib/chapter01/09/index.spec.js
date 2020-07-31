const isRotatedString = require("./index").isRotatedString;

describe("Test isRotatedString method", function () {
  it("water. terwa is true", function () {
    const arg1 = "water";
    const arg2 = "terwa";
    expect(isRotatedString(arg1, arg2)).toBeTrue();
  });

  it("terwa. water is true", function () {
    const arg1 = "terwa";
    const arg2 = "water";
    expect(isRotatedString(arg1, arg2)).toBeTrue();
  });

  it("different length is false", function () {
    const arg1 = "terw";
    const arg2 = "water";
    expect(isRotatedString(arg1, arg2)).toBeFalse();
  });

  it("same strings is true", function () {
    const arg1 = "water";
    const arg2 = "water";
    expect(isRotatedString(arg1, arg2)).toBeTrue();
  });

  it("different strings is true", function () {
    const arg1 = "watew";
    const arg2 = "water";
    expect(isRotatedString(arg1, arg2)).toBeFalse();
  });
});
