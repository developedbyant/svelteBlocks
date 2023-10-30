<script lang="ts">
    export let text:string
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher()
</script>

<button class="chip" on:click on:click={()=>dispatcher("remove",text)}>
    {text}
</button>

<style>
    .chip{
        all: unset;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 4px;
        background-color: rgba(0,0,0,.3);
        color: var(--sb-text-color);
        font-size: 12px;
        font-weight: 500;
        transition: all ease-in-out 0.4s;
        animation: fadeIn ease 0.6s;
    }
    .chip:hover{
        transform: scale(1.05);
        background-color: var(--sb-error-bg);
        color: var(--sb-error-color);
    }
    @keyframes fadeIn{
        from { opacity: 0; }
        to { opacity: 100%; }
    }
</style>