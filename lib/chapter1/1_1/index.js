/**
 * 与えられた文字列の中に重複する文字があるかどうかを判定するメソッド
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
function hasSameChars(str) {
  const charMap = {};
  for (const char of str.split("")) {
    if (charMap[char]) {
      return true;
    }
    charMap[char] = true;
  }
  return false;
}

/**
 * 与えられた文字列の中に重複する文字があるかどうかを判定するメソッドその2
 * Time Complexity : O(n^2)
 * Space Complexity : O(1)
 */
function hasSameChars2(str) {
  const strArray = str.split("");

  for (var i = 0; i < strArray.length - 1; i++) {
    for (var j = i + 1; j < strArray.length; j++) {
      if (strArray[i] === strArray[j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  hasSameChars,
  hasSameChars2,
};
