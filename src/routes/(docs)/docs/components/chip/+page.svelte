<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Chip";data.description="A beautiful and customizable chip component."; return data })
    // custom code ===================
import Chip from "src/blocks/Chip.svelte";
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

<h1 data-section data-kb="header" id="chip-component">
    Chip component
</h1>
<p data-kb="p">Add a beautiful and customizable chip component to your project.</p>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="add-component">
    Add component
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">chip</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="type">
    Type
</h2>
<p data-kb="p">The chip component can take any of the following type keys.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ComponentType</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    children</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Snippet</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    href</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    loading</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    rounded</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    full</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    variant</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;outline&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="using-component">
    Using component
</h2>
<p data-kb="p">To use component import it from <code data-kb="inline-code">src/blocks/Chip.svelte</code> and adding it to your page.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Chip </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Chip.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span></code></pre></div>
<p data-kb="p">Add and preview component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)">&gt;Chip&lt;/</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Chip>Chip</Chip>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="variants">
    Variants
</h2>
<p data-kb="p">Chip have multiple variants to change the look of the component.</p>
<h3 data-section data-kb="header" id="error">
    error
</h3>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)">&gt;Error&lt;/</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Chip variant="error">Error</Chip>
<h3 data-section data-kb="header" id="outline">
    outline
</h3>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;outline&quot;</span><span style="color: var(--shiki-color-text)">&gt;Outline&lt;/</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Chip variant="outline">Outline</Chip>
<h3 data-section data-kb="header" id="primary">
    primary
</h3>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">&gt;Primary&lt;/</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Chip variant="primary">Primary</Chip>
<div data-kb="space"></div>
<h3 data-section data-kb="header" id="chip-as-link">
    Chip as link
</h3>
<p data-kb="p">To use chip component as a link just pass prop <code data-kb="inline-code">href</code> and it will turn button into a anchor tag.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">href</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;/docs/components/button&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">&gt;Primary&lt;/</span><span style="color: var(--shiki-token-constant)">Chip</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Chip href="/docs/components/button" variant="primary">Primary</Chip>