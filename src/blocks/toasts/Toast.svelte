<script lang="ts">
    import type { ToastData } from "./index";
    let { toast,rounded } = $props<Props>();
    type Props = { 
        toast:ToastData
        rounded?:boolean,
    };
    /** Use to add animation before closing toast */
    let closed = $derived(toast.closedClass?true:false)
</script>

<div class="toast" class:closed class:rounded data-type={toast.type}>
    {#if toast.type=="successful"}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
    {:else if toast.type=="error"}
        <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 512 512">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
        </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"  viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
    {/if}
    <p class="msg">{toast.msg}</p>
</div>

<style>
    .toast{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        color: var(--sb-text-color);
        padding: 10px ;
        background: var(--sb-foreground);
        border-radius: 8px;
        transition: all ease-in-out 0.4s;
        animation: animateIn 0.4s;
        position: relative;
        overflow: hidden;
        /* use for transition */
        max-height: 50px;
        opacity: 100%;
    }
    /* when closed class it's added */
    .toast.closed{
        max-height: 0px;
        opacity: 0%;
    }
    /* toast message */
    .msg{
        font-size: 14px;
        font-weight: 400;
    }
    /* icon */
    svg{
        width: 15px;
        height: 15px;
        min-width: 15px;
        min-height: 15px;
    }
    /* error */
    [data-type="error"]{ box-shadow: 0 0 1.5px #DB6D6D; }
    [data-type="error"] svg{
        fill: #DB6D6D;
    }
    [data-type="error"].toast::before{
        background-color: #DB6D6D;
    }
    /* neutral */
    [data-type="neutral"]{ box-shadow: 0 0 1.5px #364152; }
    [data-type="neutral"] svg{
        fill: #364152;
    }
    [data-type="neutral"].toast::before{
        background-color: #364152;
    }
    /* successful */
    [data-type="successful"]{ box-shadow: 0 0 1.5px #079E6D; }
    [data-type="successful"] svg{
        fill: #079E6D;
    }
    [data-type="successful"].toast::before{
        background-color: #079E6D;
    }
    @keyframes animateIn{
        from{
            opacity: 0%;
            max-height: 0px;
        }
        to{
            opacity: 100%;
            max-height: 50px;
        }
    }
    /* make it rounded */
    .toast.rounded{
        border-radius: 50px;
    }
    .toast{ box-shadow: 0 0 1.5px var(--sb-text-color); }

</style>