Given an array of integers, every element appears twice except for one. Find that single one.

---

At the beginning, I wrote this
```
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    nums.sort(function (a,b) {
        return a - b;
    });
    for(var i = 0;i < nums.length;i+=2){
        if(i + 1 >= nums.length || nums[i] != nums[i+1]){
            return nums[i];
        }
    }
};
```

It gives the right answer. But it's not the best solution. Because it doesn't have a linear runtime complexity.

###Hint:

A XOR A = 0

0 XOR A = A

A XOR B XOR A = A XOR A XOR B = B
