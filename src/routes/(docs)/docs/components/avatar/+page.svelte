<script lang="ts">
import Avatar from "src/blocks/Avatar.svelte";
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
    <title>Avatar | SvelteBlocks</title>
    <meta name="title" content="Avatar | SvelteBlocks" />
    <meta name="description" content="A beautiful and customizable avatar component." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://svelteblocks.dev/docs/components/avatar" />
    <meta property="og:title" content="Avatar | SvelteBlocks" />
    <meta property="og:description" content="A beautiful and customizable avatar component." />
    <meta property="og:image" content="https://svelteblocks.dev/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://svelteblocks.dev/docs/components/avatar" />
    <meta property="twitter:title" content="Avatar | SvelteBlocks" />
    <meta property="twitter:description" content="A beautiful and customizable avatar component." />
    <meta property="twitter:image" content="https://svelteblocks.dev/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="avatar">
    Avatar
</h1>
<p data-md="p">Add a beautiful and customizable avatar component to your project.</p>
<div data-md="space"></div>
<h2 data-section data-md="header" id="add-component">
    Add component
</h2>
<p data-md="p">To add component simple run the following command.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> svelte-blocks@latest avatar</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="type">
    Type
</h2>
<p data-md="p">The avatar component can take any of the following type keys.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">type</span><span style="color:var(--shiki-token-function)"> avatar</span><span style="color:var(--shiki-token-keyword)"> =</span><span style="color:var(--shiki-foreground)"> &#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    src</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-token-keyword)"> |</span><span style="color:var(--shiki-foreground)"> &#123; path</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-token-punctuation)">,</span><span style="color:var(--shiki-foreground)"> alt</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-foreground)"> }</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    center</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> boolean</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    maxSize</span><span style="color:var(--shiki-token-keyword)">?:</span><span style="color:var(--shiki-token-constant)"> string</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}</span></span></code></pre></div>
<div data-md="space"></div>
<h2 data-section data-md="header" id="using-component">
    Using component
</h2>
<p data-md="p">To use component import it and add it to any svelte page or component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-keyword)">import</span><span style="color:var(--shiki-foreground)"> Avatar </span><span style="color:var(--shiki-token-keyword)">from</span><span style="color:var(--shiki-token-string-expression)"> "src/blocks/Avatar.svelte"</span><span style="color:var(--shiki-foreground)">;</span></span></code></pre></div>
<p data-md="p">Add and preview component.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Avatar</span><span style="color:var(--shiki-token-function)"> src</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"DA"</span><span style="color:var(--shiki-foreground)"> /></span></span></code></pre></div>
<Avatar src="DA" />
<div data-md="space"></div>
<h2 data-section data-md="header" id="set-image-src">
    Set image src
</h2>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-constant)">Avatar</span><span style="color:var(--shiki-token-function)"> src</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">&#123;&#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    path</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"https://avatars.githubusercontent.com/u/107594214"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    alt</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"DevelopedByAnt"</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">}}/></span></span></code></pre></div>
<Avatar src={{
    path:"https://avatars.githubusercontent.com/u/107594214",
    alt:"DevelopedByAnt"
}}/>
<div data-md="space"></div>
<h2 data-section data-md="header" id="set-width">
    Set width
</h2>
<p data-md="p">To set with pass prop <code data-md="inline-code">maxSize</code> to give the component a max width.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-foreground)">&#x3C;</span><span style="color:var(--shiki-token-string-expression)">div</span><span style="color:var(--shiki-token-function)"> style</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"display:flex;gap:10px"</span><span style="color:var(--shiki-foreground)">></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Avatar</span><span style="color:var(--shiki-token-function)"> src</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-token-string-expression)">"A"</span><span style="color:var(--shiki-token-function)"> maxSize</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">40px</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    &#x3C;</span><span style="color:var(--shiki-token-constant)">Avatar</span><span style="color:var(--shiki-token-function)"> src</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">&#123;&#123;</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        path</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"https://avatars.githubusercontent.com/u/107594214"</span><span style="color:var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">        alt</span><span style="color:var(--shiki-token-keyword)">:</span><span style="color:var(--shiki-token-string-expression)">"DevelopedByAnt"</span></span>
<span class="line"><span style="color:var(--shiki-foreground)">    }} </span><span style="color:var(--shiki-token-function)">maxSize</span><span style="color:var(--shiki-token-keyword)">=</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-token-constant)">40px</span><span style="color:var(--shiki-foreground)">"</span><span style="color:var(--shiki-foreground)">/></span></span>
<span class="line"><span style="color:var(--shiki-foreground)">&#x3C;/</span><span style="color:var(--shiki-token-string-expression)">div</span><span style="color:var(--shiki-foreground)">></span></span></code></pre></div>
<div style="display:flex;gap:10px">
    <Avatar src="A" maxSize="40px"/>
    <Avatar src={{
        path:"https://avatars.githubusercontent.com/u/107594214",
        alt:"DevelopedByAnt"
    }} maxSize="40px"/>
</div>
