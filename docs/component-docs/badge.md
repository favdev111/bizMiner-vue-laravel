# Badge

To use the custom button you need to import the custom made component, you can easily use it like this:

```js
import {Badge} from '@/components'
```

### Local Usage

```js
components: {
  Badge
}
```

### Global Usage

```js
Vue.component(Badge)
```

## Badges Color

We made our own badge component for a better visual experience.

::: demo
```html
<template>
  <badge type="success">Another Title</badge>
  <badge type="danger">Another Title</badge>
  <badge type="warning">Another Title</badge>
  <badge type="rose">Another Title</badge>
  <badge type="info">Another Title</badge>


  <props-table component-name="badge"></props-table>
</template>

```
:::
