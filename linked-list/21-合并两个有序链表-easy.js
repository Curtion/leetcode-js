/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (58.13%)
 * Likes:    702
 * Dislikes: 0
 * Total Accepted:    137.8K
 * Total Submissions: 236.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：使用递归的思路
 * 当有链表结束时为递归终止条件
 * 参数值为去掉最小值后的两个子链表
 * 返回值为head较小的链表
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let list = {}
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val <= l2.val) {
    list = l1
    list.next = mergeTwoLists(l1.next, l2)
  } else {
    list = l2
    list.next = mergeTwoLists(l1, l2.next)
  }
  return list

};
// @lc code=end

