<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Button";data.description="A beautiful and customizable button component."; return data })
    // custom code ===================
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

<h1 data-section data-kb="header" id="button">
    Button
</h1>
<p data-kb="p">Add a beautiful and customizable button component to your project.</p>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="add-component">
    Add component
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">button</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="type">
    Type
</h2>
<p data-kb="p">The button component can take any of the following type keys.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    children</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Snippet</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    href</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    loading</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    rounded</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    full</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    variant</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;outline&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    icon</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="using-component">
    Using component
</h2>
<p data-kb="p">To use component import it from <code data-kb="inline-code">src/blocks/Button.svelte</code> and adding it to your page.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Button </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Button.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span></code></pre></div>
<p data-kb="p">Add and preview component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button>Button</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="changing-style">
    Changing style
</h2>
<p data-kb="p">To change component style you can do it by editing the <code data-kb="inline-code">src/blocks/styles/blocks.css</code> and edit css 
variable <code data-kb="inline-code">--sb-button-color</code> and <code data-kb="inline-code">--sb-button-bg</code> or passing the <code data-kb="inline-code">variant</code> prop to component.</p>
<div data-kb="space"></div>
<h3 data-section data-kb="header" id="error">
    Error
</h3>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button variant="error">Button</Button>
<div data-kb="space"></div>
<h3 data-section data-kb="header" id="outline">
    Outline
</h3>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;outline&quot;</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button variant="outline">Button</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="events">
    Events
</h2>
<p data-kb="p">Thanks to svelte5 you can pass any on event that is allow to be pass to a button, 
example to pass onclick event just pass a function named onclick.<br/>
Create function</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">onclick</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> ()</span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">alert</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;Button was clicked&quot;</span><span style="color: var(--shiki-color-text)">)</span></span></code></pre></div>
<p data-kb="p">Pass function to button</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">&#123;</span><span style="color: var(--shiki-color-text)">onclick</span><span style="color: var(--shiki-token-function)">}</span><span style="color: var(--shiki-color-text)">&gt;ClickMe&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button {onclick}>ClickMe</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="data-attributes">
    Data attributes
</h2>
<p data-kb="p">Same for data attributes just pass any allow attributes to the component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">data-test</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;hi&quot;</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button data-test="hi">Button</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="loading">
    Loading
</h2>
<p data-kb="p">Add loading snipper and disable button by passing prop <code data-kb="inline-code">loading</code> to component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-color-text)">&gt;Loading&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button loading>Loading</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="rounded">
    Rounded
</h2>
<p data-kb="p">To make button rounded style pass the prop <code data-kb="inline-code">rounded</code> to component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">rounded</span><span style="color: var(--shiki-color-text)">&gt;Rounded&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button rounded>Rounded</Button>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">rounded</span><span style="color: var(--shiki-color-text)">&gt;Rounded&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button loading rounded>Rounded</Button>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">variant</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;outline&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">rounded</span><span style="color: var(--shiki-color-text)">&gt;Rounded&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button variant="outline" rounded>Rounded</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="full-width">
    Full width
</h2>
<p data-kb="p">If you want the component to take the available with pass prop <code data-kb="inline-code">full</code>.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">full</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button full>Button</Button>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="button-as-link">
    Button as link
</h2>
<p data-kb="p">To use button component as a link just pass prop <code data-kb="inline-code">href</code> and it will turn button into a anchor tag.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">href</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;/docs/components/chip&quot;</span><span style="color: var(--shiki-color-text)">&gt;Link&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<Button href="/docs/components/chip">Link</Button>