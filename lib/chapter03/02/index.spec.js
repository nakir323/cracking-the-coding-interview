const NumberStack = require("./index").NumberStack;

describe("Test NumberStack method", function () {
  it("Test NumberStack", function () {
    const numberStack = new NumberStack();
    numberStack.push(3).push(1).push(2).push(1).push(0).push(6);
    expect(numberStack.min()).toBe(0);
    expect(numberStack.pop()).toBe(6);
    expect(numberStack.min()).toBe(0);
    expect(numberStack.pop()).toBe(0);
    expect(numberStack.min()).toBe(1);
    expect(numberStack.pop()).toBe(1);
    expect(numberStack.min()).toBe(1);
    expect(numberStack.pop()).toBe(2);
    expect(numberStack.min()).toBe(1);
    expect(numberStack.pop()).toBe(1);
    expect(numberStack.min()).toBe(3);
    expect(numberStack.pop()).toBe(3);
    expect(numberStack.min()).toBeNull();
  });
});
