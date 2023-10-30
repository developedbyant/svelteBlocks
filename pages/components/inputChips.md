---
layout: Components
title: InputChips
description: Add a styled Input chips.
---
```js [CODE]
    import InputChips from 'svelteBlocks/components/InputChips.svelte';
    let names:string[] = [ "anthony","tony" ]
```
# InputChips
To get started with inputChips component, import it from `svelteBlocks/components/InputChips.svelte`
```svelte [ADD]
<InputChips bind:value={names}/>
```

## Using inputChips
After importing InputChips component add it to your svelte component follow by the value param.
```svelte
<script lang="ts">
    import InputChips from "svelteBlocks/components/InputChips.svelte";
</script>

<InputChips value={["hi","hello"]}/>
```
```svelte [ADD]
<InputChips value={["hi","hello"]}/>
```

## Binding value
You can bind InputChips value just like any other of our components, add the `bind:value` follow by variable to bind.
```svelte
<script lang="ts">
    import InputChips from "svelteBlocks/components/InputChips.svelte";
    let names:string[] = [ "anthony","tony" ]
</script>

<InputChips value={names}/>
```
```svelte [ADD]
<InputChips bind:value={names}/>
<p style="margin:10px 0">{JSON.stringify(names)}</p>
```