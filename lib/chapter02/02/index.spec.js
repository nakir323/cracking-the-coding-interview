const getKthFromLast = require("./index").getKthFromLast;
const getKthFromLast2 = require("./index").getKthFromLast;
const yallist = require("yallist");

describe("Test deleteDuplicates method", function () {
  it("[1], 0 returns 1", function () {
    const arg = yallist.create([1]).head;
    const want = 1;
    expect(getKthFromLast(arg, 0).value).toEqual(want);
  });
  it("[1], 1 returns 1", function () {
    const arg = yallist.create([1]).head;
    expect(getKthFromLast(arg, 1)).toBeNull();
  });
  it("[1,2,3], 2 returns 1", function () {
    const arg = yallist.create([1, 2, 3]).head;
    const want = 1;
    expect(getKthFromLast(arg, 2).value).toEqual(want);
  });
});

describe("Test deleteDuplicates2 method", function () {
  it("[1], 0 returns 1", function () {
    const arg = yallist.create([1]).head;
    const want = 1;
    expect(getKthFromLast2(arg, 0).value).toEqual(want);
  });
  it("[1], 1 returns 1", function () {
    const arg = yallist.create([1]).head;
    expect(getKthFromLast2(arg, 1)).toBeNull();
  });
  it("[1,2,3], 2 returns 1", function () {
    const arg = yallist.create([1, 2, 3]).head;
    const want = 1;
    expect(getKthFromLast2(arg, 2).value).toEqual(want);
  });
});

