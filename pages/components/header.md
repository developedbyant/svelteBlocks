---
layout: Components
title: Header
description: A beautiful and customizable header component.
---
```js [CODE]
import Header from "src/blocks/Header.svelte";
```
# Header
Add a beautiful and customizable chip header to your project.

## Add Header to project
```bash
npx svelte-blocks@latest header
```

## Using header
To use component import it from `src/blocks/Header.svelte` and adding it to your page.
```js
import Header from "src/blocks/Header.svelte";
```
The header component takes `level` prop to indicate which h tag to use.<br/>
Add and preview component.
```svelte [all]
<Header level="h1">Headers</Header>
<Header level="h1">Header h1</Header>
<Header level="h2">Header h2</Header>
<Header level="h3">Header h3</Header>
<Header level="h4">Header h4</Header>
```