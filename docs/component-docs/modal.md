# Modal

If you want to display some content on demand in a very subtle way, the Vue Material Dashboard Pro Modal is the perfect choice for this. We created custom modal component and you can easily use it like this:

```js
import {Modal} from '@/components'
```

### Local Usage

```js
components: {
  Modal
}
```

### Global Usage

```js
Vue.component(Modal)
```

<script>
module.exports = {
  data () {
    return {
      classicModal: false,
      noticeModal: false,
      smallAlertModal: false
    }
  },
  methods: {
    classicModalHide: function(){
      this.classicModal = false
    },
    noticeModalHide: function(){
      this.noticeModal = false
    },
    smallAlertModalHide: function(){
      this.smallAlertModal = false
    }
  }
}
</script>

## Clasic Modal

::: demo
```html
<template>
  <md-button class="md-primary md-round classic-modal" @click="classicModal = true">Classic Modal</md-button>
  <modal v-if="classicModal" @close="classicModalHide">
    <template slot="header">
      <h4 class="modal-title">Modal Title</h4>
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="classicModalHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    </template>

    <template slot="footer">
      <md-button class="md-simple">Nice Button</md-button>
      <md-button class="md-danger md-simple" @click="classicModalHide">Close</md-button>
    </template>
  </modal>
</template>

```
:::

## Notice Modal

::: demo
```html
<template>
  <md-button class="md-info md-round notice-modal" @click="noticeModal = true">Notice Modal</md-button>
  <modal v-if="noticeModal" @close="noticeModalHide">
    <template slot="header">
      <h4 class="modal-title">How Do You Become An Affiliate?</h4>
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="noticeModalHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <div class="instruction">
          <div class="md-layout">
              <div class="md-layout-item md-size-66">
                   <strong>1. Register</strong>
                   <p class="description">The first step is to create an account at <a href="https://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>
              </div>
              <div class="md-layout-item">
                  <div class="picture">
                      <img src="/img/card-1.jpg" alt="Thumbnail Image">
                  </div>
              </div>
          </div>
      </div>
      <div class="instruction">
          <div class="md-layout">
              <div class="md-layout-item md-size-66">
                      <strong>2. Apply</strong>
                      <p class="description">The first step is to create an account at <a href="https://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>
              </div>
              <div class="md-layout-item">
                  <div class="picture">
                      <img src="/img/card-2.jpg" alt="Thumbnail Image">
                  </div>
              </div>
          </div>
      </div>
      <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>
    </template>

    <template slot="footer">
      <md-button class="md-info md-round" @click="noticeModalHide">Sound Good</md-button>
    </template>
  </modal>
</template>

```
:::

## Small Modal

::: demo
```html
<template>
  <md-button class="md-rose md-round small-alert-modal" @click="smallAlertModal = true">Small Alert Modal</md-button>
  <modal v-if="smallAlertModal" @close="smallAlertModalHide">
    <template slot="header">
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="smallAlertModalHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <p>Are you sure you want to do this?</p>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="smallAlertModalHide">Never Mind</md-button>
      <md-button class="md-success md-simple" >Yes</md-button>
    </template>
  </modal>
</template>

```
:::


### Modal Slots
| Name | Description |
|---------- |-------- |
|  header  | Default card header |
|  body  | Default card body |
|  footer  | Content for card footer |
