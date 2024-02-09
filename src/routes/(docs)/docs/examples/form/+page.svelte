<script lang="ts">
    import { metaTagsStore } from "src/kitDocs/lib/stores";
    // set meta data ===================
    metaTagsStore.update(data=>{ data.title="Form";data.description="Example of a form using svelteBlocks."; return data })
    // custom code ===================
import Button from "src/blocks/Button.svelte";
import Input from "src/blocks/Input.svelte";
import Header from "src/blocks/Header.svelte";
import Flex from "src/blocks/Flex.svelte";
import FormContainer from "src/blocks/FormContainer.svelte";
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

<h1 data-section data-kb="header" id="form-example">
    Form example
</h1>
<p data-kb="p">To create a from using svelteBlocks you will need to import the following components.</p>
<ul data-kb="list">
    <li>Input : use to collect text</li>
    <li>Button : use to summit form</li>
    <li>Header : header text for form</li>
    <li>Flex (optional) : to display components or just use div and css</li>
    <li>FormContainer (optional) : to display components or just use div and css</li>
</ul>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="install-components">
    Install components
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">add</span><span style="color: var(--shiki-color-text)"> [Button,Input,Header,Flex,FormContainer]</span></span></code></pre></div>
<p data-kb="p">or run components selectors</p>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">svelte-blocks@latest</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">select</span></span></code></pre></div>
<div data-kb="space"></div>
<h2 data-section data-kb="header" id="example">
    Example
</h2>
<div data-kb="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Button </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Button.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Input </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Input.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Header </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Header.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Flex </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/Flex.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> FormContainer </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;src/blocks/FormContainer.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">Flex</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">direction</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;column&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">gap</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">15px</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">maxWidth</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">100%</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">level</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h2&quot;</span><span style="color: var(--shiki-color-text)">&gt;Form example&lt;/</span><span style="color: var(--shiki-token-constant)">Header</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">FormContainer</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">method</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;POST&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">action</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;/api/test&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">direction</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;column&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">gap</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">5px</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;</span><span style="color: var(--shiki-token-constant)">Input</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">required</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">full</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;Email...&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;email&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;email&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;</span><span style="color: var(--shiki-token-constant)">Input</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">required</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">full</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;Password...&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;password&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;password&quot;</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">full</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;submit&quot;</span><span style="color: var(--shiki-color-text)">&gt;Login&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-constant)">FormContainer</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-constant)">Flex</span><span style="color: var(--shiki-color-text)">&gt;</span></span></code></pre></div>
<div data-kb="space"></div>
<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form example</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>