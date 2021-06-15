# Radios

The radios that are used in our Vue Material Dashboard Pro are the standard checkboxes from [Vue Material](https://vuematerial.io/components/checkbox). We just re-styled them for a better visual effect.  

<script>
module.exports = {
  data: () => ({
    radio: false
  })
}
</script>

:::demo
```html
<template>
  <div>
    <md-radio v-model="radio" :value="false">Boolean</md-radio>
   <md-radio v-model="radio" value="my-radio">String</md-radio>
   <md-radio v-model="radio">No Value</md-radio>
   <md-radio v-model="radio" disabled>Disabled</md-radio>

    <small>Model value: {{ radio }}</small>
  </div>
</template>

<script>
  export default {
    data: () => ({
      radio: false
    })
  }
</script>
```
:::
