# Pagination

To use the custom pagination you need to import the custom made component, you can easily use it like this:

```js
import {Pagination} from '@/components'
```

### Local Usage

```js
components: {
  Pagination
}
```

### Global Usage

```js
Vue.component(Pagination)
```

<script>
  module.exports = {
    data () {
      return {
        defaultPagination: 1,
        infoPagination: 2,
        colorPagination: 2
      }
    }
  }
</script>

## Default Pagination

We made our own pagination component for a better visual experience.

::: demo
```html
<template>
  <pagination
    no-arrows
    v-model="defaultPagination"
    :page-count="5">
  </pagination>

  <props-table component-name="pagination"></props-table>
</template>

<script>
  export default {
    data () {
      return {
        defaultPagination: 1
      }
    }
  }
</script>

```
:::

## With Arrows Pagination

We made our own pagination component for a better visual experience.

::: demo
```html
<template>
  <pagination
    v-model="infoPagination"
    :page-count="3">
  </pagination>
</template>

<script>
  export default {
    data () {
      return {
        infoPagination: 2
      }
    }
  }
</script>

```
:::

## Colors Pagination

We made our own pagination component for a better visual experience.

::: demo
```html
<template>
  <pagination
    type="danger"
    v-model="colorPagination"
    :page-count="3">
  </pagination>
  <pagination
    type="warning"
    v-model="colorPagination"
    :page-count="3">
  </pagination>
  <pagination
    type="primary"
    v-model="colorPagination"
    :page-count="3">
  </pagination>
  <pagination
    type="success"
    v-model="colorPagination"
    :page-count="3">
  </pagination>
  <pagination
    type="rose"
    v-model="colorPagination"
    :page-count="3">
  </pagination>
  <pagination
    type="info"
    v-model="colorPagination"
    :page-count="3">
  </pagination>
</template>

<script>
  export default {
    data () {
      return {
        colorPagination: 2
      }
    }
  }
</script>

```
:::
