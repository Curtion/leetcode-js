/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (67.07%)
 * Likes:    339
 * Dislikes: 0
 * Total Accepted:    98.9K
 * Total Submissions: 147.3K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return []
  }
  let arr = [[1]]
  for (let i = 0; i < numRows - 1; i++) {
    let newarr = []
    for (let j = 0; j < arr[i].length + 1; j++) {
      newarr.push((arr[i][j - 1] === undefined ? 0 : arr[i][j - 1]) + (arr[i][j] === undefined ? 0 : arr[i][j]))
    }
    arr.push(newarr)
  }
  return arr
};
// @lc code=end

