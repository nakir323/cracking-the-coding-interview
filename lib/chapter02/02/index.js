const Yallist = require("yallist");

/**
 * 後ろからK番目の要素を返します。
 * リストのサイズを超える値が指定された場合はnullを返します。
 *
 * @param {Yallist.Node} head
 * @param {number} k
 * @returns {Yallist.Node}
 */
function getKthFromLast(head, k) {
  const length = head.list.length;
  if (k >= length) {
    return null;
  }
  for (var i = 0; i < length - 1 - k; i++) {
    head = head.next;
  }
  return head;
}

/**
 * 後ろからK番目の要素を返します。
 * リストのサイズを超える値が指定された場合はnullを返します。
 * リストの長さはわかっていないものとする
 * 
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {Yallist.Node} head
 * @param {number} k
 * @returns {Yallist.Node}
 */
function getKthFromLast2(head, k) {
  var pointer1 = head;
  var pointer2 = head;
  for (var i = 0; i < k; i++) {
    if (pointer2.next === null) {
      return null;
    }
    pointer2 = pointer2.next;
  }

  while (pointer2.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}

module.exports = {
  getKthFromLast,
  getKthFromLast2,
};
