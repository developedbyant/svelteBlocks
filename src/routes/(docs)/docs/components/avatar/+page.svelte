<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Avatar";data.description="A beautiful and customizable avatar component."; return data })
    // custom code ===================
import Avatar from "src/blocks/Avatar.svelte";
    /** Copy text to clipboard (Added by kitdocs) */
    async function copyText(e:MouseEvent){
        const copyButton = e.target as HTMLButtonElement
        const code = copyButton.parentElement?.querySelector("code")?.innerText as string
        await navigator.clipboard.writeText(code)
        copyButton.innerText = "Copied"
        // Set button text back to copy after 5 milliseconds
        setTimeout(()=>copyButton.innerText = "Copy",1000)
    }
</script>

<h1 data-section data-kb="header" id="avatar">
    Avatar
</h1>
<p data-kb="p">Add a beautiful and customizable avatar component to your project.</p>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="add-component">
    Add component
</h2>
<p data-kb="p">To add component simple run the following command.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">avatar</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="type">
    Type
</h2>
<p data-kb="p">The avatar component can take any of the following type keys.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">avatar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    src</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> &#123; path</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> alt</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)"> }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    center</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    maxSize</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="using-component">
    Using component
</h2>
<p data-kb="p">To use component import it and add it to any svelte page or component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Avatar </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Avatar.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span></code></pre></div>
<p data-kb="p">Add and preview component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Avatar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">src</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;DA&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span></code></pre></div>
<Avatar src="DA" />
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="set-image-src">
    Set image src
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Avatar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">src</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    path</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;https://avatars.githubusercontent.com/u/107594214&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    alt</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;DevelopedByAnt&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}}/&gt;</span></span></code></pre></div>
<Avatar src={{
    path:"https://avatars.githubusercontent.com/u/107594214",
    alt:"DevelopedByAnt"
}}/>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="set-width">
    Set width
</h2>
<p data-kb="p">To set with pass prop <code data-kb="inline-code">maxSize</code> to give the component a max width.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display:flex;gap:10px&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">Avatar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">src</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;A&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">maxSize</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">40px</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">Avatar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">src</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        path</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;https://avatars.githubusercontent.com/u/107594214&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        alt</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;DevelopedByAnt&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }} </span><span style="color: var(--shiki-token-function)">maxSize</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">40px</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<div style="display:flex;gap:10px">
    <Avatar src="A" maxSize="40px"/>
    <Avatar src={{
        path:"https://avatars.githubusercontent.com/u/107594214",
        alt:"DevelopedByAnt"
    }} maxSize="40px"/>
</div>