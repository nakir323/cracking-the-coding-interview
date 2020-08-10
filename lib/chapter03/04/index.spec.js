const MyQueue = require("./index").MyQueue;

describe("Test MyQueue method", function () {
  it("Test MyQueue", function () {
    const myQueue = new MyQueue();
    expect(myQueue.isEmpty()).toBeTrue();
    expect(myQueue.remove()).toBeNull();
    expect(myQueue.peek()).toBeNull();
    myQueue.add(1).add(2).add(3).add(4).add(5); // [1, 2, 3, 4, 5]
    expect(myQueue.peek()).toBe(1); // [1, 2, 3, 4, 5]
    expect(myQueue.remove()).toBe(1); // [2, 3, 4, 5]
    expect(myQueue.peek()).toBe(2); // [2, 3, 4, 5]
    myQueue.add(6); // [2, 3, 4, 5, 6]
    expect(myQueue.remove()).toBe(2); // [3, 4, 5, 6]
    expect(myQueue.peek()).toBe(3); // [3, 4, 5, 6]
    expect(myQueue.remove()).toBe(3); // [4, 5, 6]
    expect(myQueue.peek()).toBe(4); // [4, 5, 6]
    expect(myQueue.remove()).toBe(4); // [5, 6]
    expect(myQueue.peek()).toBe(5); // [5, 6]
    expect(myQueue.remove()).toBe(5); // [6]
    expect(myQueue.remove()).toBe(6); // []
    expect(myQueue.peek()).toBeNull(); // []
    myQueue.add(7); // [7]
    expect(myQueue.peek()).toBe(7); // [7]
    expect(myQueue.isEmpty()).toBeFalse();
    expect(myQueue.remove()).toBe(7); // []
    expect(myQueue.remove()).toBeNull();
    expect(myQueue.peek()).toBeNull();
    expect(myQueue.isEmpty()).toBeTrue();
  });
});
