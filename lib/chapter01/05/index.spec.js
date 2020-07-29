const isConvertable = require("./index").isConvertable;

describe("Test isConvertable method", function () {
  it("'test', 'tesat' is true", function () {
    expect(isConvertable('test', 'tesat')).toBeTrue();
  });

  it("'aaaa', 'aaa' is false", function () {
    expect(isConvertable('test', 'est')).toBeTrue();
  });

  it("'test', 'best' is true", function () {
    expect(isConvertable('test', 'best')).toBeTrue();
  });

  it("'test', 'tested' is false", function () {
    expect(isConvertable('test', 'tested')).toBeFalse();
  });
});
