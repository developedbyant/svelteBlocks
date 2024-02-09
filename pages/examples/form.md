---
layout: Examples
title: Form
description: Example of a form using svelteBlocks.
---
```js [CODE]
import Button from "src/blocks/Button.svelte";
import Input from "src/blocks/Input.svelte";
import Header from "src/blocks/Header.svelte";
import Flex from "src/blocks/Flex.svelte";
import FormContainer from "src/blocks/FormContainer.svelte";
```
# Form example
To create a from using svelteBlocks you will need to import the following components.
- Input : use to collect text
- Button : use to summit form
- Header : header text for form
- Flex (optional) : to display components or just use div and css
- FormContainer (optional) : to display components or just use div and css

## Install components
```bash
npx svelte-blocks@latest add [Button,Input,Header,Flex,FormContainer]
```
or run components selectors
```bash
npx svelte-blocks@latest select
```

## Example
```svelte
<script>
    import Button from "src/blocks/Button.svelte";
    import Input from "src/blocks/Input.svelte";
    import Header from "src/blocks/Header.svelte";
    import Flex from "src/blocks/Flex.svelte";
    import FormContainer from "src/blocks/FormContainer.svelte";
</script>

<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form example</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>
```

```svelte [ADD]
<Flex direction="column" gap="15px" maxWidth="100%">
    <Header level="h2">Form example</Header>
    <FormContainer method="POST" action="/api/test" direction="column" gap="5px">
        <Input required full placeholder="Email..." type="email" id="email"/>
        <Input required full placeholder="Password..." type="password" id="password"/>
        <Button full type="submit">Login</Button>
    </FormContainer>
</Flex>
```
