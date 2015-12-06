/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
      return false;
    }

    var alphabet = Array.apply(null, Array(26)).map(Number.prototype.valueOf,0);
    for (var i = 0; i < s.length; i++) {
        alphabet[s.charCodeAt(i) - 97]++;
        alphabet[t.charCodeAt(i) - 97]--;
    }

    for (var k = 0; k < alphabet.length; k++) {
        if (alphabet[k] !== 0) return false;
    }
    return true;
}

