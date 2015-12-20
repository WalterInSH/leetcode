var majorityElement = function(nums) {
    nums.sort();
    var t,count,threshold = nums.length/2;
    for (var i = 0; i < nums.length; i++) {
      if(t == null || t != nums[i]){
        t = nums[i];
        count = 1;
      }else {
        if(++count > threshold) return t;
      }
    }
    return t;
};
