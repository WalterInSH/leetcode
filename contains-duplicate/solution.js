/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(var i = 0;i<nums.length;i++){
        var j = i+1;
        while(j<nums.length){
            if(nums[i] === nums[j++]) true;
        }
    }
    return false;
};
