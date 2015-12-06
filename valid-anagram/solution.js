/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
      return false;
    }

    var sp = s.split('').sort();
    var tp = t.split('').sort();

    for (var i = 0; i < sp.length; i++) {
      if (sp[i] !== tp[i]) {
        return false;
      }
    }
    return true;
};
