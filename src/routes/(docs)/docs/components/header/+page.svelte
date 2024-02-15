<script lang="ts">
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

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Header | SvelteBlocks</title>
    <meta name="title" content="Header | SvelteBlocks" />
    <meta name="description" content="A beautiful and customizable header component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://svelteblocks.dev/docs/components/header" />
    <meta property="og:title" content="Header | SvelteBlocks" />
    <meta property="og:description" content="A beautiful and customizable header component." />
    <meta property="og:image" content="https://svelteblocks.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://svelteblocks.dev/docs/components/header" />
    <meta property="twitter:title" content="Header | SvelteBlocks" />
    <meta property="twitter:description" content="A beautiful and customizable header component." />
    <meta property="twitter:image" content="https://svelteblocks.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="header">
    Header
</h1>
<p data-md="p">Add a beautiful and customizable chip header to your project.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-header-to-project">
    Add Header to project
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest header</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-header">
    Using header
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/Header.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> Header </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Header.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<p data-md="p">The header component takes <code data-md="inline-code">level</code> prop to indicate which h tag to use.<br/>
Add and preview component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h1"</span><span style="color:var(--shiki-foreground)">>Headers&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h1"</span><span style="color:var(--shiki-foreground)">>Header h1&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h2"</span><span style="color:var(--shiki-foreground)">>Header h2&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h3"</span><span style="color:var(--shiki-foreground)">>Header h3&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h4"</span><span style="color:var(--shiki-foreground)">>Header h4&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Header level="h1">Headers</Header>
<Header level="h1">Header h1</Header>
<Header level="h2">Header h2</Header>
<Header level="h3">Header h3</Header>
<Header level="h4">Header h4</Header>
