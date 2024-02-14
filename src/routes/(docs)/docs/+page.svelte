<script lang="ts">

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
    <title>Installation | KitDocs</title>
    <meta name="title" content="Installation | KitDocs" />
    <meta name="description" content="How to install kitDocs." />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="/(docs)/docs/" />
    <meta property="og:title" content="Installation | KitDocs" />
    <meta property="og:description" content="How to install kitDocs." />
    <meta property="og:image" content="https://developedbyant.com/images/backdrop.png" />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="/(docs)/docs/" />
    <meta property="twitter:title" content="Installation | KitDocs" />
    <meta property="twitter:description" content="How to install kitDocs." />
    <meta property="twitter:image" content="https://developedbyant.com/images/backdrop.png" />
</svelte:head>
<h1 data-section data-md="header" id="what-is-kitdocs">
    What is kitDocs
</h1>
<p data-md="p">KitDocs is a documentation builder for svelte kit apps.</p>
<div data-md="code"><button on:click={copyText}>Copy</button><pre class="shiki css-variables" style="background-color:var(--shiki-background);color:var(--shiki-foreground)" tabindex="-1"><code><span class="line"><span style="color:var(--shiki-token-function)">npx</span><span style="color:var(--shiki-token-string)"> kitdocs@latest</span></span></code></pre></div>
<p data-md="p">You will see something like this from your terminal</p>
