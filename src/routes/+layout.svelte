<script lang="ts">
    export let data
    import"../app.css"
    import"svelteBlocks/style.css"
    import"kitDocs/styles/app.css"
    import"kitDocs/styles/shiki.css"
    import { page } from "$app/stores";
    import Layout from "kitDocs/Layout.svelte";
</script>

<Layout {data} showSides={$page.url.pathname.startsWith("/docs")}>
    <slot />
</Layout>