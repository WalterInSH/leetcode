/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0){
        return false;
    }
    var binary = (n >>> 0).toString(2);
    var hasFoundOne = false;
    for(var i = 0; i < binary.length; i++){
        var bit = binary.charAt(i);
        if(bit == '1' && hasFoundOne){
            return false;
        }else if(bit == '1' && !hasFoundOne){
            hasFoundOne = true;
        }
    }
    return hasFoundOne;
};
