const setZero = require("./index").setZero;

describe("Test setZero method", function () {
  it("1 * 1 non zero test", function () {
    const arg = [[1]];
    const expected = [[1]];
    expect(setZero(arg)).toEqual(expected);
  });
  it("1 * 1 zero test", function () {
    const arg = [[0]];
    const expected = [[0]];
    expect(setZero(arg)).toEqual(expected);
  });
  it("2 * 2 non zero test", function () {
    const arg = [
      [1, 0],
      [3, 4],
    ];
    const expected = [
      [0, 0],
      [3, 0],
    ];
    expect(setZero(arg)).toEqual(expected);
  });
  it("3 * 3 test", function () {
    const arg = [
      [1, 2, 0],
      [4, 5, 6],
      [0, 8, 9],
    ];
    const expected = [
      [0, 0, 0],
      [0, 5, 0],
      [0, 0, 0],
    ];
    expect(setZero(arg)).toEqual(expected);
  });
});
