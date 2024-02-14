<script lang="ts">
import InputChips from "src/blocks/InputChips.svelte";
let inputChipsValue = $state(["hi"]);
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
    <title>InputChips | KitDocs</title>
    <meta name="title" content="InputChips | KitDocs" />
    <meta name="description" content="A beautiful and customizable input component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/(docs)/docs/components/input-chips" />
    <meta property="og:title" content="InputChips | KitDocs" />
    <meta property="og:description" content="A beautiful and customizable input component." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/(docs)/docs/components/input-chips" />
    <meta property="twitter:title" content="InputChips | KitDocs" />
    <meta property="twitter:description" content="A beautiful and customizable input component." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="inputchips">
    InputChips
</h1>
<p data-md="p">Add a beautiful and customizable chip input to your project.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-inputchips-to-project">
    Add InputChips to project
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest inputChips</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-input">
    Using input
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/InputChips.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> InputChips </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/InputChips.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<p data-md="p">The input component takes <code data-md="inline-code">level</code> prop to indicate which h tag to use.<br/>
Add and preview component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    let</span><span style="color:var(--shiki-foreground)"> inputChipsValue </span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)"> $</span><span style="color:var(--shiki-token-function)">state</span><span style="color:var(--shiki-foreground)">([</span><span style="color:var(--shiki-token-string-expression)">"hi"</span><span style="color:var(--shiki-foreground)">])</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">InputChips</span><span style="color:var(--shiki-token-keyword)"> bind</span><span style="color:var(--shiki-foreground)">:</span><span style="color:var(--shiki-token-function)">value</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">&#123;inputChipsValue} /></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">strong</span><span style="color:var(--shiki-foreground)">>&#123; </span><span style="color:var(--shiki-token-constant)">inputChipsValue</span><span style="color:var(--shiki-token-function)">.join</span><span style="color:var(--shiki-foreground)">(</span><span style="color:var(--shiki-token-string-expression)">","</span><span style="color:var(--shiki-foreground)">)}&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">strong</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<div data-md="space"></div>
<InputChips bind:value={inputChipsValue} />
<strong>{ inputChipsValue.join(",")}</strong>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type-data">
    Type data
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> Type</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    value</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)">string</span><span style="color:var(--shiki-foreground)">[]</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    rounded</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    variant</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-string-expression)"> "error"</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-token-string-expression)"> "outline"</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-token-string-expression)"> "primary"</span><span style="color:var(--shiki-foreground)">;</span></span>
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
