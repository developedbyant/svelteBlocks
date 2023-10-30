<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Switch";data.description="Styled toggle switch for your svelte projects."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
    import Switch from 'svelteBlocks/components/Switch.svelte';
    let isDarkMode:boolean = false
</script>

<Header type="h1" text="Switch" />
<Text>To get started with the switch component, import it from <InlineCode code="svelteBlocks/components/Switch.svelte"/></Text>
<Switch bind:value={isDarkMode}/>
<Space />
<Header type="h2" text="Using Switch" />
<Text>After importing Switch component add it to your svelte component follow by the value param.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Switch </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;svelteBlocks/components/Switch.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Switch</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)">}/&gt;</span></span></code></pre></Code>
<Switch value={true}/>
<Space />
<Header type="h2" text="Binding value" />
<Text>You can bind Switch value just like any other of our components, add the <InlineCode code="bind:value"/> follow by variable to bind.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Switch </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;svelteBlocks/components/Switch.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> isDarkMode</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Switch</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">bind</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;isDarkMode}/&gt;</span></span></code></pre></Code>
<Switch bind:value={isDarkMode}/>
<h2>IsDarkMode:{isDarkMode}</h2>
<Space />
<Header type="h2" text="Config" />
<Text>Update switch size and border radius.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display:flex;gap:10px&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">Switch</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">bind</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;isDarkMode} </span><span style="color: var(--shiki-token-function)">config</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123; size</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;50px&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">borderRadius</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;3px&quot;</span><span style="color: var(--shiki-color-text)">}}/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">Switch</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">bind</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;isDarkMode} </span><span style="color: var(--shiki-token-function)">config</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123; size</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;50px&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">borderRadius</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;50px&quot;</span><span style="color: var(--shiki-color-text)">}}/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<div style="display:flex;gap:10px">
    <Switch bind:value={isDarkMode} config={{ size:"50px",borderRadius:"3px"}}/>
    <Switch bind:value={isDarkMode} config={{ size:"50px",borderRadius:"50px"}}/>
</div>