/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var numbers1 = version1.split('.');
    var numbers2 = version2.split('.');

    var loop = Math.max(numbers1.length,numbers2.length);
    for(var i = 0; i < loop;i++){
        var n1 = parseInt(getEle(i,numbers1)), n2 = parseInt(getEle(i,numbers2))
        if(n1 > n2){
            return 1;
        }else if(n1 < n2){
            return -1;
        }
    }
    return 0;
};

var getEle = function(i,a){
    if(i > a.length - 1){
        return 0;
    }else{
        return a[i];
    }
}
