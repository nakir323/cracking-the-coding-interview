const SetOfStacks = require("./index").SetOfStacks;

describe("Test SetOfStacks method", function () {
  it("Test SetOfStacks", function () {
    // [1, 2, 3]
    // [4, 5, 6]
    // [7, 8]
    const setOfStacks = new SetOfStacks();
    // [[1, 2, 3], [4, 5, 6], [7, 8]]
    setOfStacks.push(1).push(2).push(3).push(4).push(5).push(6).push(7).push(8);
    expect(setOfStacks.popAt(3)).toBeNull();
    expect(setOfStacks.popAt(0)).toBe(3); // [[1, 2], [4, 5, 6], [7, 8]]
    expect(setOfStacks.popAt(1)).toBe(6); // [[1, 2], [4, 5], [7, 8]]
    expect(setOfStacks.popAt(2)).toBe(8); // [[1, 2], [4, 5], [7]]
    expect(setOfStacks.popAt(1)).toBe(5); // [[1, 2], [4], [7]]
    expect(setOfStacks.popAt(1)).toBe(4); // [[1, 2], [7]]
    setOfStacks.push(9).push(10).push(11); // [[1, 2], [7, 9, 10], [11]]
    expect(setOfStacks.popAt(1)).toBe(10); // [[1, 2], [7, 9], [11]]
    expect(setOfStacks.popAt(1)).toBe(9); // [[1, 2], [7], [11]]
    expect(setOfStacks.popAt(1)).toBe(7); // [[1, 2], [11]]
    expect(setOfStacks.pop()).toBe(11); // [[1, 2]]
    expect(setOfStacks.pop()).toBe(2); // [[1]]
    expect(setOfStacks.popAt(0)).toBe(1); // []
    expect(setOfStacks.pop()).toBeNull();
  });
});
