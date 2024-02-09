<script lang="ts">   
    const {href,variant,full,loading,rounded,...props} = $props<BlockAll<"button",Blocks['chip']>>();
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
        <slot />
    </a>
{:else}
    <button class="btn" {...attrs}>
        <slot />
    </button>
{/if}

<style>
    .btn{
        all: unset;
        cursor: pointer;
        padding: calc(var(--sb-padding-y) - 3px) calc(var(--sb-padding-x) - 6px);
        font-size: calc(var(--sb-size) - 3px);
        border-radius: 6px;
        font-weight: 500;
        transition: all ease-in-out 0.2s;
        width: fit-content;
    }
    /* on hover */
    .btn:hover{ opacity: 80%; }
    /* make rounded */
    .btn[data-r="true"]{ border-radius: 50px; }
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
</style>