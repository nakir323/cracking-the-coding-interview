/**
 * 二分探索を行います
 * 
 * @param {Array<number>} array ソート済みの配列
 * @param {number} target 探したい数
 * @returns {boolean} 探索の結果、存在するかどうか
 */
function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }
    if (array.length === 1) {
        return array[0] === target;
    }

    const mid = array[array.length / 2]
    if (target < mid) {
        return binarySearch(array.slice(0, array.length / 2), target);
    } else if (target > mid) {
        return binarySearch(array.slice(array.length / 2 + 1), target);
    } else {
        return true;
    }
}

module.exports = {
    binarySearch,
};