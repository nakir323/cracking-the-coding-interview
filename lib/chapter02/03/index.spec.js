const deleteNode = require("./index").deleteNode;
const yallist = require("yallist");
const yallistUtil = require("../../helper/yallist-util");

describe("Test deleteNode method", function () {
  it("2 of [1,2,3] returns [1,3]", function () {
    const head = yallist.create([1,2,3]).head;
    const want = [1,3];
    deleteNode(head.next);
    expect(yallistUtil.toArray(head)).toEqual(want);
  });
  it("2 of [5,4,3,2,1] returns [5,4,3,1]", function () {
    const head = yallist.create([5,4,3,2,1]).head;
    const want = [5,4,3,1];
    deleteNode(head.next.next.next);
    expect(yallistUtil.toArray(head)).toEqual(want);
  });
  it("2,4,3 of [5,4,3,2,1] returns [5,1]", function () {
    const head = yallist.create([5,4,3,2,1]).head;
    const want = [5,1];
    deleteNode(head.next.next.next);
    deleteNode(head.next);
    deleteNode(head.next);
    expect(yallistUtil.toArray(head)).toEqual(want);
  });
});

