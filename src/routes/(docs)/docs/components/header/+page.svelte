<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Header";data.description="A beautiful and customizable header component."; return data })
    // custom code ===================
import Header from "src/blocks/Header.svelte";
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

<h1 data-section data-kb="header" id="header">
    Header
</h1>
<p data-kb="p">Add a beautiful and customizable chip header to your project.</p>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="add-header-to-project">
    Add Header to project
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">header</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="using-header">
    Using header
</h2>
<p data-kb="p">To use component import it from <code data-kb="inline-code">src/blocks/Header.svelte</code> and adding it to your page.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Header </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Header.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span></code></pre></div>
<p data-kb="p">The header component takes <code data-kb="inline-code">level</code> prop to indicate which h tag to use.<br/>
Add and preview component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">level</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h1&quot;</span><span style="color: var(--shiki-color-text)">&gt;Headers&lt;/</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">level</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h1&quot;</span><span style="color: var(--shiki-color-text)">&gt;Header h1&lt;/</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">level</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h2&quot;</span><span style="color: var(--shiki-color-text)">&gt;Header h2&lt;/</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">level</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h3&quot;</span><span style="color: var(--shiki-color-text)">&gt;Header h3&lt;/</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">level</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h4&quot;</span><span style="color: var(--shiki-color-text)">&gt;Header h4&lt;/</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Header level="h1">Headers</Header>
<Header level="h1">Header h1</Header>
<Header level="h2">Header h2</Header>
<Header level="h3">Header h3</Header>
<Header level="h4">Header h4</Header>