const Yallist = require("yallist");

/**
 * LinkedListの
 * 
 * @param {Yallist.Node} head
 * @returns {Array}
 */
function toArray(head) {
  const array = [];
  while (head !== null && head !== undefined) {
    array.push(head.value);
    head = head.next;
  }
  return array;
}

module.exports = {
  toArray,
};
