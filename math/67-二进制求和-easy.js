/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (51.22%)
 * Likes:    257
 * Dislikes: 0
 * Total Accepted:    47.3K
 * Total Submissions: 92.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let long = ''
  let short = ''
  let add = 0
  let res = ''
  if (a.length > b.length) {
    long = a.split('').reverse().join('')
    short = b.split('').reverse().join('')
  } else {
    long = b.split('').reverse().join('')
    short = a.split('').reverse().join('')
  }
  for (let i = 0; i < short.length; i++) {
    let index = Number.parseInt(long[i]) + Number.parseInt(short[i]) + add
    if (index >= 2) {
      add = 1
      index = index % 2
    } else {
      add = 0
    }
    res = index + res
  }
  const len = long.length - short.length
  for (let i = 0; i < len; i++) {
    let index = Number.parseInt(long[short.length + i]) + add
    if (index >= 2) {
      add = 1
      index = index % 2
    } else {
      add = 0
    }
    res = index + res
  }
  if (add === 1) {
    res = '1' + res
  }
  return res
};
// @lc code=end

