/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (76.30%)
 * Likes:    716
 * Dislikes: 0
 * Total Accepted:    200.6K
 * Total Submissions: 262.9K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let arr = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  let row = 0;
  let col = 0;
  let direction = "right";
  arr[row][col] = 1;
  let i = 2;
  while (true) {
    if (arr.every((item) => item.every((jtem) => jtem !== 0))) break;
    if (direction === "right") {
      if (col + 1 < n && arr[row][col + 1] === 0) {
        arr[row][col + 1] = i;
        col++;
        i++;
      } else {
        direction = "bottom";
      }
      continue;
    }
    if (direction === "left") {
      if (col - 1 >= 0 && arr[row][col - 1] === 0) {
        arr[row][col - 1] = i;
        col--;
        i++;
      } else {
        direction = "top";
      }
      continue;
    }
    if (direction === "top") {
      if (row - 1 >= 0 && arr[row - 1][col] === 0) {
        arr[row - 1][col] = i;
        row--;
        i++;
      } else {
        direction = "right";
      }
      continue;
    }
    if (direction === "bottom") {
      if (row + 1 < n && arr[row + 1][col] === 0) {
        arr[row + 1][col] = i;
        row++;
        i++;
      } else {
        direction = "left";
      }
      continue;
    }
  }
  return arr;
};
// @lc code=end
