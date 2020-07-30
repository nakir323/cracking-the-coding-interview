const rotate = require("./index").rotate;

describe("Test rotate method", function () {
  it("1 * 1 test", function () {
    const arg = [[1]];
    const expected = [[1]];
    expect(rotate(arg)).toEqual(expected);
  });
  it("2 * 2 test", function () {
    const arg = [[1, 2], [3, 4]];
    const expected = [[3, 1], [4, 2]];
    expect(rotate(arg)).toEqual(expected);
  });
  it("3 * 3 test", function () {
    const arg = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    expect(rotate(arg)).toEqual(expected);
  });
});
