/**
 * 与えられた配列をバブルソートします。
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

module.exports = {
    bubbleSort,
};