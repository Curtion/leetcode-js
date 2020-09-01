/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (34.90%)
 * Likes:    425
 * Dislikes: 0
 * Total Accepted:    74.6K
 * Total Submissions: 212.7K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count = count + 1
    }
  }
  return count
};
// @lc code=end

