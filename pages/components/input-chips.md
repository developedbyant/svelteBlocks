---
layout: Components
title: InputChips
description: A beautiful and customizable input component.
---
```js [CODE]
import InputChips from "src/blocks/InputChips.svelte";
let inputChipsValue = $state(["hi"]);
```
# InputChips
Add a beautiful and customizable chip input to your project.

## Add InputChips to project
```bash
npx svelte-blocks@latest inputChips
```

## Using input
To use component import it from `src/blocks/InputChips.svelte` and adding it to your page.
```js
import InputChips from "src/blocks/InputChips.svelte";
```
The input component takes `level` prop to indicate which h tag to use.<br/>
Add and preview component.
```svelte
<script>
    let inputChipsValue = $state(["hi"])
</script>

<InputChips bind:value={inputChipsValue} />
<strong>{ inputChipsValue.join(",")}</strong>
```

```svelte [add]
<InputChips bind:value={inputChipsValue} />
<strong>{ inputChipsValue.join(",")}</strong>
```

## Type data
```ts
type Type = {
    value:string[]
    rounded?:boolean
    variant?: "error" | "outline" | "primary";
}
```

## Props and events
This component can take any props or events available for `HTMLInputElement`.
```ts
type Props = {
    [x: `data-${string}`]: any;
    onfullscreenchange?: ((e: any) => any) | undefined;
    onfullscreenerror?: ((e: any) => any) | undefined;
    onabort?: ((e: any) => any) | undefined;
    onanimationcancel?: ((e: any) => any) | undefined;
    ... 216 more ...;
    'aria-valuetext'?: string | ... 1 more ... | undefined;
}
```