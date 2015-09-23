/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var k = 0,i = 1; i < nums.length;){
        while(nums[k] != 0){
            ++k;
            if(k > nums.length - 2){
                return;
            }
        }
        i = k+1;
        while(nums[i] == 0){
            ++i;
            if(i >= nums.length){
                return;
            }
        }
        nums[k] = nums[i];
        nums[i] = 0;
    }
};
