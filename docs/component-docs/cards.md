# Cards

We think cards are one of the best ways to organise your information. We went all out with possibilities and we recommended finding the right fit for your product.


```js
import {StatsCard} from '@/components'
import {ChartCard} from '@/components'
```

### Local Usage

```js
components: {
  ChartCard,
  StatsCard
}
```

### Global Usage

```js
Vue.component(ChartCard)
Vue.component(StatsCard)
```

<script>
module.exports = {
  data() {
   return {
     password: null,
     firstname: null,
     email: null,
     emailsSubscriptionChart: {
       data: {
         labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
         series: [
           [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

         ]
       },
       options: {
         axisX: {
           showGrid: false
         },
         low: 0,
         high: 1000,
         chartPadding: {
           top: 0,
           right: 5,
           bottom: 0,
           left: 0
         }
       },
       responsiveOptions: [
         ['screen and (max-width: 640px)', {
           seriesBarDistance: 5,
           axisX: {
             labelInterpolationFnc: function (value) {
               return value[0]
             }
           }
         }]
       ]
     }
   }
  }
}
</script>

## Stats card

:::demo
```html
<template>
  <div>
    <stats-card header-color="blue">
      <template slot="header">
        <div class="card-icon">
          <md-icon>dashboard</md-icon>
        </div>
        <p class="category">Folowers</p>
        <h3 class="title">+245
        </h3>
      </template>

      <template slot="footer">
        <div class="stats">
           <md-icon>update</md-icon>
           Just Updated
        </div>
      </template>
    </stats-card>
  </div>

  <props-table component-name="stats-card"></props-table>
</template>

<script>
  export default {}
</script>
```
:::

### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  header  | Default card header |
|  footer  | Content for card footer |


## Chart card

For the implementation of graphic charts, we used [Chartist.js](https://gionkunz.github.io/chartist-js/).

:::demo
```html
<template>

<chart-card
  header-animation="true"
  :chart-data="emailsSubscriptionChart.data"
  :chart-options="emailsSubscriptionChart.options"
  :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
  chart-type="Bar"
  chart-inside-header
  background-color="rose">
  <md-icon slot="fixed-button">build</md-icon>
  <md-button class="md-simple md-info md-just-icon" slot="first-button">
    <md-icon>refresh</md-icon>
    <md-tooltip md-direction="bottom">Refresh</md-tooltip>
  </md-button>
  <md-button class="md-simple md-just-icon" slot="second-button">
    <md-icon >edit</md-icon>
    <md-tooltip md-direction="bottom">Change Date</md-tooltip>
  </md-button>

  <template slot="content">
    <h4 class="title">Website Views</h4>
      <p class="category">
        Last Campaign Performance
      </p>
  </template>

  <template slot="footer">
    <div class="stats">
      <md-icon>access_time</md-icon>
      updated 10 days ago
    </div>
  </template>
</chart-card>

<props-table component-name="chart-card"></props-table>

</template>
```
:::


### ChartCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Chart type   | string  |   line/bar/pie        |    -     |
| options     | Chart options   | string  |   -        |    -     |
| data     | Chart data   | string  |   -        |    -     |
| title     | Card title   | string  |   -       |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |

### ChartCard Slots
| Name | Description |
|---------- |-------- |
|  default  | Default card content |
|  footer  | Content for card footer |


## Lock card

:::demo
```html
<template>
  <lock-card>
    <img class="img" slot="imageProfile" :src="$withBase('/img/faces/avatar.jpg')"/>
    <h4 slot="title" class="title">Tania Andrew</h4>
    <md-field slot="content">
      <label>Enter Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <md-button href class="md-success md-round" slot="footer">Unlock</md-button>
  </lock-card>

  <script>
    export default {
      data () {
        return {
          password: null
        }
      }
    }
  </script>

  <props-table component-name="lock-card"></props-table>
</template>
```
:::

### LockCard Slots
| Name | Description |
|---------- |-------- |
|  imageProfile | Default card image |
|  title | Default card title |
|  content | Default card content |
|  footer  | Content for card footer |

## Login card

:::demo
```html
<template>
  <login-card header-color="green">
    <h4 slot="title" class="title">Log in</h4>
    <template slot="buttons">
      <md-button href="#facebook" class="md-just-icon md-simple md-white">
        <i class="fab fa-facebook-square"></i>
      </md-button>
      <md-button href="#twitter" class="md-just-icon md-simple md-white">
        <i class="fab fa-twitter"></i>
      </md-button>
      <md-button href="#google" class="md-just-icon md-simple md-white">
        <i class="fab fa-google-plus-g"></i>
      </md-button>
    </template>
    <p slot="description" class="description">Or Be Classical</p>
    <template slot="inputs">
      <md-field class="md-form-group">
        <md-icon>face</md-icon>
        <label>First Name...</label>
        <md-input v-model="firstname"></md-input>
      </md-field>
      <md-field class="md-form-group">
        <md-icon>email</md-icon>
        <label>Email...</label>
        <md-input v-model="email" type="email"></md-input>
      </md-field>
      <md-field class="md-form-group">
        <md-icon>lock_outline</md-icon>
        <label>Password...</label>
        <md-input v-model="password"></md-input>
      </md-field>
    </template>
    <md-button slot="footer" class="md-simple md-success md-lg">
      Lets Go
    </md-button>
  </login-card>

  <script>
    export default {
      data () {
        return {
          password: null,
          firstname: null,
          email: null
        }
      }
    }
  </script>

  <props-table component-name="login-card"></props-table>
</template>
```
:::

### LoginCard Slots
| Name | Description |
|---------- |-------- |
|  title | Default card title |
|  description | Default card description |
|  buttons | card buttons |
|  footer  | Content for card footer |



## Pricing card

:::demo
```html
<template>
  <pricing-card card-class="md-card-plain" icon-color="icon-success">
    <h6 slot="category" class="category">Freelancer</h6>
    <md-icon slot="icon">weekend</md-icon>
    <h3 slot="title" class="title">Free</h3>
    <p slot="description" class="card-description">This is good if your company size is between 2 and 10 Persons.</p>
    <md-button slot="footer" class="md-success md-round">Choose Plan</md-button>
  </pricing-card>

  <props-table component-name="pricing-card"></props-table>
</template>
```
:::

### PricingCard Slots
| Name | Description |
|---------- |-------- |
|  category | card category |
|  icon | Default card icon |
|  title | Default card title |
|  description | Default card description |
|  footer  | Content for card footer |

## Product card

We created a beautiful animation for this type of card. By default this animation is set on `true`, if you want to disable it you can set the Attribute `header-animation` to `false`.

:::demo
```html
<template>
  <product-card
    header-animation="true">
    <img class="img" slot="imageHeader" :src="$withBase('/img/card-2.jpg')">
    <md-icon slot="fixed-button">build</md-icon>
    <template slot="first-button">
      <md-icon>art_track</md-icon>
      <md-tooltip md-direction="bottom">View</md-tooltip>
    </template>
    <template slot="second-button">
      <md-icon >edit</md-icon>
      <md-tooltip md-direction="bottom">Edit</md-tooltip>
    </template>
    <template slot="third-button">
      <md-icon >close</md-icon>
      <md-tooltip md-direction="bottom">Remove</md-tooltip>
    </template>
    <h4 slot="title" class="title">
      <a href="#pablo">Cozy 5 Stars Apartment</a>
    </h4>
    <div slot="description" class="card-description">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
    </div>
    <template slot="footer">
      <div class="price">
        <h4>$899/night</h4>
      </div>
      <div class="stats">
        <p class="category">
          <md-icon>place</md-icon>
          Barcelona, Spain
        </p>
      </div>
    </template>
  </product-card>

    <props-table component-name="product-card"></props-table>
</template>
```
:::

### ProductCard Slots
| Name | Description |
|---------- |-------- |
|  imageHeader | Default card image |
|  fixed-button | card fixed button |
|  first-button | card details buttons |
|  second-button | card details buttons |
|  third-button | card details buttons |
|  title | Default card title |
|  description | Default card description |
|  footer  | Content for card footer |


## Testimonial card

:::demo
```html
<template>
  <testimonial-card>
    <template slot="header-icon">format_quote</template>
    <template slot="content">
      <h5 class="description">
        Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!
      </h5>
    </template>
    <template slot="footer">
      <h4 class="title">Alec Thompson</h4>
        <h6 class="category">@alecthompson</h6>
        <div class="avatar">
          <a href="#pablo">
            <img class="img" :src="$withBase('/img/faces/card-profile1-square.jpg')">
          </a>
        </div>
    </template>
  </testimonial-card>

  <props-table component-name="testimonial-card"></props-table>
</template>
```
:::

### TestimonialCard Slots
| Name | Description |
|---------- |-------- |
|  header-icon | card header icon |
|  content | card content |
|  footer | card footer |
