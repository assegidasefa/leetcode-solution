/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str = ''
    let num = 0
    let arr = []
    for (let i = 0 ; i<digits.length;i++){
        str+=digits[i]
    }
    num =BigInt(str) + BigInt(1)
    while(num>0){
        let val = num % 10n   
        num = num/10n
        arr.unshift(val)
    }     
    return arr
};
