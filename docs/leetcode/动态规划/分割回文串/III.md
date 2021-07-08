---
title: 分割回文串III
date: 2021-07-08
tags:
  - leetcode
  - 动态规划
categories:
  - leetcode
permalink: /leetcode/1278/
---

[分割回文串III](https://leetcode-cn.com/problems/palindrome-partitioning-iii/)

### 题意
* 可以替换字符，要求将字符串分割成回文串数组，替换次数最少
* 先打表，记录s[i]到s[j]变成回文串需要替换多少个字符
* 如果i === 1, dp[i][j] 为 maps[i][j]
* 否则，动态方程为
```js
dp[i][j] = Math.min(
  dp[i][j],
  dp[i - 1][t] + maps[t + 1][j]
) // j > i, i <= t && t < j
```

### 代码
```js
/**
 * @param {string} s
 * @return {number[][]}
 */
function getMap(s) {
  const { length } = s
  const maps = new Array(length + 1)

  maps[0] = (new Array(length + 1)).fill(0)

  for (let i = length; i > 0; i -= 1) {
    maps[i] = new Array(length + 1)

    for (let j = 0; j <= i; j += 1) {
      maps[i][j] = 0
    }

    for (let j = i + 1; j <= length; j += 1) {
      maps[i][j] = (s[i - 1] === s[j - 1] ? 0 : 1) +
        (j - i < 2 ? 0 : maps[i + 1][j - 1])
    }
  }

  return maps
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  const { length } = s
  const maps = getMap(s)

  // dps[i][j] 代表前j位分割成i串的改动字符数
  const dps = [new Array(length + 1).fill(0)]

  for (let i = 1; i <= k; i += 1) {
    dps[i] = new Array(length + 1)

    for (let j = 0; j <= i; j += 1) {
      dps[i][j] = 0
    }

    for (let j = i + 1; j <= length; j += 1) {
      dps[i][j] = maps[i][j]

      if (i > 1) {
        for (let t = i; t < j; t += 1) {
          dps[i][j] = Math.min(dps[i][j], dps[i - 1][t] + maps[t + 1][j])
        }
      }
    }
  }

  return dps[k][length]
};
```
