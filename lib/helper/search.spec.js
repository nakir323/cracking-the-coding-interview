const { ConsoleReporter } = require("jasmine");

const binarySearch = require("./search").binarySearch;

jasmine.getEnv().addReporter(ConsoleReporter())

describe("Test binarySearch function", function () {
  it("[], 1 should be false", function () {
    const arg1 = [];
    const arg2 = 1;
    expect(binarySearch(arg1, arg2)).toBeFalse();
  });
  it("[1], 1 should be true", function () {
    const arg1 = [1];
    const arg2 = 1;
    expect(binarySearch(arg1, arg2)).toBeTrue();
  });
  it("[1], 2 should be false", function () {
    const arg1 = [1];
    const arg2 = 2;
    expect(binarySearch(arg1, arg2)).toBeFalse();
  });
  it("[1, 2], 2 should be true", function () {
    const arg1 = [1, 2];
    const arg2 = 2;
    expect(binarySearch(arg1, arg2)).toBeTrue();
  });
  it("[1, 2], 1 should be true", function () {
    const arg1 = [1, 2];
    const arg2 = 1;
    expect(binarySearch(arg1, arg2)).toBeTrue();
  });
  it("[1, 2], 3 should be false", function () {
    const arg1 = [1, 2];
    const arg2 = 3;
    expect(binarySearch(arg1, arg2)).toBeFalse();
  });
  it("[1, 3, 5], 3 should be true", function () {
    const arg1 = [1, 3, 5];
    const arg2 = 3;
    expect(binarySearch(arg1, arg2)).toBeTrue();
  });
  it("[1, 3, 5, 10], 10 should be true", function () {
    const arg1 = [1, 3, 5, 10];
    const arg2 = 10;
    expect(binarySearch(arg1, arg2)).toBeTrue();
  });
  it("[1, 3, 5, 10], 100 should be false", function () {
    const arg1 = [1, 3, 5, 10];
    const arg2 = 100;
    expect(binarySearch(arg1, arg2)).toBeFalse();
  });
});
