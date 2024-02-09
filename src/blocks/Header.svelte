<script lang="ts">
    const { level } = $props<Blocks['header']>()
</script>

<div class="container">
    {#if level==="h1"}
        <h1><slot/></h1>
    {:else if level==="h2"}
        <h2><slot/></h2>
    {:else if level==="h3"}
        <h3><slot/></h3>
    {:else if level==="h4"}
        <h4><slot/></h4>
    {:else}
        <h1><slot/></h1>
    {/if}
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h1,h2,h3{
        font-size: var(--sb-size + 10px);
        font-weight: 700;
        color: var(--sb-header-color);
    }
    h2{
        font-size: calc(var(--sb-size) + 8px);
        font-weight: 600;
    }
    h3{
        font-size: calc(var(--sb-size) + 6px);
        font-weight: 500;
    }
    h4{
        font-size: calc(var(--sb-size) + 4px);
        font-weight: 400;
    }
</style>