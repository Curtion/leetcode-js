/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (48.73%)
 * Likes:    1175
 * Dislikes: 0
 * Total Accepted:    336.2K
 * Total Submissions: 690K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 *
 * 示例 2：
 *
 *
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * 1
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 *
 *
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function (target, nums) {
  // O(n^2)
  let count = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum = sum + nums[j];
      if (sum >= target && i - j + 1 < count) {
        count = i - j + 1;
        break;
      }
    }
  }
  return count === Infinity ? 0 : count;
};
var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  while (j <= nums.length) {
    if (sum >= target) {
      if (min > j - i) {
        min = j - i;
      }
      sum = sum - nums[i];
      i++;
    } else {
      if (j === nums.length) {
        break;
      }
      sum = sum + nums[j];
      j++;
    }
  }
  return min === Infinity ? 0 : min;
};
// @lc code=end
