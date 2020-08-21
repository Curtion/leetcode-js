/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (66.62%)
 * Likes:    605
 * Dislikes: 0
 * Total Accepted:    58.3K
 * Total Submissions: 87.4K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：3
 * 输出：
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * 解释：
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    // 空节点
    return []
  }
  let treeDeep = (s, e) => {
    if (s > e) {
      return [null]
    }
    let arr = []
    for (let i = s; i < e + 1; i++) {
      let left = treeDeep(s, i - 1)
      let right = treeDeep(i + 1, e)
      let curr = null
      for (let l of left) {
        for (let r of right) {
          curr = new TreeNode(i)
          curr.left = l
          curr.right = r
          arr.push(curr)
        }
      }
    }
    return arr
  }
  return treeDeep(1, n)
};
console.log(generateTrees(2))
123
// @lc code=end

