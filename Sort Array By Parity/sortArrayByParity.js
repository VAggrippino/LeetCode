/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => nums.sort(a => (a % 2 !== 0) - 1);

console.log(sortArrayByParity([3, 1, 2, 4]));