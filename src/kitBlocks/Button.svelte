<script lang="ts">
    export let loading:boolean = false
    export let config:KBConfig['button'] = { }
    import type { KBConfig } from "./+types";
    let pressing:boolean = false
    /** add or remove press class */
    const handlePress = ()=> pressing = !pressing
</script>

<button class:outline={config.outline} class:full={config.full} class:rounded={config.rounded} class:pressing class:loading disabled={loading} on:mousedown={handlePress} on:mouseup={handlePress} on:click>
    {#if loading}
        <div class="spinner"/>
    {/if}
    <slot />
</button>

<style>
    button {
        width: fit-content;
        border: none;
        cursor: pointer;
        padding: 5px 15px;
        font-size: 15px;
        font-weight: 400;
        background-color: var(--kb-button-bg);
        color: var(--kb-button-color);
        border-radius: 5px;
        transition: opacity 0.3s ease;
        display: flex;
        align-items: center;
        gap: 3px;
    }
    /* when loading */
    button.loading{
        opacity: 80%;
        cursor: not-allowed;
    }
    /* when pressing */
    button.pressing{ scale: 0.95; }
    button.full{ width: 100%; }
    button.rounded{ border-radius: 50px; }
    button.outline{
        background-color: transparent;
        border: 1.5px solid var(--kb-border-color);
    }
    /* on hover */
    button:hover { opacity: 80%; }
    .spinner {
        width:13px;
        height:13px;
        border:var(--kb-button-color) 1.5px dashed;
        border-top:transparent 1.5px solid;
        border-radius: 50%;
        background-color: transparent;
        animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        button {
            font-size: 13px;
        }
    }
</style>
