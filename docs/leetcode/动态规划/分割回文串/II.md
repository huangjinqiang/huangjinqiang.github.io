---
title: 分割回文串II
date: 2021-07-01
tags:
  - leetcode
  - 动态规划
categories:
  - leetcode
permalink: /leetcode/132/
---

[分割回文串II](https://leetcode-cn.com/problems/palindrome-partitioning-ii/)

### 题意
* 要将字符串分割成回文串数组，同时数组长度最小
* 如果dp[0][i] 为true，则不用分割，即step[i] 为0
* 否则，动态方程为
```js
step[i] = Math.min(
  step[i],
  step[j - 1] + 1
) // 0 < j <= i，同时dp[j][i]为true
```

### 代码
```js
/**
 * @param {string} s
 * @return {boolean[][]}
 */
var getDp = function(s) {
  const { length } = s
  const dp = new Array(length)

  // 从下往上算，dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
  for (let i = length - 1; i >= 0; i -= 1) {
    dp[i] = new Array(length)

    for (let j = 0; j < i; j += 1) {
      dp[i][j] = false
    }
    dp[i][i] = true
    for (let j = i + 1; j < length; j += 1) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
    }
  }

  return dp
};

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const { length } = s
  if (length < 2) return 0

  const dp = getDp(s)

  const res = [0]
  for (let i = 1; i < length; i += 1) {
    if (dp[0][i]) {
      res[i] = 0
    } else {
      res[i] = length
      for (let j = 1; j <= i; j += 1) {
        if (dp[j][i]) {
          res[i] = Math.min(res[i], res[j - 1] + 1)
        }
      }
    }
  }

  return res[length - 1]
};
```
