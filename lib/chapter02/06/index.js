const Yallist = require("yallist");

/**
 * 与えられたLinkedListの各要素には1文字(ASCII)が入っているとします。
 * そのLinkedListの要素が回文になっているかを判定します。
 * 要素が1つもなければfalseを返します。
 *
 * @param {Yallist.Node} head
 * @returns {boolean}
 */
function isPalindrome(head) {
  if (head === null) {
    return false;
  }
  const reversed = Yallist.create();
  var node = head;
  var length = 0;
  while (node !== null) {
    reversed.unshift(node.value);
    node = node.next;
    length++;
  }
  var reversedHead = reversed.head;
  for (var i = 0; i < Math.floor(length / 2); i++) {
    if (head.value !== reversedHead.value) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isPalindrome,
};
