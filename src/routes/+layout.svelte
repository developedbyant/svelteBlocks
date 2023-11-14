<script lang="ts">
    export let data
    import"svelteBlocks/style.css"
    import"kitDocs/globals.css"
    import"kitDocs/variables.css"
    import { metaTagsStore } from "kitDocs/lib/stores";
    import { page } from "$app/stores";
    import Layout from "kitDocs/Layout.svelte";
    $: theme = data.theme
    $: hide = !$page.url.pathname.startsWith("/docs")
    // set mete tags
    $: url = $page.url.href
    $: appName = $metaTagsStore.appName
    $: favicon = $metaTagsStore.favicon ? $metaTagsStore.favicon : "/favicon.png"
    $: ogType = $metaTagsStore.ogType ? $metaTagsStore.ogType:"website" 
    $: title = $metaTagsStore.title ? `${$metaTagsStore.title} | ${appName}`:`${appName} | Components for your svelte apps` 
    $: description = $metaTagsStore.description ? $metaTagsStore.description:"Components for your svelte apps." 
    $: image = $metaTagsStore.image ? $metaTagsStore.image: "/favicon.png"
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content="FinOnX | Finance on X" />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
</svelte:head>
<Layout {hide} {theme}>
    <slot />
</Layout>