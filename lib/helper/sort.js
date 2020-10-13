/**
 * 与えられた配列をバブルソートします。
 * 天秤を配列の左端から動かし、天秤の左が右より大きい場合は値を取り替えます。
 * 
 * Time Complexity : O(n^2)
 * Space Complexity : O(1)
 * 
 * @param {Array<number>} array 
 */
function bubbleSort(array) {
    if (array.length < 2) {
        return;
    }
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            const left = array[j];
            const right = array[j + 1];
            if (left > right) {
                array[j] = right;
                array[j + 1] = left;
            }
        }
    }
}

/**
 * 与えられた配列を選択ソートします。要素から最小値を探し、配列の最初の要素と入れ替えるということを繰り返します。
 * 
 * Time Complexity : O(n^2)
 * Space Complexity : 0(1)
 * 
 * @param {Array<number>} array 
 */
function selectionSort(array) {
    if (array.length < 2) {
        return;
    }

    for (var i = 0; i < array.length - 1; i++) {
        // 最小の要素を探す
        var minValue = Number.MAX_VALUE;
        var minValuePosition = -1;
        for (var j = i; j < array.length; j++) {
            if (minValue > array[j]) {
                minValue = array[j];
                minValuePosition = j;
            }
        }
        // 要素を取り替える
        array[minValuePosition] = array[i];
        array[i] = minValue;
    }
}

/**
 * 与えられた配列をマージソートします。
 * 
 * Time Complexity : O(nlog(n))
 * Space Complexity : 0(n)
 * 
 * @param {Array<number>} array
 * @returns {Array<number>} 
 */
function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const former = array.slice(0, array.length/2)
    const latter = array.slice(array.length/2)

    const sortedFormer = mergeSort(former)
    const sortedLatter = mergeSort(latter)

    const mergedArray = [];
    while (sortedFormer.length > 0 || sortedLatter.length > 0) {
        if (sortedFormer.length === 0) {
            mergedArray.push(sortedLatter.shift());
            continue;
        }
        if (sortedLatter.length === 0) {
            mergedArray.push(sortedFormer.shift());
            continue;
        }
        mergedArray.push(sortedFormer[0] < sortedLatter[0]? sortedFormer.shift() : sortedLatter.shift());
    }
    return mergedArray;
}

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
};