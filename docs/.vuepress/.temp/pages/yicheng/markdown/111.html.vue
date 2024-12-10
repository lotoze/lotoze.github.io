<template><div><h2 id="寄语与示例" tabindex="-1"><a class="header-anchor" href="#寄语与示例"><span>寄语与示例</span></a></h2>
<p>本人<code v-pre>lotoze[骆驼泽]</code>，比较喜欢骆驼，它很有耐力=坚持，个人感觉坚持是现在大环境下最可贵的品质！</p>
<p>个人网站：https://lotoze.github.io/</p>
<p>永远学习，永远坚持，永远热爱~</p>
<p>奕澄名字取自我儿子和闺女（哈哈，还没出世）的名字最后一个字~</p>
<p>感谢我妻子和孩子的陪伴与支持，我永远爱他们！</p>
<p>愿奕澄与您同行~</p>
<p>奕澄Markdown 是一款<strong>所见即所得</strong>编辑器，支持 <em>Markdown</em>。</p>
<ul>
<li>不熟悉 Markdown 可使用工具栏或快捷键进行排版</li>
<li>熟悉 Markdown 可直接排版，也可切换为分屏预览</li>
</ul>
<p>这是一篇讲解如何正确使用 <strong>Markdown</strong> 的排版示例，学会这个很有必要，能让你的文章有更佳清晰的排版。</p>
<h2 id="语法指导" tabindex="-1"><a class="header-anchor" href="#语法指导"><span>语法指导</span></a></h2>
<h3 id="普通内容" tabindex="-1"><a class="header-anchor" href="#普通内容"><span>普通内容</span></a></h3>
<p>这段内容展示了在内容里面一些排版格式，比如：</p>
<ul>
<li><strong>加粗</strong> - <code v-pre>**加粗**</code></li>
<li><em>倾斜</em> - <code v-pre>*倾斜*</code></li>
<li><s>删除线</s> - <code v-pre>~~删除线~~</code></li>
<li><code v-pre>Code 标记</code> - <code v-pre>`Code 标记`</code></li>
<li><a href="https://ld246.com" target="_blank" rel="noopener noreferrer">超级链接</a> - <code v-pre>[超级链接](https://lotoze.github.io)</code></li>
<li><a href="mailto:username@gmail.com" target="_blank" rel="noopener noreferrer">username@gmail.com</a> - <code v-pre>[username@gmail.com](mailto:username@gmail.com)</code></li>
</ul>
<h3 id="表情符号-emoji" tabindex="-1"><a class="header-anchor" href="#表情符号-emoji"><span>表情符号 Emoji</span></a></h3>
<p>支持大部分标准的表情符号，可使用输入法直接输入，也可手动输入字符格式。通过输入 <code v-pre>:</code> 触发自动完成，可在个人设置中[设置常用表情]。</p>
<h4 id="一些表情例子" tabindex="-1"><a class="header-anchor" href="#一些表情例子"><span>一些表情例子</span></a></h4>
<p>😄 😆 😵 😭 😰 😅  😢 😤 😍 😌
👍 👎 💯 👏 🔔 🎁 ❓ 💣 ❤️ ☕️ 🌀 🙇 💋 🙏 💢</p>
<h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h3>
<p>你可以选择使用 H1 至 H6，使用 ##(N) 打头。建议帖子或回帖中的顶级标题使用 Heading 3，不要使用 1 或 2，因为 1 是系统站点级，2 是帖子标题级。</p>
<blockquote>
<p>NOTE: 别忘了 # 后面需要有空格！</p>
</blockquote>
<h4 id="heading-4" tabindex="-1"><a class="header-anchor" href="#heading-4"><span>Heading 4</span></a></h4>
<h5 id="heading-5" tabindex="-1"><a class="header-anchor" href="#heading-5"><span>Heading 5</span></a></h5>
<h6 id="heading-6" tabindex="-1"><a class="header-anchor" href="#heading-6"><span>Heading 6</span></a></h6>
<h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h3>
<blockquote>
<p>注意：上传图片会自动引入，路径为绝对路径！</p>
</blockquote>
<p><img src="@source/yicheng/upload/logo.png" alt="alt 文本"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">![alt 文本](http://image-path.png)</span>
<span class="line">![alt 文本](http://image-path.png "图片 Title 值")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>支持复制粘贴直接上传。</p>
<h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h3>
<h4 id="普通" tabindex="-1"><a class="header-anchor" href="#普通"><span>普通</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">*emphasize*    **strong**</span>
<span class="line">_emphasize_    __strong__</span>
<span class="line">var a = 1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="语法高亮支持" tabindex="-1"><a class="header-anchor" href="#语法高亮支持"><span>语法高亮支持</span></a></h4>
<p>如果在 ``` 后面跟随语言名称，可以有语法高亮的效果哦，比如:</p>
<h5 id="演示-go-代码高亮" tabindex="-1"><a class="header-anchor" href="#演示-go-代码高亮"><span>演示 Go 代码高亮</span></a></h5>
<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre v-pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">"fmt"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, 世界"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="演示-java-高亮" tabindex="-1"><a class="header-anchor" href="#演示-java-高亮"><span>演示 Java 高亮</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Tip: 语言名称支持下面这些: <code v-pre>ruby</code>, <code v-pre>python</code>, <code v-pre>js</code>, <code v-pre>html</code>, <code v-pre>erb</code>, <code v-pre>css</code>, <code v-pre>coffee</code>, <code v-pre>bash</code>, <code v-pre>json</code>, <code v-pre>yml</code>, <code v-pre>xml</code> ...</p>
</blockquote>
<h3 id="有序、无序、任务列表" tabindex="-1"><a class="header-anchor" href="#有序、无序、任务列表"><span>有序、无序、任务列表</span></a></h3>
<h4 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表"><span>无序列表</span></a></h4>
<ul>
<li>Java
<ul>
<li>Spring
<ul>
<li>IoC</li>
<li>AOP</li>
</ul>
</li>
</ul>
</li>
<li>Go
<ul>
<li>gofmt</li>
<li>Wide</li>
</ul>
</li>
<li>Node.js
<ul>
<li>Koa</li>
<li>Express</li>
</ul>
</li>
</ul>
<h4 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表"><span>有序列表</span></a></h4>
<ol>
<li>Node.js
<ol>
<li>Express</li>
<li>Koa</li>
<li>Sails</li>
</ol>
</li>
<li>Go
<ol>
<li>gofmt</li>
<li>Wide</li>
</ol>
</li>
<li>Java
<ol>
<li>Latke</li>
<li>IDEA</li>
</ol>
</li>
</ol>
<h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4>
<ul>
<li>[X] 发布 Sym</li>
<li>[X] 发布 Solo</li>
<li>[ ] 预约牙医</li>
</ul>
<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h3>
<p>如果需要展示数据什么的，可以选择使用表格。</p>
<table>
<thead>
<tr>
<th>header 1</th>
<th>header 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>cell 1</td>
<td>cell 2</td>
</tr>
<tr>
<td>cell 3</td>
<td>cell 4</td>
</tr>
<tr>
<td>cell 5</td>
<td>cell 6</td>
</tr>
</tbody>
</table>
<h3 id="隐藏细节" tabindex="-1"><a class="header-anchor" href="#隐藏细节"><span>隐藏细节</span></a></h3>
<details>
<summary>这里是摘要部分。</summary>
这里是细节部分。
</details>
<h3 id="段落" tabindex="-1"><a class="header-anchor" href="#段落"><span>段落</span></a></h3>
<p>空行可以将内容进行分段，便于阅读。（这是第一段）</p>
<p>使用空行在 Markdown 排版中相当重要。（这是第二段）</p>
<h3 id="链接引用" tabindex="-1"><a class="header-anchor" href="#链接引用"><span>链接引用</span></a></h3>
<p><a href="lotoze.github.io">链接文本</a></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[链接文本][链接标识]</span>
<span class="line"></span>
<span class="line">[链接标识]: https://lotoze.github.io</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式"><span>数学公式</span></a></h3>
<p>多行公式块：</p>
<p>$$
\frac{1}{
\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
1+\frac{e^{-6\pi}}
{1+\frac{e^{-8\pi}}{1+\cdots}}
}
}
$$</p>
<p>行内公式：</p>
<p>公式 $a^2 + b^2 = \color{red}c^2$ 是行内。</p>
<h3 id="脑图" tabindex="-1"><a class="header-anchor" href="#脑图"><span>脑图</span></a></h3>
<div class="language-mindmap line-numbers-mode" data-highlighter="prismjs" data-ext="mindmap" data-title="mindmap"><pre v-pre><code><span class="line">- 教程</span>
<span class="line">- 语法指导</span>
<span class="line">  - 普通内容</span>
<span class="line">  - 提及用户</span>
<span class="line">  - 表情符号 Emoji</span>
<span class="line">    - 一些表情例子</span>
<span class="line">  - 大标题 - Heading 3</span>
<span class="line">    - Heading 4</span>
<span class="line">      - Heading 5</span>
<span class="line">        - Heading 6</span>
<span class="line">  - 图片</span>
<span class="line">  - 代码块</span>
<span class="line">    - 普通</span>
<span class="line">    - 语法高亮支持</span>
<span class="line">      - 演示 Go 代码高亮</span>
<span class="line">      - 演示 Java 高亮</span>
<span class="line">  - 有序、无序、任务列表</span>
<span class="line">    - 无序列表</span>
<span class="line">    - 有序列表</span>
<span class="line">    - 任务列表</span>
<span class="line">  - 表格</span>
<span class="line">  - 隐藏细节</span>
<span class="line">  - 段落</span>
<span class="line">  - 链接引用</span>
<span class="line">  - 数学公式</span>
<span class="line">  - 脑图</span>
<span class="line">  - 流程图</span>
<span class="line">  - 时序图</span>
<span class="line">  - 甘特图</span>
<span class="line">  - 图表</span>
<span class="line">  - 五线谱</span>
<span class="line">  - Graphviz</span>
<span class="line">  - 多媒体</span>
<span class="line">  - 脚注</span>
<span class="line">- 快捷键</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    c1<span class="token arrow operator">--></span>a2</span>
<span class="line">    <span class="token keyword">subgraph</span> one</span>
<span class="line">    a1<span class="token arrow operator">--></span>a2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">subgraph</span> two</span>
<span class="line">    b1<span class="token arrow operator">--></span>b2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">subgraph</span> three</span>
<span class="line">    c1<span class="token arrow operator">--></span>c2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    Alice<span class="token arrow operator">->></span>John<span class="token operator">:</span> Hello John, how are you?</span>
<span class="line">    <span class="token keyword">loop</span> Every minute</span>
<span class="line">        John<span class="token arrow operator">-->></span>Alice<span class="token operator">:</span> Great!</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="甘特图" tabindex="-1"><a class="header-anchor" href="#甘特图"><span>甘特图</span></a></h3>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid" data-title="mermaid"><pre v-pre><code><span class="line"><span class="token keyword">gantt</span></span>
<span class="line">    title A Gantt Diagram</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line">    section Section</span>
<span class="line">    A task           <span class="token operator">:</span>a1, 2019-01-01, 30d</span>
<span class="line">    Another task     <span class="token operator">:</span>after a1  , 20d</span>
<span class="line">    section Another</span>
<span class="line">    Task in sec      <span class="token operator">:</span>2019-01-12  , 12d</span>
<span class="line">    another task      <span class="token operator">:</span> 24d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图表" tabindex="-1"><a class="header-anchor" href="#图表"><span>图表</span></a></h3>
<div class="language-echarts line-numbers-mode" data-highlighter="prismjs" data-ext="echarts" data-title="echarts"><pre v-pre><code><span class="line">{</span>
<span class="line">  &quot;title&quot;: { &quot;text&quot;: &quot;最近 30 天&quot; },</span>
<span class="line">  &quot;tooltip&quot;: { &quot;trigger&quot;: &quot;axis&quot;, &quot;axisPointer&quot;: { &quot;lineStyle&quot;: { &quot;width&quot;: 0 } } },</span>
<span class="line">  &quot;legend&quot;: { &quot;data&quot;: [&quot;帖子&quot;, &quot;用户&quot;, &quot;回帖&quot;] },</span>
<span class="line">  &quot;xAxis&quot;: [{</span>
<span class="line">      &quot;type&quot;: &quot;category&quot;,</span>
<span class="line">      &quot;boundaryGap&quot;: false,</span>
<span class="line">      &quot;data&quot;: [&quot;2019-05-08&quot;,&quot;2019-05-09&quot;,&quot;2019-05-10&quot;,&quot;2019-05-11&quot;,&quot;2019-05-12&quot;,&quot;2019-05-13&quot;,&quot;2019-05-14&quot;,&quot;2019-05-15&quot;,&quot;2019-05-16&quot;,&quot;2019-05-17&quot;,&quot;2019-05-18&quot;,&quot;2019-05-19&quot;,&quot;2019-05-20&quot;,&quot;2019-05-21&quot;,&quot;2019-05-22&quot;,&quot;2019-05-23&quot;,&quot;2019-05-24&quot;,&quot;2019-05-25&quot;,&quot;2019-05-26&quot;,&quot;2019-05-27&quot;,&quot;2019-05-28&quot;,&quot;2019-05-29&quot;,&quot;2019-05-30&quot;,&quot;2019-05-31&quot;,&quot;2019-06-01&quot;,&quot;2019-06-02&quot;,&quot;2019-06-03&quot;,&quot;2019-06-04&quot;,&quot;2019-06-05&quot;,&quot;2019-06-06&quot;,&quot;2019-06-07&quot;],</span>
<span class="line">      &quot;axisTick&quot;: { &quot;show&quot;: false },</span>
<span class="line">      &quot;axisLine&quot;: { &quot;show&quot;: false }</span>
<span class="line">  }],</span>
<span class="line">  &quot;yAxis&quot;: [{ &quot;type&quot;: &quot;value&quot;, &quot;axisTick&quot;: { &quot;show&quot;: false }, &quot;axisLine&quot;: { &quot;show&quot;: false }, &quot;splitLine&quot;: { &quot;lineStyle&quot;: { &quot;color&quot;: &quot;rgba(0, 0, 0, .38)&quot;, &quot;type&quot;: &quot;dashed&quot; } } }],</span>
<span class="line">  &quot;series&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;name&quot;: &quot;帖子&quot;, &quot;type&quot;: &quot;line&quot;, &quot;smooth&quot;: true, &quot;itemStyle&quot;: { &quot;color&quot;: &quot;#d23f31&quot; }, &quot;areaStyle&quot;: { &quot;normal&quot;: {} }, &quot;z&quot;: 3,</span>
<span class="line">      &quot;data&quot;: [&quot;18&quot;,&quot;14&quot;,&quot;22&quot;,&quot;9&quot;,&quot;7&quot;,&quot;18&quot;,&quot;10&quot;,&quot;12&quot;,&quot;13&quot;,&quot;16&quot;,&quot;6&quot;,&quot;9&quot;,&quot;15&quot;,&quot;15&quot;,&quot;12&quot;,&quot;15&quot;,&quot;8&quot;,&quot;14&quot;,&quot;9&quot;,&quot;10&quot;,&quot;29&quot;,&quot;22&quot;,&quot;14&quot;,&quot;22&quot;,&quot;9&quot;,&quot;10&quot;,&quot;15&quot;,&quot;9&quot;,&quot;9&quot;,&quot;15&quot;,&quot;0&quot;]</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;name&quot;: &quot;用户&quot;, &quot;type&quot;: &quot;line&quot;, &quot;smooth&quot;: true, &quot;itemStyle&quot;: { &quot;color&quot;: &quot;#f1e05a&quot; }, &quot;areaStyle&quot;: { &quot;normal&quot;: {} }, &quot;z&quot;: 2,</span>
<span class="line">      &quot;data&quot;: [&quot;31&quot;,&quot;33&quot;,&quot;30&quot;,&quot;23&quot;,&quot;16&quot;,&quot;29&quot;,&quot;23&quot;,&quot;37&quot;,&quot;41&quot;,&quot;29&quot;,&quot;16&quot;,&quot;13&quot;,&quot;39&quot;,&quot;23&quot;,&quot;38&quot;,&quot;136&quot;,&quot;89&quot;,&quot;35&quot;,&quot;22&quot;,&quot;50&quot;,&quot;57&quot;,&quot;47&quot;,&quot;36&quot;,&quot;59&quot;,&quot;14&quot;,&quot;23&quot;,&quot;46&quot;,&quot;44&quot;,&quot;51&quot;,&quot;43&quot;,&quot;0&quot;]</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;name&quot;: &quot;回帖&quot;, &quot;type&quot;: &quot;line&quot;, &quot;smooth&quot;: true, &quot;itemStyle&quot;: { &quot;color&quot;: &quot;#4285f4&quot; }, &quot;areaStyle&quot;: { &quot;normal&quot;: {} }, &quot;z&quot;: 1,</span>
<span class="line">      &quot;data&quot;: [&quot;35&quot;,&quot;42&quot;,&quot;73&quot;,&quot;15&quot;,&quot;43&quot;,&quot;58&quot;,&quot;55&quot;,&quot;35&quot;,&quot;46&quot;,&quot;87&quot;,&quot;36&quot;,&quot;15&quot;,&quot;44&quot;,&quot;76&quot;,&quot;130&quot;,&quot;73&quot;,&quot;50&quot;,&quot;20&quot;,&quot;21&quot;,&quot;54&quot;,&quot;48&quot;,&quot;73&quot;,&quot;60&quot;,&quot;89&quot;,&quot;26&quot;,&quot;27&quot;,&quot;70&quot;,&quot;63&quot;,&quot;55&quot;,&quot;37&quot;,&quot;0&quot;]</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五线谱" tabindex="-1"><a class="header-anchor" href="#五线谱"><span>五线谱</span></a></h3>
<div class="language-abc line-numbers-mode" data-highlighter="prismjs" data-ext="abc" data-title="abc"><pre v-pre><code><span class="line">X: 24</span>
<span class="line">T: Clouds Thicken</span>
<span class="line">C: Paul Rosen</span>
<span class="line">S: Copyright 2005, Paul Rosen</span>
<span class="line">M: 6/8</span>
<span class="line">L: 1/8</span>
<span class="line">Q: 3/8=116</span>
<span class="line">R: Creepy Jig</span>
<span class="line">K: Em</span>
<span class="line">|:&quot;Em&quot;EEE E2G|&quot;C7&quot;_B2A G2F|&quot;Em&quot;EEE E2G|\</span>
<span class="line">&quot;C7&quot;_B2A &quot;B7&quot;=B3|&quot;Em&quot;EEE E2G|</span>
<span class="line">&quot;C7&quot;_B2A G2F|&quot;Em&quot;GFE &quot;D (Bm7)&quot;F2D|\</span>
<span class="line">1&quot;Em&quot;E3-E3:|2&quot;Em&quot;E3-E2B|:&quot;Em&quot;e2e gfe|</span>
<span class="line">&quot;G&quot;g2ab3|&quot;Em&quot;gfeg2e|&quot;D&quot;fedB2A|&quot;Em&quot;e2e gfe|\</span>
<span class="line">&quot;G&quot;g2ab3|&quot;Em&quot;gfe&quot;D&quot;f2d|&quot;Em&quot;e3-e3:|</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="graphviz" tabindex="-1"><a class="header-anchor" href="#graphviz"><span>Graphviz</span></a></h3>
<div class="language-graphviz line-numbers-mode" data-highlighter="prismjs" data-ext="graphviz" data-title="graphviz"><pre v-pre><code><span class="line">digraph finite_state_machine {</span>
<span class="line">    rankdir=LR;</span>
<span class="line">    size=&quot;8,5&quot;</span>
<span class="line">    node [shape = doublecircle]; S;</span>
<span class="line">    node [shape = point ]; qi</span>
<span class="line"></span>
<span class="line">    node [shape = circle];</span>
<span class="line">    qi -&gt; S;</span>
<span class="line">    S  -&gt; q1 [ label = &quot;a&quot; ];</span>
<span class="line">    S  -&gt; S  [ label = &quot;a&quot; ];</span>
<span class="line">    q1 -&gt; S  [ label = &quot;a&quot; ];</span>
<span class="line">    q1 -&gt; q2 [ label = &quot;ddb&quot; ];</span>
<span class="line">    q2 -&gt; q1 [ label = &quot;b&quot; ];</span>
<span class="line">    q2 -&gt; q2 [ label = &quot;b&quot; ];</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>Flowchart</span></a></h3>
<div class="language-flowchart line-numbers-mode" data-highlighter="prismjs" data-ext="flowchart" data-title="flowchart"><pre v-pre><code><span class="line">st=&gt;start: Start</span>
<span class="line">op=&gt;operation: Your Operation</span>
<span class="line">cond=&gt;condition: Yes or No?</span>
<span class="line">e=&gt;end</span>
<span class="line"></span>
<span class="line">st-&gt;op-&gt;cond</span>
<span class="line">cond(yes)-&gt;e</span>
<span class="line">cond(no)-&gt;op</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多媒体" tabindex="-1"><a class="header-anchor" href="#多媒体"><span>多媒体</span></a></h3>
<p>支持 v.qq.com，youtube.com，youku.com，coub.com，facebook.com/video，dailymotion.com，.mp4，.m4v，.ogg，.ogv，.webm，.mp3，.wav 链接解析</p>
<p>https://www.bilibili.com/video/BV1ss4y127gi?spm_id_from=333.788.videopod.sections</p>
<h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h3>
<p>这里是一个脚注引用<a href="%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%84%9A%E6%B3%A8%E5%AE%9A%E4%B9%89%E3%80%82">^1</a>，这里是另一个脚注引用<a href="%E8%84%9A%E6%B3%A8%E5%AE%9A%E4%B9%89%E5%8F%AF%E4%BD%BF%E7%94%A8%E5%A4%9A%E6%AE%B5%E5%86%85%E5%AE%B9%E3%80%82">^bignote</a>。</p>
<pre><code>   缩进对齐的段落包含在这个脚注定义内。

   ```
   可以使用代码块。
   ```
   还有其他行级排版语法，比如**加粗**和[链接](https://lotoze.github.io)。
</code></pre>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">这里是一个脚注引用[^1]，这里是另一个脚注引用[^bignote]。</span>
<span class="line">[^1]: 第一个脚注定义。</span>
<span class="line">[^bignote]: 脚注定义可使用多段内容。</span>
<span class="line"></span>
<span class="line">    缩进对齐的段落包含在这个脚注定义内。</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>可以使用代码块。
```
**加粗**
[链接](https://lotoze.github.io)
</code></pre>
<h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>表情</td>
<td>:/⌘ E</td>
<td></td>
</tr>
<tr>
<td>标题</td>
<td>Ctrl H / ⌘ H</td>
<td>参见下文</td>
</tr>
<tr>
<td>粗体</td>
<td>Ctrl B / ⌘ B</td>
<td></td>
</tr>
<tr>
<td>斜体</td>
<td>Ctrl I / ⌘ I</td>
<td></td>
</tr>
<tr>
<td>删除线</td>
<td>Ctrl S / ⌘ S</td>
<td></td>
</tr>
<tr>
<td>链接</td>
<td>Ctrl K / ⌘ K</td>
<td>参见下文</td>
</tr>
<tr>
<td>无序列表</td>
<td>Ctrl L / ⌘ L</td>
<td>参见下文</td>
</tr>
<tr>
<td>有序列表</td>
<td>Ctrl O / ⌘ O</td>
<td>参见下文</td>
</tr>
<tr>
<td>任务列表</td>
<td>Ctrl J / ⌘ J</td>
<td>参见下文</td>
</tr>
<tr>
<td>引用</td>
<td>Ctrl ; / ⌘ ;</td>
<td>参见下文</td>
</tr>
<tr>
<td>分割线</td>
<td>Ctrl Shift H / ⌘ ⇧ H</td>
<td></td>
</tr>
<tr>
<td>代码块</td>
<td>Ctrl U / ⌘ U</td>
<td>参见下文</td>
</tr>
<tr>
<td>代码</td>
<td>Ctrl G / ⌘ G</td>
<td></td>
</tr>
<tr>
<td>元素前插入空块</td>
<td>Ctrl Shift B / ⌘ ⇧ B</td>
<td>wysiwyg &amp; ir 模式</td>
</tr>
<tr>
<td>元素后插入空块</td>
<td>Ctrl Shift E / ⌘ ⇧ E</td>
<td>wysiwyg &amp; ir 模式</td>
</tr>
<tr>
<td>表格</td>
<td>Ctrl M / ⌘ M</td>
<td>参见下文</td>
</tr>
<tr>
<td>撤销</td>
<td>Ctrl Z / ⌘ Z</td>
<td></td>
</tr>
<tr>
<td>重做</td>
<td>Ctrl Y / ⌘ Y</td>
<td></td>
</tr>
<tr>
<td>隐藏编辑器</td>
<td>Ctrl P / ⌘ P</td>
<td>sv 模式</td>
</tr>
<tr>
<td>全屏</td>
<td>Ctrl ' / ⌘ '</td>
<td></td>
</tr>
<tr>
<td>向上移动块元素</td>
<td>Ctrl Shift U / ⌘ ⇧ U</td>
<td>wysiwyg &amp; ir 模式</td>
</tr>
<tr>
<td>向下移动块元素</td>
<td>Ctrl Shift D / ⌘ ⇧ D</td>
<td>wysiwyg &amp; ir 模式</td>
</tr>
<tr>
<td>移除当前元素</td>
<td>Ctrl Shift X / ⌘ ⇧ X</td>
<td>wysiwyg 模式</td>
</tr>
<tr>
<td>At 用户</td>
<td>@</td>
<td></td>
</tr>
<tr>
<td>错误输入</td>
<td>Backspace</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="标题-ctrl-h-⌘-h" tabindex="-1"><a class="header-anchor" href="#标题-ctrl-h-⌘-h"><span>标题 Ctrl H / ⌘ H</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>变大</td>
<td>Ctrl + / ⌘ +</td>
</tr>
<tr>
<td>变小</td>
<td>Ctrl - / ⌘ -</td>
</tr>
<tr>
<td>H1-H6</td>
<td>Ctrl Alt 1/2/3/4/5/6 / ⌘ ⌥ 1/2/3/4/5/6</td>
</tr>
<tr>
<td>弹出菜单</td>
<td>Ctrl H / ⌘ H</td>
</tr>
</tbody>
</table>
<h3 id="链接-ctrl-k-⌘-k" tabindex="-1"><a class="header-anchor" href="#链接-ctrl-k-⌘-k"><span>链接 Ctrl K / ⌘ K</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>输入框和元素之间切换</td>
<td>Alt Enter / ⌥ Enter</td>
</tr>
<tr>
<td>输入框之间切换</td>
<td>Tab</td>
</tr>
</tbody>
</table>
<h3 id="列表-ctrl-l-o-j-⌘-l-o-j" tabindex="-1"><a class="header-anchor" href="#列表-ctrl-l-o-j-⌘-l-o-j"><span>列表 Ctrl L/O/J / ⌘ L/O/J</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>缩进</td>
<td>Tab Ctrl Shift I / ⌘ ⇧ I</td>
<td>Tab: 光标需位于开头</td>
</tr>
<tr>
<td>反向缩进</td>
<td>Shift Tab / ⇧ Tab Ctrl Shift O / ⌘ ⇧ O Enter</td>
<td>Shift Tab / ⇧ Tab: 光标需位于开头 Enter: 需为空列表项</td>
</tr>
<tr>
<td>完成和待办之间切换</td>
<td>Ctrl Shift J / ⌘ ⇧ J</td>
<td>任务列表</td>
</tr>
</tbody>
</table>
<h3 id="引用-ctrl-⌘" tabindex="-1"><a class="header-anchor" href="#引用-ctrl-⌘"><span>引用 Ctrl ; / ⌘ ;</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>在顶层引用前插入空块</td>
<td>Ctrl Alt Enter / ⌘ ⌥ Enter</td>
<td>wysiwyg 模式</td>
</tr>
<tr>
<td>在顶层引用后插入空块</td>
<td>Alt Enter / ⌥ Enter</td>
<td>wysiwyg 模式</td>
</tr>
<tr>
<td>插入块元素</td>
<td>Ctrl Shift : / ⌘ ⇧ : &gt;</td>
<td>Ctrl Shift : / ⌘ ⇧ :: 块元素变为引用 &gt;: 内联元素中插入引用</td>
</tr>
<tr>
<td>引用和块元素之间切换</td>
<td>Ctrl ; / ⌘ ;</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="代码块-ctrl-u-⌘-u" tabindex="-1"><a class="header-anchor" href="#代码块-ctrl-u-⌘-u"><span>代码块 Ctrl U / ⌘ U</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>输入框和代码块之间切换</td>
<td>Alt Enter / ⌥ Enter</td>
</tr>
<tr>
<td>隐藏编辑界面</td>
<td>Escape</td>
</tr>
<tr>
<td>选中所有代码</td>
<td>Ctrl A / ⌘ A</td>
</tr>
</tbody>
</table>
<h3 id="表格-ctrl-m-⌘-m" tabindex="-1"><a class="header-anchor" href="#表格-ctrl-m-⌘-m"><span>表格 Ctrl M / ⌘ M</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>在上方插入一行</td>
<td>Ctrl + / ⌘ ⇧ F</td>
</tr>
<tr>
<td>在下方插入一行</td>
<td>Ctrl + / ⌘ +</td>
</tr>
<tr>
<td>删除行</td>
<td>Ctrl - / ⌘ -</td>
</tr>
<tr>
<td>在左边插入一列</td>
<td>Ctrl Shift + / ⌘ ⇧ G</td>
</tr>
<tr>
<td>在右边插入一列</td>
<td>Ctrl Shift + / ⌘ ⇧ +</td>
</tr>
<tr>
<td>删除列</td>
<td>Ctrl Shift - / ⌘ ⇧ -</td>
</tr>
<tr>
<td>左对齐</td>
<td>Ctrl Shift L / ⌘ ⇧ L</td>
</tr>
<tr>
<td>中对齐</td>
<td>Ctrl Shift C / ⌘ ⇧ C</td>
</tr>
<tr>
<td>右对齐</td>
<td>Ctrl Shift R / ⌘ ⇧ R</td>
</tr>
<tr>
<td>光标移动到输入框中</td>
<td>Alt Enter / ⌥ Enter</td>
</tr>
<tr>
<td>输入框之间切换</td>
<td>Tab</td>
</tr>
<tr>
<td>将光标移动到上一个元素</td>
<td>Shift Tab / ⇧ Tab Backspace</td>
</tr>
<tr>
<td>将光标移动到下一个元素</td>
<td>Tab</td>
</tr>
</tbody>
</table>
<h2 id="english" tabindex="-1"><a class="header-anchor" href="#english"><span>English</span></a></h2>
<h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>Emoji</td>
<td>:/⌘ E</td>
<td></td>
</tr>
<tr>
<td>Headings</td>
<td>Ctrl H / ⌘ H</td>
<td>see below</td>
</tr>
<tr>
<td>Bold</td>
<td>Ctrl B / ⌘ B</td>
<td></td>
</tr>
<tr>
<td>Italic</td>
<td>Ctrl I / ⌘ I</td>
<td></td>
</tr>
<tr>
<td>Strikeout</td>
<td>Ctrl S / ⌘ S</td>
<td></td>
</tr>
<tr>
<td>Link</td>
<td>Ctrl K / ⌘ K</td>
<td>see below</td>
</tr>
<tr>
<td>Unordered List</td>
<td>Ctrl L / ⌘ L</td>
<td>see below</td>
</tr>
<tr>
<td>Ordered List</td>
<td>Ctrl O / ⌘ O</td>
<td>see below</td>
</tr>
<tr>
<td>Task List</td>
<td>Ctrl J / ⌘ J</td>
<td>see below</td>
</tr>
<tr>
<td>Blockquote</td>
<td>Ctrl ; / ⌘ ;</td>
<td>see below</td>
</tr>
<tr>
<td>Horizontal</td>
<td>Ctrl Shift H / ⌘ ⇧ H</td>
<td></td>
</tr>
<tr>
<td>Code Block</td>
<td>Ctrl U / ⌘ U</td>
<td>see below</td>
</tr>
<tr>
<td>Inline Code</td>
<td>Ctrl G / ⌘ G</td>
<td></td>
</tr>
<tr>
<td>Insert Block to Before</td>
<td>Ctrl Shift B / ⌘ ⇧ B</td>
<td>wysiwyg &amp; ir mode</td>
</tr>
<tr>
<td>Insert Block to End</td>
<td>Ctrl Shift E / ⌘ ⇧ E</td>
<td>wysiwyg &amp; ir mode</td>
</tr>
<tr>
<td>Table</td>
<td>Ctrl M / ⌘ M</td>
<td>see below</td>
</tr>
<tr>
<td>Undo</td>
<td>Ctrl Z / ⌘ Z</td>
<td></td>
</tr>
<tr>
<td>Redo</td>
<td>Ctrl Y / ⌘ Y</td>
<td></td>
</tr>
<tr>
<td>Hide Edit</td>
<td>Ctrl P / ⌘ P</td>
<td>sv mode</td>
</tr>
<tr>
<td>Fullscreen</td>
<td>Ctrl ' / ⌘ '</td>
<td></td>
</tr>
<tr>
<td>Move Block to Up</td>
<td>Ctrl Shift U / ⌘ ⇧ U</td>
<td>wysiwyg &amp; ir mode</td>
</tr>
<tr>
<td>Move Block to Down</td>
<td>Ctrl Shift D / ⌘ ⇧ D</td>
<td>wysiwyg &amp; ir mode</td>
</tr>
<tr>
<td>Remove</td>
<td>Ctrl Shift X / ⌘ ⇧ X</td>
<td>wysiwyg mode</td>
</tr>
<tr>
<td>At User</td>
<td>@</td>
<td></td>
</tr>
<tr>
<td>Mistyped</td>
<td>Backspace</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="headings-ctrl-h-⌘-h" tabindex="-1"><a class="header-anchor" href="#headings-ctrl-h-⌘-h"><span>Headings Ctrl H / ⌘ H</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bigger</td>
<td>Ctrl + / ⌘ +</td>
</tr>
<tr>
<td>Smaller</td>
<td>Ctrl - / ⌘ -</td>
</tr>
<tr>
<td>H1-H6</td>
<td>Ctrl Alt 1/2/3/4/5/6 / ⌘ ⌥ 1/2/3/4/5/6</td>
</tr>
<tr>
<td>Menu</td>
<td>Ctrl H / ⌘ H</td>
</tr>
</tbody>
</table>
<h3 id="link-ctrl-k-⌘-k" tabindex="-1"><a class="header-anchor" href="#link-ctrl-k-⌘-k"><span>Link Ctrl K / ⌘ K</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toggle Input and Link</td>
<td>Alt Enter / ⌥ Enter</td>
</tr>
<tr>
<td>Toggle Input</td>
<td>Tab</td>
</tr>
</tbody>
</table>
<h3 id="list-ctrl-l-o-j-⌘-l-o-j" tabindex="-1"><a class="header-anchor" href="#list-ctrl-l-o-j-⌘-l-o-j"><span>List Ctrl L/O/J / ⌘ L/O/J</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>Indent</td>
<td>Tab Ctrl Shift I / ⌘ ⇧ I</td>
<td>Tab: Caret must be at Zero</td>
</tr>
<tr>
<td>Unindent</td>
<td>Shift Tab / ⇧ Tab Ctrl Shift O / ⌘ ⇧ O Enter</td>
<td>Shift Tab / ⇧ Tab: Caret must be at Zero Enter: Empty</td>
</tr>
<tr>
<td>Toggle Check</td>
<td>Ctrl Shift J / ⌘ ⇧ J</td>
<td>Task List</td>
</tr>
</tbody>
</table>
<h3 id="blockquote-ctrl-⌘" tabindex="-1"><a class="header-anchor" href="#blockquote-ctrl-⌘"><span>Blockquote Ctrl ; / ⌘ ;</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>Move Caret to Top Start</td>
<td>Ctrl Alt Enter / ⌘ ⌥ Enter</td>
<td>wysiwyg mode</td>
</tr>
<tr>
<td>Move Caret to Top End</td>
<td>Alt Enter / ⌥ Enter</td>
<td>wysiwyg mode</td>
</tr>
<tr>
<td>Insert Blockquote</td>
<td>Ctrl Shift : / ⌘ ⇧ : &gt;</td>
<td>Ctrl Shift : / ⌘ ⇧ :: Block Element &gt;: Inline Element</td>
</tr>
<tr>
<td>Toggle Blockquote</td>
<td>Ctrl ; / ⌘ ;</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="code-block-ctrl-u-⌘-u" tabindex="-1"><a class="header-anchor" href="#code-block-ctrl-u-⌘-u"><span>Code Block Ctrl U / ⌘ U</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toggle Input and Code Block</td>
<td>Alt Enter / ⌥ Enter</td>
</tr>
<tr>
<td>Hide Edit</td>
<td>Escape</td>
</tr>
<tr>
<td>Select all Code Block</td>
<td>Ctrl A / ⌘ A</td>
</tr>
</tbody>
</table>
<h3 id="table-ctrl-m-⌘-m" tabindex="-1"><a class="header-anchor" href="#table-ctrl-m-⌘-m"><span>Table Ctrl M / ⌘ M</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Keymap</th>
</tr>
</thead>
<tbody>
<tr>
<td>Insert 1 above</td>
<td>Ctrl + / ⌘ ⇧ F</td>
</tr>
<tr>
<td>Insert 1 below</td>
<td>Ctrl + / ⌘ +</td>
</tr>
<tr>
<td>Delete Row</td>
<td>Ctrl - / ⌘ -</td>
</tr>
<tr>
<td>Insert 1 left</td>
<td>Ctrl Shift + / ⌘ ⇧ G</td>
</tr>
<tr>
<td>Insert 1 right</td>
<td>Ctrl Shift + / ⌘ ⇧ +</td>
</tr>
<tr>
<td>Delete Column</td>
<td>Ctrl Shift - / ⌘ ⇧ -</td>
</tr>
<tr>
<td>Left Alignment</td>
<td>Ctrl Shift L / ⌘ ⇧ L</td>
</tr>
<tr>
<td>Center Alignment</td>
<td>Ctrl Shift C / ⌘ ⇧ C</td>
</tr>
<tr>
<td>Right Alignment</td>
<td>Ctrl Shift R / ⌘ ⇧ R</td>
</tr>
<tr>
<td>Move Caret to Input</td>
<td>Alt Enter / ⌥ Enter</td>
</tr>
<tr>
<td>Toggle Input</td>
<td>Tab</td>
</tr>
<tr>
<td>Move Caret to Previous Cell</td>
<td>Shift Tab / ⇧ Tab Backspace</td>
</tr>
<tr>
<td>Move Caret to Next Cell</td>
<td>Tab</td>
</tr>
</tbody>
</table>
</div></template>


