/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.18%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    153.6K
 * Total Submissions: 332.6K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // A-z 65-90
  // a-z 97-122
  // 0-9 48-57
  if (s === '') {
    return true
  }
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      arr.push(String.fromCharCode(s.charCodeAt(i) + 32))
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122 || s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      arr.push(s[i])
    }
  }
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
};
// @lc code=end

