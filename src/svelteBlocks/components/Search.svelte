<script lang="ts">
    export let value:string = ""
</script>

<div class="search">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
    <input bind:value type="text" placeholder="search...">
</div>

<style>
    .search{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--sb-bg);
        border: 1.5px solid var(--sb-border-color);
        transition: box-shadow ease-in-out 0.1s;
    }
    .search:focus-within{
        box-shadow: 0 0 1px 1px var(--sb-border-color);
    }
    .search input,.search input::placeholder{
        width: 100%;
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: 15px;
        font-weight: 400;
        color: var(--sb-text-color);
    }
    .search input:focus{ outline: none; }
    .icon{
        width: 20px;
        height: 20px;
        fill: var(--sb-icon-color);
    }
</style>