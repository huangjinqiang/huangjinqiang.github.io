---
title: 分割回文串IV
date: 2021-07-08
tags:
  - leetcode
  - 动态规划
categories:
  - leetcode
permalink: /leetcode/1745/
---

[分割回文串IV](https://leetcode-cn.com/problems/palindrome-partitioning-iv/)


### 题意
* 判断字符串能否分割成3个字串都是回文串
* 为了上难度，假设题目要求能分割成k个子串（k < length）
* 同样是深搜去找，注意俩边界条件
  * 如果只剩一次分割，则直接判断maps[start][length - 1]
  * 深搜，如果剩余的字符都不够分割次数，则可以提前退出


### 代码
```js
/**
 * @param {string} s
 * @return {boolean[][]}
 */
function getMap(s) {
  const { length } = s
  const maps = new Array(length)

  for (let i = length - 1; i >= 0; i -= 1) {
    maps[i] = []

    for (let j = 0; j < i; j += 1) {
      maps[i][j] = false
    }

    for (let j = i; j < length; j += 1) {
      maps[i][j] = (s[i] === s[j]) && (j - i < 2 || maps[i + 1][j - 1])
    }
  }

  return maps
}
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var checkPartitioning = function(s, k = 3) {
  const maps = getMap(s)
  const { length } = s
  console.log(maps)

  function search(start, count) {
    if (count === 1) return maps[start][length - 1]

    for (let i = start; i + count <= length; i += 1) {
      if (maps[start][i]) {
        if (search(i + 1, count - 1)) {
          return true
        }
      }
    }

    return false
  }

  return search(0, k)
};
```
