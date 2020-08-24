/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (39.85%)
 * Likes:    336
 * Dislikes: 0
 * Total Accepted:    45.4K
 * Total Submissions: 113.9K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let num = 0
  while (n >= 5) {
    num = num + Math.floor(n / 5)
    n = Math.floor(n / 5)
  }
  return num
};
// 并不能通过...
// var trailingZeroes_d = function (n) {
//   let recursion = (n) => {
//     if (n === 1 || n === 0) {
//       return 1n
//     }
//     return recursion(n - 1) * BigInt(n)
//   }
//   let res = recursion(n).toString()
//   let num = 0
//   for (let i = res.length - 1; i >= 0; i--) {
//     if (res[i] === '0') {
//       num++
//     } else {
//       return num
//     }
//   }
// };
// @lc code=end

