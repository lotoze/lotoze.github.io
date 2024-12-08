import { CodeTabs } from "F:/projects/Product/lotoze-blog-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_a4gc4wmesxbgradtwnl7lj3wxa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/projects/Product/lotoze-blog-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_a4gc4wmesxbgradtwnl7lj3wxa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/projects/Product/lotoze-blog-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.61_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_a4gc4wmesxbgradtwnl7lj3wxa/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
