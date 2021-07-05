(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(t,a,n){"use strict";n.r(a);var s=n(23),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/factorial-trailing-zeroes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阶乘后的零"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"题意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题意"}},[t._v("#")]),t._v(" 题意")]),t._v(" "),n("ul",[n("li",[t._v("给定n，计算n!后面会带几个0")])]),t._v(" "),n("h3",{attrs:{id:"分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),n("ul",[n("li",[t._v("能带几个0，即要求，能被10整除多少次\n"),n("ul",[n("li",[t._v("10的质因数为2、5，且能知，在n!中，分解每个数，最终产生5的数量会小于产生2的数量")]),t._v(" "),n("li",[t._v("即实际是求能被5整除多少次")])])]),t._v(" "),n("li",[t._v("给定n，能被5整除的次数为 Math.floor(n / 5) + Math.floor(n / 25) + ... + Math.floor(n / Math.pow(5, k))，且n >= Math.pow(5, k)，n < Math.pow(5, k + 1)\n"),n("ul",[n("li",[t._v("从0到n，有Math.floor(n / 5)个数能被5整除\n"),n("ul",[n("li",[t._v("当一个数能被5整除，便能分解出1个5来最终生成一个后缀0")])])]),t._v(" "),n("li",[t._v("从0到n，有Math.floor(n / 25)个数能被25整除\n"),n("ul",[n("li",[t._v("当一个数能被25整除，便能分解出2个5来最终生成二个后缀0")]),t._v(" "),n("li",[t._v("而在上轮统计时，已经消耗了一个5，即实际还能分解出Math.floor(n / 25)个5")])])]),t._v(" "),n("li",[t._v("从0到n，有Math.floor(n / 125)个数能被125整除\n"),n("ul",[n("li",[t._v("当一个数能被125整除，便能分解出3个5来最终生成二个后缀0")]),t._v(" "),n("li",[t._v("而在前俩轮统计时，已经消耗了2个5，即实际还能分解出Math.floor(n / 125)个5")])])]),t._v(" "),n("li",[t._v("...")]),t._v(" "),n("li",[t._v("直到 n < Math.pow(5, k)，此时无法再分解出5来参与计算了")])])])]),t._v(" "),n("h3",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} n\n * @return {number}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("trailingZeroes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" base "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    base "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);