# Switch

To use the custom switch you don't need to import component, you can easily use it like this:

<script>
  module.exports = {
    data () {
      return {
        switch1: true,
        switch2: null
      }
    }
  }
</script>

## Simple Example

::: demo
```html
<template>
  <md-switch v-model="switch1">Toogle is on</md-switch>
  <md-switch v-model="switch2">Toogle is off</md-switch>

</template>

<script>
  export default {
    data () {
      return {
        switch1: true,
        switch2: null
      }
    }
  }
</script>

```
:::
