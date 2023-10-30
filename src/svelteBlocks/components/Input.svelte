<script lang="ts">
    export let type:"email"|"password"|"input"|"number"|"date"|"search"
    export let placeholder:string = `${type}...`
    export let value:string = ""
    export let error:boolean = false
    export let icon:any = undefined
    export let config = { rounded:false }
    /** handle input changes */
    const handleInput = (e:any)=>{
        value = type==="number" ? e.target.valueAsNumber : type==="date" ? e.target.valueAsDate : e.target.value
    }
</script>

<div class="container" class:error class:rounded={config.rounded}>
    <div class="icon">
        <svelte:component this={icon} />
    </div>
    <input {value} {type} {placeholder} on:input={handleInput} on:keyup>
    <slot />
</div>

<style>
    .container{
        display: flex;
        align-items: center;
        background-color: var(--sb-bg);
        padding: 8px 13px;
        border-radius: 5px;
        transition: box-shadow ease-in-out 0.3s;
    }
    .container:focus-within{
        box-shadow: 0 0 1px 2px var(--sb-border-color);
    }
    .container.rounded{ border-radius: 50px; }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--sb-icon-color);
    }
    input,input::placeholder{
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        color: var(--sb-text-color);
        border: none;
        background-color: transparent;
    }
    input:focus{ outline: none; }
    .container.error >  input, .container.error > input::placeholder{
        background-color: var(--sb-error-bg);
        color: var(--sb-error-color);
    }
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        input{
            font-size: 13px;
        }
    }
</style>