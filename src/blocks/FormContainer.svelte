<script lang="ts">
    const { children,...props } = $props<BlockE<"form",Blocks['form']>>();
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
    const attrs = { method:props.method,action:props.action }
</script>

<form class="flex" class:fcMobile={props.columnOnMobile} {style} {...attrs}>
    {@render children()}
</form>

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