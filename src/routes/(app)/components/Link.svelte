<script lang="ts">
    import { page } from "$app/stores"
    let { href,size,icon,...props } = $props<BlockAll<"a",Blocks['link']>>();
    let active = $derived($page.url.pathname===href)
    const data = $derived({
        "data-a":active,
        style:`--SIZE:${size || "var(--sb-size) + 2px"}`
    })
</script>

<li {...data}>
    <a {href} {...props}>
        {#if icon}
            <div class="icon">
                <svelte:component width="100%" height="100%" this={icon} />
            </div>
        {/if}
        <slot />
    </a>
</li>

<style>
    /* link */
    a{
        text-decoration: none;
        font-size: var(--SIZE);
        font-weight: 500;
        color: var(--sb-nav-link-color);
        display: flex;
        align-items: center;
        gap: 5px;
    }
    a:hover{ opacity: 80%;}
    /* icon */
    .icon{
        width: var(--SIZE);
        height: var(--SIZE);
        transform: translateY(-1px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon svg{
        stroke: var(--sb-nav-icon-color);
    }
    /* when active class */
    [data-a=true] a{
        color: var(--sb-nav-active-link-color);
    }
</style>