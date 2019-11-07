/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (31.47%)
 * Likes:    140
 * Dislikes: 0
 * Total Accepted:    50.4K
 * Total Submissions: 160.2K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s === '') {
    return 0
  } else {
    const arr = s.split('').reverse()
    let num = []
    for (let item of arr) {
      if (item === ' ') {
        if (num.length === 0) {
          continue
        } else {
          break
        }
      } else {
        num.push(item)
      }
    }
    return num.length
  }
};
// @lc code=end

