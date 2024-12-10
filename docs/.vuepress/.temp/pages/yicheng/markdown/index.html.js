import comp from "F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/index.html.vue"
const data = JSON.parse("{\"path\":\"/yicheng/markdown/\",\"title\":\"奕澄Markdown\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"奕澄Markdown\",\"heroImage\":\"/images/yicheng-markdown-logo.png\",\"description\":\"222222~\",\"footer\":\"MIT Licensed | Copyright © 2024-present lotoze Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"yicheng/markdown/README.md\",\"excerpt\":\"\"}")
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
