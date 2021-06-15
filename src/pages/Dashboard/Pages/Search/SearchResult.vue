<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <div class="md-layout">
          <div class="md-layout-item">
            <md-card>
              <md-card-content>
                <div id="typography">
                  <div class="md-layout">
                    <div class="md-layout-item md-medium-size-100 md-size-50">
                      <div class="row">
                        <div class="title">
                          <h2>Prosepect List</h2>
                          <span class="tim-note"
                            >Select the following parameters to create a Prosect
                            List.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="md-layout-item md-medium-size-100 md-size-50">
                      <div class="md-layout">
                        <div
                          class="md-layout-item md-medium-size-100 md-size-33"
                        >
                          <pricing-card icon-color="icon-success">
                            <h5 slot="category" class="category">Price</h5>
                            <h3 slot="title" class="title">N/A</h3>
                          </pricing-card>
                        </div>
                        <div
                          class="md-layout-item md-medium-size-100 md-size-33"
                        >
                          <pricing-card icon-color="icon-success">
                            <h5 slot="category" class="category">Companies</h5>
                            <h3 slot="title" class="title">N/A</h3>
                          </pricing-card>
                        </div>
                        <div
                          class="md-layout-item md-medium-size-100 md-size-33"
                        >
                          <md-button
                            class="md-info md-block mt-3"
                            target="_blank"
                            >ACCESS NOW
                          </md-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <time-line plain type="simple">
                      <time-line-item
                        inverted
                        badge-type="danger"
                        badge-icon="card_travel"
                      >
                        <span slot="header" class="badge badge-danger"
                          >Industry</span
                        >
                        <p slot="content">
                          Select an industry.
                        </p>

                        <h6 slot="footer">
                          <i class="ti-time"></i>
                          5 min ago
                        </h6>
                      </time-line-item>

                      <time-line-item
                        inverted
                        badge-type="success"
                        badge-icon="extension"
                      >
                        <span slot="header" class="badge badge-success"
                          >Market Area</span
                        >
                        <p slot="content">
                          Select a market area.
                        </p>
                      </time-line-item>

                      <time-line-item
                        inverted
                        badge-type="info"
                        badge-icon="fingerprint"
                      >
                        <span slot="header" class="badge badge-info"
                          >Sales/Values</span
                        >
                        <div slot="content">
                          <p>
                            Filter by buisines sales and value/
                          </p>
                          <hr />
                          <drop-down>
                            <md-button
                              slot="title"
                              class="md-button md-info md-round dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              <md-icon>build</md-icon>
                            </md-button>
                            <ul
                              class="dropdown-menu"
                              :class="{ 'dropdown-menu-right': !responsive }"
                            >
                              <li>
                                <a href="#"
                                  >Mike John responded to your email</a
                                >
                              </li>
                              <li><a href="#">You have 5 new tasks</a></li>
                              <li>
                                <a href="#">You're now friend with Andrew</a>
                              </li>
                              <li><a href="#">Another Notification</a></li>
                              <li><a href="#">Another One</a></li>
                            </ul>
                          </drop-down>
                        </div>
                      </time-line-item>
                    </time-line>
                  </div>
                  <div class="row">
                    <tabs
                      :tab-name="[
                        'Industry',
                        'Market Area',
                        'Sales/Values',
                        'Related Products',
                      ]"
                      :tab-icon="[
                        'info',
                        'location_on',
                        'money',
                        'help_outline',
                      ]"
                      class="page-subcategories"
                      nav-pills-icons
                      plain
                      color-button="warning"
                    >
                      <!-- here you can add your content for tab-content -->
                      <template slot="tab-pane-1">
                        <md-card>
                          <md-card-header>
                            <h4 class="title">Description about product</h4>
                            <p class="category">More information here</p>
                          </md-card-header>

                          <md-card-content>
                            <collapse
                              :collapse="[
                                'Collapsible Group Item #1',
                                'Collapsible Group Item #2',
                                'Collapsible Group Item #3',
                              ]"
                              icon="keyboard_arrow_down"
                              color-collapse="success"
                            >
                              <template slot="md-collapse-pane-1">
                                <p>
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
                                </p>
                              </template>
                              <template slot="md-collapse-pane-2">
                                <p>
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
                                </p>
                              </template>
                              <template slot="md-collapse-pane-3">
                                <p>
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid. 3 wolf moon officia aute, non
                                  cupidatat skateboard dolor brunch. Food truck
                                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                  moon tempor, sunt aliqua put a bird on it
                                  squid single-origin coffee nulla assumenda
                                  shoreditch et. Nihil anim keffiyeh helvetica,
                                  craft beer labore wes anderson cred nesciunt
                                  sapiente ea proident. Ad vegan excepteur
                                  butcher vice lomo. Leggings occaecat craft
                                  beer farm-to-table, raw denim aesthetic synth
                                  nesciunt you probably haven't heard of them
                                  accusamus labore sustainable VHS.
                                </p>
                              </template>
                            </collapse>
                          </md-card-content>
                        </md-card>
                      </template>
                      <template slot="tab-pane-2">
                        <md-card>
                          <md-card-header>
                            <h4 class="title">Location of the product</h4>
                            <p class="category">More information here</p>
                          </md-card-header>

                          <md-card-content>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas. Dramatically
                            maintain clicks-and-mortar solutions without
                            functional solutions.
                          </md-card-content>
                        </md-card>
                      </template>
                      <template slot="tab-pane-3">
                        <md-card>
                          <md-card-header>
                            <h4 class="title">Legal info of the product</h4>
                            <p class="category">More information here</p>
                          </md-card-header>

                          <md-card-content>
                            Completely synergize resource taxing relationships
                            via premier niche markets. Professionally cultivate
                            one-to-one customer service with robust ideas.
                            Dynamically innovate resource-leveling customer
                            service for state of the art customer service.
                          </md-card-content>
                        </md-card>
                      </template>
                      <template slot="tab-pane-4">
                        <md-card>
                          <md-card-header>
                            <h4 class="title">Help center</h4>
                            <p class="category">More information here</p>
                          </md-card-header>

                          <md-card-content>
                            Completely synergize resource taxing relationships
                            via premier niche markets. Professionally cultivate
                            one-to-one customer service with robust ideas.
                            Dynamically innovate resource-leveling customer
                            service for state of the art customer service.
                          </md-card-content>
                        </md-card>
                      </template>
                    </tabs>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Tabs,
  Collapse,
  TimeLine,
  TimeLineItem,
  PricingCard,
} from '@/components';

export default {
  components: {
    Tabs,
    Collapse,
    TimeLine,
    TimeLineItem,
    PricingCard,
    // EditProfileForm,
    // UserCard
  },
};
</script>
<style lang="scss">
.text-right {
  display: flex;
}
</style>
