const deleteDuplicates = require("./index").deleteDuplicates;
const yallistUtil = require("../../helper/yallist-util");
const yallist = require("yallist");

describe("Test deleteDuplicates method", function () {
  it("[] returns []", function () {
    const linkedList = yallist.create();
    expect(deleteDuplicates(linkedList.head)).toBeNull();
  });
  it("[1] returns [1]", function () {
    const linkedList = yallist.create([1]);
    const want = [1];
    expect(yallistUtil.toArray(deleteDuplicates(linkedList.head))).toEqual(
      want
    );
  });
  it("[1,2] returns [1,2]", function () {
    const linkedList = yallist.create([1, 2]);
    const want = [1, 2];
    expect(yallistUtil.toArray(deleteDuplicates(linkedList.head))).toEqual(
      want
    );
  });
  it("[1,1] returns [1]", function () {
    const linkedList = yallist.create([1, 1]);
    const want = [1];
    expect(yallistUtil.toArray(deleteDuplicates(linkedList.head))).toEqual(
      want
    );
  });
  it("[1,1,1] returns [1]", function () {
    const linkedList = yallist.create([1, 1, 1]);
    const want = [1];
    expect(yallistUtil.toArray(deleteDuplicates(linkedList.head))).toEqual(
      want
    );
  });
  it("[1,1,3,4,4,4,5,6,1,1] returns [1,3,4,5,6]", function () {
    const linkedList = yallist.create([1, 1, 3, 4, 4, 4, 5, 6, 1, 1]);
    const want = [1, 3, 4, 5, 6];
    expect(yallistUtil.toArray(deleteDuplicates(linkedList.head))).toEqual(
      want
    );
  });
});
