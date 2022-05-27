/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (46.13%)
 * Likes:    437
 * Dislikes: 0
 * Total Accepted:    99K
 * Total Submissions: 214.1K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements1 = function (head, val) {
  // 时间复杂度O(n)
  // 空间复杂度O(n)
  let list = head;
  let temp = new ListNode(0);
  const res = temp;
  while (list !== null) {
    if (list.val !== val) {
      temp.next = new ListNode(list.val);
      temp = temp.next;
    }
    list = list.next;
  }
  return res.next;
};
var removeElements = function (head, val) {
  let list = head;
  if (list === null) {
    return head;
  }
  while (list.next !== null) {
    if (list.next.val !== val) {
      list = list.next;
    } else {
      const temp = list.next;
      list.next = temp.next;
    }
  }
  if (head.val === val) {
    if (head.next === null) {
      return null;
    } else {
      return head.next;
    }
  }
  return head;
};
// @lc code=end
