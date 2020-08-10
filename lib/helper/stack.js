class Stack {
  _elements = [];

  /**
   * @param element
   * @returns {Stack}
   */
  push(element) {
    this._elements.push(element);
    return this;
  }

  /**
   * @returns null if Stack has no elements.
   */
  pop() {
    if (this._elements.length === 0) {
      return null;
    }
    return this._elements.pop();
  }

  /**
   * @returns null if Stack has no elements.
   */
  peek() {
    if (this._elements.length === 0) {
      return null;
    }
    return this._elements[this._elements.length - 1];
  }

  isEmpty() {
    return this._elements.length === 0;
  }
}

module.exports = {
  Stack,
};
