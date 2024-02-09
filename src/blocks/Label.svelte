<script lang="ts">
    let { ...props } = $props<BlockAll<"label",Blocks['label']>>();
</script>

<label {...props}>
    <slot />
</label>

<style>
    label{
        font-size: var(--sb-size + 3px);
        font-weight: 400;
        color: var(--sb-text-color);
    }
</style>