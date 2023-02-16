/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let value = nums[0]
    for (let i=1;i<nums.length;i++){
        value ^= nums[i]
        
    }
    return value
};