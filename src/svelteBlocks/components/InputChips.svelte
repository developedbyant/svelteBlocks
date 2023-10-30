<script lang="ts">
    export let placeholder:string = "Enter text..."
    export let value:string[]
    import { createEventDispatcher } from "svelte";
    const dispatcher = createEventDispatcher()
    let error:boolean = false
    let inputValue:string = ""
    let focus:boolean = false
    let input:HTMLInputElement
    $: heightClass = value.length > 0

    /** When click enter, create chip */
    function handleEnter(e:KeyboardEvent){
        const newChip = inputValue.trim()
        const chipExists = value.includes(newChip)
        error = chipExists
        // Only run is click enter and is there is not error
        if(e.code==="Enter" && !error){
            value = [...value,newChip]
            // Reset
            input.value = ""
        }
    }

    /** Remove chip when click on it */
    function removeChip(text:string){
        const newValues = value.filter(data=>data!==text)
        value = [...newValues]
        dispatcher("remove",text)
    }
</script>

<div class="inputChips" class:error class:focus class:heightClass>
    <input bind:this={input} bind:value={inputValue} {placeholder} required on:keyup={handleEnter} on:focusin={()=>focus=true} on:focusout={()=>focus=false}>
    {#if value.length>0}
        <div class="chips">
            {#each value as text }
                <button class="chip" on:click on:click={()=>removeChip(text)}>
                    {text}
                </button>
            {/each}
        </div>
    {/if}
</div>


<style>
    .inputChips{
        background-color: var(--sb-bg);
        border-radius: 5px;
        box-shadow: 1px 2px 3px var(--sb-shadow);
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        color: var(--sb-text-color);
        max-height: 45px;
        transition: max-height ease-in-out 0.5s;
    }
    .inputChips.heightClass{
        max-height: 400px;
    }
    input{
        all: unset;
        font-size: 14px;
        font-weight: 400;
    }
    input::placeholder{
        font-size: 14px;
        font-weight: 400;
    }
    .error{
        background-color: var(--sb-error-bg);
        color: var(--sb-error-color);
    }
    .focus{
        box-shadow: 0 0 1px 1px var(--sb-main-color);
    }
    .chips{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 5px;
    }
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