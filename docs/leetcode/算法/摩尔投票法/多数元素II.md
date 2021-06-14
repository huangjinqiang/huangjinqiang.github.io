---
title: 多数元素II[leetcode]
date: 2021-06-14
tags:
  - leetcode
  - 投票算法
categories:
  - leetcode
permalink: /leetcode/229
---

[多数元素II](https://leetcode-cn.com/problems/majority-element-ii/)

### 题意
* 其中所有出现超过 ⌊ n/3 ⌋ 次的元素，可能有 0-2 个
* 具有线性时间复杂度，不使用额外空间

### 分析
* 投票算法，且需要计数阶段来确认candidates是否满足需求
* 对抗阶段需要预设俩个candidate席位
  * 如果是投给当前某个candidate，则他票数 + 1
  * 有空位，则当前票主入席
  * 否则所有的canditates都要票数-1
* 对抗阶段优先投票再入空位席，防止一个人占了俩个席位

### 代码
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let a = ''
  let countA = 0
  let b = ''
  let countB = 0

  nums.forEach((v) => {
    if (a === v) {
      countA += 1
    } else if (b === v) {
      countB += 1
    } else if (countA === 0) {
      a = v
      countA = 1
    } else if (countB === 0) {
      b = v
      countB = 1
    } else {
      countA -= 1
      countB -= 1
    }
  })

  countA = 0
  countB = 0
  nums.forEach(v => {
    if (v === a) {
      countA += 1
    } else if (v === b) {
      countB += 1
    }
  })

  const num = nums.length / 3
  const res = []
  if (countA > num) res.push(a)
  if (countB > num) res.push(b)

  return res
};
```
