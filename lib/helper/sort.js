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
 * Space Complexity : O(1)
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
 * Space Complexity : O(n)
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

/**
 * 与えられた配列をクイックソートします。
 * 
 * Time Complexity : O(nlog(n))
 * Space Complexity : O(n)
 * 
 * @param {Array<number>} array
 * @returns {Array<number>} 
 */
function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    // 一番最後の要素をpivotとする
    var pivotCursor = array.length - 1;
    var pivotValue = array[pivotCursor];

    var leftCursor = 0;
    var rightCursor = array.length - 1;

    // 左カーソルがpivotに到達したか、または左右のカーソルが同じところになるまで値を交換し続ける
    while(leftCursor !== pivotCursor && leftCursor !== rightCursor) {
        // 左カーソルをすすめる
        while(array[leftCursor] < pivotValue && leftCursor < pivotCursor) {
            leftCursor++;
        }
        // 右カーソルをすすめる
        if (array[rightCursor] >= pivotValue && leftCursor < rightCursor) {
            rightCursor--;
        }
        // 交換する
        const temp = array[leftCursor];
        array[leftCursor] = array[rightCursor];
        array[rightCursor] = temp;
    }

    // pivotを移動
    if (leftCursor === rightCursor) {
        array[pivotCursor] = array[leftCursor]
        array[leftCursor] = pivotValue
    }
    
    const leftSorted = quickSort(array.slice(0,leftCursor))
    const rightSorted = quickSort(array.slice(leftCursor + 1))

    return [...leftSorted, pivotValue, ...rightSorted]
}

// TODO 基数ソート
// TODO バケツソート

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    quickSort,
};