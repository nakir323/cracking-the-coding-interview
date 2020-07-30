/**
 * 行列の要素の中に0があれば、その行と列をすべて0にします
 *
 * Time Complexity :
 * Space Complexity :
 * @param {number[][]} matrix
 */
function setZero(matrix) {
  const zeroColumns = [];
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
    if (existZero) {
      matrix[i] = Array(matrix[i].length).fill(0);
    }
  }
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
