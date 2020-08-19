/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (61.63%)
 * Likes:    171
 * Dislikes: 0
 * Total Accepted:    65.5K
 * Total Submissions: 106.2K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [1]
  if (rowIndex === 0) {
    return arr
  }
  for (let i = 0; i < rowIndex; i++) {
    let newarr = []
    for (let j = 0; j < arr.length + 1; j++) {
      newarr[j] = (arr[j - 1] === undefined ? 0 : arr[j - 1]) + (arr[j] === undefined ? 0 : arr[j])
    }
    arr = newarr
  }
  return arr
};
// @lc code=end

