import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as i,a as n,b as s,d as t,e,r}from"./app.9d9bb7ca.js";const c={},u=n("h1",{id:"\u7EDF\u4E00\u53EF\u4EA4\u6362\u6210\u5C31\u6807\u51C6-v1-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EDF\u4E00\u53EF\u4EA4\u6362\u6210\u5C31\u6807\u51C6-v1-1","aria-hidden":"true"},"#"),s(" \u7EDF\u4E00\u53EF\u4EA4\u6362\u6210\u5C31\u6807\u51C6 v1.1")],-1),l=n("blockquote",null,[n("p",null,"Uniformed Interchangeable Achievement Format standard (UIAF)")],-1),d=n("h2",{id:"\u524D\u8A00",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),s(" \u524D\u8A00")],-1),k=n("p",null,"\u7531\u4E8E\u539F\u795E\u7684\u7B2C\u4E09\u65B9\u6210\u5C31\u8BC6\u522B\u3001\u5BFC\u51FA\u3001\u8BB0\u5F55\u8F6F\u4EF6\u8D8A\u6765\u8D8A\u591A\uFF0C\u5728\u6709\u4E86 UIGF \u7684\u7ECF\u9A8C\u540E\uFF0C \u6211\u4EEC",-1),v={href:"https://github.com/babalae/genshin-achievement-toy",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/DGP-Studio/Snap.Genshin",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/HolographicHat/genshin-achievement-export",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/YuehaiTeam/cocogoat",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>\uFF08\u4E0A\u8FF0\u540D\u79F0\u4EE5\u5B57\u5178\u987A\u5E8F\u6392\u5E8F\uFF0C\u4E0D\u4EE3\u8868\u5176\u4ED6\u4EFB\u4F55\u610F\u4E49\uFF09<br> \u5728\u6B64\u4E00\u8D77\uFF0C\u5236\u5B9A\u4E86\u6B64\u9879\u6807\u51C6\uFF0C\u65E8\u5728\u52A0\u5F3A\u5404\u4E2A\u539F\u795E\u76F8\u5173\u7684App\u95F4\u7684\u6570\u636E\u53EF\u4EA4\u6362\u6027\u3002</p><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><h3 id="\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4" aria-hidden="true">#</a> \u65F6\u95F4</h3><p>\u672C\u6807\u51C6\u7684\u6240\u6709\u65F6\u95F4\u683C\u5F0F\u5747\u4EE5 <code>UTC+8</code> \u65F6\u533A\u4E3A\u57FA\u51C6</p><h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema" aria-hidden="true">#</a> Json Schema</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://json-schema.org/draft-04/schema#&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;export_app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BFC\u51FA\u7684app\u540D\u79F0&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_app_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BFC\u51FA\u6B64\u4EFD\u8BB0\u5F55\u7684App\u7248\u672C\u53F7&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uiaf_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6240\u5E94\u7528\u7684 UIAF \u7684\u7248\u672C,\u5305\u542B\u6B64\u5B57\u6BB5\u4EE5\u9632 UIAF \u51FA\u73B0\u4E2D\u65AD\u6027\u53D8\u66F4\u65F6\uFF0CApp\u65E0\u6CD5\u5904\u7406&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v\\\\d+.\\\\d+&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BFC\u51FAUNIX\u65F6\u95F4\u6233&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;export_app&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;uiaf_version&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5305\u542B\u5BFC\u51FA\u65B9\u5B9A\u4E49\u7684\u57FA\u672C\u4FE1\u606F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BF9\u5E94\u7684\u6210\u5C31id&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FDB\u5EA6&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5B8C\u6210\u72B6\u6001&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token number">3</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;enumDesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACHIEVEMENT_INVALID = 0; ACHIEVEMENT_UNFINISHED = 1; ACHIEVEMENT_FINISHED = 2;ACHIEVEMENT_POINT_TAKEN = 3;&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5B8C\u6210\u7684\u65F6\u95F4&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;current&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8868\u793A\u4E00\u4E2A\u6210\u5C31&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5305\u542B\u5B8C\u6210\u6216\u672A\u5B8C\u6210\u7684\u6210\u5C31&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;list&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> <code>info</code></h3><p>\u53EF\u4EE5\u5305\u542B\u6211\u4EEC\u8BA4\u53EF\u7684\u4EE5\u4E0B\u5B57\u6BB5</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>export_timestamp</code></td><td>\u5BFC\u51FAUNIX\u65F6\u95F4\u6233</td><td></td></tr><tr><td><code>export_app_version</code></td><td>\u5BFC\u51FA\u6B64\u4EFD\u8BB0\u5F55\u7684App\u7248\u672C\u53F7</td><td></td></tr><tr><td><code>uiaf_version</code></td><td>\u6240\u5E94\u7528\u7684 <code>UIAF</code> \u7684\u7248\u672C,\u5305\u542B\u6B64\u5B57\u6BB5\u4EE5\u9632 <code>UIAF</code> \u51FA\u73B0\u4E2D\u65AD\u6027\u53D8\u66F4\u65F6\uFF0CApp\u65E0\u6CD5\u5904\u7406</td><td></td></tr></tbody></table><h4 id="uiaf-version" tabindex="-1"><a class="header-anchor" href="#uiaf-version" aria-hidden="true">#</a> <code>uiaf_version</code></h4><p>\u5408\u6CD5\u503C</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th><th>\u5411\u4E0B\u517C\u5BB9\u7684\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td><code>v1.0</code></td><td>\u9996\u4E2A\u6B63\u5F0F\u7248\u672C</td><td>v1.0</td></tr><tr><td><code>v1.1</code></td><td>\u5728 <code>achievement</code> \u4E2D\u5F15\u5165\u4E86 <code>status</code> \u5B57\u6BB5\uFF0C\u6307\u793A\u6210\u5C31\u7684\u5B8C\u6210\u60C5\u51B5</td><td>v1.1</td></tr></tbody></table><h4 id="export-app" tabindex="-1"><a class="header-anchor" href="#export-app" aria-hidden="true">#</a> <code>export_app</code></h4><p>\u672A\u5B9E\u73B0\u5BFC\u51FA\u652F\u6301\u7684\u4EE5 <code>-</code> \u4EE3\u66FF</p><table><thead><tr><th>\u5BFC\u51FA App</th><th><code>export_app</code> \u7684\u503C</th></tr></thead><tbody><tr><td>Empty</td><td>Empty</td></tr></tbody></table><h3 id="achievement" tabindex="-1"><a class="header-anchor" href="#achievement" aria-hidden="true">#</a> <code>achievement</code></h3><h4 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> <code>id</code></h4><p>\u539F\u795E\u7684\u6210\u5C31\u5728\u6E38\u620F\u5185\u90E8\u5E26\u6709Id\uFF0C\u5BF9\u4E8E\u626B\u63CF\u7C7B\u5BFC\u51FA\u8F6F\u4EF6\uFF0C\u5728\u53D6\u5F97\u6210\u5C31\u7684\u5916\u5728\u8868\u73B0\u5F62\u5F0F\uFF08\u5982\uFF1A\u5448\u73B0\u6587\u672C\uFF09\u540E\uFF0C\u4FBF\u53EF\u5BF9\u5E94\u5230\u5185\u90E8\u7684Id</p>`,18),y=n("br",null,null,-1),_={href:"https://github.com/Dimbreath/GenshinData",target:"_blank",rel:"noopener noreferrer"},g=e('<h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> <code>timestamp</code></h4><ul><li><p>\u5BF9\u4E8E\u8BC6\u522B\u6210\u529F\u7684\u503C\uFF0C\u76F4\u63A5\u5C06\u65F6\u95F4\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684UNIX \u65F6\u95F4\u6233\uFF08\u79D2\uFF09</p></li><li><p>\u5BF9\u4E8E\u8BC6\u522B\u5931\u8D25\u7684\u503C\uFF0C\u76F4\u63A5\u5C06\u65F6\u95F4\u8BBE\u7F6E\u4E3A <code>9999-12-31 23:59:59</code>\uFF08253402271999\uFF08\u79D2\uFF09\uFF09</p></li></ul><h4 id="current" tabindex="-1"><a class="header-anchor" href="#current" aria-hidden="true">#</a> <code>current</code></h4><ul><li><p>\u5BF9\u4E8E\u8BC6\u522B\u6210\u529F\u7684\u503C\uFF0C\u5982 30/40 <code>current</code> \u7684\u503C\u5E94\u8BBE\u7F6E\u4E3A30</p><blockquote><p>\u56E0\u4E3A\u59CB\u7EC8\u53EF\u4EE5\u4ECE\u539F\u795E\u7684\u6570\u636E\u4E2D\u627E\u5230\u76EE\u6807\u8FBE\u6210\u503C</p></blockquote></li><li><p>\u5BF9\u4E8E\u8BC6\u522B\u5931\u8D25\u7684\u503C\uFF0C\u8BF7\u5C06\u8BE5\u5B57\u6BB5\u7684\u503C\u8BBE\u4E3A <code>0</code></p></li></ul>',4);function f(x,I){const a=r("ExternalLinkIcon");return p(),i("div",null,[u,l,d,k,n("ul",null,[n("li",null,[n("a",v,[s("babalae/genshin achievement toy"),t(a)])]),n("li",null,[n("a",q,[s("DGP Studio/Snap.Genshin"),t(a)])]),n("li",null,[n("a",h,[s("HolographicHat/genshin achievement export"),t(a)])]),n("li",null,[n("a",m,[s("YuehaiTeam/cocogoat"),t(a)])])]),b,n("blockquote",null,[n("p",null,[s("\u5BFC\u5165/\u5BFC\u51FA\u8F6F\u4EF6\u5E94\u81EA\u884C\u8D1F\u8D23Id\u4E0E\u5448\u73B0\u6587\u672C\u95F4\u7684\u8F6C\u6362"),y,s(" \u6210\u5C31\u7684\u4FE1\u606F\u53EF\u4EE5\u4ECE "),n("a",_,[s("Dimbreath/GenshinData"),t(a)]),s(" \u5E93\u4E2D\u83B7\u53D6")])]),g])}const N=o(c,[["render",f],["__file","UIAF.html.vue"]]);export{N as default};
