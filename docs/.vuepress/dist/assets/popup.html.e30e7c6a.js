import{r as p,a as _,c as h,b as n,d as a,w as e,t as o,F as q,f as l,e as s}from"./app.6f0d6ab3.js";const m=l(`<h1 id="\u5F39\u51FA\u5C42" tabindex="-1"><a class="header-anchor" href="#\u5F39\u51FA\u5C42" aria-hidden="true">#</a> \u5F39\u51FA\u5C42</h1><br><br><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B \u{1F914}</h2><br><h3 id="\u5F39\u51FA\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5F39\u51FA\u4F4D\u7F6E" aria-hidden="true">#</a> \u5F39\u51FA\u4F4D\u7F6E</h3><p>\u5C06\u9700\u8981\u7684\u5F39\u7684\u5185\u5BB9\u653E\u5165 <code>t-popup</code> \u5185\uFF0C</p><p>\u5229\u7528 <code>v-model</code> \u53BB\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF\uFF0C<code>mode</code> \u63A7\u5236\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell-group</span> <span class="token attr-name">inset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5C45\u4E2D<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F603}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>center<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5DE6\u4FA7<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F449}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u53F3\u4FA7<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F448}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>right<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9876\u90E8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F447}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5E95\u90E8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F446}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>bottom<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-cell-group</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-popup</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u5185\u5BB9 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-popup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            mode<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">open</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> type
                <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
    .h-20<span class="token punctuation">;</span> 
    .w-30<span class="token punctuation">;</span> 
    .flex<span class="token punctuation">;</span> 
    .text-lg<span class="token punctuation">;</span>
    .items-center<span class="token punctuation">;</span> 
    .justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><code>rounded</code> \u53EF\u4EE5\u63A7\u5236\u5F39\u51FA\u5757\u7684\u5706\u89D2\uFF0C\u6BCF\u4E2A <code>mode</code> \u5C55\u793A\u4E0D\u540C\u4F4D\u7F6E\u7684\u5706\u89D2\u3002\u4EE5\u4E0B\u662F\u5BF9\u5E94\u5173\u7CFB</p><ul><li>center \u56DB\u5468\u5706\u89D2</li><li>top \u5E95\u90E8\u5706\u89D2</li><li>bottom \u9876\u90E8\u5706\u89D2</li><li>left \u53F3\u4FA7\u5706\u89D2</li><li>right \u5DE6\u4FA7\u5706\u89D2</li></ul><br><br><h3 id="\u5173\u95ED\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u56FE\u6807" aria-hidden="true">#</a> \u5173\u95ED\u56FE\u6807</h3><p>\u53EF\u4EE5\u901A\u8FC7 <code>closeIcon</code> \u6765\u8BBE\u7F6E\u5173\u95ED\u56FE\u6807\uFF0C\u56FE\u6807\u7684\u4F4D\u7F6E\u5C06\u8DDF\u968F <code>mode</code> \u800C\u6539\u53D8\u3002\u4EE5\u4E0B\u662F\u5BF9\u5E94\u5173\u7CFB</p><ul><li>center \u53F3\u4E0A\u89D2</li><li>bottom \u53F3\u4E0A\u89D2</li><li>left \u53F3\u4E0A\u89D2</li><li>right \u5DE6\u4E0A\u89D2</li><li>top \u5DE6\u4E0B\u89D2</li></ul><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5411 <code>closeIconPosition</code> \u6CE8\u5165\u81EA\u5B9A\u4E49\u4F4D\u7F6E\u7684 <code>class</code></p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u4F7F\u7528\u7684\u9875\u9762 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell-group</span> <span class="token attr-name">inset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9ED8\u8BA4\u56FE\u6807<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F601}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>close<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F60A}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>close-circle<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-cell</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u81EA\u5B9A\u4E49\u4F4D\u7F6E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u{1F60A}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open(<span class="token punctuation">&#39;</span>close<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>custom-popup-close-position<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-cell-group</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-popup</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:closeIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:closeIconPosition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeIconPosition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rounded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u5185\u5BB9 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-popup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            closeIcon<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            closeIconPosition<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        methods<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">open</span><span class="token punctuation">(</span>closeIcon<span class="token punctuation">,</span> closeIconPosition <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>closeIcon <span class="token operator">=</span> closeIcon
				<span class="token keyword">this</span><span class="token punctuation">.</span>closeIconPosition <span class="token operator">=</span> closeIconPosition
                <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token punctuation">(</span>reference<span class="token punctuation">)</span> <span class="token string">&#39;@/uni_modules/tob-ui/index.less&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
    .h-20<span class="token punctuation">;</span> 
    .w-30<span class="token punctuation">;</span> 
    .flex<span class="token punctuation">;</span> 
    .text-lg<span class="token punctuation">;</span>
    .items-center<span class="token punctuation">;</span> 
    .justify-center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* \u81EA\u5B9A\u4E49\u7684\u4F4D\u7F6E(popup) */</span>
<span class="token selector">.custom-popup-close-position</span> <span class="token punctuation">{</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,19),v={class:"custom-container warning"},y=n("p",{class:"custom-container-title"},"\u59CB\u7EC8\u5B9A\u4E49\u5728\u5168\u5C40",-1),x=s("\u7531\u4E8E\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u4F60\u5E94\u8BE5\u59CB\u7EC8\u5C06\u8FD9\u4E9B\u9700\u8981\u6CE8\u5165\u5230\u7EC4\u4EF6\u5F53\u4E2D\u7684\u81EA\u5B9A\u4E49 "),b=s("class"),f=s(" \u5B9A\u4E49\u5728\u5168\u5C40\u7684 "),w=s("css"),I=s(" \u4E0B\uFF0C\u4F8B\u5982\u5B9A\u4E49\u5728 "),P=s("App.vue"),j=s(" \u7684 "),C=s("style \u6807\u7B7E"),N=s(" \u4E2D\u3002"),V=n("br",null,null,-1),z=n("br",null,null,-1),B=n("br",null,null,-1),S=n("h2",{id:"\u5C5E\u6027",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C5E\u6027","aria-hidden":"true"},"#"),s(" \u5C5E\u6027 \u{1F9D0}")],-1),A=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"\u5C5E\u6027"),n("th",{style:{"text-align":"center"}},"\u8BF4\u660E"),n("th",{style:{"text-align":"center"}},"\u7C7B\u578B"),n("th",{style:{"text-align":"center"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u53EF\u9009\u503C")])],-1),F=n("td",{style:{"text-align":"center"}},"v-model",-1),D=n("td",{style:{"text-align":"center"}},"\u663E\u793A\u9690\u85CF",-1),E=n("td",{style:{"text-align":"center"}},"boolean",-1),M=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"center"}},T=n("tr",null,[n("td",{style:{"text-align":"center"}},"closeIcon"),n("td",{style:{"text-align":"center"}},"\u5173\u95ED\u56FE\u6807"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"center"}}),n("td",{style:{"text-align":"center"}},"close | \u5185\u7F6E\u56FE\u6807\u90FD\u884C")],-1),G=n("td",{style:{"text-align":"center"}},"zIndex",-1),H=n("td",{style:{"text-align":"center"}},"\u5C42\u7EA7",-1),J=n("td",{style:{"text-align":"center"}},"number",-1),K=n("td",{style:{"text-align":"center"}},"100",-1),L={style:{"text-align":"center"}},Q=n("td",{style:{"text-align":"center"}},"applyStatusbar",-1),R=n("td",{style:{"text-align":"center"}},"\u5E94\u7528\u72B6\u6001\u680F",-1),U=n("td",{style:{"text-align":"center"}},"boolean",-1),W={style:{"text-align":"center"}},X=n("td",{style:{"text-align":"center"}},"closeOnMaskClick",-1),Y=n("td",{style:{"text-align":"center"}},"\u70B9\u51FB\u8499\u7248\u5173\u95ED",-1),Z=n("td",{style:{"text-align":"center"}},"boolean",-1),$=n("td",{style:{"text-align":"center"}},"true",-1),nn={style:{"text-align":"center"}},sn=n("td",{style:{"text-align":"center"}},"mode",-1),an=n("td",{style:{"text-align":"center"}},"\u6A21\u5F0F",-1),tn=n("td",{style:{"text-align":"center"}},"string",-1),pn=n("td",{style:{"text-align":"center"}},"center",-1),en=n("td",{style:{"text-align":"center"}},"rounnded",-1),on=n("td",{style:{"text-align":"center"}},"\u5706\u89D2",-1),cn=n("td",{style:{"text-align":"center"}},"string",-1),ln=n("td",{style:{"text-align":"center"}},"none",-1),un={style:{"text-align":"center"}},kn=n("td",{style:{"text-align":"center"}},"closeIconPosition",-1),rn=n("td",{style:{"text-align":"center"}},"\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E",-1),dn=n("td",{style:{"text-align":"center"}},"string",-1),gn=l('<br><br><br><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6 \u{1F913}</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">click</td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr><tr><td style="text-align:center;">maskClick</td><td style="text-align:center;">\u8499\u7248\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">\u4E8B\u4EF6\u5BF9\u8C61</td></tr></tbody></table><br><br><br><h2 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5 \u{1F60B}</h2><p>\u5728\u793A\u4F8B\u4E2D\uFF0C\u4E3A\u4E86\u51CF\u8F7B\u5927\u5BB6\u7684\u7406\u89E3\u8D1F\u62C5\uFF0C\u6211\u4EEC\u53EA\u7528\u4E86\u4E00\u4E2A\u7EC4\u4EF6\u6765\u627F\u63A5\u4E0D\u540C\u7684\u6A21\u5F0F\u3002</p><p>\u4F46\u662F\u5982\u679C\u4F60\u4E00\u4E2A\u9875\u9762\u9700\u8981\u591A\u4E2A\u6A21\u5F0F\u5F39\u51FA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4E00\u4E2A\u7EC4\u4EF6\u627F\u63A5\u4E00\u4E2A\u6A21\u5F0F\u3002\u8FD9\u5C06\u4F7F\u5F39\u51FA\u6709\u66F4\u597D\u7684\u6548\u679C\uFF0C\u540C\u65F6\u6709\u66F4\u597D\u7684\u7EF4\u62A4\u6027\u3002</p><br><br><br>',14),vn={setup(_n){const u="\u9ED8\u8BA4\u4E3Atrue\uFF0C\u53EA\u5728top\uFF0Cleft\uFF0Cright\u7B49\u6A21\u5F0F\u4E0B\u8D77\u6548\u679C",i="top | bottom | center | left | right",k="\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u4E0D\u540C\u6A21\u5F0F\u4E0D\u540C\u4F4D\u7F6E",r="left-0 top-0 | right-0 top-0 |...";return(hn,qn)=>{const t=p("t-tag"),c=p("t-doc-boo"),d=p("t-doc-z-index"),g=p("t-doc-rounded");return _(),h(q,null,[m,n("div",v,[y,n("p",null,[x,a(t,{color:"warning"},{default:e(()=>[b]),_:1}),f,a(t,{color:"warning"},{default:e(()=>[w]),_:1}),I,a(t,{color:"warning"},{default:e(()=>[P]),_:1}),j,a(t,{color:"warning"},{default:e(()=>[C]),_:1}),N])]),V,z,B,S,n("table",null,[A,n("tbody",null,[n("tr",null,[F,D,E,M,n("td",O,[a(c)])]),T,n("tr",null,[G,H,J,K,n("td",L,[a(d)])]),n("tr",null,[Q,R,U,n("td",{style:{"text-align":"center"}},o(u)),n("td",W,[a(c)])]),n("tr",null,[X,Y,Z,$,n("td",nn,[a(c)])]),n("tr",null,[sn,an,tn,pn,n("td",{style:{"text-align":"center"}},o(i))]),n("tr",null,[en,on,cn,ln,n("td",un,[a(g)])]),n("tr",null,[kn,rn,dn,n("td",{style:{"text-align":"center"}},o(k)),n("td",{style:{"text-align":"center"}},o(r))])])]),gn],64)}}};export{vn as default};
