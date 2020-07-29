const escapeSpace = require("./index").escapeSpace;

describe("Test escapeSpace method", function () {
  it("'ab c ', 4 is 'ab%20c'", function () {
    expect(escapeSpace("ab c ", 4)).toEqual("ab%20c");
  });

  it("'Mr John Smith ', 13 is 'Mr%20John%20Smith'", function () {
    expect(escapeSpace("Mr John Smith ", 13)).toEqual("Mr%20John%20Smith");
  });

  it("' a c ', 3 is '%20a%20'", function () {
    expect(escapeSpace(" a c ", 3)).toEqual("%20a%20");
  });

  it("'a b', 0 is ''", function () {
    expect(escapeSpace("a b", 0)).toEqual("");
  });
});

