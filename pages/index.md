---
layout: Introduction
title: Introduction
description: Blogging Like a Hacker
---
```js [CODE]
    import Button from 'kitBlocks/Button.svelte'
```
# Documentation
```[WARNING]
Before adding any components, add kitBlocks alias to your svelte.config.js,
import kitBlocks style and add kitBlocks class to parent div.
```

```js
// add kitBlocks alias svelte.config.js
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			kitBlocks:"src/kitBlocks/*"
		}
	}
};
```
```html
<script lang="ts">
    // import kitBlocks style.css to layout
    import"kitBlocks/styles.css"
</script>
```
```html
<!-- add kitBlocks to app layout -->
<div class="app kitBlocks">
    <!-- Your components -->
</div>
```

## Getting started
To get started with kitBlocks, just run `npx kitblocks@latest add componentName`
```bash
# Add button component
npx kitblocks@latest add button
```
Or `npx kitblocks@latest` to display a list of all components or to search component.

## Example
Your layout should look something like this
```html
<script lang="ts">
    import"kitBlocks/styles.css"
</script>

<div class="app kitBlocks">
    <slot />
</div>
```
Import button component `import Button from 'kitBlocks/Button.svelte'`
```html
<script lang="ts">
    import"kitBlocks/styles.css"
    import Button from 'kitBlocks/Button.svelte'
</script>

<div class="app kitBlocks">
    <!-- Added button -->
    <Button>Button</Button>
</div>
```
Output should look like this
```svelte [ADD]
<Button>Button</Button>
```