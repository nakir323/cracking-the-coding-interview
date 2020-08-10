/**
 * push, pop, popAt(number)を持ちます。
 * 内部には、複数のStackを持ちます。
 */
class SetOfStacks {
  MAX_STACK_COUNT = 3;

  /**
   * @type {Array<Array<number>>}
   */
  elements = [];

  /**
   * @param {number} element
   * @returns {SetOfStacks}
   */
  push(element) {
    if (this.elements.length === 0) {
      this.elements.push([element]);
      return this;
    }
    const lastStack = this._getLastStack();
    if (lastStack.length < this.MAX_STACK_COUNT) {
      lastStack.push(element);
    } else {
      this.elements.push([element]);
    }
    return this;
  }

  /**
   * @returns {number} null if this stack does not have any numbers.
   */
  pop() {
    if (this.elements.length === 0) {
      return null;
    }
    const lastStack = this._getLastStack();
    const value = lastStack.pop();
    if (lastStack.length === 0) {
      this.elements.pop();
    }
    return value;
  }

  /**
   * @param {number} index
   * @returns {number} null if this stack does not have any numbers or specified index does not have a stack.
   */
  popAt(index) {
    if (this.elements.length <= index) {
      return null;
    }
    if (this.elements.length - 1 === index) {
      return this.pop();
    }
    const popTargetStack = this.elements[index];
    const popped = popTargetStack.pop();
    if (popTargetStack.length === 0) {
      const newElements = [];
      newElements.push(
        ...this.elements.slice(0, index),
        ...this.elements.slice(index + 1)
      );
      this.elements = newElements;
    }
    return popped;
  }

  /**
   * @returns {Array<number>}
   */
  _getLastStack() {
    return this.elements[this.elements.length - 1];
  }
}

module.exports = {
  SetOfStacks,
};
