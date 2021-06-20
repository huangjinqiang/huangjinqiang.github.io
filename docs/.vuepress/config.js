module.exports = {
  title: 'Just In Time',
  description: 'Just In Time',
  head: [
    ["link", { "rel": "icon", "href": "/favicon.png" }],
    ["meta", { "name": "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no" }],
  ],
  plugins: [
    ['@vuepress/nprogress'],
    ["dynamic-title", {
      showIcon: "/favicon.png",
      showText: "(๑•̀ㅂ•́)و✧ ",
      hideIcon: "/favicon-blur.png",
      hideText: "_____λ......___丬 别走啊～～",
      recoverTime: 2000
    }]
  ],
  themeConfig: {
    logo: false,
    nav: [
      {
        text: 'leetcode',
        link: '/leetcode/'
      }
    ],
    lastUpdated: 'Last Updated'
  }
}
