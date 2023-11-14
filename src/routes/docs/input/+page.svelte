<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Input";data.description="Add a styled input."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
    import Input from 'svelteBlocks/components/Input.svelte';
    let inputValue:string = ""
</script>

<Header type="h1" id="input">
    Input
</Header>
<Text>To add a styled Input to your project run <InlineCode code="npx svelte-blocks@latest input" />.</Text>
<Input type="input" placeholder="name..." bind:value={inputValue}/>
<Space />
<Header type="h2" id="using-input">
    Using input
</Header>
<Text>Import Input <InlineCode code="import Input from &#39;svelteBlocks/components/Input.svelte&#39;" /></Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Input </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;svelteBlocks/components/Input.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Input</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;input&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;email...&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span></code></pre></Code>
<Space />
<Header type="h2" id="binding-value">
    Binding value
</Header>
<Text>To bind input value just like any other components, add the <InlineCode code="bind:value" /> to component.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Input </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;svelteBlocks/components/Input.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> inputValue</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">h2</span><span style="color: var(--shiki-color-text)">&gt;Value:&#123;inputValue}&lt;/</span><span style="color: var(--shiki-token-string-expression)">h2</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Input</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">bind</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;inputValue} </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;input&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;email...&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span></code></pre></Code>
<h2>Value:{inputValue}</h2>
<Input bind:value={inputValue} type="input" placeholder="email..."/>