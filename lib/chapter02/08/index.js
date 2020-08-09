const SLL = require("../../helper/singly-linked-list");

/**
 * 1 -> 2 -> 3 -> 4 -> 5 -> 3（1つ目の3と同じオブジェクト）
 * となっている場合には、3を返します
 */
function findCircular(head) {
  var collision = false;
  var pointer1 = head.next; // Velocity 1
  var pointer2 = head.next.next; // Velocity 2
  while (!collision) {
    if (pointer1 === pointer2) {
      collision = true;
      break;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  pointer1 = head;
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1.value;
}

module.exports = {
  findCircular,
};
