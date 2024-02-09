<script lang="ts">   
    const { src,maxSize,center } = $props<Blocks['avatar']>();
    const attrs = {
        "data-c": center || null,
        style:`--MAX_SIZE:${maxSize || "80px"}`
    } 
</script>

<div class="avatar" {...attrs}>
    {#if typeof src==="string"}
        <span class="letter">{src}</span>
    {:else}
        <img src={src.path} alt={src.alt}>
    {/if}
</div>

<style>
    .avatar{
        max-width: var(--MAX_SIZE);
        height: var(--MAX_SIZE);
        width: var(--MAX_SIZE);
        border-radius: 50%;
        overflow: hidden;
        border: 1.5px solid var(--sb-border-color,var(--sb-main-color));
        box-shadow: 1px 2px 3px var(--sb-shadow);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avatar img{
        object-fit: cover;
        object-position: center;
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        width: 100%;
    }
    .letter{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--sb-foreground);
        font-size: calc(var(--MAX_SIZE) / 2.5);
        font-weight: 800;
        color: var(--sb-text-color);
    }
    /** Center image using margin */
    [data-c]{
        margin: auto;
    }
</style>