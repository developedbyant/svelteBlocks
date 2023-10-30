---
layout: Components
title: Switch
description: Styled toggle switch for your svelte projects.
---
```js [CODE]
    import Switch from 'svelteBlocks/components/Switch.svelte';
    let isDarkMode:boolean = false
```
# Switch
To get started with the switch component, import it from `svelteBlocks/components/Switch.svelte`
```svelte [ADD]
<Switch bind:value={isDarkMode}/>
```

## Using Switch
After importing Switch component add it to your svelte component follow by the value param.
```svelte
<script lang="ts">
    import Switch from 'svelteBlocks/components/Switch.svelte';
</script>

<Switch value={true}/>
```
```svelte [ADD]
<Switch value={true}/>
```

## Binding value
You can bind Switch value just like any other of our components, add the `bind:value` follow by variable to bind.
```svelte
<script lang="ts">
    import Switch from 'svelteBlocks/components/Switch.svelte';
    let isDarkMode:boolean = false
</script>

<Switch bind:value={isDarkMode}/>
```
```svelte [ADD]
<Switch bind:value={isDarkMode}/>
<h2>IsDarkMode:{isDarkMode}</h2>
```

## Config
Update switch size and border radius.
```svelte [ALL]
<div style="display:flex;gap:10px">
    <Switch bind:value={isDarkMode} config={{ size:"50px",borderRadius:"3px"}}/>
    <Switch bind:value={isDarkMode} config={{ size:"50px",borderRadius:"50px"}}/>
</div>
```