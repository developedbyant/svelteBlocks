---
layout: Components
title: Chip
description: A beautiful and customizable chip component.
---
```js [CODE]
import Chip from "src/blocks/Chip.svelte";
```
# Chip component
Add a beautiful and customizable chip component to your project.

## Add component
```bash
npx svelte-blocks@latest chip
```

## Type
The chip component can take any of the following type keys.
```ts
type ComponentType = {
    children: Snippet;
    href?:string
    loading?: boolean,
    rounded?: boolean,
    full?: boolean
    variant?: "error" | "outline" | "primary";
}
```

## Using component
To use component import it from `src/blocks/Chip.svelte` and adding it to your page.
```js
import Chip from "src/blocks/Chip.svelte";
```
Add and preview component.
```svelte [all]
<Chip>Chip</Chip>
```

## Variants
Chip have multiple variants to change the look of the component.
### error
```svelte [all]
<Chip variant="error">Error</Chip>
```
### outline
```svelte [all]
<Chip variant="outline">Outline</Chip>
```
### primary
```svelte [all]
<Chip variant="primary">Primary</Chip>
```

### Chip as link
To use chip component as a link just pass prop `href` and it will turn button into a anchor tag.
```svelte [all]
<Chip href="/docs/components/button" variant="primary">Primary</Chip>
```