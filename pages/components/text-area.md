---
layout: Components
title: TextArea
description: A beautiful and customizable TextArea component.
---
```js [CODE]
import TextArea from "src/blocks/TextArea.svelte";
```
# TextArea
Add a beautiful and customizable TextArea to your project.

## Add TextArea to project
```bash
npx svelte-blocks@latest textArea
```

## Using TextArea
To use component import it from `src/blocks/TextArea.svelte` and adding it to your page.
```js
import TextArea from "src/blocks/TextArea.svelte";
```

Add it to your svelte page or component.
```svelte
<script>
    import TextArea from "src/blocks/TextArea.svelte";//[H]
</script>


<TextArea full placeholder="Text..."/>//[H]
```

```svelte [add]
<TextArea full placeholder="Text..."/>
```

## Type data
```ts
type Type = {
    value?:string // bind value bind:v={value}
    placeholder?:string
    rounded?:boolean
    full?:boolean
    error?:boolean
}
```

## Props and events
This component can take any props or events available for `HTMLTextAreaElement`.
```ts
type Props = {
    [x: `data-${string}`]: any;
    onfullscreenchange?: ((e: any) => any) | undefined;
    onfullscreenerror?: ((e: any) => any) | undefined;
    onabort?: ((e: any) => any) | undefined;
    onanimationcancel?: ((e: any) => any) | undefined;
    ... 200 more ...;
    dirname?: string | ... 1 more ... | undefined;
}
```