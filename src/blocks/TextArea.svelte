<script lang="ts">
    let { rounded,full,error,...props } = $props<BlockAll<"textarea",Blocks['textarea']>>();
    const data = {
        "data-r":rounded || null,
        "data-f":full || null,
        "data-e":error || null,
    }
</script>

<div class="container" {...data}>
    <textarea {...props}></textarea>
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        border: 1.5px solid var(--sb-border-color,red);
        border-radius: 6px;
        background: var(--sb-form-fg,red);
        width: fit-content;
    }
    /* when focus */
    .container:focus-within{
        border: 1.5px solid var(--sb-focus-color,red);
    }
    .container textarea{
        all: unset;
        resize: vertical;
        width: 100%;
        padding: var(--sb-padding-y) var(--sb-padding-x);
        font-size: var(--sb-size);
        color: var(--sb-form-text-color);
        font-weight: 600;
    }
    .container textarea::placeholder{
        color: var(--sb-form-text-color-fg)
    }
    /* make rounded */
    .container[data-r]{ border-radius: 50px;}
    /* make full width */
    .container[data-f]{ width: auto; }
    /* when error */
    .container[data-e]{ box-shadow: 0 0 0 1px var(--sb-error-bg); }
    .container[data-e] textarea{ color: var(--sb-error-bg); }
</style>