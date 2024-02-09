<script lang="ts">
    let { rounded,active,svgIcon,size,...props } = $props<BlockAll<"label",Blocks['toggle']>>();
    const data = $derived({
        "data-r": rounded || true,
        "data-a": active || null,
        style:`--SIZE:${size || "40px" }`,
        /** Handle click */
        onclick:()=>{ active = !active }
    })
</script>

<button {...data} {...props}>
    <div class="circle"></div>
</button>

<style>
    button{
        all: unset;
        cursor: pointer;
        width: var(--SIZE);
        min-height: calc(var(--SIZE) / 2);
        height: calc(var(--SIZE) / 2);
        background: var(--sb-foreground);
        border: 1px solid var(--sb-border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 500px;
        position: relative;
        transition: all ease-in-out 0.2s;
    }
    /* on mouse hover and focus */
    button:hover,button:focus{ opacity: 80%; }
    .circle{
        width: calc(var(--SIZE) / 3);
        height: calc(var(--SIZE) / 3);
        background: var(--sb-main-color);
        border-radius: 50%;
        transition: all ease-in-out 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(calc(-100% + calc(var(--SIZE) / 15)));
    }
    /* when active */
    button[data-a]{
        background: var(--sb-button-bg);
    }
    /* translate circle to the right */
    button[data-a] .circle{
        background: var(--sb-button-color);
        transform: translateX(calc(100% - calc(var(--SIZE) / 15)));
    }
</style>