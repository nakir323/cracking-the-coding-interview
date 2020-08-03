const Yallist = require("yallist");

/**
 * Singly LinkedListの要素のうち、borderより小さい数を前に、以上の数を後ろに寄せます。
 * 例えば、1->5->2->8->3->4で、borderが3の場合、
 * 1->2->5->8->3->4 のようになります。
 * LinkedListの要素は0個の場合もあり。
 * 
 * LinkedListの要素は1~100
 * borderは1~100
 * 
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {Yallist.Node} head
 * @param {number} border
 * @returns {Yallist.Node}
 */
function divideElement(head, border) {
  if (head === null) {
    return null;
  }
  // Don't have to sort
  if (border === 1) {
    return head;
  }
  const formerHead = {};
  var tempFormerHead = formerHead;
  const latterHead = {};
  var tempLatterHead = latterHead;
  while(head !== null) {
    if (head.value < border) {
      tempFormerHead.next = head;
      tempFormerHead = tempFormerHead.next;
    } else {
      tempLatterHead.next = head;
      tempLatterHead = tempLatterHead.next;
    }
    head = head.next;
  }
  if (formerHead.next === null) {
    return latterHead.next;
  }
  if (latterHead.next === null) {
    return formerHead.next;
  }
  tempFormerHead.next = latterHead.next;
  tempLatterHead.next = null;
  return formerHead.next;
}

module.exports = {
  divideElement,
};
