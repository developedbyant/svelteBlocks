<script lang="ts">
import Input from "src/blocks/Input.svelte";
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
    <title>Input | SvelteBlocks</title>
    <meta name="title" content="Input | SvelteBlocks" />
    <meta name="description" content="A beautiful and customizable input component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://svelteblocks.dev/docs/components/input" />
    <meta property="og:title" content="Input | SvelteBlocks" />
    <meta property="og:description" content="A beautiful and customizable input component." />
    <meta property="og:image" content="https://svelteblocks.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://svelteblocks.dev/docs/components/input" />
    <meta property="twitter:title" content="Input | SvelteBlocks" />
    <meta property="twitter:description" content="A beautiful and customizable input component." />
    <meta property="twitter:image" content="https://svelteblocks.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="input">
    Input
</h1>
<p data-md="p">Add a beautiful and customizable chip input to your project.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-input-to-project">
    Add Input to project
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest input</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-input">
    Using input
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/Input.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> Input </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Input.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<p data-md="p">The input component takes <code data-md="inline-code">level</code> prop to indicate which h tag to use.<br/>
Add and preview component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">div</span><span style="color:var(--shiki-token-function)"> style</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"display:flex;flex-direction:column;gap:5px"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"text"</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Input..."</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"text"</span><span style="color:var(--shiki-token-function)"> error</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Input with error..."</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"text"</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Full width..."</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"text"</span><span style="color:var(--shiki-token-function)"> rounded</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Rounded..."</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"email"</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Email..."</span><span style="color:var(--shiki-token-function)"> required</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">div</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<div style="display:flex;flex-direction:column;gap:5px">
    <Input type="text" placeholder="Input..."/>
    <Input type="text" error placeholder="Input with error..."/>
    <Input type="text" full placeholder="Full width..."/>
    <Input type="text" rounded placeholder="Rounded..."/>
    <Input type="email" placeholder="Email..." required/>
</div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="input-type">
    Input type
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> InputType</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    value</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    rounded</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    full</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    error</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="props-and-events">
    Props and events
</h2>
<p data-md="p">This component can take any props or events available for <code data-md="inline-code">HTMLInputElement</code>.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> Props</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    [x</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)"> `data-</span><span style="color:var(--shiki-token-keyword)">$&#123;</span><span style="color:var(--shiki-token-constant)">string</span><span style="color:var(--shiki-token-keyword)">}</span><span style="color:var(--shiki-token-string-expression)">`</span><span style="color:var(--shiki-foreground)">]</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onfullscreenchange</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onfullscreenerror</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onabort</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onanimationcancel</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    ...</span><span style="color:var(--shiki-token-constant)"> 216</span><span style="color:var(--shiki-token-function)"> more</span><span style="color:var(--shiki-foreground)"> ...;</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression)">    'aria-valuetext'</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-foreground)"> ... </span><span style="color:var(--shiki-token-constant)">1</span><span style="color:var(--shiki-token-function)"> more</span><span style="color:var(--shiki-foreground)"> ... </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
