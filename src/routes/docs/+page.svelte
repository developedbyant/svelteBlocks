<script lang="ts">
    import { metaTagsStore } from "kitDocs/lib/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Introduction";data.description="Introduction to svelteBlocks."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
    import Button from 'svelteBlocks/components/Button.svelte'
</script>

<Header type="h1" id="introduction">
    Introduction
</Header>
<Text>svelteBlocks is a collection of reuseable svelte components that you can add to your project without any external package needed.<br></Text>
<Space />
<Header type="h2" id="getting-started">
    Getting started
</Header>
<Text>To get started just run <InlineCode code="svelte-blocks@latest" /> it will create the folder <InlineCode code="src/svelteBlocks" /> where all your components will be added to.</Text>
<Space />
<Header type="h2" id="add-alias">
    Add alias
</Header>
<Text>After running <InlineCode code="svelte-blocks@latest" /> you will need to add <InlineCode code="svelteBlocks" /> alias to your <InlineCode code="svelte.config.js" /> file.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> adapter </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/adapter-auto&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; vitePreprocess } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/kit/vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">/** </span><span style="color: var(--shiki-token-keyword)">@type</span><span style="color: var(--shiki-token-comment)"> </span><span style="color: var(--shiki-token-function)">&#123;import(&#39;@sveltejs/kit&#39;).Config}</span><span style="color: var(--shiki-token-comment)"> */</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    preprocess</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">vitePreprocess</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    kit</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        adapter</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">adapter</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        alias</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            svelteBlocks</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;src/svelteBlocks/*&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> config;</span></span></code></pre></Code>
<Space />
<Header type="h2" id="adding-components">
    Adding components
</Header>
<Text>To add a component run <InlineCode code="svelte-blocks@latest" /> follow by component name.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">button</span></span></code></pre></Code>
<Text>Or run <InlineCode code="svelte-blocks@latest" /> to show all components.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">svelte-blocks@latest</span></span></code></pre></Code>
<Space />
<Header type="h2" id="using-components">
    Using components
</Header>
<Text>After adding a component you can use it by importing it from <InlineCode code="svelteBlocks/components" />.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Button </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;svelteBlocks/components/Button.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<Text>Button preview</Text>
<Button>Button</Button>