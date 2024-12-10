export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客首页"} }],
  ["/yicheng/markdown/PrivacyAgreement.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_PrivacyAgreement.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/PrivacyAgreement.html.js"), meta: {"title":"奕澄Markdown-隐私协议"} }],
  ["/yicheng/markdown/", { loader: () => import(/* webpackChunkName: "yicheng_markdown_index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/index.html.js"), meta: {"title":"奕澄Markdown"} }],
  ["/yicheng/markdown/%E5%AF%84%E8%AF%AD%E4%B8%8E%E7%A4%BA%E4%BE%8B.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_寄语与示例.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/寄语与示例.html.js"), meta: {"title":"寄语与示例"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
