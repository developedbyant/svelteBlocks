<script lang="ts">
import TextArea from "src/blocks/TextArea.svelte";
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
    <title>TextArea | SvelteBlocks</title>
    <meta name="title" content="TextArea | SvelteBlocks" />
    <meta name="description" content="A beautiful and customizable TextArea component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://svelteblocks.dev/docs/components/text-area" />
    <meta property="og:title" content="TextArea | SvelteBlocks" />
    <meta property="og:description" content="A beautiful and customizable TextArea component." />
    <meta property="og:image" content="https://svelteblocks.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://svelteblocks.dev/docs/components/text-area" />
    <meta property="twitter:title" content="TextArea | SvelteBlocks" />
    <meta property="twitter:description" content="A beautiful and customizable TextArea component." />
    <meta property="twitter:image" content="https://svelteblocks.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="textarea">
    TextArea
</h1>
<p data-md="p">Add a beautiful and customizable TextArea to your project.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-textarea-to-project">
    Add TextArea to project
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest textArea</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-textarea">
    Using TextArea
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/TextArea.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> TextArea </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/TextArea.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<div data-md="space"></div>
<p data-md="p">Add it to your svelte page or component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> TextArea </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/TextArea.svelte"</span><span style="color:var(--shiki-foreground)">;</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line added"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">TextArea</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Text..."</span><span style="color:var(--shiki-foreground)">/></span></span></code></pre></div>
<div data-md="space"></div>
<TextArea full placeholder="Text..."/>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type-data">
    Type data
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> Type</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    value</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">string</span><span style="color:var(--shiki-token-comment)"> // bind value bind:v=&#123;value}</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    placeholder</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    rounded</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    full</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    error</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="props-and-events">
    Props and events
</h2>
<p data-md="p">This component can take any props or events available for <code data-md="inline-code">HTMLTextAreaElement</code>.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> Props</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    [x</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)"> `data-</span><span style="color:var(--shiki-token-keyword)">$&#123;</span><span style="color:var(--shiki-token-constant)">string</span><span style="color:var(--shiki-token-keyword)">}</span><span style="color:var(--shiki-token-string-expression)">`</span><span style="color:var(--shiki-foreground)">]</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onfullscreenchange</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onfullscreenerror</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onabort</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onanimationcancel</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    ...</span><span style="color:var(--shiki-token-constant)"> 200</span><span style="color:var(--shiki-token-function)"> more</span><span style="color:var(--shiki-foreground)"> ...;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    dirname</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-foreground)"> ... </span><span style="color:var(--shiki-token-constant)">1</span><span style="color:var(--shiki-token-function)"> more</span><span style="color:var(--shiki-foreground)"> ... </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
