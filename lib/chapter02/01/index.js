const Yallist = require("yallist");

/**
 * LinkedListから重複した要素を削除し、先頭Nodeを返します。
 *
 * @param {Yallist.Node} head
 * @returns {Yallist.Node}
 */
function deleteDuplicates(head) {
  var node = head;
  const set = new Set();
  while (node !== null) {
    const isAlreadyExist = set.has(node.value);
    set.add(node.value);
    if (isAlreadyExist) {
      node.prev.next = node.next;
      if (node.next !== null) {
        node.next.prev = node.prev;
      }
    }
    node = node.next;
  }
  return head;
}

module.exports = {
  deleteDuplicates,
};
