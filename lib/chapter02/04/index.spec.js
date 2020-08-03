const divideElement = require("./index").divideElement;
const Yallist = require("yallist");
const YallistUtil = require("../../helper/yallist-util");

describe("Test deleteNode method", function () {
  it("[1, 5, 2, 8, 3, 4], 3 returns [1, 2, 5, 8, 3, 4]", function () {
    const head = Yallist.create([1, 5, 2, 8, 3, 4]).head;
    const want = [1, 2, 5, 8, 3, 4];
    expect(YallistUtil.toArray(divideElement(head, 3))).toEqual(want);
  });
  it("[1, 5, 2], 1 returns [1, 5, 2]", function () {
    const head = Yallist.create([1, 5, 2]).head;
    const want = [1, 5, 2];
    expect(YallistUtil.toArray(divideElement(head, 1))).toEqual(want);
  });
  it("[], 3 returns []", function () {
    const head = Yallist.create().head;
    expect(divideElement(head, 3)).toBeNull();
  });
  it("[1, 5, 2], 6 returns [1, 5, 2]", function () {
    const head = Yallist.create([1, 5, 2]).head;
    const want = [1, 5, 2];
    expect(YallistUtil.toArray(divideElement(head, 6))).toEqual(want);
  });
  it("[4, 5, 8], 4 returns [4, 5, 8]", function () {
    const head = Yallist.create([4, 5, 8]).head;
    const want = [4, 5, 8];
    expect(YallistUtil.toArray(divideElement(head, 4))).toEqual(want);
  });
});
