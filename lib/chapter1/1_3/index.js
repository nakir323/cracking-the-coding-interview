/**
 * 与えられた文字列の空白を%20に変換します。先頭から`length`番目までの文字を処理します。
 */
function escapeSpace(str, length) {
  var result = "";
  for (var i = 0; i < length; i++) {
    const char = str[i];
    if (char === " ") {
      result += "%20";
    } else {
      result += char;
    }
  }
  return result;
}

module.exports = {
  escapeSpace,
};
