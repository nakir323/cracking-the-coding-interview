const Yallist = require("yallist");

/**
 * 2つのLinkedListが共通か（末尾が同じか）どうかを判定します。
 * また、共通となっている最初の要素の値を返します。
 * 1 -> 2 ↘
 *          6 -> 7
 * 2 -> 5 ↗
 * となっている場合は、trueでかつ6が返ります。
 *
 * @param {Yallist.Node} head1
 * @param {Yallist.Node} head2
 * @returns {{isIntersection: boolean, node: Yallist.Node}}
 */
function findIntersection(head1, head2) {
  if (head1.list.tail !== head2.list.tail) {
    return { isIntersection: false, node: null };
  }

  const length1 = head1.list.length;
  const length2 = head2.list.length;

  for (var i = 0; i < Math.abs(length1 - length2); i++) {
    (length1 < length2 ? head1 : head2).list.unshift(0);
  }

  const newHead1 = head1.list.head;
  const newHead2 = head2.list.head;

  while (newHead1 !== null) {
    if (newHead1 === newHead2) {
      return { isIntersection: true, node: newHead1 };
    }
    newHead1 = newHead1.next;
    newHead2 = newHead2.next;
  }
  // ここまでは来ないはず
  return {
    isIntersection: false,
    node: null,
  };
}

module.exports = {
  findIntersection,
};
