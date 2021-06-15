# Tags

To use the custom tags you don't need to import component, you can easily use it like this:

<script>
  module.exports = {
    data () {
      return {
        fruits: [
        'Amsterdam',
        'Washington',
        'Sydney',
        'Beijing'
        ]
      }
    }
  }
</script>

## Simple Example

::: demo
```html
<template>
  <md-chips v-model="fruits" class="md-primary" md-placeholder="Add city..."></md-chips>

</template>

<script>
  export default {
    data () {
      return {
        fruits: [
        'Amsterdam',
        'Washington',
        'Sydney',
        'Beijing'
        ]
      }
    }
  }
</script>

```
:::
## Color Tags

::: demo
```html
<template>
  <md-chips v-model="fruits" class="md-primary" md-placeholder="Add city..."></md-chips>
  <md-chips v-model="fruits" class="md-warning" md-placeholder="Add city..."></md-chips>
  <md-chips v-model="fruits" class="md-rose" md-placeholder="Add city..."></md-chips>
  <md-chips v-model="fruits" class="md-danger" md-placeholder="Add city..."></md-chips>
  <md-chips v-model="fruits" class="md-info" md-placeholder="Add city..."></md-chips>
  <md-chips v-model="fruits" class="md-success" md-placeholder="Add city..."></md-chips>

</template>

</script>

```
:::

> Note: For more details about the all inputs that you can use please see the **Chips** section from [vuematerial.io](https://vuematerial.io/components/chips)
