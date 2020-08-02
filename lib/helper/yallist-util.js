const Yallist = require("yallist");

/**
 * @param {Yallist.Node} head
 * @returns {Array}
 */
function toArray(head) {
  const array = [];
  while (head !== null) {
    array.push(head.value);
    head = head.next;
  }
  return array;
}

module.exports = {
  toArray,
};
