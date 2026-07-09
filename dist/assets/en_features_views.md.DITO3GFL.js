import{_ as s,o as n,c as e,a2 as t}from"./chunks/framework.BWuWLRhz.js";const g=JSON.parse('{"title":"Views","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/views.md","filePath":"en/features/views.md"}'),l={name:"en/features/views.md"};function p(i,a,o,c,d,r){return n(),e("div",null,[...a[0]||(a[0]=[t(`<h1 id="views" tabindex="-1">Views <a class="header-anchor" href="#views" aria-label="Permalink to &quot;Views&quot;">​</a></h1><p>Volt templates for TAVP.</p><p><strong>Note:</strong> Volt in TAVP is a compiled template engine. Not <a href="https://laravel.com/docs/volt" target="_blank" rel="noreferrer">Laravel Volt</a> which is Livewire-based.</p><h2 id="basic-views" tabindex="-1">Basic Views <a class="header-anchor" href="#basic-views" aria-label="Permalink to &quot;Basic Views&quot;">​</a></h2><div class="language-volt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">volt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;{{ title }}&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;{{ greeting }}&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="layouts" tabindex="-1">Layouts <a class="header-anchor" href="#layouts" aria-label="Permalink to &quot;Layouts&quot;">​</a></h2><div class="language-volt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">volt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- resources/views/layouts/app.volt --&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;{% block title %}TAVP{% endblock %}&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    {% block content %}{% endblock %}</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="extending-layouts" tabindex="-1">Extending Layouts <a class="header-anchor" href="#extending-layouts" aria-label="Permalink to &quot;Extending Layouts&quot;">​</a></h2><div class="language-volt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">volt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{% extends &#39;layouts/app.volt&#39; %}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{% block title %}Home - TAVP{% endblock %}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{% block content %}</span></span>
<span class="line"><span>&lt;h1&gt;Welcome to TAVP&lt;/h1&gt;</span></span>
<span class="line"><span>{% endblock %}</span></span></code></pre></div><h2 id="conditionals" tabindex="-1">Conditionals <a class="header-anchor" href="#conditionals" aria-label="Permalink to &quot;Conditionals&quot;">​</a></h2><div class="language-volt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">volt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{% if user %}</span></span>
<span class="line"><span>    &lt;p&gt;Welcome, {{ user.name }}!&lt;/p&gt;</span></span>
<span class="line"><span>{% else %}</span></span>
<span class="line"><span>    &lt;p&gt;Please login.&lt;/p&gt;</span></span>
<span class="line"><span>{% endif %}</span></span></code></pre></div><h2 id="loops" tabindex="-1">Loops <a class="header-anchor" href="#loops" aria-label="Permalink to &quot;Loops&quot;">​</a></h2><div class="language-volt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">volt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>{% for user in users %}</span></span>
<span class="line"><span>    &lt;li&gt;{{ user.name }}&lt;/li&gt;</span></span>
<span class="line"><span>{% endfor %}</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span></code></pre></div><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h2><div class="language-volt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">volt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{{ name | upper }}</span></span>
<span class="line"><span>{{ price | number_format(2) }}</span></span>
<span class="line"><span>{{ date | date(&#39;Y-m-d&#39;) }}</span></span></code></pre></div><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="/en/features/routing.html">Routing</a></li></ul>`,17)])])}const u=s(l,[["render",p]]);export{g as __pageData,u as default};
