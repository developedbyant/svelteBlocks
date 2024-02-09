<script lang="ts">
    const { ...props } = $props<Blocks['flex']>();
    const data = {
        "flex-direction":props.direction || "row",
        "border-radius":props.borderRadius || "0px",
        "flex-wrap":props.wrap || "wrap",
        "background":props.bg || "transparent",
        "gap":props.gap || "5px",
        "padding":props.padding || "0px",
        "border":props.border || "none",
        "max-width":props.maxWidth || "100%",
        "width":props.width || "100%",
        "margin":props.margin || "auto",
    }
    const style = Object.entries(data).map(d=>typeof d[1]!=="boolean" ? `${d[0]}:${d[1]}` : "").join(";")
</script>

<div class="flex" class:fcMobile={props.columnOnMobile} {style}>
    <slot />
</div>

<style>
    .flex{
        display: flex;
    }
    @media(max-width:700px){
        .flex.fcMobile{
            flex-direction: column !important;
        }
    }
</style>