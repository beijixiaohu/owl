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
      content: "豫ICP备20021176号-1",
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

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.svg",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.svg",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.svg",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.svg",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.svg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.svg",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
