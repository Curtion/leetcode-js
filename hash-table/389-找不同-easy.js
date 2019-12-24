/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (59.36%)
 * Likes:    100
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 30.7K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let objs = {}
  let objt = {}
  s.split('').forEach(element => {
    if (objs.hasOwnProperty(element)) {
      objs[element] = objs[element] + 1
    } else {
      objs[element] = 1
    }
  });
  t.split('').forEach(element => {
    if (objt.hasOwnProperty(element)) {
      objt[element] = objt[element] + 1
    } else {
      objt[element] = 1
    }
  });
  for (let item in objs) {
    if (objt.hasOwnProperty(item)) {
      if (objt[item] !== objs[item]) {
        return item
      }
    } else {
      return item
    }
  }
  for (let item in objt) {
    if (objs.hasOwnProperty(item)) {
      if (objs[item] !== objt[item]) {
        return item
      }
    } else {
      return item
    }
  }
};
// @lc code=end

