/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (66.24%)
 * Likes:    283
 * Dislikes: 0
 * Total Accepted:    75K
 * Total Submissions: 113.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let queue = []
  let result = []
  if (root !== null) {
    queue.push(root)
  }
  while(queue.length !== 0) {
    let keys = []
    let len = queue.length
    for(let i = 0; i < len; i++) {
      let currNode = queue.shift()
      keys.push(currNode.val)
      if(currNode.left !== null) {
        queue.push(currNode.left)
      }
      if(currNode.right !== null) {
        queue.push(currNode.right)
      }
    }
    result.unshift(keys)
  }
  return result
};
// @lc code=end

