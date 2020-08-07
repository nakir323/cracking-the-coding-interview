const findCircular = require("./index").findCircular;
const SLL = require("../../helper/singly-linked-list");

describe("Test findCircular method", function () {
  it("[1, 2, 3, 4, 5, 3] returns 3's node", function () {
    const head1 = SLL.createSLLFromArray([1, 2]);
    const head2 = SLL.createSLLFromArray([3, 4, 5]);
    head2.next.next.next = head2;
    head1.next = head2;
    expect(findCircular(head1)).toBe(head2);
  });
});
