<script lang="ts">
    import { toastsStore } from "./index";
    import Toast from "./Toast.svelte";
    const { position,rounded,full } = $props<Blocks['toast']>();
    const data = {
        "data-p": position || "tr",
        "data-f": full || null,
    }
</script>

{#if $toastsStore.length>0}
    <div class="toasts" {...data}>
        {#each $toastsStore as toast (toast.id)}
            <Toast {toast} {rounded}/>
        {/each}
    </div>
{/if}

<style>
    .toasts{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: fixed;
        max-height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 100;
    }
    /* top right */
    [data-p="tr"]{
        top: 0px;
        right: 0px;
    }
    /* top left */
    [data-p="tl"]{
        top: 0px;
        left: 0px;
    }
    /* bottom right */
    [data-p="br"]{
        bottom: 0px;
        right: 0px;
    }
    /* bottom left */
    [data-p="bl"]{
        bottom: 0px;
        left: 0px;
    }
    /* make it full width */
    .toasts[data-f]{ width: 100%; }
</style>