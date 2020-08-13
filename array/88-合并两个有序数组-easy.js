/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (48.36%)
 * Likes:    589
 * Dislikes: 0
 * Total Accepted:    191.1K
 * Total Submissions: 395.1K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeOldFunc = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[n - 1]
    n--
  }
  nums1.sort((a, b) => a - b)
};
var merge = function (nums1, m, nums2, n) {
  let k = 0
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] >= nums2[k] || i > m - 1 + k) {
      for (let j = nums1.length - 1; j !== i; j--) {
        nums1[j] = nums1[j - 1]
      }
      nums1.splice(i, 1, nums2[k])
      if (k === n) {
        break
      }
      k++
    }
  }
};
// @lc code=end

