<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="InputChips";data.description="Add a styled Input chips."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
    import InputChips from 'svelteBlocks/components/InputChips.svelte';
    let names:string[] = [ "anthony","tony" ]
</script>

<Header type="h1" text="InputChips" />
<Text>To get started with inputChips component, import it from <InlineCode code="svelteBlocks/components/InputChips.svelte"/></Text>
<InputChips bind:value={names}/>
<Space />
<Header type="h2" text="Using inputChips" />
<Text>After importing InputChips component add it to your svelte component follow by the value param.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> InputChips </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;svelteBlocks/components/InputChips.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">InputChips</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;[</span><span style="color: var(--shiki-token-string-expression)">&quot;hi&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-string-expression)">&quot;hello&quot;</span><span style="color: var(--shiki-color-text)">]}/&gt;</span></span></code></pre></Code>
<InputChips value={["hi","hello"]}/>
<Space />
<Header type="h2" text="Binding value" />
<Text>You can bind InputChips value just like any other of our components, add the <InlineCode code="bind:value"/> follow by variable to bind.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> InputChips </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;svelteBlocks/components/InputChips.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> names</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)">[] </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [ </span><span style="color: var(--shiki-token-string-expression)">&quot;anthony&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-string-expression)">&quot;tony&quot;</span><span style="color: var(--shiki-color-text)"> ]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">InputChips</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;names}/&gt;</span></span></code></pre></Code>
<InputChips bind:value={names}/>
<p style="margin:10px 0">{JSON.stringify(names)}</p>