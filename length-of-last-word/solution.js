/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var trimed = s.trim()
    for(var i = trimed.length - 1;i>0;i--){
        if(trimed.charAt(i) === ' '){
            return trimed.length - i - 1;
        }
    }
    return trimed.length;
};
