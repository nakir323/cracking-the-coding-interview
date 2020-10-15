const { ConsoleReporter } = require("jasmine");

const mergeArray = require("./index").mergeArray;

jasmine.getEnv().addReporter(ConsoleReporter())

describe("Test mergeArray function", function () {
  it("[], [] should be []", function () {
    const arg1 = [];
    const arg2 = [];
    const expected = [];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
  it("[3], [] should be [3]", function () {
    const arg1 = [3];
    const arg2 = [];
    const expected = [3];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
  it("[], [0] should be [0]", function () {
    const arg1 = [];
    const arg2 = [0];
    const expected = [0];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
  it("[1, 3, 5], [2, 4, 6] should be [1, 2, 3, 4, 5, 6]", function () {
    const arg1 = [1, 3, 5];
    const arg2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
  it("[2, 4, 6], [1, 3, 5] should be [1, 2, 3, 4, 5, 6]", function () {
    const arg1 = [2, 4, 6];
    const arg2 = [1, 3, 5];
    const expected = [1, 2, 3, 4, 5, 6];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
  it("[1, 2, 3], [4, 5, 6] should be [1, 2, 3, 4, 5, 6]", function () {
    const arg1 = [1, 2, 3];
    const arg2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
  it("[4, 5, 6], [1, 2, 3] should be [1, 2, 3, 4, 5, 6]", function () {
    const arg1 = [4, 5, 6];
    const arg2 = [1, 2, 3];
    const expected = [1, 2, 3, 4, 5, 6];
    mergeArray(arg1, arg2);
    expect(arg1).toEqual(expected);
  });
});
