/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (70.29%)
 * Likes:    1194
 * Dislikes: 0
 * Total Accepted:    317.6K
 * Total Submissions: 451.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
  // 空间复杂度O(n)
  // 时间复杂度O(n)
  let pre = null;
  while (head !== null) {
    let temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }
  return pre;
};
var reverseList = function (head) {
  // 空间复杂度O(1)
  // 时间复杂度O(n)
  if (head === null || head.next === null) {
    return head;
  }
  let pre = null;
  let cur = head;
  while (true) {
    if (cur === null) {
      break;
    }
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
// @lc code=end
