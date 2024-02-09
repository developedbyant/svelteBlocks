<script lang="ts">
    let { value,rounded,full,error,...props} = $props<BlockAll<"input",Blocks['input']>>();
    const data = {
        /** error style */
        "data-e": error || null,
        /** make full width */
        "data-f": full || null,
        /** make rounded */
        "data-r": rounded || null,
    }
    const attrs = { ...props }
</script>

<div class="container" {...data}>
    <input type="text" bind:value placeholder="" {...attrs}>
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        border: 1.5px solid var(--sb-border-color,red);
        border-radius: 6px;
        background: var(--sb-form-fg,red);
        width: fit-content;
        transition: border ease-in-out 0.2s;
    }
    /* when focus */
    .container:focus-within{
        border: 1.5px solid var(--sb-focus-color,red);
    }
    .container input{
        all: unset;
        padding: var(--sb-padding-y) var(--sb-padding-x);
        font-size: var(--sb-size);
        font-weight: 400;
        width: -webkit-fill-available;
        color: var(--sb-form-text-color);
    }
    .container input::placeholder{
        color: var(--sb-form-text-color-fg,red)
    }
    /* make rounded */
    .container[data-r]{ border-radius: 50px; }
    /* make full width */
    .container[data-f]{ width: auto; }
    /* when error */
    .container[data-e]{ box-shadow: 0 0 0 1px var(--sb-error-bg); }
    .container[data-e] input{ color: var(--sb-error-bg); }
</style>