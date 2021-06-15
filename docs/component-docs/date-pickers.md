# Date Pickers

We have created a date-time picker starting from the [vuematerial.io](https://vuematerial.io/) date picker. We have changed the colours, typography and buttons, so it can look like the rest of the dashboard. You don't have to import the component you just use it like this:

<script>
  module.exports = {
    data () {
      return {
        selectedLabeled: null,
        selectedDate: new Date('2018/03/26'),
        selectedClose: null,
      }
    }
  }
</script>

## Simple Examples

::: demo
```html
<template>
  <div class="md-layout-item md-size-100">
    <md-card>
      <md-card-header class="md-card-header-icon md-card-header-green">
        <div class="card-icon">
          <md-icon>today</md-icon>
        </div>
        <h4 class="title">Datepicker - <small>labeled</small></h4>
      </md-card-header>

      <md-card-content>
        <md-datepicker v-model="selectedLabeled">
          <label>Select date</label>
        </md-datepicker>
      </md-card-content>
    </md-card>
  </div>
  <div class="md-layout-item md-size-100">
    <md-card>
      <md-card-header class="md-card-header-icon md-card-header-green">
        <div class="card-icon">
          <md-icon>today</md-icon>
        </div>
        <h4 class="title">Datepicker - <small>date selected</small></h4>
      </md-card-header>

      <md-card-content>
        <md-datepicker v-model="selectedDate"/>
      </md-card-content>
    </md-card>
  </div>
  <div class="md-layout-item md-size-100">
    <md-card>
      <md-card-header class="md-card-header-icon md-card-header-green">
        <div class="card-icon">
          <md-icon>today</md-icon>
        </div>
        <h4 class="title">Datepicker - <small>close on select</small></h4>
      </md-card-header>

      <md-card-content>
        <md-datepicker v-model="selectedClose" md-immediately />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedLabeled: null,
        selectedDate: new Date('2018/03/26'),
        selectedClose: null
      }
    }
  }
</script>

```
:::

> Note: for more details about the datepicker props and attributes please see the **Datepicker** section from [vuematerial.io](https://vuematerial.io/components/datepicker)
