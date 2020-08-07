/**
 * Singly Linked ListのNodeを表します
 */
class SLLNode {
    value;
    next;
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

/**
 * 
 * @param {object} value 
 * @param {SLLNode} next 
 */
function createNode(value, next) {
    return new SLLNode(value, next);
}

/**
 * SinglyLinkedListを生成し、headを返します。
 * @param {Array} array 
 */
function createSLLFromArray(array) {
    var next = null;
    for (var i = array.length - 1; i >= 0; i--) {
        next = createNode(array[i], next);
    }
    return next;
}

module.exports = {
    SLLNode,
    createNode,
    createSLLFromArray,
}
