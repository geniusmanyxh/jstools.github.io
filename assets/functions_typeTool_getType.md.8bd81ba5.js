import{_ as o,c as l,b as a,d as p,t as n,a as e,o as t}from"./app.01e1e0d0.js";const m=JSON.parse('{"title":"\u7C7B\u578B\u5224\u65AD","titleTemplate":"getType","description":"","frontmatter":{"title":"\u7C7B\u578B\u5224\u65AD","titleTemplate":"getType"},"headers":[{"level":2,"title":"1-\u51FD\u6570\u5F15\u5165","slug":"_1-\u51FD\u6570\u5F15\u5165","link":"#_1-\u51FD\u6570\u5F15\u5165","children":[]},{"level":2,"title":"2-\u51FD\u6570\u58F0\u660E","slug":"_2-\u51FD\u6570\u58F0\u660E","link":"#_2-\u51FD\u6570\u58F0\u660E","children":[]},{"level":2,"title":"3-\u4F7F\u7528\u793A\u4F8B","slug":"_3-\u4F7F\u7528\u793A\u4F8B","link":"#_3-\u4F7F\u7528\u793A\u4F8B","children":[]}],"relativePath":"functions/typeTool/getType.md","lastUpdated":1664177825000}'),c={name:"functions/typeTool/getType.md"},r={id:"\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011",tabindex:"-1"},D=a("a",{class:"header-anchor",href:"#\u3010-frontmatter-title-\u2014\u2014-frontmatter-titletemplate-\u3011","aria-hidden":"true"},"#",-1),y=e(`<p><strong>\u529F\u80FD\uFF1A</strong> \u5224\u65AD\u6570\u636E\u7684\u7EC6\u7C92\u5EA6\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD4\u56DE\u7ED3\u679C\u6709\u4EE5\u4E0B\u8FD9\u51E0\u79CD\u7C7B\u578B\uFF1A<code>string</code> \u3001 <code>bigint</code> \u3001 <code>boolean</code> \u3001 <code>symbol</code> \u3001 <code>undefined</code> \u3001 <code>object</code> \u3001 <code>function</code> \u3001 <code>array</code> \u3001 <code>object</code> \u3001 <code>date</code> \u3001 <code>null</code> \u3001 <code>int</code> \u3001 <code>float</code> \u3001 <code>infinite</code> \u3001 <code>NaN</code>\u3002</p><p><strong>\u6CE8\u610F\uFF1A</strong> \u8FD9\u91CC\u8FD4\u56DE\u7684\u7C7B\u578B\u5E76\u6CA1\u6709\uFF1A<code>number</code> | <code>finite</code>,\u56E0\u4E3A<code>number</code>\u7C7B\u578B\u5DF2\u7ECF\u88AB\u7EC6\u7C92\u5EA6\u7684\u7C7B\u578B\u7EC6\u5316, \u800C<code>finite</code>\u5219\u88AB<code>int</code>\u548C<code>float</code>\u7C7B\u578B\u4EE3\u66FF</p><h2 id="_1-\u51FD\u6570\u5F15\u5165" tabindex="-1">1-\u51FD\u6570\u5F15\u5165 <a class="header-anchor" href="#_1-\u51FD\u6570\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tj-jstools</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u51FD\u6570\u58F0\u660E" tabindex="-1">2-\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#_2-\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">returnTypeStr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bigint</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">boolean</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">symbol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">int</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">float</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">infinite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NaN</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">returnTypeStr</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_3-\u4F7F\u7528\u793A\u4F8B" tabindex="-1">3-\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_3-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(Array) </span><span style="color:#676E95;">// function</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// object</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res3</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// array</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res4</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res5</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// int</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res6</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getType</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// infinite</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u7279\u522B\u6CE8\u610F\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u7C7B\u578B\u91CC\u9762\u6CA1\u6709\uFF1A<code>number</code> | <code>finite</code>; <br> \u5F53\u53C2\u6570\u4E3A\u7A7A\u7684\u65F6\u5019\u8FD4\u56DE\u7684\u662F<code>undefined</code></p></div>`,9);function C(s,A,F,i,d,b){return t(),l("div",null,[a("h1",r,[p("\u3010"+n(s.$frontmatter.title)+" \u2014\u2014 "+n(s.$frontmatter.titleTemplate)+"\u3011 ",1),D]),y])}const _=o(c,[["render",C]]);export{m as __pageData,_ as default};
