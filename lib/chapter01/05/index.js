/**
 * 一方の文字列が他方の文字列に対する文字の挿入/削除/置換によって生成できるかを判定します。
 * a~zのみが文字として存在するとする。nullと空文字は与えられないとする。
 * 同じ文字列だった場合はtrueを返す。
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
function isConvertable(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  // 2文字以上違いがある場合はどの操作でも生成不可能
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // 置換で生成できるかチェック : O(n)
  if (str1.length === str2.length) {
    var diffCount = 0;
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (diffCount === 1) {
          return false;
        }
        diffCount++;
      }
    }
    return true;
  }

  // 挿入or削除で生成できるかチェック : O(n)
  var str1Pointer = 0;
  var str2Pointer = 0;
  var diffCount = 0;
  for (var i = 0; i < Math.min(str1.length, str2.length);) {
    if (str1[str1Pointer] !== str2[str2Pointer]) {
      if (diffCount === 1) {
        return false;
      }
      diffCount++;
      str1.length > str2.length ? str1Pointer++ : str2Pointer++;
      continue;
    }
    i++;
    str1Pointer++;
    str2Pointer++;
  }
  return true;
}

module.exports = {
  isConvertable,
};
