---
layout: Components
title: Avatar
description: A beautiful and customizable avatar component.
---
```js [CODE]
import Avatar from "src/blocks/Avatar.svelte";
```
# Avatar
Add a beautiful and customizable avatar component to your project.

## Add component
To add component simple run the following command.
```bash
npx svelte-blocks@latest avatar
```

## Type
The avatar component can take any of the following type keys.
```ts
type avatar = {
    src: string | { path: string, alt: string },
    center?: boolean,
    maxSize?: string,
}
```

## Using component
To use component import it and add it to any svelte page or component.
```ts
import Avatar from "src/blocks/Avatar.svelte";
```
Add and preview component.
```svelte [all]
<Avatar src="DA" />
```

## Set image src
```svelte [all]
<Avatar src={{
    path:"https://avatars.githubusercontent.com/u/107594214",
    alt:"DevelopedByAnt"
}}/>
```

## Set width
To set with pass prop `maxSize` to give the component a max width.
```svelte [all]
<div style="display:flex;gap:10px">
    <Avatar src="A" maxSize="40px"/>
    <Avatar src={{
        path:"https://avatars.githubusercontent.com/u/107594214",
        alt:"DevelopedByAnt"
    }} maxSize="40px"/>
</div>
```