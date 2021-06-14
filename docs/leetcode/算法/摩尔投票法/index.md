---
title: 摩尔投票法[leetcode]
date: 2021-06-14
tags:
  - leetcode
  - 算法
categories:
  - leetcode
permalink: /leetcode/Boyer_Moore_majority_vote_algorithm
---

## 对抗阶段
先尝试入门题目，先给投票算法做好前置理解
> [多数元素](/leetcode/top-interview-questions/xm77tm/)

此题限制了一定存在lucky dog，导致代码只使用了投票算法的<b>对抗阶段</b>，就能解出期望结果

## 计数阶段
如果题目没限制呢，最后存活的candidate就不一定是lucky dog了，那咋办嘛

引入投票算法的<b>计数阶段</b>

再遍历一次，统计下这个candidate次数是否真的超过一半就行啦

俩次遍历，时间复杂度也还是O(n)


## 扩展
假设现在要找 票数超过 n/3 的candidate
> [多数元素II](/leetcode/229)

扩展到 n/m 的场景，使用数组来存储candidates和counts，对抗+计数俩个阶段逻辑一样
