---
layout: Introduction
title: Introduction
description: Introduction to svelteBlocks.
---
```js [CODE]
    import Button from 'svelteBlocks/components/Button.svelte'
```
# Introduction
svelteBlocks is a collection of reuseable svelte components that you can add to your project without any external package needed.<br>

## Getting started
To get started just run `svelte-blocks@latest` it will create the folder `src/svelteBlocks` where all your components will be added to.

## Add alias
After running `svelte-blocks@latest` you will need to add `svelteBlocks` alias to your `svelte.config.js` file.
```ts
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			svelteBlocks:"src/svelteBlocks/*",//[H]
		}
	}
};
export default config;
```

## Adding components
To add a component run `svelte-blocks@latest` follow by component name.
```bash
svelte-blocks@latest button
```
Or run `svelte-blocks@latest` to show all components.
```bash
svelte-blocks@latest
```

## Using components
After adding a component you can use it by importing it from `svelteBlocks/components`.
```svelte
<script lang="ts">
    import Button from 'svelteBlocks/components/Button.svelte';//[H]
</script>

<Button>Button</Button>
```
Button preview
```svelte [ADD]
<Button>Button</Button>
```