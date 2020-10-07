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
                // console.log('並び替え前 : ', array);
                array[j] = right;
                array[j + 1] = left;
                // console.log('並び替え後 : ', array);
            }
        }
    }
}

/**
 * 与えられた配列を選択ソートします。要素から最小値を探し、配列の最初の要素と入れ替えるということを繰り返します。
 * 
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
        console.log('minValueは' + minValue);
        console.log('minValuePositionは' + minValuePosition);
    }
}

module.exports = {
    bubbleSort,
    selectionSort,
};