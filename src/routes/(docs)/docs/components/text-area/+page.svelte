<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="TextArea";data.description="A beautiful and customizable TextArea component."; return data })
    // custom code ===================
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

<h1 data-section data-kb="header" id="textarea">
    TextArea
</h1>
<p data-kb="p">Add a beautiful and customizable TextArea to your project.</p>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="add-textarea-to-project">
    Add TextArea to project
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">textArea</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="using-textarea">
    Using TextArea
</h2>
<p data-kb="p">To use component import it from <code data-kb="inline-code">src/blocks/TextArea.svelte</code> and adding it to your page.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> TextArea </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/TextArea.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span></code></pre></div>
<div data-kb="space"></div>
<p data-kb="p">Add it to your svelte page or component.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> TextArea </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/TextArea.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line added"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">TextArea</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">full</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;Text...&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span></code></pre></div>
<div data-kb="space"></div>
<TextArea full placeholder="Text..."/>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="type-data">
    Type data
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    value</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// bind value bind:v=&#123;value}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    placeholder</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    rounded</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    full</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    error</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-token-constant)">boolean</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="props-and-events">
    Props and events
</h2>
<p data-kb="p">This component can take any props or events available for <code data-kb="inline-code">HTMLTextAreaElement</code>.</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Props</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    [x</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">`data-</span><span style="color: var(--shiki-token-keyword)">$&#123;</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-token-keyword)">}</span><span style="color: var(--shiki-token-string-expression)">`</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    onfullscreenchange</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> ((e</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">undefined</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    onfullscreenerror</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> ((e</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">undefined</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    onabort</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> ((e</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">undefined</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    onanimationcancel</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> ((e</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">any</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">undefined</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">...</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">200</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">more</span><span style="color: var(--shiki-color-text)"> ...;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    dirname</span><span style="color: var(--shiki-token-keyword)">?:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> ... </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">more</span><span style="color: var(--shiki-color-text)"> ... </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">undefined</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></div>