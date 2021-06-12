---
title: 基本计算器II[leetcode]
date: 2021-05-23
tags:
  - leetcode
  - 数据结构
  - 栈
categories:
  - leetcode
permalink: /leetcode/227
---

[基本计算器II](https://leetcode-cn.com/problems/basic-calculator-ii/)

### 题意
* 输入只含数字、空格和四则运算的字符串，算出运算结果
* 有效表达式，即数字和运算符一定间隔出现，且数字数量比运算符数量多一
* 除法只保留整数

### 准备工作
先构造calc方法用于计算
```js
/**
 * @param {number} s
 * @param {number} s
 * @param {string} s
 * @return {number}
 */
function calc(left, right, type) {
  switch (type) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return parseInt(left / right)
  }
  return 0
}
```

### 暴力法
1. 构造俩个数组，nums存数字，opes存运算符
2. 分两轮遍历opes
- 先只计算*/，再计算加减
- 假设当前运算符的索引为i，则
```js
  nums.splice(i, 2, calc(nums[i], nums[i + 1], opes[i]))
  opes.splice(i, 1)
```
3. 返回nums[0]

:::danger 失败
有一个超长的测试用例，暴力法超时，为了加快速度，可以边解析边计算，这样也节约了内存
:::

### 再次分析
1. 如果opes[i]为*/，此时不管下个入栈的是啥运算，都可以先计算```calc(nums[i], nums[i + 1], opes[i])```
2. 如果opes[i]为+-，则只有下个入栈的也是+-，才可以先计算```calc(nums[i], nums[i + 1], opes[i])```

由上面俩情况，可以增加判断函数
```js
/**
 * @param {string} s
 * @param {string} s
 * @return {boolean}
 */
function canLeftCalc(prev, curr) {
  return prev === '*' || prev === '/' ||
    ((prev === '+' || prev === '-') && (curr === '+' || curr === '-'))
}
```
3. 由上，每次有新的ope入栈，尝试在俩头去消耗opes
```js
// numIdx 为数字数组的长度 - 1，即opes的长度
while (opes.length) {
  if (canLeftCalc(opes[0], opes[1])) {
    nums.splice(0, 2, calc(nums[0], nums[1], opes.shift()))
    continue
  }

  if (canLeftCalc(opes[numIdx - 1], s[i])) {
    nums.splice(numIdx - 1, 2, calc(nums[numIdx - 1], nums[numIdx], opes.pop()))
    numIdx -= 1
    continue
  }
  break
}
```
4. 可知，最终遍历完后，opes
- 要么长度为1，则只需要返回```calc(nums[0], nums[1], opes[0])```
- 要么长度为2，且顺序必为```[[+-], [*/]]```（其他情况都满足了```canLeftCalc```而最终变成一个），此时要返回```calc(nums[0], calc(nums[1], nums[2], opes[1]), opes[0])```
5. 特殊的，当输入``` "1" ```等只有数字的情况，opes长度为0，直接返回```nums[0]```

### 代码
```js
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const nums = []
  const opes = []

  let numIdx = 0
  for (let i = 0; i < s.length; i += 1) {
    switch (s[i]) {
      case '+':
      case '-':
      case '*':
      case '/':
        while (opes.length) {
          if (canLeftCalc(opes[0], opes[1])) {
            nums.splice(0, 2, calc(nums[0], nums[1], opes.shift()))
            continue
          }

          if (canLeftCalc(opes[numIdx - 1], s[i])) {
            nums.splice(numIdx - 1, 2, calc(nums[numIdx - 1], nums[numIdx], opes.pop()))
            numIdx -= 1
            continue
          }
          break
        }

        opes.push(s[i])
        numIdx = opes.length
        break
      case ' ':
        break;
      default:
        nums[numIdx] = (nums[numIdx] || 0) * 10 + +s[i]
    }
  }
  if (opes.length === 0) {
    return nums[0]
  }

  if (opes.length === 1) {
    return calc(nums[0], nums[1], opes[0])
  }

  return calc(nums[0], calc(nums[1], nums[2], opes[1]), opes[0])
};
```
