---
title: 分割回文串I
date: 2021-07-01
tags:
  - leetcode
  - 动态规划
categories:
  - leetcode
permalink: /leetcode/131
---

[分割回文串I](https://leetcode-cn.com/problems/palindrome-partitioning/)

### 分析
* 分析和暴力回溯法可见[分割回文串I](/leetcode/top-interview-questions/xaxi62/)
* 这里主要换种打表思路：计算字符串s中i到j是不是回文串
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
 * @return {string[][]}
 */
var partition = function(s) {
  const { length } = s
  if (length < 2) return [[s]]

  const dp = getDp(s)

  const res = []
  let curr = []

  function search(start) {
    for (let i = start; i < length; i += 1) {
      if (dp[start][i]) {
        curr.push(s.slice(start, i + 1))

        if (i === length - 1) {
          res.push([...curr])
        } else {
          search(i + 1)
        }

        curr.pop()
      }
    }
  }

  search(0)

  return res
};
```
