const compress = require("./index").compress;

describe("Test compress method", function () {
  it("'aabcccccaaa' is 'a2b1c5a3'", function () {
    expect(compress("aabcccccaaa")).toEqual("a2b1c5a3");
  });

  it("'a' is 'a'", function () {
    expect(compress("a")).toEqual("a");
  });

  it("'aa' is 'aa'", function () {
    expect(compress("aa")).toEqual("aa");
  });

  it("'aaa' is 'a3'", function () {
    expect(compress("aa")).toEqual("aa");
  });

  it("'aaaaA' is 'a4A1'", function () {
    expect(compress("a4A1")).toEqual("a4A1");
  });
});
