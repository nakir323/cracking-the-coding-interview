/**
 * 与えられた2つの文字列の一方が他方の並び替えになっているかどうかをチェックする
 * str1, str2 は空文字かもしれないしnullかもしれない。文字コードはASCIIのみとする。
 */
function checkPermutation(str1, str2) {
  if (!str1 || !str2) {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  // Convert str1 to Array
  const str1CharCountArray = Array(128).fill(0);
  for (char of str1) {
    str1CharCountArray[char.charCodeAt(0)] = ++str1CharCountArray[
      char.charCodeAt(0)
    ];
  }
  // loop str2 chars
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
