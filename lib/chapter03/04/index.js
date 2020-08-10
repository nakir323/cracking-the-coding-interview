/**
 * 内部は2つのStackを使って実装されています。
 * （実際にはpushとpopだけを使う配列をStackとして使っている。）
 */
class MyQueue {
  /**
   * 先にaddしたものが先に配置されるStack
   */
  stack1 = [];
  /**
   * 先にaddしたものが後に配置されるStack
   */
  stack2 = [];

  add(element) {
    this.stack1.push(element);
    return this;
  }

  remove() {
    this._move1To2();
    if (this.stack2.length === 0) {
      return null;
    }
    return this.stack2.pop();
  }

  peek() {
    this._move1To2();
    if (this.stack2.length === 0) {
      return null;
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack2.length === 0;
  }

  _move1To2() {
    if (this.stack2.length !== 0) {
      return;
    }
    const length = this.stack1.length;
    for (var i = 0; i < length; i++) {
      this.stack2.push(this.stack1.pop());
    }
  }
}

module.exports = {
  MyQueue,
};
