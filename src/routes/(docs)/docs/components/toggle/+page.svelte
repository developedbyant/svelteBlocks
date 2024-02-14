<script lang="ts">
import Label from "src/blocks/Label.svelte";
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
    <title>Toggle | KitDocs</title>
    <meta name="title" content="Toggle | KitDocs" />
    <meta name="description" content="A beautiful and customizable label component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/(docs)/docs/components/toggle" />
    <meta property="og:title" content="Toggle | KitDocs" />
    <meta property="og:description" content="A beautiful and customizable label component." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/(docs)/docs/components/toggle" />
    <meta property="twitter:title" content="Toggle | KitDocs" />
    <meta property="twitter:description" content="A beautiful and customizable label component." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="label">
    Label
</h1>
<p data-md="p">Add a beautiful and customizable label text to your project, you can use it for input label and more.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-label-to-project">
    Add Label to project
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest label</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-label">
    Using label
</h2>
<p data-md="p">To use component import it from <code data-md="inline-code">src/blocks/Label.svelte</code> and adding it to your page.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> Label </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Label.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<div data-md="space"></div>
<p data-md="p">Add it to your svelte page or component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line added"><span style="color:var(--shiki-token-keyword)">    import</span><span style="color:var(--shiki-foreground)"> Label </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Label.svelte"</span><span style="color:var(--shiki-foreground)">;</span><span style="color:var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">script</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Flex</span><span style="color:var(--shiki-token-function)"> direction</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"column"</span><span style="color:var(--shiki-token-function)"> gap</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">15px</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-function)"> maxWidth</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">100%</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-token-function)"> level</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"h2"</span><span style="color:var(--shiki-foreground)">>Form example&#x3C;/</span><span style="color:var(--shiki-token-constant)">Header</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">FormContainer</span><span style="color:var(--shiki-token-function)"> method</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"POST"</span><span style="color:var(--shiki-token-function)"> action</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"/api/test"</span><span style="color:var(--shiki-token-function)"> direction</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"column"</span><span style="color:var(--shiki-token-function)"> gap</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">5px</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Label</span><span style="color:var(--shiki-token-function)"> for</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"email"</span><span style="color:var(--shiki-foreground)">>Email&#x3C;/</span><span style="color:var(--shiki-token-constant)">Label</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> required</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Email..."</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"email"</span><span style="color:var(--shiki-token-function)"> id</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"email"</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line added"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Label</span><span style="color:var(--shiki-token-function)"> for</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"password"</span><span style="color:var(--shiki-foreground)">>Email&#x3C;/</span><span style="color:var(--shiki-token-constant)">Label</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Input</span><span style="color:var(--shiki-token-function)"> required</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> placeholder</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"Password..."</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"password"</span><span style="color:var(--shiki-token-function)"> id</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"password"</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        &#x3C;</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-token-function)"> full</span><span style="color:var(--shiki-token-function)"> type</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"submit"</span><span style="color:var(--shiki-foreground)">>Login&#x3C;/</span><span style="color:var(--shiki-token-constant)">Button</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;/</span><span style="color:var(--shiki-token-constant)">FormContainer</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-constant)">Flex</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<div data-md="space"></div>
<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Label for="email">Email</Label>
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Label for="password">Password</Label>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type-data">
    Type data
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> Type</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    children</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-function)"> Snippet</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="props-and-events">
    Props and events
</h2>
<p data-md="p">This component can take any props or events available for <code data-md="inline-code">HTMLLabelElement</code>.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> Props</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    [x</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)"> `data-</span><span style="color:var(--shiki-token-keyword)">$&#123;</span><span style="color:var(--shiki-token-constant)">string</span><span style="color:var(--shiki-token-keyword)">}</span><span style="color:var(--shiki-token-string-expression)">`</span><span style="color:var(--shiki-foreground)">]</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onfullscreenchange</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onfullscreenerror</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onabort</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    onanimationcancel</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-foreground)"> ((e</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">=></span><span style="color:var(--shiki-token-constant)"> any</span><span style="color:var(--shiki-foreground)">) </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword)">    ...</span><span style="color:var(--shiki-token-constant)"> 216</span><span style="color:var(--shiki-token-function)"> more</span><span style="color:var(--shiki-foreground)"> ...;</span></span>
<span class="line"><span style="color:var(--shiki-token-string-expression)">    'aria-valuetext'</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-foreground)"> ... </span><span style="color:var(--shiki-token-constant)">1</span><span style="color:var(--shiki-token-function)"> more</span><span style="color:var(--shiki-foreground)"> ... </span><span style="color:var(--shiki-token-keyword)">|</span><span style="color:var(--shiki-token-constant)"> undefined</span><span style="color:var(--shiki-foreground)">;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
