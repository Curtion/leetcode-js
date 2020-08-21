/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (38.21%)
 * Likes:    252
 * Dislikes: 0
 * Total Accepted:    33K
 * Total Submissions: 86.3K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let num = n
  let arr = []
  while (num > 26) {
    arr.unshift(num % 26)
    num = Math.floor(num / 26)
  }
  arr.unshift(num)
  let res = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      if (i === 0) {
        continue
      }
      res = res + 'Z'
      arr[i - 1] = arr[i - 1] - 1
    } else {
      res = String.fromCharCode(arr[i] + 64) + res
    }
  }
  return res
};
// @lc code=end

