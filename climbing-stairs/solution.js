/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 0) return 0;
    if(n <= 2) return n;

    var one_step_before = 2, two_step_before = 1, all = 0;
    for(var i = 2; i < n; i++){
        all = one_step_before + two_step_before;
        two_step_before = one_step_before;
        one_step_before = all;
    }
    return all;
};
