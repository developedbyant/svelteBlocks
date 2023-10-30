---
layout: Components
title: Input
description: Blogging Like a Hacker
---
```js [CODE]
    import Input from 'kitBlocks/Input.svelte';
    let inputValue:string = ""
```
# Input
To add a styled Input to your project run `npx kitblocks@latest add input`.
```svelte [ADD]
<Input type="input" placeholder="name..." bind:value={inputValue}/>
```

## Using input
Import Input `import Input from 'kitBlocks/Input.svelte'`
```svelte
<script lang="ts">
    import Input from 'kitBlocks/Input.svelte';
</script>

<Input type="input" placeholder="email..."/>
```

## Binding value
To bind input value just like any other components, add the `bind:value` to component.
```svelte
<script lang="ts">
    import Input from 'kitBlocks/Input.svelte';
    let inputValue:string = ""
</script>

<h2>Value:{inputValue}</h2>
<Input bind:value={inputValue} type="input" placeholder="email..."/>
```
```svelte [ADD]
<h2>Value:{inputValue}</h2>
<Input bind:value={inputValue} type="input" placeholder="email..."/>
```