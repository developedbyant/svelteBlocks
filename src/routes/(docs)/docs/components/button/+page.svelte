<script lang="ts">
import Button from "src/blocks/Button.svelte";
// function for button
const onclick = ()=> alert("Button was clicked")
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
    <title>Button | SvelteBlocks</title>
    <meta name="title" content="Button | SvelteBlocks" />
    <meta name="description" content="A beautiful and customizable button component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://svelteblocks.dev/docs/components/button" />
    <meta property="og:title" content="Button | SvelteBlocks" />
    <meta property="og:description" content="A beautiful and customizable button component." />
    <meta property="og:image" content="https://svelteblocks.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://svelteblocks.dev/docs/components/button" />
    <meta property="twitter:title" content="Button | SvelteBlocks" />
    <meta property="twitter:description" content="A beautiful and customizable button component." />
    <meta property="twitter:image" content="https://svelteblocks.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="button">
    Button
</h1>
<p data-md="p">Enable users to input and interact with multiline text effortlessly using our TextArea component. Simplify the process of capturing longer messages, comments, or other textual information in your Svelte application.</p>
<Button>Button</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-component">
    Add component
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest button</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type">
    Type
</h2>
<p data-md="p">The button component can take any of the following type keys.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> button</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    children</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> Snippet</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    href</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    loading</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    rounded</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    full</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    variant</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-string-expression)"> "error"</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-token-string-expression)"> "outline"</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-token-string-expression)"> "primary"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    icon</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-component">
    Using component
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/Button.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> Button </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Button.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<p data-md="p">Add and preview component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">>Button&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button>Button</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="changing-style">
    Changing style
</h2>
<p data-md="p">To change component style you can do it by editing the <code data-md="inline-code">src/blocks/styles/blocks.css</code> and edit css 
variable <code data-md="inline-code">--sb-button-color</code> and <code data-md="inline-code">--sb-button-bg</code> or passing the <code data-md="inline-code">variant</code> prop to component.</p>
<div data-md="space"></div>
<h3 data-section data-md="header" id="error">
    Error
</h3>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"error"</span><span style="color:var(--shiki-foreground)">>Button&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button variant="error">Button</Button>
<div data-md="space"></div>
<h3 data-section data-md="header" id="outline">
    Outline
</h3>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"outline"</span><span style="color:var(--shiki-foreground)">>Button&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button variant="outline">Button</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="events">
    Events
</h2>
<p data-md="p">Thanks to svelte5 you can pass any on event that is allow to be pass to a button, 
example to pass onclick event just pass a function named onclick.<br/>
Create function</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">const</span><span style="color:var(--shiki-token-function)"> onclick</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> ()</span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-function)"> alert</span><span style="color:var(--shiki-foreground)">(</span><span style="color:var(--shiki-token-string-expression)">"Button was clicked"</span><span style="color:var(--shiki-foreground)">)</span></span></code></pre></div>
<p data-md="p">Pass function to button</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> &#123;</span><span style="color:var(--shiki-foreground)">onclick</span><span style="color:var(--shiki-token-function)">}</span><span style="color:var(--shiki-foreground)">>ClickMe&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button {onclick}>ClickMe</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="data-attributes">
    Data attributes
</h2>
<p data-md="p">Same for data attributes just pass any allow attributes to the component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> data-test</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"hi"</span><span style="color:var(--shiki-foreground)">>Button&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button data-test="hi">Button</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="loading">
    Loading
</h2>
<p data-md="p">Add loading snipper and disable button by passing prop <code data-md="inline-code">loading</code> to component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> loading</span><span style="color:var(--shiki-foreground)">>Loading&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button loading>Loading</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="rounded">
    Rounded
</h2>
<p data-md="p">To make button rounded style pass the prop <code data-md="inline-code">rounded</code> to component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> rounded</span><span style="color:var(--shiki-foreground)">>Rounded&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button rounded>Rounded</Button>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> loading</span><span style="color:var(--shiki-token-function)"> rounded</span><span style="color:var(--shiki-foreground)">>Rounded&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button loading rounded>Rounded</Button>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> variant</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"outline"</span><span style="color:var(--shiki-token-function)"> rounded</span><span style="color:var(--shiki-foreground)">>Rounded&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button variant="outline" rounded>Rounded</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="full-width">
    Full width
</h2>
<p data-md="p">If you want the component to take the available with pass prop <code data-md="inline-code">full</code>.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-foreground)">>Button&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button full>Button</Button>
<div data-md="space"></div>
<h2 data-section data-md="header" id="button-as-link">
    Button as link
</h2>
<p data-md="p">To use button component as a link just pass prop <code data-md="inline-code">href</code> and it will turn button into a anchor tag.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> href</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"/docs/components/chip"</span><span style="color:var(--shiki-foreground)">>Link&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<Button href="/docs/components/chip">Link</Button>
