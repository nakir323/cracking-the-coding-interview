/**
 * s2がs1を回転させたものかどうかを判定します。
 * waterbottleはerbottlewatを回転させたもの。
 *
 * s1,s2には空文字やnullは与えられないものとする。
 *
 * includesの速度がO(n)とすると
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 *
 * @param {string} s1
 * @param {string} s2
 */
function isRotatedString(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  return (s1 + s1).includes(s2);
}

module.exports = {
  isRotatedString,
};
