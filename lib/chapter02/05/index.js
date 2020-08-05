const Yallist = require("yallist");

/**
 * 渡された2つのLinkedListには数値が入っていて、1->2->3のように入っている場合は321を表します。
 * 1->2->3と4->5->6が与えられた場合には、5->7->9のhead要素を返します。
 *
 * 要素は1桁の数値のみで、最後の要素に0は無いものとします。
 *
 * @param {Yallist.Node} head1
 * @param {Yallist.Node} head2
 * @returns {Yallist.Node}
 */
function add(head1, head2) {
  const result = Yallist.create();
  var carry = false;
  while (head1 || head2 || carry) {
    const value1 = head1? head1.value : 0;
    const value2 = head2? head2.value : 0;
    const sum = value1 + value2 + (carry ? 1 : 0);
    carry = sum >= 10;
    result.push(sum % 10)
    head1 = head1 ? head1.next : null;
    head2 = head2 ? head2.next : null;
  }
  return result.head;
}

module.exports = {
  add,
};
