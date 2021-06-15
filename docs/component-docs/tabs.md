# Tabs

If you have information that you don't need to show at once, we suggest you use tabs. We carefully re-styled the custom tabs component from vuematerial.io which you can easily use.

In order to use the tabs, import the necessary components:

```js
import {NavTabsCard} from 'src/components'
```

### Global Usage

```js
Vue.component(NavTabsCard)
```
### For Local Usage

```js
export default {
  components: {
    NavTabsCard
  }
}

```

<script>
  module.exports = {
    data () {
      return {
        selected: [],
        firstTabs: [
          { tab: 'Sign contract for "What are conference organizers afraid of?"' },
          { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
          { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
        ],
        secondTabs: [
          { tab: 'Sign contract for "What are conference organizers afraid of?"' },
          { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
          { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
        ],
        thirdTabs: [
          { tab: 'Sign contract for "What are conference organizers afraid of?"' },
          { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
          { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
        ]
      }
    }
  }
</script>

## Nav Tabs Card

::: demo
```html
<div class="md-layout">
  <div class="md-layout-item md-size-100">
    <nav-tabs-card>
      <template slot="content">
        <span class="md-nav-tabs-title">Tasks:</span>
        <md-tabs md-sync-route class="md-success" md-alignment="left">

          <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
            <md-table v-model="firstTabs" @md-selected="onSelect">
              <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
                <md-table-cell >{{ item.tab }}</md-table-cell>
                <md-table-cell>
                  <md-button class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>
                  <md-button class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-tab>

          <md-tab id="tab-pages" md-label="Website" md-icon="code">
            <md-table v-model="firstTabs" @md-selected="onSelect">
              <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
                <md-table-cell >{{ item.tab }}</md-table-cell>
                <md-table-cell>
                  <md-button class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>
                  <md-button class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-tab>

          <md-tab id="tab-posts" md-label="server" md-icon="cloud">
            <md-table v-model="firstTabs" @md-selected="onSelect">
              <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
                <md-table-cell >{{ item.tab }}</md-table-cell>
                <md-table-cell>
                  <md-button class="md-just-icon md-simple md-primary">
                    <md-icon>edit</md-icon>
                    <md-tooltip md-direction="top">Edit</md-tooltip>
                  </md-button>
                  <md-button class="md-just-icon md-simple md-danger">
                    <md-icon>close</md-icon>
                    <md-tooltip md-direction="top">Close</md-tooltip>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-tab>
        </md-tabs>
      </template>
    </nav-tabs-card>
  </div>
</div>
<script>
import {
  NavTabsCard
} from '@/components'

export default{
  components: {
    NavTabsCard
  },
  data () {
    return {
      selected: [],
      firstTabs: [
        { tab: 'Sign contract for "What are conference organizers afraid of?"' },
        { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
      ],
      secondTabs: [
        { tab: 'Sign contract for "What are conference organizers afraid of?"' },
        { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
      ],
      thirdTabs: [
        { tab: 'Sign contract for "What are conference organizers afraid of?"' },
        { tab: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { tab: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' }
      ]
    }
  }

}
</script>
```
:::

### NavTabsCard Slots
| Name | Description |
|---------- |-------- |
|  content  | Default card content |

> Note: for more details about the tabs that can you use please see the **Tabs** section from [vuematerial.io](https://vuematerial.io/components/tabs/)
