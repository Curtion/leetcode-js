/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.60%)
 * Likes:    763
 * Dislikes: 0
 * Total Accepted:    175.5K
 * Total Submissions: 310K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * 思路：
 * 方法一：把数字转化为字符串，然后翻转字符串然再与原字符串比较是否相等
 * 方法二：通过计算的方式取第一位和最后一位进行比较，如果相等则再依次取进行比较。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xlength = x.toString().length
  let arr = []
  if (x < 0) {
    return false
  }
  for (let i = 0; i < xlength; i = i + 1) {
    arr.unshift(Math.floor(x / (Math.pow(10, i)) % 10))
  }
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
};
// @lc code=end

