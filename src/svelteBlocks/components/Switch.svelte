<script lang="ts">
    export let value:boolean = false
    export let config:KBConfig['switch'] = { }
    import type { KBConfig } from "svelteBlocks/types";
    /** Set value to false or true */
    const handleClick = ()=> value=!value 
    /** custom style */
    let style = `--size:${config.size||"35px"} ; --borderRadius:${config.borderRadius||"50px"}`
</script>

<button class="switch" class:active={value} {style} on:click={handleClick}>
    <div class="circle"></div>
</button>

<style>
    .switch{
        all: unset;
        padding: 2.5px 5px;
        cursor: pointer;
        width: var(--size);
        min-height: calc(var(--size) / 2);
        height: calc(var(--size) / 2);
        background: var(--sb-bg);
        border: 1px solid var(--sb-border-color);
        display: block;
        border-radius: var(--borderRadius,100px);
        position: relative;
    }
    .circle{
        width: calc(var(--size) / 3);
        height: calc(var(--size) / 3);
        background: #fff;
        border-radius: 50%;
        transition: all ease-in-out 0.3s;
    }
    .switch.active{
        background-color: var(--sb-main-color);
    }
    .switch.active .circle{
        transform: translateX(200%);
    }
</style>