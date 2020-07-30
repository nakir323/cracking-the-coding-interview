/**
 * 文字列を圧縮します。aabはa2b1となります。
 * 与えられる文字列はa~zまたはA~Zのみを想定しています。nullや空文字は想定しません。
 * 圧縮後が圧縮前の文字列より短くなっていない場合は圧縮前の文字列を返します。
 * 
 * Time Comprexity : O(n)
 * Space Comprexity : O(n)
 * @param {string} str
 */
function compress(str) {
  var compressed = "";
  var charCount = 0;
  for (char of str) {
    if (compressed === "") {
      compressed += char;
      charCount = 1;
    } else if (compressed[compressed.length - 1] !== char) {
      compressed += charCount + char;
      charCount = 1;
    } else if (compressed[compressed.length - 1] === char) {
      charCount++;
    }
  }
  compressed += charCount;
  return str.length > compressed.length ? compressed : str;
}

module.exports = {
  compress,
};