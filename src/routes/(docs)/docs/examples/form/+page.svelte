<script lang="ts">
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

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Form | SvelteBlocks</title>
    <meta name="title" content="Form | SvelteBlocks" />
    <meta name="description" content="Example of a form using svelteBlocks." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://svelteblocks.dev/docs/examples/form" />
    <meta property="og:title" content="Form | SvelteBlocks" />
    <meta property="og:description" content="Example of a form using svelteBlocks." />
    <meta property="og:image" content="https://svelteblocks.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://svelteblocks.dev/docs/examples/form" />
    <meta property="twitter:title" content="Form | SvelteBlocks" />
    <meta property="twitter:description" content="Example of a form using svelteBlocks." />
    <meta property="twitter:image" content="https://svelteblocks.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="form-example">
    Form example
</h1>
<p data-md="p">To create a from using svelteBlocks you will need to import the following components.</p>
<ul data-md="list">
    <li>Input : use to collect text</li>
    <li>Button : use to summit form</li>
    <li>Header : header text for form</li>
    <li>Flex (optional) : to display components or just use div and css</li>
    <li>FormContainer (optional) : to display components or just use div and css</li>
</ul>
<div data-md="space"></div>
<h2 data-section data-md="header" id="install-components">
    Install components
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest add [Button,Input,Header,Flex,FormContainer]</span></span></code></pre></div>
<p data-md="p">or run components selectors</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest select</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="example">
    Example
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> Button </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Button.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> Input </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Input.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> Header </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Header.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> Flex </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Flex.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> FormContainer </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/FormContainer.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Flex</span><span style="color:var(--shiki-token-function)"> direction</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"column"</span><span style="color:var(--shiki-token-function)"> gap</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">15px</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-function)"> maxWidth</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">100%</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h2"</span><span style="color:var(--shiki-foreground)">>Form example&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">FormContainer</span><span style="color:var(--shiki-token-function)"> method</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"POST"</span><span style="color:var(--shiki-token-function)"> action</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"/api/test"</span><span style="color:var(--shiki-token-function)"> direction</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"column"</span><span style="color:var(--shiki-token-function)"> gap</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">5px</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> required</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Email..."</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"email"</span><span style="color:var(--shiki-token-function)"> id</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"email"</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> required</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Password..."</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"password"</span><span style="color:var(--shiki-token-function)"> id</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"password"</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"submit"</span><span style="color:var(--shiki-foreground)">>Login&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;/</span><span style="color:var(--shiki-token-constant)">FormContainer</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-constant)">Flex</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<div data-md="space"></div>
<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form example</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>
