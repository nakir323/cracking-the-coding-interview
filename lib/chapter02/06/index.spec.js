const isPalindrome = require("./index").isPalindrome;
const Yallist = require("yallist");

describe("Test isPalindrome method", function () {
  it("[] returns true", function () {
    const head = Yallist.create().head;
    expect(isPalindrome(head)).toBeFalse();
  });
  it("[a] returns true", function () {
    const head = Yallist.create(["a"]).head;
    expect(isPalindrome(head)).toBeTrue();
  });
  it("[a, b] returns false", function () {
    const head = Yallist.create(["a", "b"]).head;
    expect(isPalindrome(head)).toBeFalse();
  });
  it("[a, b, a] returns true", function () {
    const head = Yallist.create(["a", "b", "a"]).head;
    expect(isPalindrome(head)).toBeTrue();
  });
  it("[1, 2, 3, 3, 2, 1] returns true", function () {
    const head = Yallist.create([1, 2, 3, 3, 2, 1]).head;
    expect(isPalindrome(head)).toBeTrue();
  });
});
