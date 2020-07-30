/**
 * M*Nの行列の要素の中に0があれば、その行と列をすべて0にします
 *
 * Time Complexity : O(mn)
 * Space Complexity : O(n)
 * @param {number[][]} matrix
 */
function setZero(matrix) {
  const zeroColumns = [];
  // すべてのセルを走査し0を見つける
  for (var i = 0; i < matrix.length; i++) {
    var existZero = false;
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        existZero = true;
        if (!zeroColumns.includes(j)) {
          zeroColumns.push(j);
        }
      }
    }
    // その行に0が1つでもあれば行すべてを0にする
    if (existZero) {
      matrix[i] = Array(matrix[i].length).fill(0);
    }
  }
  // 0が1つもなかったらreturn
  if (zeroColumns.length === 0) {
    return matrix;
  }
  for (row of matrix) {
    // すでに0で埋めていたらスキップすることで高速化可能
    // または上で0埋めせずここで0埋めしても良い
    for (column of zeroColumns) {
      row[column] = 0;
    }
  }
  return matrix;
}

module.exports = {
  setZero,
};
