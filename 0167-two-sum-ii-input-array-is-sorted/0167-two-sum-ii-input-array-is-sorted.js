/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let length = numbers.length;
    let cache = {};
    for (let i = 0; i < length; i++) {
        let cur = numbers[i];
        let seek = target - cur;
        if (cache[seek]) {
            return [cache[seek] - 1, i + 1];
        } else {
            cache[cur] = i + 2;
        };
    };
};