<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Button";data.description="Blogging Like a Hacker"; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
    import Button from 'kitBlocks/Button.svelte';
    let loading:boolean = false
    async function handleClick(){
        // set loading
        loading = true
        // wait 2 seconds
        await new Promise(r=>setTimeout(r,2000))
        // remove loading after 2 seconds
        loading = false
    }
</script>

<Header type="h1" text="Button" />
<Text>To add a styled button to your project run <InlineCode code="npx kitblocks@latest add button"/></Text>
<Button>Click</Button>
<Space />
<Header type="h2" text="Using component" />
<Text>Import Button from kitBlocks <InlineCode code="import Button from &#39;kitBlocks/Button.svelte&#39;"/></Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Button </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;kitBlocks/Button.svelte&#39;</span><span style="color: var(--shiki-color-text)">;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">Button</span><span style="color: var(--shiki-color-text)">&gt;Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<Text>Button preview.</Text>
<Button>Button</Button>
<Space />
<Header type="h2" text="Changing button style" />
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- Outline --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">config</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123; outline</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)"> }}&gt;Outline&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<!-- Outline -->
<Button config={{ outline:true }}>Outline</Button>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- Rounded --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">config</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123; rounded</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)"> }}&gt;Rounded&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<!-- Rounded -->
<Button config={{ rounded:true }}>Rounded</Button>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- Full size --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">config</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123; full</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)"> }}&gt;Full&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<!-- Full size -->
<Button config={{ full:true }}>Full</Button>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- Full size and rounded --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">config</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&#123;&#123; full</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">rounded</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)"> }}&gt;FullRounded&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<!-- Full size and rounded -->
<Button config={{ full:true,rounded:true }}>FullRounded</Button>
<Space />
<Header type="h2" text="Loader" />
<Text>By passing the <InlineCode code="loading"/> param you can disable and add loading spinner to button.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string)">&#123;true}</span><span style="color: var(--shiki-color-text)">&gt;ClickMe&lt;/</span><span style="color: var(--shiki-token-string-expression)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<Button loading={true}>ClickMe</Button>
<Space />
<Header type="h2" text="Listen to events" />
<Text>Let's add loading when user click on button and remove after 2 seconds.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> loading</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">async</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">handleClick</span><span style="color: var(--shiki-color-text)">()&#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-comment)">// set loading</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        loading </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-comment)">// wait 2 seconds</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">Promise</span><span style="color: var(--shiki-color-text)">(r</span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-token-function)">setTimeout</span><span style="color: var(--shiki-color-text)">(r</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-constant)">2000</span><span style="color: var(--shiki-color-text)">))</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-comment)">// remove loading after 2 seconds</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        loading </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">&#123;loading}</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">on:click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string)">&#123;handleClick}</span><span style="color: var(--shiki-color-text)">&gt;ClickMe&lt;/</span><span style="color: var(--shiki-token-string-expression)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></Code>
<Button {loading} on:click={handleClick}>ClickMe</Button>