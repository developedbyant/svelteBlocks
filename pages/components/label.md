---
layout: Components
title: Label
description: A beautiful and customizable label component.
---
```js [CODE]
import Label from "src/blocks/Label.svelte";
import Button from "src/blocks/Button.svelte";
import Input from "src/blocks/Input.svelte";
import Header from "src/blocks/Header.svelte";
import Flex from "src/blocks/Flex.svelte";
import FormContainer from "src/blocks/FormContainer.svelte";
```
# Label
Add a beautiful and customizable label text to your project, you can use it for input label and more.

## Add Label to project
```bash
npx svelte-blocks@latest label
```

## Using label
To use component import it from `src/blocks/Label.svelte` and adding it to your page.
```js
import Label from "src/blocks/Label.svelte";
```

Add it to your svelte page or component.
```svelte
<script>
    import Label from "src/blocks/Label.svelte";//[H]
</script>

<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form example</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Label for="email">Email</Label>//[H]
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Label for="password">Email</Label>//[H]
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>
```

```svelte [add]
<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Label for="email">Email</Label>
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Label for="password">Password</Label>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>
```

## Type data
```ts
type Type = {
    children: Snippet;
}
```

## Props and events
This component can take any props or events available for `HTMLLabelElement`.
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