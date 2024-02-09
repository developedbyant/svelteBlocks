<script lang="ts">   
    const { href,children,variant,full,loading,rounded,icon,...props} = $props<BlockAll<"button",Blocks['button']>>();
    const data = {
        "data-v": variant || "primary",
        "data-f": full || null,
        "data-l": loading || null,
        "data-r": rounded || null,
    } 
    const attrs = { ...props,...data } 
</script>

{#if href}
    <a {href} class="btn" {...attrs}>
        {#if loading}
            <div class="spinner"/> 
        {/if}
        {#if icon && !loading}
            <div class="icon">            
                <svelte:component class="icon" width="100%" height="100%" this={icon} />
            </div>
        {/if}
        <slot />
    </a>
{:else}
    <button class="btn" {...attrs}>
        {#if loading}
            <div class="spinner"/> 
        {/if}
        {#if icon && !loading}
            <div class="icon">            
                <svelte:component class="icon" width="100%" height="100%" this={icon} />
            </div>
        {/if}
        <slot />
    </button>
{/if}

<style>
    .btn{
        all: unset;
        cursor: pointer;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 3px;
        padding: var(--sb-padding-y) var(--sb-padding-x);
        font-size: var(--sb-size);
        font-weight: 400;
        border-radius: 6px;
    }
    /* icon */
    .icon{
        width: calc(var(--sb-size) + 2px);
        height: calc(var(--sb-size) + 2px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* primary style */
    .btn[data-v="primary"]{
        color: var(--sb-button-color);
        background: var(--sb-button-bg);
    }
    /* error style */
    .btn[data-v="error"]{
        color: var(--sb-error-color);
        background: var(--sb-error-bg);
    }
    /* outline style */
    .btn[data-v="outline"] .icon{ color: var(--sb-button-bg); }
    .btn[data-v="outline"]{
        color:  var(--sb-button-bg);
        background: transparent;
        box-shadow: 0 0 0 1px var(--sb-button-bg);
    }
    /* on mouse hover and focus */
    .btn:hover,.btn.loading{ opacity: 80%; }
    .spinner{
        width: var(--sb-size);
        height: var(--sb-size);
        border-radius: 50%;
        border: 2px solid;
        border-top: 2px solid transparent;
        animation: spin 1s linear infinite;
    }
    /* when loading */
    .btn[data-l="true"]{ cursor: not-allowed; }
    /* make rounded */
    .btn[data-r="true"]{ border-radius: 50px; }
    /* make full width */
    .btn[data-f="true"]{
        width: -webkit-fill-available;
        justify-content: center;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
</style>