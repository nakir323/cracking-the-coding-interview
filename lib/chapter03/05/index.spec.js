const sortStack = require("./index").sortStack;
const Stack = require("../../helper/stack").Stack;

describe("Test sortStack method", function () {
  it("[2, 3, 1, 5] will be [5, 3, 2, 1]", function () {
    const stack = new Stack();
    stack.push(2).push(3).push(1).push(5);
    sortStack(stack);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(5);
    expect(stack.isEmpty()).toBeTrue();
  });
  it("[] will be []", function () {
    const stack = new Stack();
    sortStack(stack);
    expect(stack.isEmpty()).toBeTrue();
  });
  it("[1] will be [1]", function () {
    const stack = new Stack();
    stack.push(1);
    sortStack(stack);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBeTrue();
  });
  it("[3, 2, 1] will be [3, 2, 1]", function () {
    const stack = new Stack();
    stack.push(3).push(2).push(1);
    sortStack(stack);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.isEmpty()).toBeTrue();
  });
});
