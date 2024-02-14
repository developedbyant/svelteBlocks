<script lang="ts">
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

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Chip | KitDocs</title>
    <meta name="title" content="Chip | KitDocs" />
    <meta name="description" content="A beautiful and customizable chip component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/(docs)/docs/components/chip" />
    <meta property="og:title" content="Chip | KitDocs" />
    <meta property="og:description" content="A beautiful and customizable chip component." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/(docs)/docs/components/chip" />
    <meta property="twitter:title" content="Chip | KitDocs" />
    <meta property="twitter:description" content="A beautiful and customizable chip component." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="chip-component">
    Chip component
</h1>
<p data-md="p">Add a beautiful and customizable chip component to your project.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-component">
    Add component
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest chip</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type">
    Type
</h2>
<p data-md="p">The chip component can take any of the following type keys.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> ComponentType</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    children</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> Snippet</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    href</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    loading</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    rounded</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    full</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    variant</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-string-expression)"> "error"</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-token-string-expression)"> "outline"</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-token-string-expression)"> "primary"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-component">
    Using component
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/Chip.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> Chip </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Chip.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<p data-md="p">Add and preview component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-foreground)">>Chip&#x3C;/</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Chip>Chip</Chip>
<div data-md="space"></div>
<h2 data-section data-md="header" id="variants">
    Variants
</h2>
<p data-md="p">Chip have multiple variants to change the look of the component.</p>
<h3 data-section data-md="header" id="error">
    error
</h3>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"error"</span><span style="color:var(--shiki-foreground)">>Error&#x3C;/</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Chip variant="error">Error</Chip>
<h3 data-section data-md="header" id="outline">
    outline
</h3>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"outline"</span><span style="color:var(--shiki-foreground)">>Outline&#x3C;/</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Chip variant="outline">Outline</Chip>
<h3 data-section data-md="header" id="primary">
    primary
</h3>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"primary"</span><span style="color:var(--shiki-foreground)">>Primary&#x3C;/</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Chip variant="primary">Primary</Chip>
<div data-md="space"></div>
<h3 data-section data-md="header" id="chip-as-link">
    Chip as link
</h3>
<p data-md="p">To use chip component as a link just pass prop <code data-md="inline-code">href</code> and it will turn button into a anchor tag.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-token-function)"> href</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"/docs/components/button"</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"primary"</span><span style="color:var(--shiki-foreground)">>Primary&#x3C;/</span><span style="color:var(--shiki-token-constant)">Chip</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Chip href="/docs/components/button" variant="primary">Primary</Chip>
