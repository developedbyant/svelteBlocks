---
layout: Components
title: Button
description: Blogging Like a Hacker
---
```js [CODE]
    import Button from 'kitBlocks/Button.svelte';
    let loading:boolean = false
    async function handleClick(){
        // set loading
        loading = true
        // wait 2 seconds
        await new Promise(r=>setTimeout(r,2000))
        // remove loading after 2 seconds
        loading = false
    }
```
# Button
To add a styled button to your project run `npx kitblocks@latest add button`
```svelte [ADD]
<Button>Click</Button>
```

## Using component
Import Button from kitBlocks `import Button from 'kitBlocks/Button.svelte'`
```html
<script lang="ts">
    import Button from 'kitBlocks/Button.svelte';//[H]
</script>

<Button>Button</Button>
```
Button preview.
```svelte [ADD]
<Button>Button</Button>
```

## Changing button style
```svelte [ALL]
<!-- Outline -->
<Button config={{ outline:true }}>Outline</Button>
```
```svelte [ALL]
<!-- Rounded -->
<Button config={{ rounded:true }}>Rounded</Button>
```
```svelte [ALL]
<!-- Full size -->
<Button config={{ full:true }}>Full</Button>
```
```svelte [ALL]
<!-- Full size and rounded -->
<Button config={{ full:true,rounded:true }}>FullRounded</Button>
```

## Loader
By passing the `loading` param you can disable and add loading spinner to button.
```html
<Button loading={true}>ClickMe</Button>
```
```svelte [ADD]
<Button loading={true}>ClickMe</Button>
```

## Listen to events
Let's add loading when user click on button and remove after 2 seconds.
```html
<script>
    let loading:boolean = false
    async function handleClick(){
        // set loading
        loading = true
        // wait 2 seconds
        await new Promise(r=>setTimeout(r,2000))
        // remove loading after 2 seconds
        loading = false
    }
</script>

<Button {loading} on:click={handleClick}>ClickMe</Button>
```
```svelte [ADD]
<Button {loading} on:click={handleClick}>ClickMe</Button>
```
