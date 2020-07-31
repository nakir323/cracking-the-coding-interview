const deleteDuplicates = require("./index").deleteDuplicates;
const yallist = require("yallist");

describe("Test deleteDuplicates method", function () {
  it("[] returns []", function () {
    const linkedList = yallist.create();
    expect(deleteDuplicates(linkedList.head)).toBeNull();
  });
  it("[1] returns [1]", function () {
    const linkedList = yallist.create([1]);
    expect(deleteDuplicates(linkedList.head).value).toEqual(1);
    expect(deleteDuplicates(linkedList.head).next).toBeNull();
  });
  it("[1,2] returns [1,2]", function () {
    const linkedList = yallist.create([1,2]);
    expect(deleteDuplicates(linkedList.head).value).toEqual(1);
    expect(deleteDuplicates(linkedList.head).next.value).toEqual(2);
    expect(deleteDuplicates(linkedList.head).next.next).toBeNull();
  });
  it("[1,1] returns [1]", function () {
    const arg = yallist.create([1, 1]);
    expect(deleteDuplicates(arg.head).value).toEqual(1);
    expect(deleteDuplicates(arg.head).next).toBeNull();
  });
  it("[1,1,1] returns [1]", function () {
    const linkedList = yallist.create([1, 1, 1]);
    const result = deleteDuplicates(linkedList.head);
    expect(result.value).toEqual(1);
    expect(result.next).toBeNull();
  });
  it("[1,1,3,4,4,4,5,6,1,1] returns [1,3,4,5,6]", function () {
    const arg = yallist.create([1, 1, 3, 4, 4, 4, 5, 6, 1, 1]);
    const result = deleteDuplicates(arg.head);
    expect(result.value).toEqual(1);
    expect(result.next.value).toEqual(3);
    expect(result.next.next.value).toEqual(4);
    expect(result.next.next.next.value).toEqual(5);
    expect(result.next.next.next.next.value).toEqual(6);
    expect(result.next.next.next.next.next).toBeNull();
  });
});
