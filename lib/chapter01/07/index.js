/**
 * 二次元配列を90度回転させます。
 * 
 * 全要素数をnとすると
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 * @param {number[][]} matrix
 */
function rotate(matrix) {
  const length = matrix.length;
  const rotated = Array.from(Array(length), () => Array(length).fill(0))
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      rotated[j][length - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
}

module.exports = {
  rotate,
};
