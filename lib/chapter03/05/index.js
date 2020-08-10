const Stack = require("../../helper/stack").Stack;

/**
 * 最も小さい値がトップに来るようStackを並び替えます。
 * @param {Stack} stack
 * @returns {void}
 */
function sortStack(stack) {
  if (stack.peek() === null) {
    return;
  }
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    const top = stack.pop();
    while (!tempStack.isEmpty() && tempStack.peek() > top) {
      stack.push(tempStack.pop());
    }
    tempStack.push(top);
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

module.exports = {
  sortStack,
};
