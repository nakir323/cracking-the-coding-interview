const add = require("./index").add;
const Yallist = require("yallist");
const YallistUtil = require("../../helper/yallist-util");

describe("Test add method", function () {
  it("[1, 2, 3], [7, 8, 9] returns [8, 0, 3, 1]", function () {
    const head1 = Yallist.create([1, 2, 3]).head;
    const head2 = Yallist.create([7, 8, 9]).head;
    const want = [8, 0, 3, 1];
    expect(YallistUtil.toArray(add(head1, head2))).toEqual(want);
  });
  it("[1], [9, 8, 9] returns [0, 9, 9]", function () {
    const head1 = Yallist.create([1]).head;
    const head2 = Yallist.create([9, 8, 9]).head;
    const want = [0, 9, 9];
    expect(YallistUtil.toArray(add(head1, head2))).toEqual(want);
  });
  it("[], [9, 8, 9] returns [9, 8, 9]", function () {
    const head1 = Yallist.create().head;
    const head2 = Yallist.create([9, 8, 9]).head;
    const want = [9, 8, 9];
    expect(YallistUtil.toArray(add(head1, head2))).toEqual(want);
  });
});
