/**
 * 与えられた文字列の順列が回分かどうかをチェックします
 *
 * 大文字小文字は区別しません。空文字は回文判定に含みません。
 * 入力される文字はa~zと空白のみとします。
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
function isPermutationOfPalindrome(str) {
  if (str === null || str === "") {
    return false;
  }
  const countArray = Array(26).fill(0);
  for (var i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " ") {
      continue;
    }
    const charIndex = char.toLowerCase().charCodeAt(0) % 26;
    countArray[charIndex] = countArray[charIndex] + 1;
  }
  var containsOdd = false;
  for (count of countArray) {
    if (count % 2 === 1) {
      if (containsOdd) {
        return false;
      }
      containsOdd = true;
    }
  }
  return true;
}

/**
 * ビット演算を用いて実装
 * a~zの文字の出現を00000000000000000000000000にあてはめる。
 * 例えば、もしaとcが奇数回出現したなら10100000000000000000000000となる。
 * 対象の1ビットを反転させるには、排他的論理和(^)を使う。対象の1ビットを立てたマスクと排他的論理和を取れば反転される。
 * 出来上がったbit列に1が2個以上あるかどうかをチェックし、あればfalse。
 * このチェックはbit列から1を引いたものと元のbit列のANDをとり、それが0になるかどうかを見ればよい。
 * 
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 */
function isPermutationOfPalindrome2(str) {
  if (str === null || str === "") {
    return false;
  }
  var bitArray = 0;
  for (char of str) {
    if (char === " ") {
      continue;
    }
    const mask = 1 << char.toLowerCase().charCodeAt(0) % 26;
    bitArray ^= mask;
  }
  return (bitArray & (bitArray - 1)) === 0;
}

module.exports = {
  isPermutationOfPalindrome,
  isPermutationOfPalindrome2,
};
