---
layout: Components
title: Modal
description: Styled modal for your svelte projects.
---
```js [CODE]
    import Modal from 'kitBlocks/Modal.svelte';
    import Flex from 'kitBlocks/Flex.svelte';
    import Button from 'kitBlocks/Button.svelte';
    let modalIsOpen:boolean = false
    let modalIsOpen_2:boolean = false
    /** Open or close modal, when click button */
    const handleClick = ()=> modalIsOpen = !modalIsOpen
    const config={ open:"left",maxHeight:"100vh" }
```
# Modal
To get started, import `Modal` component from `kitBlocks/Modal.svelte`.
```svelte
<script lang="ts">
    import Modal from 'kitBlocks/Modal.svelte';//[H]
</script>

```
Now bind param `open` to variable `modalIsOpen`.
```svelte
<script lang="ts">
    import Modal from 'kitBlocks/Modal.svelte';
    let modalIsOpen:boolean = false//[H]
</script>

<Modal bind:open={modalIsOpen}>
    <!-- Your code here -->
</Modal>
```
Finally open or close modal, here is an example that open or close modal when user click a button.
```svelte
<script lang="ts">
    import Modal from 'kitBlocks/Modal.svelte';
    import Flex from 'kitBlocks/Flex.svelte';
    import Button from 'kitBlocks/Button.svelte';
    let modalIsOpen:boolean = false
    /** Open or close modal, when click button */
    const handleClick = ()=> modalIsOpen = !modalIsOpen
</script>

<Modal bind:open={modalIsOpen}>
    <h2>Welcome</h2>
</Modal>
<Button on:click={handleClick}>
    {modalIsOpen?"Close":"Open"} modal
</Button>
```
```svelte [ADD]
<Modal bind:open={modalIsOpen}>
    <div style="display:flex;padding:10px;background:var(--app-bg)">
        <h2>Welcome</h2>
    </div>
</Modal>
<Button on:click={handleClick}>
    Open
</Button>
```

## Configuration
By passing param config you can change the way the Modal open,width,height and others.<br/>
Let's make the modal full screen, open from left side and a max width of 200px.
```svelte
<script lang="ts">
    import Modal from 'kitBlocks/Modal.svelte';
    import Flex from 'kitBlocks/Flex.svelte';
    import Button from 'kitBlocks/Button.svelte';
    let modalIsOpen_2:boolean = false
</script>
<Modal bind:open={modalIsOpen_2} config={{ open:"left",maxHeight:"100vh",height:"100%",maxWidth:"200px" }}>//[H]
    <div style="display:flex;padding:10px;background:var(--app-bg)">
        <h2>Welcome</h2>
    </div>
</Modal>
<Button on:click={()=>modalIsOpen_2=!modalIsOpen_2}>
    Open
</Button>
```
```svelte [ADD]
<Modal bind:open={modalIsOpen_2} config={{ open:"left",maxHeight:"100vh",height:"100%",maxWidth:"200px" }}>
    <div style="display:flex;padding:10px;background:var(--app-bg);height: 100%;">
        <h2>Welcome</h2>
    </div>
</Modal>
<Button on:click={()=>modalIsOpen_2=!modalIsOpen_2}>
    Open
</Button>
```