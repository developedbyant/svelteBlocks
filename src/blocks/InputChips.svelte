<script lang="ts">
    //[IMPORTS]=[Chip]
    import Chip from "src/blocks/Chip.svelte";
    let { value,variant,rounded,...props } = $props<BlockE<"input",Blocks['inputChips']>>();
    let inputValue = $state("")
    let error = $derived(value.length>0 && value.includes(inputValue.trim()))

    /** Change input changes */
    function handleKeyChanges(e:KeyboardEvent){
        if(e.key!=="Enter") return // stop function
        const cleanInputValue = inputValue.trim()
        // if input value already in value, stop func
        if(value.includes(cleanInputValue) || cleanInputValue==="") return
        // add to value
        value.push(cleanInputValue)
        value = [...value]
        // reset input value and set error to false
        inputValue = ""
    }
    /** Handle chip removal */
    const removeChip = (text:string)=>{
        const newChips = value.filter(data=>data!==text)
        value = [...newChips]
    }
    const inputAttrs = { type:"text", placeholder:"Input text..." }
</script>

<div class="container" data-e={error||null}>
    <input bind:value={inputValue} {...inputAttrs} {...props} onkeyup={handleKeyChanges}>
    <div class="chips">
        {#each value as text (text)}
            <Chip {variant} {rounded} onclick={()=>removeChip(text)}>
                {text}
            </Chip>
        {/each}
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        border: 1.5px solid var(--sb-border-color,red);
        border-radius: 6px;
        background: var(--sb-form-fg,red);
        width: -webkit-fill-available;
        transition: border ease-in-out 0.2s;
    }
    /* when focus */
    .container:focus-within{
        border: 1.5px solid var(--sb-focus-color,red);
    }
    .container input{
        all: unset;
        padding: 8px 16px;
        padding: var(--sb-padding-y) var(--sb-padding-x);
        font-size: var(--sb-size);
        font-weight: 400;
        width: -webkit-fill-available;
        color: var(--sb-form-text-color);
    }
    .container input::placeholder{
        color: var(--sb-form-text-color-fg)
    }
    /* when error */
    .container[data-e]{ border: 1.5px solid var(--sb-error-bg,red); }
    .container[data-e] input{ color: var(--sb-error-bg,red); }

    .chips{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 10px 16px;
    }
    /* when there is not chips */
    .chips:empty{ display: none; }
</style>