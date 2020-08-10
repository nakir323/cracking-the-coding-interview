/**
 * push, pop, min関数を持つスタックです。
 * それぞれのメソッドの実行時間はO(1)です。
 */
class NumberStack {
  /**
   * @type {Array<number>}
   */
  elements = [];

  /**
   * @type {Array<number>}
   */
  mins = [];

  /**
   * @param {number} element
   * @returns {NumberStack}
   */
  push(element) {
    if (this.mins.length === 0) {
      this.mins.push(element);
    } else {
      if (this.mins[this.mins.length - 1] >= element) {
        this.mins.push(element);
      }
    }
    this.elements.push(element);
    return this;
  }

  /**
   * @returns {number}
   */
  pop() {
    const popped = this.elements.pop();
    if (this.mins[this.mins.length - 1] === popped) {
      this.mins.pop();
    }
    return popped;
  }

  /**
   * @returns {number} null if this stack has no elements.
   */
  min() {
    if (this.mins.length === 0) {
      return null;
    }
    return this.mins[this.mins.length - 1];
  }
}

module.exports = {
  NumberStack,
};
