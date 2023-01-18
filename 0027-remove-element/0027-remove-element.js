/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = nums.length
    for (i=0;i<l;i++){
       if(i > l - 1) {
        break;
    }
    
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
    }
    return nums.length
};