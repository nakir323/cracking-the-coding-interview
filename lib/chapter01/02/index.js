/**
 * 与えられた2つの文字列の一方が他方の並び替えになっているかどうかをチェックする
 * str1, str2 は空文字かもしれないしnullかもしれない。文字コードはASCIIのみとする。
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
function checkPermutation(str1, str2) {
  if (!str1 || !str2) {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  // str1に登場する文字を数える
  const str1CharCountArray = Array(128).fill(0);
  for (char of str1) {
    str1CharCountArray[char.charCodeAt(0)] = ++str1CharCountArray[
      char.charCodeAt(0)
    ];
  }
  // 数えたstr1の文字をstr2の文字でデクリメントしていく
  for (char of str2) {
    const count = str1CharCountArray[char.charCodeAt(0)];
    if (count === 0) {
      return false;
    }
    str1CharCountArray[char.charCodeAt(0)] = count - 1;
  }
  return true;
}

module.exports = {
  checkPermutation,
};
