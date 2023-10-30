export type KBConfig = {
    button:{
        full?:true
        rounded?:true
        outline?:true
    }
    switch: {
        size?:`${string}px`
        borderRadius?:`${string}px`
    }
    modal: { 
        padding?:string
        maxWidth?:`${string}px`
        maxHeight?:string
        height?:string
        align?:"center"|"flex-start"|"flex-end"
        open?:"left"|"right"
    }
}
