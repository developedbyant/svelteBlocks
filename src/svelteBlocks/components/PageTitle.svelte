<script lang="ts">
    export let margin:string = "0 0 0 0"
    export let title:string
    export let rounded:boolean = false
    export let btnText:string|undefined = undefined
    export let link:{href:string,text:string,disableLoad?:"yes"|"no"}|undefined = undefined
</script>

<div class="title" class:rounded style="margin: {margin};">
    <h2>{title}</h2>
    {#if btnText && !link}
        <button class="link" on:click>{btnText}</button>
    {/if}
    {#if link}
        <a href={link.href} class="link" data-sveltekit-preload-data={link.disableLoad==="yes"?"off":"hover"}>
            {link.text}
        </a>
    {/if}
</div>

<style>
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--sb-header-color);
    }
    h2{
        font-weight: 900;
        font-size: 30px;
        text-transform: uppercase;
        flex: 1;
    }
    .link{
        text-decoration: none;
        cursor: pointer;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        color: var(--sb-button-color);
        background-color: var(--sb-button-bg);
        box-shadow: var(--sb-shadow);
        transition: transform ease-in-out 0.3s;
        &:hover{
            transform: scale(1.05);
        }
    }
    /* make link rounded */
    .title.rounded > .link{
        border-radius: 50px;
    }
    @media(max-width:700px){
        h2{
            font-size: 25px;
        }
        .link{
            padding: 4px 8px;
        }
    }
</style>