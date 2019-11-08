/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.92%)
 * Likes:    720
 * Dislikes: 0
 * Total Accepted:    131.9K
 * Total Submissions: 377.6K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    // 如果没有传字符串
    return ''
  }
  if (strs.length === 1) {
    // 如果只传了一个
    return strs[0]
  }
  const one = strs[0]
  let arr = []
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < Math.min(one.length, strs[1].length); j++) {
      if (one[j] !== strs[i][j]) {
        arr.push(j)
        break
      }
      if (j + 1 === Math.min(one.length, strs[1].length)) {
        arr.push(j + 1)
      }
    }
  }
  if (arr.length === 0) {
    // 如果除了第一个元素，其它元素都为空字符串的情况
    return ''
  }
  let len = Math.min(...arr)
  if (len === 0) {
    // 没有相同的首字符
    return ''
  } else {
    return one.substring(0, len)
  }
};
// @lc code=end

