---
layout: Components
title: Input
description: A beautiful and customizable input component.
---
```js [CODE]
import Input from "src/blocks/Input.svelte";
```
# Input
Add a beautiful and customizable chip input to your project.

## Add Input to project
```bash
npx svelte-blocks@latest input
```

## Using input
To use component import it from `src/blocks/Input.svelte` and adding it to your page.
```js
import Input from "src/blocks/Input.svelte";
```
The input component takes `level` prop to indicate which h tag to use.<br/>
Add and preview component.
```svelte
<div style="display:flex;flex-direction:column;gap:5px">
    <Input type="text" placeholder="Input..."/>//[H]
    <Input type="text" error placeholder="Input with error..."/>//[H]
    <Input type="text" full placeholder="Full width..."/>//[H]
    <Input type="text" rounded placeholder="Rounded..."/>//[H]
    <Input type="email" placeholder="Email..." required/>//[H]
</div>
```
```svelte [add]
<div style="display:flex;flex-direction:column;gap:5px">
    <Input type="text" placeholder="Input..."/>
    <Input type="text" error placeholder="Input with error..."/>
    <Input type="text" full placeholder="Full width..."/>
    <Input type="text" rounded placeholder="Rounded..."/>
    <Input type="email" placeholder="Email..." required/>
</div>
```

## Input type
```ts
type InputType = {
    value?:string
    rounded?:boolean
    full?:boolean
    error?:boolean
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