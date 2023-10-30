<script lang="ts">
    export let direction:"column"|"row" = "column"
    export let gap:`${string}px` = "10px"
    export let wrap:"wrap"|"no-wrap" = "wrap"
    export let bg:string = "var(--app-bg)"
    let style = `
        flex-direction:${direction}; gap:${gap};
        flex-wrap: ${wrap}; background-color:${bg}
    `
</script>

<div class="flex" {style}>
    <slot />
</div>

<style>
    .flex{
        display: flex;
    }
</style>