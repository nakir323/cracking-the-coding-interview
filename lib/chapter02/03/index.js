const Yallist = require("yallist");

/**
 * 与えられたNodeをそれが属するLinkedListから削除します
 * nodeには先頭、末尾以外の要素が与えられます。
 *
 * @param {Yallist.Node} node
 * @returns {void}
 */
function deleteNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

module.exports = {
  deleteNode,
};
