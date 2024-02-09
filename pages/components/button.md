---
layout: Components
title: Button
description: A beautiful and customizable button component.
---
```js [CODE]
import Button from "src/blocks/Button.svelte";
// function for button
const onclick = ()=> alert("Button was clicked")
```
# Button
Add a beautiful and customizable button component to your project.

## Add component
```bash
npx svelte-blocks@latest button
```

## Type
The button component can take any of the following type keys.
```ts
type button = {
    children: Snippet;
    href?:string
    loading?: boolean;
    rounded?: boolean;
    full?: boolean;
    variant?: "error" | "outline" | "primary";
    icon?: any;
}
```

## Using component
To use component import it from `src/blocks/Button.svelte` and adding it to your page.
```js
import Button from "src/blocks/Button.svelte";
```
Add and preview component.
```svelte [all]
<Button>Button</Button>
```

## Changing style
To change component style you can do it by editing the `src/blocks/styles/blocks.css` and edit css 
variable `--sb-button-color` and `--sb-button-bg` or passing the `variant` prop to component.

### Error
```svelte [all]
<Button variant="error">Button</Button>
```

### Outline
```svelte [all]
<Button variant="outline">Button</Button>
```

## Events
Thanks to svelte5 you can pass any on event that is allow to be pass to a button, 
example to pass onclick event just pass a function named onclick.<br/>
Create function
```js
const onclick = ()=> alert("Button was clicked")
```
Pass function to button
```svelte [all]
<Button {onclick}>ClickMe</Button>
```

## Data attributes
Same for data attributes just pass any allow attributes to the component.
```svelte [all]
<Button data-test="hi">Button</Button>
```

## Loading
Add loading snipper and disable button by passing prop `loading` to component.
```svelte [all]
<Button loading>Loading</Button>
```

## Rounded
To make button rounded style pass the prop `rounded` to component.
```svelte [all]
<Button rounded>Rounded</Button>
```
```svelte [all]
<Button loading rounded>Rounded</Button>
```
```svelte [all]
<Button variant="outline" rounded>Rounded</Button>
```

## Full width
If you want the component to take the available with pass prop `full`.
```svelte [all]
<Button full>Button</Button>
```

## Button as link
To use button component as a link just pass prop `href` and it will turn button into a anchor tag.
```svelte [all]
<Button href="/docs/components/chip">Link</Button>
```