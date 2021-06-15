# Collapsible Groups

To use the custom collapse you need to import the custom made component, you can easily use it like this:

```js
import {Collapse} from '@/components'
```

### Local Usage

```js
components: {
  Collapse
}
```

### Global Usage

```js
Vue.component(Collapse)
```

## Simple Example

::: demo
```html
<template>
  <div class="md-layout-item md-size-100">
    <md-card>
      <md-card-content>
        <collapse
          :collapse="[
            'Collapsible Group Item #1',
            'Collapsible Group Item #2',
            'Collapsible Group Item #3']"
          icon="keyboard_arrow_down"
          color-collapse="success">
            <template slot="md-collapse-pane-1">
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
            </template>
            <template slot="md-collapse-pane-2">
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
            </template>
            <template slot="md-collapse-pane-3">
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
            </template>
      </collapse>
      </md-card-content>
    </md-card>
  </div>
</template>

```
:::

### Collapse Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| collapse     | collapse title   | string  |    -      |    -     |
| icon     | collapse icon   | string  |    -      |    -     |
| color-collapse     | string   | string  |    danger/success/warning/rose/info      |    success     |
