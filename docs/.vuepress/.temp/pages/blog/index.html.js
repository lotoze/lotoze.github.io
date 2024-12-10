import comp from "F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"博客首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"博客首页\",\"footer\":\"MIT Licensed | Copyright © 2024-present lotoze Community\"},\"headers\":[{\"level\":3,\"title\":\"网站更新升级中...尽情期待~\",\"slug\":\"网站更新升级中-尽情期待\",\"link\":\"#网站更新升级中-尽情期待\",\"children\":[]}],\"git\":{\"updatedTime\":1733671489000,\"contributors\":[{\"name\":\"lotoze\",\"email\":\"lotoze@163.com\",\"commits\":1,\"url\":\"https://github.com/lotoze\"}]},\"filePathRelative\":\"blog/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
