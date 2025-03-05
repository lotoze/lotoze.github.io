export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客首页"} }],
  ["/yicheng/markdown/PrivacyAgreement.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_PrivacyAgreement.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/PrivacyAgreement.html.js"), meta: {"title":"奕澄Markdown-隐私协议"} }],
  ["/yicheng/markdown/", { loader: () => import(/* webpackChunkName: "yicheng_markdown_index.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/index.html.js"), meta: {"title":"奕澄Markdown"} }],
  ["/yicheng/markdown/%E4%BD%BF%E7%94%A8%E9%A1%BB%E7%9F%A5.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_使用须知.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/使用须知.html.js"), meta: {"title":"使用须知"} }],
  ["/yicheng/markdown/%E5%AF%84%E8%AF%AD%E4%B8%8E%E7%A4%BA%E4%BE%8B.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_寄语与示例.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/寄语与示例.html.js"), meta: {"title":"寄语与示例"} }],
  ["/yicheng/markdown/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_更新日志.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/更新日志.html.js"), meta: {"title":"更新日志"} }],
  ["/yicheng/markdown/%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE.html", { loader: () => import(/* webpackChunkName: "yicheng_markdown_用户协议.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/yicheng/markdown/用户协议.html.js"), meta: {"title":"用户协议"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/projects/Product/lotoze-blog-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
