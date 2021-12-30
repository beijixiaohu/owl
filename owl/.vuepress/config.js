const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "猫小鹰料理研究协会",
  description: "",
  dest: "./dist",
  head: [
    ["script",{src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"}],
    ["script",{src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],
    ["script",{src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"}],
    ["script",{src: "/js/APlayer.min.js"}],
    ["link",{type:"text/css",rel:"stylesheet",href: "/css/APlayer.min.css"}],
    ["link",{type:"text/css",rel:"stylesheet",href: "/css/bttn.css"}],
  ],

  themeConfig: {
    logo: "/logo.webp",
    hostname: "https://www.baidu.com",
    author: "北极小狐",
    sidebarDepth: 3,
    search: false,
    sidebar: {
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
      },
    },

    footer: {
      display: true,
      content: "豫ICP备20021176号-1 | MIT Licensed |",
      copyright: "Copyright © 2020-2022 猫小鹰二创组"
    },

    copyright: {
      status: "global",
    },

    copyCode: {
      showInMobile: true,
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: false,
  },
});
