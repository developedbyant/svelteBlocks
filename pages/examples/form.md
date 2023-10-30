---
layout: Examples
title: Form example
description: How to create a from using svelte blocks (kitBlocks).
---
```js [CODE]
    import Button from 'kitBlocks/Button.svelte'
    import Input from 'kitBlocks/Input.svelte'
    import Flex from 'kitBlocks/Flex.svelte'
    let email:string = ""
    let password:string = ""
    let loading = false
    // handle when user click button
    async function handleClick(){
        loading = true // set loading
        // simulate request time
        await new Promise(r=>setTimeout(r,1000))
        // remove loading after request
        loading = false
        alert(`Welcome back ${email}`)
    }
```
# Form example
Learn how to create a form using kitBlocks

## Add components
```bash
# Add button
npx kitblocks@latest add button
# Add input
npx kitblocks@latest add input
```
## Import components
```svelte
<script lang="ts">
    import Flex from 'kitBlocks/Flex.svelte'
    import Input from 'kitBlocks/Input.svelte'
    import Button from 'kitBlocks/Button.svelte'
</script>
```

Next let's use components
```svelte [ALL]
<Flex>
    <Input type="email" placeholder="email..." />
    <Input type="password" placeholder="password..." />
    <Button>Login</Button>
</Flex>
```

Your code should look something like this so far
```svelte
<script lang="ts">
    import Flex from 'kitBlocks/Flex.svelte'
    import Input from 'kitBlocks/Input.svelte'
    import Button from 'kitBlocks/Button.svelte'
</script>

<Flex>
    <Input type="email" placeholder="email..." />
    <Input type="password" placeholder="password..." />
    <Button>Login</Button>
</Flex>
```

## Handle button click
When user click button, let's add a loading spinner to the button to let user something is happening.
```svelte [ALL]
<Flex>
    <Input type="email" placeholder="email..." />
    <Input type="password" placeholder="password..." />
    <Button {loading} on:click={handleClick}>Login</Button>
</Flex>
```

## Final code
```svelte
<script lang="ts">
    import Flex from 'kitBlocks/Flex.svelte'
    import Input from 'kitBlocks/Input.svelte'
    import Button from 'kitBlocks/Button.svelte'
    let email:string = ""
    let password:string = ""
    let loading = false
    // handle when user click button
    async function handleClick(){
        loading = true // set loading
        // simulate request time
        await new Promise(r=>setTimeout(r,1000))
        // remove loading after request
        loading = false
        alert(`Welcome back ${email}`)
    }
</script>

<Flex>
    <Input type="email" placeholder="email..." />
    <Input type="password" placeholder="password..." />
    <Button {loading} on:click={handleClick}>Login</Button>
</Flex>
```