<script lang="ts">
    const { children,...props } = $props<BlockAll<"div",Blocks['textDivider']>>();
</script>

<div class="divider" {...props}>
    <div class="line"></div>
    <span class="text">
        {@render children()}
    </span>
    <div class="line"></div>
</div>

<style>
    .divider{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    .line{
        width: 100%;
        height: 1.5px;
        background:var(--sb-border-color);
        border-radius: 8px;
    }
    .text{
        min-width: fit-content;
        font-size: var(--sb-size - 2px);
        font-weight: 600;
        color: var(--sb-text-color);
        text-transform: uppercase;
    }
</style>