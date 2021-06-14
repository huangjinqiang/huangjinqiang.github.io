---
title: 搜索二维矩阵II[leetcode]
date: 2021-06-12
tags:
  - leetcode
categories:
  - leetcode
permalink: /leetcode/top-interview-questions/xmlwi1/
---

[搜索二维矩阵II](https://leetcode-cn.com/leetbook/read/top-interview-questions/xmlwi1/)


### 题意
* 从上到下、从左到右，升序排列

### 分析
* 假设从左上出发搜索
  * 如果比target小，则有向右、向下俩条路能前进
  * 如果比target大，则有向左、向上俩条路能回溯
  * 为了避免重复路线，还要加标记位
* 假设从左下出发搜索
  * 在matrix[m][0]位置
    * 如果比target小，只能向右前进，即0列被淘汰（0列最大值为matrix[m][0]）
    * 如果比target大，只能向上回溯，即m行被淘汰（m行最小值为matrix[m][0]）
  * 后续的每次移动同理，都是向右向上逼近，淘汰向左、向下的行列

### 代码
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rows = matrix.length
  if (rows === 0) return false

  const cols = matrix[0].length
  if (cols === 0) return false

  let row = rows - 1
  let col = 0
  while (row > -1 && col < cols) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      row -= 1
    } else {
      col += 1
    }
  }

  return false
}
```
