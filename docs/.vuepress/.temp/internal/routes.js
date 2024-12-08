export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客首页"} }],
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
